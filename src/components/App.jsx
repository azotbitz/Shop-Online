import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {HomePage} from "../pages/HomePage";
import SelectionsPage from "../pages/SelectionsPage";
import OrderingPage from "../pages/OrderingPage";
import WelcomePage from "../pages/WelcomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import OfferPage from "../pages/OfferPage";
import PolicyPage from "../pages/PolicyPage";
import SearchPage from "../pages/SearchPage";
import ToWhomPage from "../pages/ToWhomPage";



function App() {
  return (
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'/selections'} element={<SelectionsPage/>}/>
                  <Route path={'/ordering'} element={<OrderingPage/>}/>
                  <Route path={'/about'} element={<AboutPage/>}/>
                  <Route path={'/contact'} element={<ContactPage/>}/>
                  <Route path={'/offer'} element={<OfferPage/>}/>
                  <Route path={'/policy'} element={<PolicyPage/>}/>
                  <Route path={'/search'} element={<SearchPage/>}/>
                  <Route path={'/toWhom'} element={<ToWhomPage/>}/>
                  <Route path={'*'} element={<ErrorPage/>}/>
              </Route>
              <Route path={'/welcome'} element={<WelcomePage/>}/>
          </Routes>
  );
}

export default App;
