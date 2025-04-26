import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "privacy" })

  return {
    title: `${t("title")} | RaisaRegress`,
    description:
      "Політика конфіденційності сайту регресивної терапії. Дізнайтеся, як ми збираємо, використовуємо та захищаємо ваші персональні дані.",
  }
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
