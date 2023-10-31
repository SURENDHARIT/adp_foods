
import {Navigate} from 'react-router-dom';
// import Loader from '../Layouts/Loader';
import {useEffect, useState } from 'react';

export default function ProtectedRoute ({children}) {

    const [isAuthenticated,setIsAuthenticated] = useState()

    useEffect(()=>{
        setIsAuthenticated(localStorage.getItem('isLoggedIn'));
        console.log(isAuthenticated)
    },[]
    )

    if(!isAuthenticated) {
        console.log("hellp")

        return <Navigate to="/login" />
    }

    if(isAuthenticated) {
        console.log("hellp")

        return children;
    }
   
}