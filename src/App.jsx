import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.scss';
import Home from './Pages/Home/Home';
import ThreePage from "./Pages/ThreePage/ThreePage";
import PageError from "./Components/PageError/PageError";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutSet from "./Pages/AboutSet/AboutSet";
import VideoItems from "./Pages/VideoItems/VideoItems";
import BuyNow from "./Pages/BuyNow/BuyNow";
import SessionContact from "./Pages/SessionContact/SessionContact";
import Policy from "./Pages/Policy/Policy";
import TermsUsage from "./Pages/TermsUsage/TermsUsage";
import IamBook from "./Pages/IamBook/IamBook";
import Photos from "./Pages/Photos/Photos";
import EventLive from "./Pages/EventLive/EventLive";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index ="/" element={<Home />}></Route>
      <Route path="aboutset" element={<AboutSet />} />
      <Route path="three-page" element={<ThreePage />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="video-items" element={<VideoItems />} />
      <Route path="BuyNow" element={<BuyNow />} />
      <Route path="session-contact" element={<SessionContact />} />
      <Route path="policy-details" element={<Policy />} />
      <Route path="termsusage" element={<TermsUsage />} />
      <Route path="i-am-book" element={<IamBook />} />
      <Route path="live-events" element={<EventLive />} />
      <Route path="photos" element={<Photos />} />
      <Route path="*" element={<PageError />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
