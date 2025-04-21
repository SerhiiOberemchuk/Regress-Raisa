import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Вказуємо, що цей маршрут повинен використовувати Node.js runtime, а не Edge
export const runtime = "nodejs"

// Налаштування транспорту для Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Це має бути пароль додатку, а не звичайний пароль Gmail
  },
})

export async function POST(request: Request) {
  try {
    // Отримуємо дані з форми
    const data = await request.json()
    const { name, email, phone, message } = data

    // Перевіряємо обов'язкові поля
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Будь ласка, заповніть всі обов'язкові поля" }, { status: 400 })
    }

    // Формуємо дату та час для листа
    const currentDate = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kiev",
    })

    // Відправляємо лист клієнту
    await transporter.sendMail({
      from: `"РегресТерапія" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Дякуємо за ваше звернення | РегресТерапія",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">Дякуємо за ваше звернення!</h2>
          <p>Шановний(а) <strong>${name}</strong>,</p>
          <p>Ми отримали ваше повідомлення та зв'яжемося з вами найближчим часом.</p>
          <p>Ваші контактні дані:</p>
          <ul>
            <li>Телефон: ${phone}</li>
            <li>Email: ${email}</li>
          </ul>
          ${message ? `<p>Ваше повідомлення: "${message}"</p>` : ""}
          <p>З повагою,<br>Команда РегресТерапії</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777;">Це автоматичне повідомлення, будь ласка, не відповідайте на нього.</p>
        </div>
      `,
    })

    // Відправляємо лист власнику сайту
    await transporter.sendMail({
      from: `"Форма зворотного зв'язку" <${process.env.EMAIL_USER}>`,
      to: "265840@gmail.com",
      subject: "Нове звернення з сайту РегресТерапія",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">Нове звернення з сайту</h2>
          <p>Дата та час: ${currentDate}</p>
          <h3>Інформація про клієнта:</h3>
          <ul>
            <li><strong>Ім'я:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Телефон:</strong> ${phone}</li>
          </ul>
          ${message ? `<h3>Повідомлення:</h3><p>${message}</p>` : "<p>Повідомлення не вказано</p>"}
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Повідомлення успішно надіслано" })
  } catch (error) {
    console.error("Помилка відправки email:", error)
    return NextResponse.json({ error: "Виникла помилка при відправці повідомлення" }, { status: 500 })
  }
}
