import { Providers } from "@/provider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Providers>
  );
}
