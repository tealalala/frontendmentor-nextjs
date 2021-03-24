import classNames from "classnames";

import Avatar from './Avatar';

export default function Card ({index, name, subtitle, imageUrl, pullQuote, fullQuote}) {
  return (
    <div className={classNames('card', 'card-' + index)}>
      <Avatar 
        index={index}
        name={name}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />
      <div className="pull-quote">{pullQuote}</div>
      <div className="full-quote">"{fullQuote}"</div>
    </div>
  );
}