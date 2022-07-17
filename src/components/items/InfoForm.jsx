import { useState } from 'react'

import {Image} from 'react-bootstrap'

import './InfoForm.css'

import Vietnamese from '../language/Vietnamese'

export default function InfoForm(props) {

    const   [Name, setName] =             useState(props.setProfile.name)
    const   [ID, setID] =                 useState(props.setProfile.id)
    const   [Sex, setSex] =               useState(props.setProfile.sex)
    const   [DoB, setDoB] =               useState(props.setProfile.dob)
    const   [Hometown, setHometown] =     useState(props.setProfile.hometown)

    return (
        <div class="infoform-page">

            <div className="row">

                <div class="info-form col-8">
                
                    <div className="row">
                        <div className="col-4 info-title">
                            <h6> {Vietnamese.InfoForm.name} </h6>
                        </div>

                        <div className="col-8 info-value">
                            <div className="input-group">
                                <input type="text" class="form-control" value={props.setProfile.name} onChange={(e) => setName(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    
                    </div>

                    <div className="row">
                        <div className="col-4 info-title">
                            <h6> {Vietnamese.InfoForm.id} </h6>
                        </div>

                        <div className="col-8 info-value">
                            <div className="input-group">
                                <input type="text" class="form-control" value={props.setProfile.id} onChange={(e) => setID(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    
                    </div>

                    <div className="row">
                        <div className="col-4 info-title">
                            <h6> {Vietnamese.InfoForm.sex} </h6>
                        </div>

                        <div className="col-8 info-value">
                            <div className="input-group">
                                <input type="text" class="form-control" value={props.setProfile.sex} onChange={(e) => setSex(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 info-title">
                            <h6> {Vietnamese.InfoForm.dob} </h6>
                        </div>

                        <div className="col-8 info-value">
                            <div className="input-group">
                                <input type="text" class="form-control" value={props.setProfile.dob} onChange={(e) => setDoB(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 info-title">
                            <h6> {Vietnamese.InfoForm.hometown} </h6>
                        </div>

                        <div className="col-8 info-value">
                            <div className="input-group">
                                <input type="text" class="form-control" value={props.setProfile.hometown} onChange={(e) => setHometown(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-4 box-summary">
                    
                    <div className="col-12 box-summary-1">
                        <Image class="logohcmut" src={require("../../images/viet.jpg")} alt="LogoHCMUT" />
                    </div>
                    

                    <div class="col-12 box-summary-2">
                        Part 2
                    </div>

                    <div className="button-manage">

                        <div className="button-manage-space">
                            <button type="button" class="btn btn-outline-danger"> Delete </button>
                        </div>

                        <div className="button-manage-space">
                            <button type="button" class="btn btn-outline-primary"> Update </button>
                        </div>
                    
                    </div>
                </div>

            </div>


            

        </div>
        
    )
}