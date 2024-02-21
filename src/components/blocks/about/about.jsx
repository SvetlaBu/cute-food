import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>
          Магазин милых сладостей с доставкой
        </Title>
        <p className="about__text">
          Все продукты изготавливаются под заказ. Мастера начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
    </section>
  );
}

export default About;
