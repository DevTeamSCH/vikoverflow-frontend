import Head from "next/head";
import { useRouter } from "next/router";

import { useAuth } from "../providers";
import Button from "../button";

export default ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  return (
    <div className='container'>
      <Head>
        <title>VikOverflow</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header>
        <div className='brand'>
          <span>vik</span>
          <span>overflow</span>
        </div>
        {user && (
          <Button onClick={() => router.push("/api/v1/logout")}>Logout</Button>
        )}
        {!user && !loading && (
          <Button onClick={() => router.push("/api/v1/login/authsch")}>
            Belépés auth.sch fiókkal
          </Button>
        )}
      </header>
      <main>{children}</main>
      <footer>created by DevTeam</footer>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        header {
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          font-size: 24px;
          font-weight: 600;
        }

        .brand span:first-child {
          color: var(--theme-primary);
        }

        .brand span:nth-child(2) {
          color: var(--theme-secondary);
        }

        main {
          flex-grow: 1;
          display: flex;
          justify-content: center;
        }

        footer {
          padding: 10px;
          color: gray;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
