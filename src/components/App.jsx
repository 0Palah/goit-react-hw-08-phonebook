import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import authOperations from 'redux/auth/authThunks';
import Layout from 'redux/views/Layout/Layout';
import HomeView from 'redux/views/HomeView/HomeView';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import css from './App.module.css';

const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const LoginView = lazy(() => import('../redux/views/LoginView/LoginView'));
const RegisterView = lazy(() =>
  import('../redux/views/RegisterView/RegisterView')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="/register"
            element={
              <Suspense fallback={<p>Wait, please</p>}>
                <RegisterView />
              </Suspense>
            }
          />
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path="/contacts"
              element={
                <Suspense fallback={<p>Wait, please</p>}>
                  <ContactForm />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<p>Wait, please</p>}>
                <LoginView />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
