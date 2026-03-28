import { cacheLife, cacheTag, revalidateTag } from "next/cache";

const FOOTER_YEAR_CACHE_TAG = "footer-year";

export async function FooterYear() {
  "use cache";
  cacheLife("weeks");
  const year = new Date().getFullYear();
  return <>{year}</>;
}
