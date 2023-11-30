import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChatApp from './Pages/ChatApp';
import BookingHours from './Pages/BookingHours';
import Profile from './Pages/Profile';
import UserProfile from './Pages/UserProfile';
import ApBooking from './Components/ApBooking';
import Dashboard from './Pages/PagesData/Admin/Dashboard';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   if (localStorage.getItem('chat-app-user')) {
  //   } else {
  //     setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route exact path="/dental-clinic/team" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
