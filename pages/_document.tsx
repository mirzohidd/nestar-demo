import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document Component -- PAGER ROUTER");

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar demo" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keyboard"
          content={"nestar,nestar.uz,deve,mern,mern nestjs fullstack"}
        />

        {/* Исправленный путь для favicon */}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in Australia. | " +
            "Покупайте и продавайте недвижимость в любой точке и в любое время Австралии"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
