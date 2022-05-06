import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <h1>Att Tracker</h1>
      <BrowserRouter>
        <Routes>
          <Route elements={<Login />} path="/" exact />
          <Route elements={<Profile />} path="/profile" exact />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
