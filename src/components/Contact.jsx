import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9nuuoy3',
      'template_lb5cor7', form.current, {
        publicKey: 'gAKg00mc5SWT6iVhT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>

  <section class="contact_section  long_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <div class="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" class="message-box" placeholder="Message" />
              </div>
              <div class="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div class="col-md-6">
          <div class="map_container">
            <div class="map">
                
              <div id="googleMap"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
    
  </>

  );
}
// };
// const Navbar=()=>{
//     return(
//    <>
//    <form id="contact-form"  method="POST">
//     <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" className="form-control" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="message">Message</label>
//         <textarea className="form-control" rows="5"></textarea>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//    </>
//     )
// }

export default Contact;