import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <h1>Hello</h1>
      <nav>
        <li>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/details">Details</NavLink>
        </li>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
      </>
    </div>
  );
}
export default App;
