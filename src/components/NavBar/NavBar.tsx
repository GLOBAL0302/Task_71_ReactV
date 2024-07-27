import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname: location } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <NavLink
          to={
            location === '/csOrders' ||
            location === '/admin' ||
            location == '/addDish'
              ? '/admin'
              : '/'
          }
          className="navbar-brand"
        >
          <LocalPizzaIcon /> PizzaHut
        </NavLink>
        {(location === '/admin' || location == '/csOrders') && (
          <div className="" id="navbarNav">
            <ul className="navbar-nav d-flex gap-5">
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="text-white text-decoration-none"
                >
                  Dishes
                </NavLink>
              </li>
              <span className="border border-1"></span>
              <li>
                <NavLink
                  to="/csOrders"
                  className="text-white text-decoration-none"
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
