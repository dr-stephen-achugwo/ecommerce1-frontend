import Head from "next/head";
import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME} - Panier</title>
        <link rel="icon" href="logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="description"
          content="Addicted Mountain: an E-Commerce site, created by Dr Stephen Achugwo (https://art1app.com) with NextJS - Typescript - TailwindCSS - MongoDB - NodeJS - Express" />
      </Head>

      <div>All category</div>
    </>
  );
}
