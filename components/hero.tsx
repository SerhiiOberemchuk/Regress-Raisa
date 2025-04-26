"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("title.part1")} <br />
              {t("title.part2")} <br />
              <span className="text-primary">{t("title.part3")}</span>
            </h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {t("heroname")}
              </h2>
              <p className="text-lg font-medium text-primary">
                {t("position")}
              </p>
            </div>
            <p className="text-lg text-muted-foreground">{t("description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="#contact">{t("buttonsbs")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#about">{t("btnmore")}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/og-image.jpg"
                alt="Раїса Оберемчук - практикуючий регресолог, проводить сеанс регресивного гіпнозу"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="font-medium">95% {t("clients")}</p>
              <p className="text-sm text-muted-foreground">{t("changes")}</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="font-medium">10+ {t("years")}</p>
              <p className="text-sm text-muted-foreground">{t("exsp")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
