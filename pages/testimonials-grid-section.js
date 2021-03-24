import Head from 'next/head'

import theme from "../styles/themes/theme-testimonials-grid-section.js";

import data from '../src/data/testimonials-grid-section.js'

import Card from '../src/components/Card'
import FootnoteAttribution from '../src/components/FootnoteAttribution'

export default function Home() {
  return (
    <section className="container">
      <div className="testimonials-grid-section">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index}
            name={item.name}
            subtitle={item.subtitle}
            imageUrl={item.image_url}
            pullQuote={item.pull_quote}
            fullQuote={item.full_quote}
          />
        ))}
      </div>
      <FootnoteAttribution frontendmentor_challenge_name="Testimonials grid section" />
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap");

        .testimonials-grid-section {
          display: grid;
          // grid-template-columns: auto auto auto auto;
          grid-template-columns: 0.85fr 1fr 0.8fr 0.8fr;
          grid-template-rows: auto auto;
          gap: 24px 24px;
          grid-template-areas:
            "top-1 top-1 top-2 side-1"
            "bottom-1 bottom-2 bottom-2 side-1";
          padding: 32px 0px;
          font-family: ${theme.body.fontFamily};
          font-size: ${theme.body.fontSize};
          font-weight: ${theme.body.fontWeightNormal};
        }

        .avatar {
          display: flex;
          padding-bottom: 16px;
        }

        .avatar .image {
          padding-right: 16px;
        }

        .avatar img {
          border-radius: 50%;
        }

        .avatar p {
          margin-bottom: 0px !important;
        }

        .card {
          padding: 24px;
          border-radius: 12px;
          border: 0px;
        }

        .card-0 .name,
        .card-1 .name,
        .card-3 .name,
        .card-0 .pull-quote,
        .card-1 .pull-quote,
        .card-3 .pull-quote {
          color: ${theme.colors.white};
        }

        .card-0 .subtitle,
        .card-1 .subtitle,
        .card-3 .subtitle {
          color: ${theme.colors.lightGray};
          opacity: 0.5;
        }

        .card-0 .full-quote,
        .card-1 .full-quote,
        .card-3 .full-quote {
          color: ${theme.colors.white};
          opacity: 0.7;
        }

        .card-2 .name,
        .card-4 .name,
        .card-2 .pull-quote,
        .card-4 .pull-quote {
          color: ${theme.colors.veryDarkBlackishBlue};
        }

        .card-2 .subtitle,
        .card-4 .subtitle {
          color: ${theme.colors.veryDarkGrayishBlue};
          opacity: 0.5;
        }

        .card-2 .full-quote,
        .card-4 .full-quote {
          color: ${theme.colors.veryDarkGrayishBlue};
          opacity: 0.7;
        }

        .card-0 .pull-quote,
        .card-1 .pull-quote,
        .card-2 .pull-quote,
        .card-3 .pull-quote,
        .card-4 .pull-quote {
          padding-bottom: 16px;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
        }

        .card.card-0 {
          grid-area: top-1;
          background: ${theme.colors.moderateViolet}
            url("/testimonials-grid-section/bg-pattern-quotation.svg") no-repeat
            right 27% top 0%;
          background-size: 20%;
        }

        .card.card-1 {
          grid-area: top-2;
          background-color: ${theme.colors.veryDarkGrayishBlue};
        }

        .card.card-2 {
          grid-area: bottom-1;
          background-color: ${theme.colors.white};
        }

        .card.card-3 {
          grid-area: bottom-2;
          background-color: ${theme.colors.veryDarkBlackishBlue};
        }

        .card.card-4 {
          grid-area: side-1;
          background-color: ${theme.colors.white};
        }

        .card.card-0 .avatar img {
          border: 2px solid #ae90df !important;
        }

        .card.card-3 .avatar img {
          border: 2px solid ${theme.colors.moderateViolet} !important;
        }

        .card.card-1 .avatar img,
        .card.card-2 .avatar img,
        .card.card-4 .avatar img {
          border: 2px solid ${theme.colors.white} !important;
        }

        .card.card-2,
        .card.card-4 {
          box-shadow: 1rem 1rem 8rem -1rem ${theme.colors.lightGray};
        }

        // Extra small devices (portrait phones, less than 576px)
        @media (max-width: 576px) {
        }

        // Small devices (landscape phones, less than 768px)
        @media (max-width: 768px) {
          .testimonials-grid-section {
            display: flex;
            flex-direction: column;
          }
          .card.card-0 {
            background-repeat: no-repeat;
            background-size: right 27% top 0%;
            background-size: 20%;
          }
        }

        // Medium devices (tablets, less than 992px)
        @media (max-width: 992px) {
          .testimonials-grid-section {
            grid-template-columns: 0.9fr 1fr 0.9fr;
            grid-template-rows: auto auto auto;
            gap: 24px 24px;
            grid-template-areas:
              "top-1 top-1 top-2"
              "middle-1 middle-2 middle-2"
              "bottom-1 bottom-1 bottom-1";
            padding: 32px 0px;
          }
          .card.card-0 {
            grid-area: top-1;
          }
          .card.card-1 {
            grid-area: top-2;
          }
          .card.card-2 {
            grid-area: middle-1;
          }
          .card.card-3 {
            grid-area: middle-2;
          }
          .card.card-4 {
            grid-area: bottom-1;
          }
        }

        // Large devices (desktops, less than 1200px)
        @media (max-width: 1200px) {
        }
      `}</style>
    </section>
  );
}
