import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from './Loader';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
