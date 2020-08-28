import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

export default function Cards() {
    return (
        <div id="card">
            <div>
                <h1>Medclin</h1>
            </div>
            <div>
                <h2>Equipe de profissionais</h2>
                <h3>
                    Tratamento especializados feito por médicos capacitados.
                </h3>
                <Button size="lg" variant="primary">Agende sua consulta</Button>
            </div>
        </div>

    );
}