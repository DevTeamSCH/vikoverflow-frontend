import { useAuth } from "../components/providers";
import Layout from "../components/layout";

export default Component => props => {
  const { user } = useAuth();
  if (user) {
    return <Component {...props} />;
  }
  return <Layout>nem vagy belepve boi</Layout>;
};
