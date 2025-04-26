import { redirect } from "next/navigation"

export default function GlobalNotFound() {
  // Перенаправляємо на локалізовану сторінку 404
  redirect("/uk/not-found")
}
