import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, props }) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Movie Scope</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
