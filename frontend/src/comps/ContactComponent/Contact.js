import React from 'react'
import './contacts.css'
export default function Contact() {
  return (
    <div>
 
        <div class="container1">
            <div class="form">
              <h2>Contact Us</h2>
                <form>
                  <input type="text" name="name" placeholder="Your Name" required></input>
                  <input type="email" name="email" placeholder="Your Email" required></input>
                  <textarea name="message" placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
            
            <div class="contact-info">
              <h2>Contact Information</h2>
              <p><i class="fas fa-map-marker-alt"></i>123 Main St, Anytown, USA</p>
              <p><i class="fas fa-envelope"></i>info@example.com</p>
              <p><i class="fas fa-phone"></i>(123) 456-7890</p>
            </div>
          </div>
          </div> 

    </div>
  )
}
