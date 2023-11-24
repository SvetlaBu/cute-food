import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function FeatureCard({
  title, // заголовок
  about, // пояснение
  isNegative, // является ли особенность отрицательной
  owner, // вид продукта
  image // url c фото
}) {
  return (
    <article
      className={`feature-card${isNegative ? " feature-card_negative" : ""}`}
    >
      <header className="feature-card__header">
        <img
          className="feature-card__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature-card__owner${
              isNegative ? " feature-card__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </header>
      <p
        className="feature-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      ></p>
    </article>
  );
}

export default FeatureCard;
