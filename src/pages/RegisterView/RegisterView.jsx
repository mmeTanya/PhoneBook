import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.tittle}>For work with PhoneBook application you need, first, make registration</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className={s.form__field}>
          <label className={s.form__label} htmlFor="name">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.form__input}
          />
        </div>
        <div className={s.form__field}>
          <label className={s.form__label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.form__input}
          />
        </div>
        <div className={s.form__field}>
          <label className={s.form__label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.form__input}
          />
        </div>
        <button type="submit" className={s.form__btn}>Sign up</button>
      </form>
    </div>
  );
}
