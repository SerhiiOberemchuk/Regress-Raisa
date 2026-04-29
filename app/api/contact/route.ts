import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Будь ласка, заповніть всі обов'язкові поля" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Будь ласка, введіть коректний email" },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 100 ||
      phone.length > 20 ||
      (message && message.length > 1000)
    ) {
      return NextResponse.json(
        { error: "Один або кілька введених параметрів перевищують допустиму довжину" },
        { status: 400 },
      );
    }

    const currentDate = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    });

    await transporter.sendMail({
      from: `"RaisaRegress" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Дякуємо за ваше звернення | RaisaRegress",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">Дякуємо за ваше звернення</h2>
          <p>Шановний(а) <strong>${name}</strong>,</p>
          <p>Ми отримали ваше повідомлення та зв'яжемося з вами найближчим часом.</p>
          <p>Ваші контактні дані:</p>
          <ul>
            <li>Телефон: ${phone}</li>
            <li>Email: ${email}</li>
          </ul>
          ${message ? `<p>${message}</p>` : "<p>Повідомлення не вказано</p>"}
          <p>З повагою, команда RaisaRegress</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Форма зворотного зв'язку" <${process.env.EMAIL_USER}>`,
      to: "265840@gmail.com",
      subject: "Нове звернення з сайту RaisaRegress",
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
    });

    return NextResponse.json({
      success: true,
      message: "Повідомлення успішно надіслано",
    });
  } catch (error) {
    console.error("Помилка відправки email:", error);
    return NextResponse.json(
      { error: "Виникла помилка при відправці повідомлення" },
      { status: 500 },
    );
  }
}
