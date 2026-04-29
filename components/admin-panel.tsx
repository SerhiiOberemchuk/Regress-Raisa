"use client";

import { type FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  loginAdminAction,
  logoutAdminAction,
  savePricesAction,
} from "@/app/admin/actions";
import {
  SERVICE_KEYS,
  type ServiceKey,
  type SiteContent,
} from "@/lib/site-content-schema";

type Status = {
  type: "idle" | "success" | "error";
  message: string;
};

const serviceLabels: Record<ServiceKey, string> = {
  regression: "Regression",
  progression: "Progression",
  consciousness: "Consciousness therapy",
  consultation: "Consultation",
};

type AdminPanelProps = {
  initialContent: SiteContent;
  initialAuthenticated: boolean;
};

export default function AdminPanel({
  initialContent,
  initialAuthenticated,
}: AdminPanelProps) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    setAuthenticated(initialAuthenticated);
  }, [initialAuthenticated]);

  const updatePrice = (
    service: ServiceKey,
    value: string,
  ) => {
    setContent((prev) => ({
      ...prev,
      prices: {
        ...prev.prices,
        [service]: value,
      },
    }));
  };

  const loginAdmin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const result = await loginAdminAction({ login, password });
      if (!result.ok) {
        throw new Error(result.error ?? "Sign in failed");
      }

      setAuthenticated(true);
      setPassword("");
      setStatus({ type: "success", message: "Signed in as admin" });
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Sign in failed";
      setStatus({ type: "error", message });
    } finally {
      setAuthLoading(false);
    }
  };

  const logoutAdmin = async () => {
    setAuthLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const result = await logoutAdminAction();
      if (!result.ok) {
        throw new Error(result.error ?? "Sign out failed");
      }

      setAuthenticated(false);
      setPassword("");
      setStatus({ type: "success", message: "Signed out" });
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Sign out failed";
      setStatus({ type: "error", message });
    } finally {
      setAuthLoading(false);
    }
  };

  const savePrices = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!authenticated) {
      setStatus({ type: "error", message: "Sign in as admin first" });
      return;
    }

    setSaving(true);
    setStatus({ type: "idle", message: "" });

    try {
      const result = await savePricesAction(content.prices);
      if (!result.ok || !result.data) {
        throw new Error(result.error ?? "Save failed");
      }

      setContent(result.data);
      setStatus({ type: "success", message: "Prices saved successfully" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Save failed";
      if (message === "Unauthorized") {
        setAuthenticated(false);
        router.refresh();
      }
      setStatus({ type: "error", message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Admin: prices</CardTitle>
          <p className="text-sm text-muted-foreground">
            Data source: <code>site_prices</code> (PostgreSQL)
          </p>
          <p className="text-sm text-muted-foreground">
            Last update:{" "}
            {content.updatedAt
              ? new Date(content.updatedAt).toLocaleString()
              : "not saved yet"}
          </p>
        </CardHeader>

        <CardContent>
          {!authenticated ? (
            <form onSubmit={loginAdmin} className="max-w-sm space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="admin-login">
                  Admin login
                </label>
                <Input
                  id="admin-login"
                  autoComplete="username"
                  value={login}
                  onChange={(event) => setLogin(event.target.value)}
                  placeholder="ADMIN_LOGIN"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="admin-password">
                  Admin password
                </label>
                <div className="relative">
                  <Input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="ADMIN_PASSWORD"
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {status.message ? (
                <p
                  className={
                    status.type === "error"
                      ? "text-sm text-red-600"
                      : "text-sm text-green-600"
                  }
                >
                  {status.message}
                </p>
              ) : null}

              <Button type="submit" disabled={authLoading}>
                {authLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          ) : (
            <form onSubmit={savePrices} className="space-y-8">
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void logoutAdmin()}
                  disabled={authLoading}
                >
                  {authLoading ? "Signing out..." : "Sign out"}
                </Button>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Prices</h2>

                <div className="overflow-x-auto rounded-md border">
                  <table className="w-full min-w-160 border-collapse text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Service</th>
                        <th className="p-3 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SERVICE_KEYS.map((service) => (
                        <tr key={service} className="border-b last:border-0">
                          <td className="p-3 font-medium">
                            {serviceLabels[service]}
                          </td>
                          <td className="p-3">
                            <Input
                              value={content.prices[service]}
                              onChange={(event) =>
                                updatePrice(service, event.target.value)
                              }
                              required
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {status.message ? (
                <p
                  className={
                    status.type === "error"
                      ? "text-sm text-red-600"
                      : "text-sm text-green-600"
                  }
                >
                  {status.message}
                </p>
              ) : null}

              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save prices"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
