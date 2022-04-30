import Layout from "../components/Loyout";
import "../styles/globals.sass";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main className="content">
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
