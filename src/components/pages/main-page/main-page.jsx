import React from "react";
import About from "../../blocks/about/about";
import FeatureList from "../../blocks/feature-list/feature-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeatureList features={features} />
    </>
  );
}

export default MainPage;