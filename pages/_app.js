import * as React from 'react';
// import { AppProps } from "next/app";
import { wrapper } from "../store/store";
import '../styles/globals.css';
import Layout from '../components/Layouts/layout';
import { theme } from '../modules/theme';
import { Montserrat, Open_Sans, Roboto_Slab, Lora } from 'next/font/google';
import { ThemeProvider } from "@mui/material/styles";
import { palette } from "@mui/system";
import { CssBaseline } from '@mui/material';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' });
const openSans = Open_Sans({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout className={[robotoSlab.className, openSans.className, robotoSlab.className, lora.className]}>
        <style jsx global>{`
        html {
          font-family: ${lora.style.fontFamily};
        }
      `}</style>
        <CssBaseline />
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);