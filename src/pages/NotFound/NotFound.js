import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function NotFound(){
    return (

        <div className="container">
            <h1>Desculpe, está página não foi encontrada</h1>
            <Link className="btn btn-primary btn-lg" to="/">Voltar para página inicial</Link>
        </div>
    );

}