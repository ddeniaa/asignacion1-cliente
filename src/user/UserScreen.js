import React from 'react'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected'

export const UserScreen = () => {

    
    return (
        
        <div className="user_main-content animate__animated animate__fadeIn animate__faster">
            
            <Sidebar/>

            <main>
                <NothingSelected />
            </main>
        </div>
    )
}
