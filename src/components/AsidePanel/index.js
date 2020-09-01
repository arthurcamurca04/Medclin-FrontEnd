import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import './styles.css';

export default function AsidePanel(){
    return (
        <div className="aside-panel">
            <h3>Admin Dashboard</h3>

            <ListGroup as="ul">
                <ListGroup.Item className="aside-panel-color-items" as="li"><Link className="links" to="/patients">Pacientes</Link></ListGroup.Item>
                <ListGroup.Item className="aside-panel-color-items" as="li"><Link className="links" to="/doctors">Médicos</Link></ListGroup.Item>
                <ListGroup.Item className="aside-panel-color-items" as="li"><Link className="links" to="/appointments">Consultas</Link></ListGroup.Item>
            </ListGroup>
        </div>
    );
}