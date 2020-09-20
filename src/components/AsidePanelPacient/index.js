import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function AsidePanelPacient(){
    return (
        <div className="aside-panel">
            <h3>Dashboard</h3>
            <ul className="aside-panel-list">
                <li className="aside-panel-color-items"><Link className="links" to="/paciente/perfil">Perfil</Link></li>
                <li className="aside-panel-color-items"><Link className="links" to="/paciente/comorbidades">Comorbidades</Link></li>
                <li className="aside-panel-color-items"><Link className="links" to="/paciente/consultas">Consultas</Link></li>
            </ul>
        </div>
    );
}