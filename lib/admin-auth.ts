import "server-only";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const USERNAME_REGEX = /^[a-zA-Z0-9_.]+$/;

type AdminCredentials = {
  login: string;
  password: string;
};

const getAdminCredentials = (): AdminCredentials => {
  const rawLogin = process.env.ADMIN_LOGIN?.trim();
  const password = process.env.ADMIN_PASSWORD;

  if (!rawLogin || !password) {
    throw new Error("ADMIN_LOGIN and ADMIN_PASSWORD must be configured");
  }

  if (!USERNAME_REGEX.test(rawLogin)) {
    throw new Error(
      "ADMIN_LOGIN must contain only letters, digits, underscore or dot"
    );
  }

  return {
    login: rawLogin.toLowerCase(),
    password,
  };
};

const getAdminEmail = (login: string): string => `${login}@admin.local`;

const ensureAdminAccount = async (): Promise<void> => {
  const admin = getAdminCredentials();
  const ctx = await auth.$context;
  const adminEmail = getAdminEmail(admin.login);

  const existing = await ctx.internalAdapter.findUserByEmail(adminEmail, {
    includeAccounts: true,
  });

  if (!existing) {
    const created = await ctx.internalAdapter.createUser({
      email: adminEmail,
      name: "Admin",
      emailVerified: true,
      username: admin.login,
      displayUsername: admin.login,
    });

    const passwordHash = await ctx.password.hash(admin.password);
    await ctx.internalAdapter.linkAccount({
      userId: created.id,
      providerId: "credential",
      accountId: created.id,
      password: passwordHash,
    });
    return;
  }

  const userPatch: Record<string, unknown> = {};
  const userRecord = existing.user as Record<string, unknown>;
  if (userRecord.username !== admin.login) {
    userPatch.username = admin.login;
  }
  if (userRecord.displayUsername !== admin.login) {
    userPatch.displayUsername = admin.login;
  }
  if (!existing.user.emailVerified) {
    userPatch.emailVerified = true;
  }

  if (Object.keys(userPatch).length > 0) {
    await ctx.internalAdapter.updateUser(existing.user.id, userPatch);
  }

  const credential = existing.accounts.find(
    (account) => account.providerId === "credential"
  );
  const passwordHash = await ctx.password.hash(admin.password);

  if (!credential) {
    await ctx.internalAdapter.linkAccount({
      userId: existing.user.id,
      providerId: "credential",
      accountId: existing.user.id,
      password: passwordHash,
    });
    return;
  }

  const passwordMatches =
    typeof credential.password === "string" &&
    (await ctx.password.verify({
      hash: credential.password,
      password: admin.password,
    }));

  if (!passwordMatches) {
    await ctx.internalAdapter.updateAccount(credential.id, {
      password: passwordHash,
    });
  }
};

const getCurrentSession = async () => {
  const requestHeaders = await headers();
  return auth.api.getSession({ headers: requestHeaders });
};

export async function signInAdmin(
  login: string,
  password: string
): Promise<{ ok: boolean; error?: string }> {
  const admin = getAdminCredentials();

  if (login.trim().toLowerCase() !== admin.login) {
    return { ok: false, error: "Invalid login or password" };
  }

  await ensureAdminAccount();

  try {
    const requestHeaders = await headers();
    await auth.api.signInUsername({
      body: {
        username: admin.login,
        password,
        rememberMe: true,
      },
      headers: requestHeaders,
    });

    return { ok: true };
  } catch {
    return { ok: false, error: "Invalid login or password" };
  }
}

export async function signOutAdmin(): Promise<void> {
  const requestHeaders = await headers();
  await auth.api.signOut({ headers: requestHeaders });
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const session = await getCurrentSession();
  if (!session?.user) {
    return false;
  }

  const admin = getAdminCredentials();
  const userRecord = session.user as Record<string, unknown>;
  return userRecord.username === admin.login;
}
