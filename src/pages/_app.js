import "../styles/global.css";
import { ProvideAuth } from "../lib/auth-hook";

export default ({ Component, pageProps }) => (
  <ProvideAuth>
    <Component {...pageProps} />
  </ProvideAuth>
);
