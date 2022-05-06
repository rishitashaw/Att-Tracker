import Login from './components/login';
import Profile from './components/profile';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<Profile />} path="/profile" exact />
      </Routes>

    </div>
  );
}

export default App;
