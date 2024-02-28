import React from "react";
import { TitleSize } from "../../ui/title/title";
import {
  ProductImage,
  ProductPanel,
  ProductTitle,
  Price,
  ContentWrapper
} from "./styles";
import Tabs from "../../ui/tabs/tabs";
import OptionsList from "../../ui/options-list/options-list";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <ProductPanel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </ProductPanel>
  );
}

export default ProductCard;
