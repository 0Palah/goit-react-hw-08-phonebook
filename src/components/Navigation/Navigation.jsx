import React from 'react';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={css.navWrapper}>
      <NavLink className={css.link} end to="/">
        HomePage
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
