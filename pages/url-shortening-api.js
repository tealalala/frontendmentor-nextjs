import Head from 'next/head'

import theme from "../styles/themes/theme-url-shortening-api.js";

import data from '../src/data/url-shortening-api.js'

import Hero from '../src/components/Hero'
import FootnoteAttribution from '../src/components/FootnoteAttribution'
import Navigation from '../src/components/Navigation'

export default function Home() {
  const dataCompany = data[0]["company"];
  const dataNavLeft = data[1]["navigation_left"];
  const dataNavRight = data[2]["navigation_right"];
  const dataHero = data[3]["hero"];
  const dataBodyContent = data[4]["body_content"];
  const dataBodyCard = data[5]["body_card"];
  const dataFooterCta = data[6]["footer_cta"];
  const dataFooterFeatures = data[7]["footer"][0]["features"];
  const dataFooterResources = data[7]["footer"][0]["resources"]
  const dataFooterCompany = data[7]["footer"][0]["company"];
  const dataSocial = data[8]["social"];

  return (
    <>
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
