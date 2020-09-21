import React from "react";
import { Link } from "react-router-dom";
import logoMedclin from "../../assets/images/logo-medclin.svg";
import avatar from "../../assets/images/undraw_profile_pic_ic5t.svg";
import "./styles.css";

export default function Navigation() {
  return (
    <>
      <header className="header">
        <div className="menu">
          <Link to="/">
            <img
              id="header-logo-medclin"
              src={logoMedclin}
              alt="Medclin brand"
            />
          </Link>
          <nav className="nav-container">
            <ul className="nav-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin/dashboard">Profissionais</Link>
              </li>
              <li>
                <Link to="/">Pacientes</Link>
              </li>
              <li>
                <Link to="/">Consultas</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-aside">
          <img className="avatar" src={avatar} alt="Avatar" />
          <Link id="link" to="/paciente/perfil">Meu perfil</Link>
          <button id="nav-btn-logout" type="button">
            Logout
          </button>
        </div>
      </header>
    </>
  );
}
