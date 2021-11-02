import React, { useEffect } from 'react'
import { useAuth } from '../../AuthContext'

export default function Home() {
    const {currentUser, isLogged, logOut}: any = useAuth()

    useEffect(() => {
        console.log(currentUser)
        console.log(isLogged)
    })

    return (
        <div>
            <h1>Hello from home component</h1>
            <button onClick={() => logOut()}>
                Cerrar sesión
            </button>
        </div>
    )
}
