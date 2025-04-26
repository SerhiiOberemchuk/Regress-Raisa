import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getTranslations } from "next-intl/server";

export const runtime = "nodejs";

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
    const locale = request.headers.get("x-locale") || "uk";
    const t = await getTranslations({ locale, namespace: "common" });

    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: t("form.fillAllFields") },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: t("form.invalidEmail") },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 100 ||
      phone.length > 20 ||
      (message && message.length > 1000)
    ) {
      return NextResponse.json(
        { error: t("form.inputTooLong") },
        { status: 400 }
      );
    }

    const currentDate = new Date().toLocaleString(
      locale === "uk" ? "uk-UA" : locale === "en" ? "en-US" : "it-IT",
      {
        timeZone: "Europe/Kiev",
      }
    );

    await transporter.sendMail({
      from: `"RaisaRegress" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: t("form.userEmailSubject"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">${t("form.userThankYou")}</h2>
          <p>${t("form.userGreeting")} <strong>${name}</strong>,</p>
          <p>${t("form.userThankYou")}</p>
          <p>${t("form.userContacts")}</p>
          <ul>
          <li>${t("form.phone")}: ${phone}</li>
          <li>${t("form.email")}: ${email}</li>
          </ul>
          ${
            message
              ? `<p>${message}</p>`
              : `<p>${t("form.noMessageProvided")}</p>`
          }
          <p>${t("form.userRespectfully")}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777;">${t("form.autoMessage")}</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Форма зворотного зв'язку" <${process.env.EMAIL_USER}>`,
      to: "265840@gmail.com",
      subject: t("form.adminEmailSubject"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">${t("form.adminEmailSubject")}</h2>
          <p>Дата та час: ${currentDate}</p>
          <h3>Інформація про клієнта:</h3>
          <ul>
            <li><strong>Ім'я:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Телефон:</strong> ${phone}</li>
          </ul>
          ${
            message
              ? `<h3>Повідомлення:</h3><p>${message}</p>`
              : `<p>${t("form.noMessageProvided")}</p>`
          }
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: t("form.sendSuccess"),
    });
  } catch (error) {
    console.error("Помилка відправки email:", error);
    return NextResponse.json(
      { error: "Виникла помилка при відправці повідомлення" },
      { status: 500 }
    );
  }
}
