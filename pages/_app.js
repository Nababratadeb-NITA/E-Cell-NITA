/* eslint-disable quotes */
import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>E-Cell | NITA</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455624/Logo_White_1_q8vq73.png"
      />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455624/Logo_White_1_q8vq73.png"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
