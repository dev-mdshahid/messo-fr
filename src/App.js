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

function App() {
  return (
    <div className="bg-[#eceff7] rounded-lg overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<User component={<Dashboard />} />} />
        <Route
          path="/fitness"
          element={<User component={<Fitness />} topbar="Fitness" />}
        />

        <Route
          path="/diet"
          element={<User component={<Diet />} topbar="Diet and Nutrition" />}
        />
        <Route
          path="/beautycare"
          element={<User component={<BeautyCare />} topbar="Beauty Care" />}
        />
        <Route
          path="/testhealth"
          element={
            <User component={<TestHealth />} topbar="Test Your Health" />
          }
        />
        <Route
          path="/profile"
          element={<User component={<Profile />} topbar="My Profile" />}
        />
      </Routes>
    </div>
  );
}

export default App;
