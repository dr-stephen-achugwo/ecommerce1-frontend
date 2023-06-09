import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import BgHome from "../components/home/BgHome";
import ImageHome from "../components/home/ImageHome";
import SliderHome from "../components/SliderHome";
import { COMPANY_NAME, URL_CATEGORY } from "../constants/Constants";
import { imgHomeData } from "../types/home";

export default function Home({
  imgHomeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME}</title>
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
          content="Montagne Addicte : E-commerce crée par Tom Sonvico (@SonviCode) avec Next.Js - Typescript - Tailwind CSS - MongoDB - Node.Js - Express."
        />
      </Head>

      <BgHome />
      <ImageHome imgHomeData={imgHomeData} />
      <div className="px-5 mt-20 mb-20 max-w-7xl mx-auto">
        <h2 className="uppercase after:block after:absolute after:w-40 after:h-1 after:bg-main after:rounded-md pl-[5%] text-3xl">
        The latest news
        </h2>
        <SliderHome />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  imgHomeData: imgHomeData;
}> = async () => {
  const resNext = await fetch(URL_CATEGORY);
  const imgHomeData = await resNext.json();

  return {
    props: {
      imgHomeData,
    },
  };
};
