import "@/styles/globals.css";
import type { AppProps } from "next/app";

// this is the active PAGE
// if I navigate between routes, <Component /> will change to the new page
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
