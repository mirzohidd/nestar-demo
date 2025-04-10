import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("APP Component -- PAGER ROUTER");

  return <Component {...pageProps} />;
}
