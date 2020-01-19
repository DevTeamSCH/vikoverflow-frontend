import Head from "next/head";

export default ({ children }) => {
  return (
    <main>
      <Head>
        <title>VikOverflow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {children}
    </main>
  );
};
