import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../_firebase.init';

const RequirAuth = ({children}) => {
    const [ user, loading] = useAuthState(auth)
    const location = useLocation()
    if(!user){
       return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    if(loading){
        return <button class="btn btn-square loading">Loading</button>
    }
    return children;
};

export default RequirAuth;