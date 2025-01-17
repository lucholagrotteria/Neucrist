import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Image  from 'next/image'; 


const Header = () => {

  const title = "Neucrist";
  const desc = "Los mejores neumaticos que puedes encontrar en el mercado";
  const ogImgRelativePath = "/og.png";

  const siteURL = "https://neucrist.com.ar";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const twitterHandle = "";
  const siteName = "";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "es_AR", //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          
            <Image 
              src = {ogImageURL}
              width = {1200}
              height = {630}
              alt = "Neucrist | encontra lo mejor del mercado de neumaticos, parabrisas y autopartes"
            />
            // {
            // url: ogImageURL,
            // width: 1200,
            // height: 630,
            // alt: "Neucrist | encontra lo mejor del mercado de neumaticos",
            // },
          
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "author",
          content: title,
        },
      ]}
    />
  );
}

export default Header;
