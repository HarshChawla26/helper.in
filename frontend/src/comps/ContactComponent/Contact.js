import React from 'react'
import './contacts.css'
export default function Contact() {
  return (
    <div>
 
        <div className="container1">
            <div className="form">
              <h2>Contact us</h2>
                <form>
                  <input type="text" name="name" placeholder="Your Name" required></input>
                  <input type="email" name="email" placeholder="Your Email" required></input>
                  <textarea name="message" placeholder="Your Message" required></textarea>
                  <button type="submit" className='button'>Send Message</button>
                </form>
            
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p><i className="fas fa-map-marker-alt"></i>123 Main St, Anytown, USA</p>
              <p><i className="fas fa-envelope"></i>info@example.com</p>
              <p><i className="fas fa-phone"></i>(123) 456-7890</p>
            </div>
          </div>
          </div> 

    </div>
  )
}
