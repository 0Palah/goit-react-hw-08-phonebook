// import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.appWrapper}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
