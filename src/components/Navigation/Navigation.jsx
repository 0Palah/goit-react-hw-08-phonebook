import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

// const Link = styled(NavLink)`
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;

//   &.active {
//     color: #e84a5f;
//   }
// `;

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      {isLoggedIn && <NavLink to="/todos">Заметки</NavLink>}
    </nav>
  );
};

export default Navigation;
