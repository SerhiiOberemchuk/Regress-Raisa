"use client";

import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  defaultSiteContent,
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

export default function AdminPanel() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
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
    const load = async () => {
      try {
        const response = await fetch("/api/admin/content", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Cannot load current content");
        }

        const payload = (await response.json()) as SiteContent;
        setContent(payload);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to load content";
        setStatus({ type: "error", message });
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  const updatePrice = (
    service: ServiceKey,
    locale: SupportedLocale,
    value: string
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

  const onFileChange = (slot: ImageKey, event: ChangeEvent<HTMLInputElement>) => {
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

  const replaceImage = async (slot: ImageKey) => {
    if (!token.trim()) {
      setStatus({ type: "error", message: "Enter admin token first" });
      setUploadStatus((prev) => ({
        ...prev,
        [slot]: { type: "error", message: "Enter admin token first" },
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
      const formData = new FormData();
      formData.set("slot", slot);
      formData.set("file", file);

      const response = await fetch("/api/admin/image", {
        method: "POST",
        headers: {
          "x-admin-token": token.trim(),
        },
        body: formData,
      });

      if (!response.ok) {
        const body = (await response.json()) as { error?: string };
        throw new Error(body.error ?? "Image upload failed");
      }

      const payload = (await response.json()) as SiteContent;
      setContent(payload);
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
    setSaving(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token.trim(),
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        const body = (await response.json()) as { error?: string };
        throw new Error(body.error ?? "Save failed");
      }

      const payload = (await response.json()) as SiteContent;
      setContent(payload);
      setStatus({ type: "success", message: "Prices saved successfully" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Save failed";
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
            Data source: <code>data/site-content.json</code>
          </p>
          <p className="text-sm text-muted-foreground">
            Last update:{" "}
            {content.updatedAt
              ? new Date(content.updatedAt).toLocaleString()
              : "not saved yet"}
          </p>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : (
            <form onSubmit={savePrices} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="admin-token">
                  Admin token
                </label>
                <Input
                  id="admin-token"
                  type="password"
                  autoComplete="off"
                  value={token}
                  onChange={(event) => setToken(event.target.value)}
                  placeholder="ADMIN_TOKEN"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  {token.trim()
                    ? "Token entered"
                    : "Enter token to upload images and save prices"}
                </p>
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
                  <table className="w-full min-w-[640px] border-collapse text-sm">
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
                          <td className="p-3 font-medium">{serviceLabels[service]}</td>
                          {SUPPORTED_LOCALES.map((locale) => (
                            <td key={locale} className="p-3">
                              <Input
                                value={content.prices[service][locale]}
                                onChange={(event) =>
                                  updatePrice(service, locale, event.target.value)
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
