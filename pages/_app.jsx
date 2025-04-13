import "../styles/globals.css";
import { ThirdwebProvider } from "thirdweb/react";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      clientId="963ed92e2f4b9d38b122c31c1a13433f"
      activeChain="ethereum"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
