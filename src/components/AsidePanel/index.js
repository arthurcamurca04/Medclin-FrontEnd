import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function AsidePanel(){
    return (
        <div className="aside-panel">
            <h3>Admin Dashboard</h3>
            <ul className="aside-panel-list">
                <li className="aside-panel-color-items"><Link className="links" to="/admin/pacientes">Pacientes</Link></li>
                <li className="aside-panel-color-items"><Link className="links" to="/admin/medicos">Médicos</Link></li>
                <li className="aside-panel-color-items"><Link className="links" to="/admin/consultas">Consultas</Link></li>
            </ul>
        </div>
    );
}