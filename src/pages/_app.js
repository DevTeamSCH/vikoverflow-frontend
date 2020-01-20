import "../styles/reset.css";
import "../styles/global.css";
import Providers from "../components/providers";
import Layout from "../components/layout";

export default ({ Component, pageProps }) => (
  <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
);
