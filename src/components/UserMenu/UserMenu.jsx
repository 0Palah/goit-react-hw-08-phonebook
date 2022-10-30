import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authThunks';
import authSelectors from 'redux/auth/auth-selectors';
import css from './UserMenu.module.css';
import anonymous from '../../assets/anonymous.svg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  return (
    <div className={css.wrapper}>
      <img className={css.img} src={anonymous} alt="portrait" />
      <p>
        Signed in as: <span className={css.userName}>{user.name}</span>{' '}
      </p>
      <button
        className={css.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
