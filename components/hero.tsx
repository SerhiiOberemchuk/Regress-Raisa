import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  imageSrc: string;
};

export default function Hero({ imageSrc }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[520px] w-[520px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-rose-200/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
              Онлайн-практика регресивної терапії
            </p>
            <h1 className="font-display text-5xl leading-[0.92] font-semibold md:text-6xl lg:text-7xl">
              Регресивний
              <br />
              гіпноз
              <br />
              <span className="text-primary">онлайн</span>
            </h1>
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Раїса Оберемчук
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                Практикуючий регресолог
              </p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Допомагаю дістатися до глибинних причин внутрішніх блоків, повторюваних
              життєвих сценаріїв і емоційних напружень, щоб повернути вам ясність,
              опору та відчуття цілісності.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 shadow-[0_14px_28px_rgba(124,58,237,0.22)] hover:bg-primary/90"
              >
                <Link href="/#contact">Записатися на сеанс</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link href="/#about">Дізнатися більше</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <Image
                src={imageSrc}
                alt="Портрет Раїси Оберемчук"
                width={600}
                height={600}
                className="rounded-[2rem] object-cover shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-black/10 ring-inset" />
            </div>

            <div className="absolute -top-6 -right-4 z-10 rounded-2xl bg-white/95 p-4 shadow-[0_18px_50px_rgba(24,20,40,0.12)] backdrop-blur">
              <p className="font-display text-2xl font-semibold leading-none">95%</p>
              <p className="mt-1 text-sm text-muted-foreground">
                клієнтів відзначають позитивні зміни
              </p>
            </div>

            <div className="absolute -bottom-6 -left-4 z-10 rounded-2xl bg-white/95 p-4 shadow-[0_18px_50px_rgba(24,20,40,0.12)] backdrop-blur">
              <p className="font-display text-2xl font-semibold leading-none">10+ років</p>
              <p className="mt-1 text-sm text-muted-foreground">
                досвіду в регресивній терапії
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
