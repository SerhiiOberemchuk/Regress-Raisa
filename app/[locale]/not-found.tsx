import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Сторінку не знайдено</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Вибачте, сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
      <Button asChild variant="default">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Повернутися на головну
        </Link>
      </Button>
    </div>
  )
}
