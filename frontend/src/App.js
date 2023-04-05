import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import LandingPage from "./components/pages/landingPage";
import HomePage from "./components/pages/homePage";
import Login from "./components/pages/loginPage";
import Signup from "./components/pages/registerPage";
import PrivateUserProfile from "./components/pages/privateUserProfilePage";
import { createContext, useState, useEffect } from "react";
import getUserInfo from "./utilities/decodeJwt";
import MbtaAlertsPage from "./components/pages/mbtaAlerts";
import RedStops from "./components/pages/redStops";
import OrangeStops from "./components/pages/orangeStops";
import BlueStops from "./components/pages/blueStops";
import FerrySchedule from "./components/pages/ferrySchedule";
import TicketFares from "./components/pages/ticketFares";

export const UserContext = createContext();
//test change
//test again
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={user}>
        <Routes>
          <Route exact path="/mbtaAlerts" element={<MbtaAlertsPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/redStops" element={<RedStops />} />
          <Route exact path="/orangeStops" element={<OrangeStops />} />
          <Route exact path="/blueStops" element={<BlueStops />} />
          <Route exact path="/ferrySchedule" element={<FerrySchedule />} />
          <Route exact path="/ticketFares" element={<TicketFares/>}/>
          <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};



export default App
