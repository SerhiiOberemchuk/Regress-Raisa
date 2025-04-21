"use client"

export function Analytics() {
  return (
    <>
      {/* Google Analytics або інший код аналітики можна додати тут */}
      {/* Приклад: */}
      {/* 
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
        }}
      />
      */}
    </>
  )
}
