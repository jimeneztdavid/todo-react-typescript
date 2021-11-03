import React, { useContext, useEffect, useState } from 'react';
import { firebaseConfig } from './firebase';
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

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
    const [currentUser, setCurrentUser] = useState<object | false>()
    const [isLogged, setIsLogged] = useState<true | false>(false)

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setCurrentUser(user)
              setIsLogged(true)
            } else {
             setCurrentUser(false)
             setIsLogged(false);
            }
          });
    });

    const log = () => {
        setIsLogged(!isLogged)
        console.log('login212')
    }

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

    const login = (userauth: UserAuth) => {
        signInWithEmailAndPassword(auth, userauth.email, userauth.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setCurrentUser(user)
                setIsLogged(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setCurrentUser(false)
                setIsLogged(false)
            });
    }

    const logOut = () => {
        signOut(auth)
    }

    let value = {
        register,
        login,
        currentUser,
        isLogged,
        logOut,
        log
    }

    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    ) 
}
export default AuthProvider

