import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap";
import useWebAnimations from "@wellyshen/use-web-animations";
// import './App.css'

function Header() {

    const animateTiming = {
        duration:2000,
        iterations:Infinity,
        easing: 'ease-in-out',
        direction:'alternate'
    }

    const Heading = useWebAnimations({
        keyframes:{
            color:['red','orange','green'],
            transform:['translate(40px,0)']
        },
        timing:animateTiming
    })

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='main-Navbar' fixed='top'>
  
    <Nav className="mx-auto">
      <Nav.Link ref={Heading.ref} className='navbar' >Switch experience</Nav.Link>
     
    </Nav>
</Navbar>
        </div>
    )
}

export default Header
