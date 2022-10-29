import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  console.log(user);
  return (
    <div>
      <p>{`Signed in as ${user.name}`}</p>

      <button onClick={() => dispatch(authOperations.logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
