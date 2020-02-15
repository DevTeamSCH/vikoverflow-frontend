import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="hu">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                var isDark = window.localStorage.getItem('dark-mode')
                if (isDark) {
                  document.querySelector('html').className = 'dark'
                }
              } catch (error) {}
            `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
