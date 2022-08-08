import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.form__field}>
      <p className={s.text}>Welcome {name}</p>
      <button type="button" className={s.btn} onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
