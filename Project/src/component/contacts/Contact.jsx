import React from 'react'
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import x from "../assets/x.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_beb7g36', 'template_0yaldjq', form.current, {
            publicKey: 'bCbF6gSAMZqX6pSSv',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            //   alert("Email sent successfully")
              e.target.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactpage'>
        <div id="contact">
            <h1 className="contactpagetitle">Contact <span>Me</span></h1>
            <span className="contactdesc">
                Please fill out the form below to discuss anywork opportunities.
            </span>
            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Enter your name' name='from_name' />
                <input type="email" className="email" placeholder='Enter your email' name='from_email'/>
                <textarea name="message" id="" rows="5" placeholder='Enter your message' className='msg'></textarea>
                <button type='submit' value="send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={linkedin} alt="Linkedin" className="link" />
                    <img src={instagram} alt="Instagram" className="link" />
                    <img src={x} alt="X" className="link" />
                </div>
            </form>

        </div>
      
    </section>
  )
}

export default Contact
