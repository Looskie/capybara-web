import "../styles/globals.css";
import "../public/fonts/biorhyme/stylesheet.css";
import type { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        hideProgressBar
        closeOnClick
        position="bottom-right"
        pauseOnFocusLoss={false}
        transition={Slide}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
