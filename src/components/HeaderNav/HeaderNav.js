import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import s from './HeaderNav.module.css';

const styles = {
  link: {
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '29px',
  },
  activeLink: {
    color: 'blue',
  },
};

const HeaderNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      {!isLoggedIn && (
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <NavLink
                to="/"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
              >
                Login
              </NavLink>
            </li>
            <li className={s.nav__item}>
              <NavLink
                to="/registration"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default HeaderNav;
