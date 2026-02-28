"use client";

import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  loginAdminAction,
  logoutAdminAction,
  replaceImageAction,
  savePricesAction,
} from "@/app/[locale]/admin/actions";
import {
  IMAGE_KEYS,
  SERVICE_KEYS,
  SUPPORTED_LOCALES,
  type ImageKey,
  type ServiceKey,
  type SiteContent,
  type SupportedLocale,
} from "@/lib/site-content-schema";

type Status = {
  type: "idle" | "success" | "error";
  message: string;
};

type UploadStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const serviceLabels: Record<ServiceKey, string> = {
  regression: "Regression",
  progression: "Progression",
  consciousness: "Consciousness therapy",
  consultation: "Consultation",
};

const localeLabels: Record<SupportedLocale, string> = {
  uk: "UK",
  en: "EN",
  it: "IT",
};

const imageLabels: Record<ImageKey, string> = {
  hero: "Hero image",
  results: "Results image",
  footerBackground: "Footer background",
};

const defaultUploadState: Record<ImageKey, boolean> = {
  hero: false,
  results: false,
  footerBackground: false,
};

const defaultUploadStatus: Record<ImageKey, UploadStatus> = {
  hero: { type: "idle", message: "" },
  results: { type: "idle", message: "" },
  footerBackground: { type: "idle", message: "" },
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
  const [uploading, setUploading] =
    useState<Record<ImageKey, boolean>>(defaultUploadState);
  const [uploadStatus, setUploadStatus] =
    useState<Record<ImageKey, UploadStatus>>(defaultUploadStatus);
  const [selectedFiles, setSelectedFiles] = useState<
    Partial<Record<ImageKey, File>>
  >({});
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    setAuthenticated(initialAuthenticated);
  }, [initialAuthenticated]);

  const updatePrice = (
    service: ServiceKey,
    locale: SupportedLocale,
    value: string,
  ) => {
    setContent((prev) => ({
      ...prev,
      prices: {
        ...prev.prices,
        [service]: {
          ...prev.prices[service],
          [locale]: value,
        },
      },
    }));
  };

  const onFileChange = (
    slot: ImageKey,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    setSelectedFiles((prev) => ({
      ...prev,
      [slot]: file,
    }));
    setUploadStatus((prev) => ({
      ...prev,
      [slot]: { type: "idle", message: "" },
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
      setSelectedFiles({});
      setStatus({ type: "success", message: "Signed out" });
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Sign out failed";
      setStatus({ type: "error", message });
    } finally {
      setAuthLoading(false);
    }
  };

  const replaceImage = async (slot: ImageKey) => {
    if (!authenticated) {
      setStatus({ type: "error", message: "Sign in as admin first" });
      setUploadStatus((prev) => ({
        ...prev,
        [slot]: { type: "error", message: "Sign in as admin first" },
      }));
      return;
    }

    const file = selectedFiles[slot];
    if (!file) {
      setStatus({ type: "error", message: "Select an image file first" });
      setUploadStatus((prev) => ({
        ...prev,
        [slot]: { type: "error", message: "Select an image file first" },
      }));
      return;
    }

    setUploading((prev) => ({ ...prev, [slot]: true }));
    setStatus({ type: "idle", message: "" });

    try {
      const result = await replaceImageAction({ slot, file });
      if (!result.ok || !result.data) {
        throw new Error(result.error ?? "Image upload failed");
      }

      setContent(result.data);
      setSelectedFiles((prev) => {
        const next = { ...prev };
        delete next[slot];
        return next;
      });
      setStatus({
        type: "success",
        message: `${imageLabels[slot]} replaced successfully`,
      });
      setUploadStatus((prev) => ({
        ...prev,
        [slot]: {
          type: "success",
          message: `${imageLabels[slot]} replaced successfully`,
        },
      }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Image upload failed";
      if (message === "Unauthorized") {
        setAuthenticated(false);
        router.refresh();
      }
      setStatus({ type: "error", message });
      setUploadStatus((prev) => ({
        ...prev,
        [slot]: { type: "error", message },
      }));
    } finally {
      setUploading((prev) => ({ ...prev, [slot]: false }));
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
      const result = await savePricesAction(content);
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
          <CardTitle>Admin: prices and photos</CardTitle>
          <p className="text-sm text-muted-foreground">
            Prices source: <code>site_prices</code> (PostgreSQL), images source:{" "}
            <code>data/site-content.json</code>
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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
                <h2 className="text-lg font-semibold">Images</h2>
                <p className="text-sm text-muted-foreground">
                  Upload new file and the previous image file will be removed
                  automatically.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {IMAGE_KEYS.map((slot) => (
                    <div key={slot} className="space-y-3 rounded-md border p-4">
                      <div>
                        <p className="font-medium">{imageLabels[slot]}</p>
                        <p className="text-xs text-muted-foreground">
                          Current: {content.images[slot]}
                        </p>
                      </div>

                      <img
                        src={content.images[slot]}
                        alt={imageLabels[slot]}
                        className="h-40 w-full rounded-md border object-cover"
                      />

                      <Input
                        key={`${slot}-${content.images[slot]}`}
                        type="file"
                        accept="image/*"
                        onChange={(event) => onFileChange(slot, event)}
                      />

                      <Button
                        type="button"
                        onClick={() => {
                          void replaceImage(slot);
                        }}
                        disabled={uploading[slot] || !selectedFiles[slot]}
                      >
                        {uploading[slot]
                          ? "Uploading..."
                          : "Upload and replace"}
                      </Button>

                      {uploadStatus[slot].message ? (
                        <p
                          className={
                            uploadStatus[slot].type === "error"
                              ? "text-xs text-red-600"
                              : "text-xs text-green-600"
                          }
                        >
                          {uploadStatus[slot].message}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Prices</h2>

                <div className="overflow-x-auto rounded-md border">
                  <table className="w-full min-w-160 border-collapse text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Service</th>
                        {SUPPORTED_LOCALES.map((locale) => (
                          <th key={locale} className="p-3 text-left">
                            {localeLabels[locale]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {SERVICE_KEYS.map((service) => (
                        <tr key={service} className="border-b last:border-0">
                          <td className="p-3 font-medium">
                            {serviceLabels[service]}
                          </td>
                          {SUPPORTED_LOCALES.map((locale) => (
                            <td key={locale} className="p-3">
                              <Input
                                value={content.prices[service][locale]}
                                onChange={(event) =>
                                  updatePrice(
                                    service,
                                    locale,
                                    event.target.value,
                                  )
                                }
                                required
                              />
                            </td>
                          ))}
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
