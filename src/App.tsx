import './App.css';
import NavBar from './components/NavBar/NavBar';
import AddDishForm from './components/AddDishForm/AddDishForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './conteiners/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<HomePage/>}/>
        <Route path="/addDish"  element={<AddDishForm/>}/>
        <Route path="/addDish/:id"  element={<AddDishForm/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
