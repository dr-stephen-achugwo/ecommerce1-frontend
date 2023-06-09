import Head from "next/head";
import Favoris from "../../components/checkout/Favoris";
import SliderHome from "../../components/SliderHome";

import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME} - Favoris</title>
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
          content="Addicted Mountain: an E-Commerce site, created by Dr Stephen Achugwo (https://art1app.com) with NextJS - Typescript - TailwindCSS - MongoDB - NodeJS - Express"
        />
      </Head>

      <div className="py-10 flex flex-col gap-20">
        <Favoris />
        <div className="border-2 rounded-md px-5 py-10 overflow-hidden">
          <h2 className="text-2xl font-bold mb-5">Historique</h2>
          <SliderHome />
        </div>
      </div>
    </>
  );
}
