import './App.css';
import NavBar from './components/NavBar/NavBar';
import AddDishForm from './components/AddDishForm/AddDishForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './conteiners/HomePage/HomePage';


const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/admin" element={<HomePage/>}/>
        <Route path="/addDish"  element={<AddDishForm/>} />
      </Routes>
    </div>
  );
};

export default App;
