import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <div>
        <div>
          <NavLink to="/" end className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </div>
        <div>
          <NavLink to="/register" end className={css.navLink}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={css.navLink}>
            Sign In
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
