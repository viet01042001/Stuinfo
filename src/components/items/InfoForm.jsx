import { useState } from 'react'

import './InfoForm.css'

import Vietnamese from '../language/Vietnamese'

export default function InfoForm(props) {

    const [Name, setName] = useState(props.set.name)
    const [Sex, setSex] = useState("Nam")
    const [DoB, setDoB] = useState("01/04/2001")
    const [Hometown, setHometown] = useState("Bắc Ninh")

    return (
        <div class="row info-form">
            
            <div className="row">
                <div className="col-4 info-title">
                     <h6> {Vietnamese.InfoForm.name} </h6>
                </div>

                <div className="col-8 info-value">
                    <div className="input-group">
                        <input type="text" class="form-control" value={Name} onChange={(e) => setName(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            
            </div>

            <div className="row">
                <div className="col-4 info-title">
                    <h6> {Vietnamese.InfoForm.sex} </h6>
                </div>

                <div className="col-8 info-value">
                    <div className="input-group">
                        <input type="text" class="form-control" value={Sex} onChange={(e) => setSex(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4 info-title">
                    <h6> {Vietnamese.InfoForm.dob} </h6>
                </div>

                <div className="col-8 info-value">
                    <div className="input-group">
                        <input type="text" class="form-control" value={DoB} onChange={(e) => setDoB(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4 info-title">
                    <h6> {Vietnamese.InfoForm.hometown} </h6>
                </div>

                <div className="col-8 info-value">
                    <div className="input-group">
                        <input type="text" class="form-control" value={Hometown} onChange={(e) => setHometown(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>

        </div>
    )
}