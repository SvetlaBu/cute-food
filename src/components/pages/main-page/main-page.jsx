import React from "react";
import About from "/src/components/blocks/about/about";
import FeatureList from "/src/components/blocks/feature-list/feature-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeatureList features={features} />
    </>
  );
}

export default MainPage;