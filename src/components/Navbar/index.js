import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoMedclin from '../../assets/images/logo-medclin.svg';
import avatar from '../../assets/icons/user.svg';
import './styles.css';

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Link to="/"><img id="logo-medclin" src={logoMedclin} alt="Medclin brand" /></Link>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                    <NavDropdown title="Profissionais" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link to="/admin/dashboard">Visualizar todos</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#">Adicionar novo</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Agendamentos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Meus agendamentos</NavDropdown.Item>
                        <NavDropdown.Item href="#">Agendar consulta</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Consultas" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Consultas agendadas</NavDropdown.Item>
                        <NavDropdown.Item href="#">Marcar consulta</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Image id='avatar' src={avatar} roundedCircle />
                <NavDropdown title="Arthur" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/profile">Perfil</Link></NavDropdown.Item>
                </NavDropdown>
                <Button id="btn-logout" size="lg" variant="outline-danger">Logout</Button>
                <Link id="btn-login" to="/login" className="btn btn-lg btn-outline-success" >Login</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}