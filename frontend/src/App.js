import Login from './components/login';
import Profile from './components/profile';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Qrcode from './components/qrcode';
import Attendance from './components/attendance';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" exact />
        <Route element={<Profile />} path="/profile" exact />
        <Route element={<Qrcode />} path="/code" exact />
        <Route element={<Attendance />} path="/markAttendance/:code/:end_time" />
      </Routes>

    </div>
  );
}

export default App;
