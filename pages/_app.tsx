import { CSideScript } from "@cside.dev/next";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSideScript />
      <ToastContainer
        hideProgressBar
        closeOnClick
        position="top-right"
        pauseOnFocusLoss={false}
        transition={Slide}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
