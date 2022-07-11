import { auth } from '../connect_firebase/firebaseAuthentication'
import { signOut } from 'firebase/auth' 

import { useNavigate } from 'react-router-dom';


export default function Logout() {

    let navigate = useNavigate();

    const logout = async () => {
        auth.signOut();
        navigate('/');
    }

    return(
        <div>
            <button className="btn btn-danger" onClick={logout}> Log out </button>
        </div>
    )
}