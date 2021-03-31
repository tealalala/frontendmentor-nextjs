import Image from "next/image";

export default function Hero({ data_hero }) {
  let contentLeft = (
    <div className="col content">
      <h1>{data_hero.title}</h1>
      <p>{data_hero.paragraph}</p>
      <button>
        <a href={data_hero.cta_link} className="button primary-button">{data_hero.cta_title}</a>
      </button>
    </div>
  );
  let contentRight = (
    <div className="col asset">
      <Image
        src={data_hero.image_url}
        width="400px"
        height="300px"
        alt={data_hero.image_alt_tag}
      />
    </div>
  );

  return (
    <section className="container hero-container">
      <div className="row">
        {contentLeft}
        {contentRight}
      </div>
    </section>
  );
}
