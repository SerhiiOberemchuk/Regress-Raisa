import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import TermsOfUseClient from "./TermsOfUseClient"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale
  const t = await getTranslations({ locale, namespace: "terms" })

  return {
    title: `${t("title")} | RaisaRegress`,
    description:
      "Умови використання сайту регресивної терапії. Ознайомтеся з правилами та умовами користування нашими послугами.",
  }
}

export default function TermsOfUse() {
  return <TermsOfUseClient />
}
