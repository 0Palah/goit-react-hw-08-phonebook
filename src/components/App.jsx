import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route spath="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
