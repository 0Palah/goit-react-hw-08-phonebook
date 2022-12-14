import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/contactsThunks';
import { selectContactsArr, selectContactsState } from 'redux/selectors';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const items = useSelector(selectContactsArr);
  const { isLoading } = useSelector(selectContactsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { inputName, inputTel } = form;
    const newContactName = inputName.value;
    const newContactNumber = inputTel.value;
    const newContactOgj = {
      name: newContactName,
      number: newContactNumber,
    };
    verifyContact(newContactOgj);
    form.reset();
  };

  const verifyContact = newContactOgj => {
    const newName = newContactOgj.name;
    const namesArr = items.map(el => el.name.toLocaleLowerCase());
    if (!namesArr.includes(newName.toLocaleLowerCase())) {
      dispatch(addContact(newContactOgj));
    } else {
      alert(`${newName} is already in contact.`);
    }
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <p>Wait, please...</p>}
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <h2>Phonebook</h2>
          <div>
            <label htmlFor="inputName">Name</label>
            <input
              id="inputName"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label htmlFor="inputTel">Number</label>
            <input
              id="inputTel"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </form>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactForm;
