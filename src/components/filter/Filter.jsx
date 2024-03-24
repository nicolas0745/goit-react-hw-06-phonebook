import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { searchContact } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onHandleChange = e => {
    dispatch(searchContact(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={css.container_filter}>
      <label>Find contacts by Name</label>
      <input
        id="1"
        type="text"
        name="filter"
        required
        onChange={onHandleChange}
      />
    </div>
  );
};

export { Filter };
