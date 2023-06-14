import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListings";
import CreateListings from "./pages/CreateListings";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="/Forgot-Password" element={<ForgotPassword />} />
          <Route path="/Offers" element={<Offers />} />

          <Route path="/Profile" element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/create-listing" element={<CreateListings />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
