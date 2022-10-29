// import Section from './Section/Section';
// import ContactForm from './ContactForm/ContactForm';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import RegisterView from 'redux/views/RegisterView/RegisterView';
import Layout from 'redux/views/Layout/Layout';
import HomeView from 'redux/views/HomeView/HomeView';
import LoginView from 'redux/views/LoginView/LoginView';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

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
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
