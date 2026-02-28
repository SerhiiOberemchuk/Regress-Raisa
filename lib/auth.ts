import "server-only";

import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";

const authSecret =
  process.env.BETTER_AUTH_SECRET ?? process.env.ADMIN_AUTH_SECRET;

if (!authSecret) {
  throw new Error(
    "BETTER_AUTH_SECRET must be set (or ADMIN_AUTH_SECRET as fallback)"
  );
}

export const auth = betterAuth({
  secret: authSecret,
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: "/api/auth",
  plugins: [username(), nextCookies()],
  session: {
    expiresIn: 60 * 60 * 12,
    updateAge: 60 * 30,
    storeSessionInDatabase: false,
    cookieCache: {
      enabled: true,
      strategy: "jwe",
      maxAge: 60 * 60 * 12,
      refreshCache: {
        updateAge: 60 * 15,
      },
    },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
});
