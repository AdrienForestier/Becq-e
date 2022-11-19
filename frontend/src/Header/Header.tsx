import React from 'react';
import './Header.css';
import myLogo1 from './tuco1.png'
import myLogo2 from './tuco2.png'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

console.log(myLogo2);
console.log(myLogo1);
export default class Header extends React.Component {
    render(){
        return(
            <Navbar className="navbar" bg="$blue-100">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-img1" alt="" src={myLogo1}/>{' '}
                        <img className="header-img2" alt="" src={myLogo2}/>{' '}

                    </Navbar.Brand>
                </Container>
            </Navbar>
            /*<div className='header'>
                <div className='mycontent-left'>
                    <img src={myLogo} alt='tucoenergie' className='header-img'/>
                    <div className='vertical-line'></div>
                </div>
            </div>
            /*<nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img src={myLogo} alt='tucoenergie' className='header-img'/>
                    <div className='vertical-line'></div>
                    test
                </a>
            </nav>*/
            )
    }
}
