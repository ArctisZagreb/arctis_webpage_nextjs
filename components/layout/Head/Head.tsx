import React from "react";
import Head from "next/head";
export const PageHead: React.FC<{
  title: string;
  metaTitle: string;
  description: string;
  imageUrl: string;
}> = ({ title, metaTitle, description, imageUrl }) => {
  return (
    <>
      <Head>
        <title>Arctis</title>
        <meta
          name="description"
          content="Arctis d.o.o. .Zastupnik Archibus-a za Hrvatsku i regiju."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:title " content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://arctis.hr" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
