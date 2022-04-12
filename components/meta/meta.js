import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Online dating app" />
      <meta name="keywords" content="dating, date, women, men, relationship" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default MetaTags;
