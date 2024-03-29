import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY' )
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='article contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>shwkt.hassan88@gmail.com</h5>
            <a href='mailto:shwkt.hassan88@gmail.com' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='article contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>shwkt_hassan</h5>
            <a href='https://m.me/ana.shwkt.hassan' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='article contact__option'>
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>+201558449599</h5>
            <a href='https://web.telegram.org/k/#-1814087653' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
