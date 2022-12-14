import { useDispatch, useSelector } from 'react-redux';
import { addFilterAction } from 'redux/filter/slice.filter';
import { selectFiltersStateValue } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFiltersStateValue);
  const dispatch = useDispatch();

  const handleChangeSearch = evt => {
    dispatch(addFilterAction(evt.target.value));
  };

  return (
    <div className={css.filterWrapper}>
      <h2>Contacts</h2>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        id="filter"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default Filter;
