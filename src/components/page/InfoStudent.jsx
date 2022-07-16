import Header from '../items/Header';
import './InfoStudent.css';

import {useState} from 'react'

import InfoForm from '../items/InfoForm'

import ProfileSearch from '../items/ProfileSearch'

function InfoStudent() {

    const [ProfileShow, setProfileShow] = useState([]);
    
  return(
    <div class="infostudent-page">
      
      <div>
        <Header/>
      </div>

      <div class="infostudent-box">
        
        <div class="infostudent">

          <div class="box-1 col-3">
            <ProfileSearch get={setProfileShow}/>
          </div>

          <div class="box-2">
            
            <div class="col-8 infoform">
              
              <InfoForm set={ProfileShow} />
              
            </div>

            <div class="col-4">
                {/*
                <div class="col-12 box-summary-1">
                    <Image class="logohcmut" src={require("../../images/LogoHCMUT.png")} alt="LogoHCMUT" height="200px" />
                </div>
                */}
                

                <div class="col-12 box-summary-2">
                Part 2
                </div>
            </div>
          </div>
          
        </div>
        
      </div>      
      
    </div>
  );
}

export default InfoStudent;