import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.tittle}>Log in</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className={s.form__field}>
          <label className={s.form__label} htmlFor="email">
            email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.form__input}
          />
        </div>
        <div className={s.form__field}>
          <label className={s.form__label} htmlFor="password">
            password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.form__input}
          />
        </div>

        <button type="submit" className={s.form__btn}>
          Log in
        </button>
      </form>
    </div>
  );
}
