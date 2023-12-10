import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main";
import WelcomeSection from "../molecules/WelcomeSection";
import DrinksSection from "../molecules/DrinksSection";
import PopularSection from "../molecules/PopularSection";
import LatestSection from "../molecules/LatestSection";
import BrowserName from "../molecules/BrowserName/indes";
import DrinkDetail from "../molecules/DrinkDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              content={
                <>
                  <WelcomeSection />
                  <DrinksSection />
                  <PopularSection />
                  <LatestSection />
                  <BrowserName />
                </>
              }
            />
          }
        />

        <Route
          path="/drinkdetail/:idDrink"
          element={<MainPage content={<DrinkDetail />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
