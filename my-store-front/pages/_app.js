import Head from "next/head";
import { StoreProvider } from "../context/store-context";
import { DisplayProvider } from "../context/display-context";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <DisplayProvider>
        <Head>
          <title>Bakery</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/bag.PNG" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DisplayProvider>
    </StoreProvider>
  );
}

export default MyApp;
