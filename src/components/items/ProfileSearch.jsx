import './ProfileSearch.css'
import { useState, useEffect } from 'react'

import { collection, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore"; 
import {db} from '../connect_firebase/firebaseDatabase'

import './ProfileSearch.css';

import ProfileCard from './ProfileCard'

export default function ProfileSearch(props) {

    const Default = [
        {
            name: "",
            id: ""
        }
    ];
    const [ListProfile, setListProfile] = useState(Default);
    const [SearchKey, setSearchKey] = useState('');
    const [SearchResult, setSearchResult] = useState(ListProfile);

    useEffect(
        () => 
            onSnapshot(collection(db, "StuInfoMain"), 
                (snapshot) => {
                    setListProfile(snapshot.docs.map(doc => doc.data()));
                }
            ), 
        [])

    useEffect(
        () => {
            const results = ListProfile.filter(
                (item) => item.id.toLowerCase().includes(SearchKey)
            );        
            setSearchResult(results);
    }, [SearchKey])

    useEffect(
        () => {
            const results = ListProfile.filter(
                (item) => item.name.toLowerCase().includes(SearchKey)
            );        
            setSearchResult(results);
    }, [SearchKey])

    
    return(
        <div className="row">

            <div className="row profile-search">
                <input type="text" class="form-control color-search"  placeholder="Tìm kiếm" onChange={(e) => setSearchKey(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <hr/>
            
            <div className="row profile-result">

                <ul> 
                    {SearchResult.map(profile => (
                        <li>
                            <button type="button" class="btn btn-outline-info btn-block" onClick={props.get(profile)}> <ProfileCard student={profile} /> </button>
                        </li>
                    ))} 
                </ul>

            </div>

        </div>
    );
}