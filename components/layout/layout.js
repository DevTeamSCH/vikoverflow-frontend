import Head from "next/head";
import reset from "../../css/reset";
import global from "../../css/global";

export default ({ children }) => {
  return (
    <main>
      <Head>
        <title>VikOverflow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {global}
      </style>

      {children}
    </main>
  );
};
