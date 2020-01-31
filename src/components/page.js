import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default ({ children, header = true, footer = true, pageTitle }) => (
  <div>
    <Head>
      <title>{pageTitle ? `${pageTitle} · vikoverflow` : "vikoverflow"}</title>
    </Head>

    {header && <Header />}
    <main>{children}</main>
    {footer && <Footer />}

    <style jsx>{`
      main {
        padding: 0 1rem 8rem;
        width: var(--main-content);
        max-width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
