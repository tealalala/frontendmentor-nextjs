export default function FootnoteAttribution({frontendmentor_challenge_name}) {
  return (
    <div className="attribution">
      Challenge by {" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>: {frontendmentor_challenge_name}
      .<br/>
      Coded by <a href="https://github.com/tealalala">Tea La</a>.
      <style global jsx>{`
        .attribution {
          padding-bottom: 32px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}