import React from 'react'
import { useAuth } from '../../AuthContext'

export default function Home() {
    const {currentUser, logOut}: any = useAuth()

    return (
        <div>

            <div className="flex justify-center w-full my-10">
                <form action="">
                    <input
                    type="text"
                    placeholder="todo"
                    className="w-80 outline-none p-1 rounded border-b border-purple-500 focus:border-purple-800 transition w-" 
                    />
                    <button type="button" className="mx-3">Add</button>
                </form>
                
            </div>

            <button onClick={() => logOut()}>
                Cerrar sesión
            </button>
        </div>
    )
}
