import Head from 'next/head'

import theme from "../styles/themes/theme-url-shortening-api.js";

import data from '../src/data/url-shortening-api.js'

import Hero from '../src/components/Hero'
import FootnoteAttribution from '../src/components/FootnoteAttribution'
import Navigation from '../src/components/Navigation'
import Seo from '../src/components/Seo'

export default function Home() {
  const dataSeo = data[0]["seo"];
  const dataCompany = data[1]["company"];
  const dataNavLeft = data[2]["navigation_left"];
  const dataNavRight = data[3]["navigation_right"];
  const dataHero = data[4]["hero"];
  const dataBodyContent = data[5]["body_content"];
  const dataBodyCard = data[6]["body_card"];
  const dataFooterCta = data[7]["footer_cta"];
  const dataFooterFeatures = data[8]["footer"][0]["features"];
  const dataFooterResources = data[8]["footer"][0]["resources"]
  const dataFooterCompany = data[8]["footer"][0]["company"];
  const dataSocial = data[9]["social"];

  return (
    <>
      <Seo seo={dataSeo} />
      <Navigation
        data_company={dataCompany}
        data_nav_left={dataNavLeft}
        data_nav_right={dataNavRight}
      />
      <Hero data_hero={dataHero} />
      <section className="container">
        <div className="url-shortening-api">{/* add content */}</div>
        <FootnoteAttribution frontendmentor_challenge_name="URL shortening API landing page" />
        <style global jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

          .hero-container {
            padding-top: 64px;
          }

          .hero-container .content h1 {
            font-size: 4rem;
            font-weight: ${theme.body.fontWeightBold};
          }

          .hero-container .content p {
            color: ${theme.colors.GrayishViolet};
          }

          .hero-container .content button {
            background-color: ${theme.colors.cyan};
            border: none;
            padding: 8px 32px;
            text-align: center;
            display: inline-block;
            // font-size: 16px;
            border-radius: 64px;
          }

          .hero-container .content a:link {
            color: ${theme.colors.white};
            text-decoration: none;
          }

          .hero-content .asset {
            margin-left: 64px;
          }
        `}</style>
      </section>
    </>
  );
}
