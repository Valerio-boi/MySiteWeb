import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Clock from './clock'
import Form from 'react-bootstrap/Form'

export default function nav() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Clock />
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );

}