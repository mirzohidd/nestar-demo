import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document Component -- PAGER ROUTER");
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="title" content="Nestar demo" />
      <meta name="robots" content="index,follow" />
      <meta
        name="keyboard"
        content={"nestar,nestar.uz,deve,mern,mern nestjs fullstack"}
      />
     
      <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
      {/* SEO */}
      <meta
        name="description"
        content={
          "Buy and sell properties anywhere anytime in Australia. | " +
          "Покупайте и продавайте недвижимость в любочй точке и в любое время Австралий"
        }
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
