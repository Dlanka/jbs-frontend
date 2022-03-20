import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { LogContextProvider } from "contextsApi/LogContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <LogContextProvider>
        <Component {...pageProps} />
      </LogContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
