import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <h2>Layout</h2>
    </div>
  );
};
