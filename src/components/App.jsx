import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {HomePage} from "../pages/HomePage";
import SelectionsPage from "../pages/SelectionsPage";
import OrderingPage from "../pages/OrderingPage";
import WelcomePage from "../pages/WelcomePage";



function App() {
  return (
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'/selections'} element={<SelectionsPage/>}/>
                  <Route path={'/ordering'} element={<OrderingPage/>}/>
                  <Route path={'/welcome'} element={<WelcomePage/>}/>
              </Route>
          </Routes>
  );
}

export default App;
