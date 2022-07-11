import React from "react"
import './About.css';

import Login from "../authentication/Login"

function About() {
  return (
    <div class="about"> 
      
      <div class="about-component">
        
        <div class="row">
          
          <div class="col-6 about-intro">
            
            <div class="row about-welcome">
              <h1> Welcome to StuInfo  </h1>
            </div>

            <div class="row about-summary">
              <h4> Manage student's information </h4>
            </div>
            
            <div class="row about-information">
              <h6> To manage information more better and convenient, we have been creating this website. Enjoy it ! </h6>
            </div>
            
          </div>
          
          <div class="col-6">

            <Login/>

          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default About;