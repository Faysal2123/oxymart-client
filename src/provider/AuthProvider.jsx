import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';


const AuthContext=createContext()
const AuthProvider = () => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleAuthProvider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log(createUser)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}></AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;