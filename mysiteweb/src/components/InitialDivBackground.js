import React from 'react'
import BackgroundInitial from '../background/sfondoIniziale.jpg'
import NavBar from './navBar'

export default function backgroundDiv() {

    return (
        <div style={{
            backgroundImage: `url(${BackgroundInitial})`, height: '100vh', backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <NavBar/>
        </div>
    );


}