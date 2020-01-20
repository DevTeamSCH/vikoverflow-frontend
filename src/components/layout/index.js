import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default ({ children, header = true, footer = true }) => (
  <main>
    <Head>
      <title>vikoverflow</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {header && <Header />}
    <div className="page">{children}</div>
    {footer && <Footer />}

    <style jsx>{`
      .page {
        margin: 0 auto;
        min-height: calc(100vh - 128px);
        max-width: var(--main-content);
        padding: 0 1rem;
      }
    `}</style>
  </main>
);
