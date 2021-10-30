import React, { useContext } from 'react';
import { firebaseConfig } from './firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeApp(firebaseConfig);

const Auth = React.createContext({})

export const useAuth = () => {
    return useContext(Auth)
}

interface UserAuth {
    email: string,
    password: string
}

const AuthProvider = ({children}: {children: JSX.Element}) => {
    const auth = getAuth();

    const register = (userauth: UserAuth) => {
        createUserWithEmailAndPassword(auth, userauth.email, userauth.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorMessage);
                // ..
            });
        }

    let value = {
        currentUser: 'David',
        register
    }

    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    ) 
}
export default AuthProvider

