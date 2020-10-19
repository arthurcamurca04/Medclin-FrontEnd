import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logoMedclin from "../../assets/images/logo-medclin.svg";
import avatar from "../../assets/images/undraw_profile_pic_ic5t.svg";
import "./styles.css";

export default function Navigation() {
  const history = useHistory();
  return (
      <Navbar expand="lg" bg="light">
        <Navbar.Brand>
          <Link to="/">
            <img
              id="header-logo-medclin"
              src={logoMedclin}
              alt="Medclin brand"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>

            <NavDropdown title="Agendamentos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Ver agendamentos</NavDropdown.Item>
              <NavDropdown.Item href="/">Agendar</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Consultas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Minhas consultas</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link id="link" href="/paciente/perfil">
              <img className="avatar" src={avatar} alt="Avatar" />
              Meu perfil
            </Nav.Link>
          </Nav>
          <Button
            className="m-4"
            variant="outline-danger"
            type="button"
            size="lg"
            onClick={() => {
              history.push("/login");
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    
  );
}
