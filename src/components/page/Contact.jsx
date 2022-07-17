import Header from '../items/Header';
import Footer from '../items/Footer'
import './Contact.css';





import { useState, useEffect } from 'react'

import { collection, onSnapshot } from "firebase/firestore"; 
import {db} from '../connect_firebase/firebaseDatabase'






const Contact = () => {

  return(
    <div class="contact-page">

      <div>
        <Header/>
      </div>

      <div class="contact-box">

        <div class="contact">
          
          <h6> This is Contact page </h6>

        </div>
        
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default Contact;