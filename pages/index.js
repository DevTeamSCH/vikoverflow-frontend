import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAuth } from "../components/providers";
import Button from "../components/button";
import toggleDarkMode from "../lib/toggle-dark-mode";

export default () => {
  const { user, loading } = useAuth();
  return (
    <Layout>
      <Navbar />

      <div className="hero">
        <h1 className="title">Welcome to VikOverflow!</h1>
        Logged in as {user?.full_name} with ID: {user?.id}.
        <Button>Ez egy gomb</Button>
        <Button peldaProp>Ez egy piros gomb</Button>
        <Button onClick={toggleDarkMode}>Dark mode</Button>
      </div>
    </Layout>
  );
};
