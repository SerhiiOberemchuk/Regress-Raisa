"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Compass, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutMethod() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const t = useTranslations("about");
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: t("benefits.access.title"),
      description: t("benefits.access.description"),
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: t("benefits.healing.title"),
      description: t("benefits.healing.description"),
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: t("benefits.awareness.title"),
      description: t("benefits.awareness.description"),
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: t("benefits.potential.title"),
      description: t("benefits.potential.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const explorationAreas = Object.values(t.raw("list")) as string[];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t("title")}
          //  subtitle={t("subtitle")}
        />

        <motion.div className="bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto mb-12">
          <p className="text-muted-foreground mb-4">{t("intro")}</p>

          <ul className="space-y-2 mb-6">
            {explorationAreas.map((area, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mb-4">{t("deepWork")}</p>
          <p className="text-muted-foreground mb-4">{t("suitableFor")}</p>
          <p className="text-muted-foreground font-medium">{t("conclusion")}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {t("questionTitle")}
          </h3>
          <p className="text-muted-foreground mb-4">{t("questionAnswer1")}</p>
          <p className="text-muted-foreground">{t("questionAnswer2")}</p>
        </motion.div>
      </div>
    </section>
  );
}
