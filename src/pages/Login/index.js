import React from 'react';
import './styles.css';
import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom';
import logoMedclin  from '../../assets/images/logo-medclin.svg';

export default function Login() {
    return (
        <div id="page-login">

            <div id="page-login-content" className="container">

                <div className="page-login-logo">
                    <img src={logoMedclin} alt="Medclin"/>
                </div>
            </div>


            <div id="page-login-form">
                <h1>Bem-vindo a Medclin</h1>
                <p>Faça seu login</p>

                <form id="form-login">
                    <TextField className="input-login" type="email" label="E-mail" id="standard-basic" />
                    <TextField className="input-login" type="password" label="Senha" id="standard-basic" />
                    <Button className="btn" variant="contained" color="primary" >Entrar</Button>
                </form>

                <div id="login-signup">
                    Ainda não é cadastrado?
                    <Link className="link" to="/"> Cadastre-se</Link>
                </div>
                <Link className="link" to="/signup">Esqueci a senha</Link>

            </div>

        </div>
    );
}