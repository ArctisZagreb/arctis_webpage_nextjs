import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arctis</title>
        <meta
          name="description"
          content="Arctis d.o.o. .Zastupnik Archibus-a za Hrvatsku i regiju."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "teal", minHeight: "200vh" }}></main>
    </>
  );
}
