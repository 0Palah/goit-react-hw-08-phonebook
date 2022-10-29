// import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'redux/views/RegisterView';
import { Layout } from 'redux/views/Layout';

const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
