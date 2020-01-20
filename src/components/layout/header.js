import Logo from "./logo";
import Button from "../button";
import { useAuth } from "../providers";
import { useRouter } from "next/router";

export default () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  return (
    <header>
      <nav>
        <Logo />
        {loading ? null : user ? (
          <Button onClick={() => router.push("/api/v1/logout")}>Logout</Button>
        ) : (
          <Button onClick={() => router.push("/api/v1/login/authsch")}>
            Belépés auth.sch fiókkal
          </Button>
        )}
      </nav>

      <style jsx>{`
        header {
          background: var(--bg);
          height: 64px;
          position: sticky;
          top: 0;
          border-bottom: 1px solid var(--gray);
        }
        nav {
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
      `}</style>
    </header>
  );
};
