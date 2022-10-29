// import Section from './Section/Section';
// import ContactForm from './ContactForm/ContactForm';
// import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterView from 'redux/views/RegisterView/RegisterView';
import Layout from 'redux/views/Layout/Layout';
import HomeView from 'redux/views/HomeView/HomeView';
import LoginView from 'redux/views/LoginView/LoginView';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
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
