// import { AppProps } from "next/app";
import { wrapper } from "../store/store";
import Layout from '../components/Layouts/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);