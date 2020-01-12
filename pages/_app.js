import Providers from "../components/providers";

export default ({ Component, pageProps }) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);
