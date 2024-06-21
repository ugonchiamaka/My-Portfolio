import "@/scss/globals.css";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
import { Raleway, Fira_Code, Inter } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const interCode = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: "__inter_20b187", "__inter_Fallback_20b187";
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily};
          --inter-code: ${interCode.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
