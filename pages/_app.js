import "../styles/reset.css";
import "../styles/global.css";
import Providers from "../components/providers";

export default ({ Component, pageProps }) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);
