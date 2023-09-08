import React from 'react';
import helper from '../../Assets/helper.png'
import './contacts.css'
export default function Contact() {
  return (
    <div>
 
        {/* <div className="container1">
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
          </div>  */}
          <div className='Cont-about-us'>
            <div className='Cont-container'>
              <div className='Cont-row'>
                <div className='Cont-flex'>
                  <h2>ABOUT US</h2>
                  <h3>Our Team's Story</h3>
                  <p>we are a team of passionate individuals who are dedicated to providing high-quality products and services to our customers. Our company was founded in 2020 with the mission of making peiople's live easier and more enjoyable. Since then, we have been working hard to develop innovative solutions that meet the needs of our customers.</p>
                  <div className='Cont-social-links'>

                  </div>
                  <a href='/' className='Cont-btn'>Learn More</a>
                </div> 
                <div className='Cont-flex cont-flex-img'>
                    <img src={helper} alt='helpr'></img>
                </div>
              </div>
            </div>
          </div>
          </div>
  )
}
