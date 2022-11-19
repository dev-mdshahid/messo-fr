import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Fitness from './pages/Fitness/Fitness';
import BeautyCare from './pages/BeautyCare/BeautyCare';
import TestHealth from './pages/TestHealth';
import User from './Templates/User';
import Diet from './pages/Diet/Diet';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './components/Shared/PrivateRoute';
import { LoginContext } from './helpers/Contexts';
import { useState } from 'react';
import { Authentication } from './Classes/Authentication';

function App() {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);


  const localEmail = localStorage.getItem('email');
  const auth = new Authentication();
  if(localEmail) {
    const fetchData = async () => {
      const res = await fetch(auth.uribk + '/get_user/' + localEmail);
      const data = await res.json();
      setUser(data);
      setAuthenticated(true);
    };
    fetchData();
  }
  return (
    <LoginContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      <div className="bg-[#eceff7] rounded-lg overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <User component={<Dashboard />}></User>
              </PrivateRoute>
            }
          />
          <Route
            path="/fitness"
            element={
              <PrivateRoute>
                <User component={<Fitness />} topbar="Fitness" />
              </PrivateRoute>
            }
          />
          <Route
            path="/diet"
            element={
              <PrivateRoute>
                <User component={<Diet />} topbar="Diet and Nutrition" />
              </PrivateRoute>
            }
          />
          <Route
            path="/beautycare"
            element={
              <PrivateRoute>
                <User component={<BeautyCare />} topbar="Beauty Care" />
              </PrivateRoute>
            }
          />
          <Route
            path="/testhealth"
            element={
              <PrivateRoute>
                <User component={<TestHealth />} topbar="Test Your Health" />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <User component={<Profile />} topbar="My Profile" />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
