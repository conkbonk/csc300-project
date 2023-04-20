import React, { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import LandingPage from "./components/pages/landingPage";
import HomePage from "./components/pages/homePage";
import Login from "./components/pages/loginPage";
import Signup from "./components/pages/registerPage";
import PrivateUserProfile from "./components/pages/privateUserProfilePage";
import getUserInfo from "./utilities/decodeJwt";
import MbtaAlertsPage from "./components/pages/mbtaAlerts";
import RedStops from "./components/pages/redStops";
import OrangeStops from "./components/pages/orangeStops";
import BlueStops from "./components/pages/blueStops";
import FerrySchedule from "./components/pages/ferrySchedule";
import TicketFares from "./components/pages/ticketFares";
import Contact from "./components/pages/contact";
import AddCommmentPage from "./components/pages/addComment";
import TicketPurchase from "./components/pages/ticketPurchase";
import UserHistory from "./components/pages/userHistory";
import CommentPage from "./components/pages/commentPage"
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = createContext();

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
          <Route path="/addComment" element={<AddCommmentPage />} />
          <Route path="/ticketPurchase" element={<TicketPurchase />} />
          <Route path="/userHistory" element={<UserHistory />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route exact path="/comments" element={<CommentPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
