import './App.css';
import NavBar from './components/NavBar/NavBar';
import AddDishForm from './components/AddDishForm/AddDishForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './conteiners/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CsOrders from './components/CsOrders/CsOrders';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/addDish" element={<AddDishForm />} />
        <Route path="/csOrders" element={<CsOrders />} />
        <Route path="/addDish/:id" element={<AddDishForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
