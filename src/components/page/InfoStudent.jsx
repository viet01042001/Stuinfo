import Header from '../items/Header';
import './InfoStudent.css';

import { Image } from 'react-bootstrap';
import getFirebaseDatabase from '../connect_firebase/firebaseDatabase'
import { ref, set, get, update, remove, child} from 'firebase/database'

function InfoStudent() {

  return(
    <div class="infostudent-page">
      
      <div>
        <Header/>
      </div>

      <div class="infostudent-box">
        
        <div class="infostudent">

          <div class="col-2 box-1">
          
          </div>

          <div class="box-2">
            
            <div class="col-8">
              
              <div class="col-4 infor-title">
                <h6> Họ và tên đệm: </h6>
                <h6> Tên: </h6>
                <h6> Giới tính: </h6>
                <h6> Ngày sinh: </h6>
                <h6> Quê quán: </h6>
                <h6> Hộ khẩu thường trú: </h6>
              </div>
              
              <div class="col-8">

              </div>
              
            </div>

            <div class="col-4">
                
                <div class="col-12 box-summary-1">
                    <Image class="logohcmut" src={require("../../images/LogoHCMUT.png")} alt="LogoHCMUT" height="200px" />
                </div>

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