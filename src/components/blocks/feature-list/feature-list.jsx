import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";
import { Ul, Li } from "../../styled/";
import { Features, StyledButton, StyledTitle } from "./styles";

// список преимуществ
function FeaturesList({
  features // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему милые десерты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link="/order">Полакомиться</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
