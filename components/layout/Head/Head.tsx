import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
export const PageHead: React.FC<{
  title: string;
  metaTitle: string;
  description: string;
  imageUrl: string;
}> = ({ title, metaTitle, description, imageUrl }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={metaTitle} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imageUrl} />
        {/* FACEBOOK meta tags */}
        <meta property="og:url" content={`https://arctis.hr${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        {/* Twitter meta tags */}
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:title " content={metaTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content={`https://arctis.hr${router.asPath}`}
        />
        <meta name="twitter:description" content={description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
