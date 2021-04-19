import React from 'react'
import BackgroundInitial from '../background/sfondoIniziale.jpg'
import LinkLogo from "./LinkLogo"
import NavBar from './navBar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function backgroundDiv() {




    return (
        <>
            <div style={{
                backgroundImage: `url(${BackgroundInitial})`, height: '100vh', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                textAlign: 'center'
            }}>
                <NavBar />
                <h1 style={{ marginTop: '30px' }}>Valerio boi</h1>

                <br></br>

                <p>

                    Sviluppatore informatico presso Exolab S.R.L, in ambito Java EE, consulente Sogei.
                Prima di essere un lavoro è una grande passione che porto avanti giorno dopo giorno con detizione e impegno.<br /><br />

                “The best programs are written so that computing machines
                can perform them quickly and so that human beings can <br />
                understand them clearly. A programmer is ideally an essayist
                who works with traditional aesthetic and literary forms as well <br />
                as mathematical concepts, to communicate the way that an
                algorithm works and to convince a reader that the results will be correct.” <br />
                ― Donald E. Knuth


            </p>

                <div style={{
                    position: 'fixed',
                    left: '50%',
                    bottom: '-30px',
                    transform: 'translate(-50%, -50%)',
                    margin: '0 auto'
                }}>

                    <LinkLogo />

                </div>
            </div>
        </>
    );


}