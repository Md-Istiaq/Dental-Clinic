import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../_firebase.init';

const RequireAdmin = ({children}) => {
    const [ user, loading] = useAuthState(auth)
    const [admin , adminLoading] = useAdmin(user)
    const location = useLocation()
    if(adminLoading || loading){
        return <button class="btn btn-square loading">Loading</button>
    }
    if(!admin || !user){
        signOut(auth)
       return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default RequireAdmin;