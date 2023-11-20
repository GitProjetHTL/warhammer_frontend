import styles from '../styles/Submit.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Submit =  () => {
  const form = useRef();

  const template_ID="template_7cyw7uf";
  const service_ID='service_n0rir4f';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_ID, template_ID, form.current, 'qOKR7yGmm8NZ6ny3b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Submit