import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import OrderPage from "../pages/order/order";
import MainPage from "../pages/main-page/main-page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={products} />}
            />
            <Route />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
