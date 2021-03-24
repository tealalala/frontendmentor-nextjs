import Image from "next/image";

export default function Hero({ data_hero }) {
  let contentLeft = (
    <div class="col">
      <h1>{data_hero.title}</h1>
      <p>{data_hero.paragraph}</p>
      <button>
        <a href={data_hero.cta_link}>{data_hero.cta_title}</a>
      </button>
    </div>
  );
  let contentRight = (
    <div class="col">
      <Image
        src={data_hero.image_url}
        width="300px"
        height="300px"
        alt={data_hero.image_alt_tag}
      />
    </div>
  );

  return (
    <section class="container">
      <div class="row">
        {contentLeft}
        {contentRight}
      </div>
    </section>
  );
}
