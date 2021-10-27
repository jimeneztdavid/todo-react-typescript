import React from 'react'

export default function Auth ({children}: {children: JSX.Element}) {
    return (
        <div>
            <div className="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <h1 className="font-bold text-center text-4xl text-yellow-500">Your<span className="text-blue-500">App</span></h1>

                {children}

                <div className="flex justify-center text-gray-500 text-sm">
                    <p>&copy;2021. All right reserved.</p>
                </div>
                </div>
            </div>
        </div>
    )
}
