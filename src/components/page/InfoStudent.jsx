import Header from '../items/Header'
import Footer from '../items/Footer'
import './InfoStudent.css';

import {useState} from 'react'

import InfoForm from '../items/InfoForm'

import ProfileSearch from '../items/ProfileSearch'

function InfoStudent() {

    const [ProfileShow, setProfileShow] = useState({});

  return(
    <div class="infostudent-page">
      
      <div>
        <Header/>
      </div>

      <div class="infostudent-box">
        
        <div class="infostudent">

          <div class="box-1 col-3 search-manage-box">
            <ProfileSearch getProfile={setProfileShow}/>
          </div>

          <div class="box-2 info-manage-box">
            
            <div class="col-12 infoform">
              
              <InfoForm setProfile={ProfileShow} />
              
            </div>
            
          </div>
          
        </div>
        
      </div>   

      <div>
        <Footer/>
      </div>   
      
    </div>
  );
}

export default InfoStudent;