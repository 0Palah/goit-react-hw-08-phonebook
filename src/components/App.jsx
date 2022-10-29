// import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'redux/views/RegisterView/RegisterView';
import { Layout } from 'redux/views/Layout/Layout';
import HomeView from 'redux/views/HomeView/HomeView';
import LoginView from 'redux/views/LoginView/LoginView';

const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/contacts " element={<ContactsList />} />
        </Route>
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
      <ContactForm />
      <Filter />
    </div>
  );
};

export default App;
