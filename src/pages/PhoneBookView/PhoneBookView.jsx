import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from './PhoneBookView.module.css';

const PhoneBookView = () => {
  return (
    <div className={s.container}>
      <h1 className={s.first_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.second_title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default PhoneBookView;
