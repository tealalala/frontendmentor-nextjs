export default function Seo({ seo }) {
  return (
    <html lang="en">
      <head>
        <title>{seo.title}</title>
        <meta name={seo.title} description={seo.description} />
        <meta name="robots" content="noindex,follow" />
      </head>
    </html>
  );
}

