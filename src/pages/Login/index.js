import React, { useState, useContext } from 'react';
import StoreContext from '../../Store/Context';
import  { useHistory } from 'react-router-dom'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logoMedclin from '../../assets/images/logo-medclin.svg';
import api from '../../services/api';
import './styles.css';

function initialState(){
    return{
        email: "",
        password: "",
    }
}

export default function Login() {

    const [values, setValues] = useState(initialState);
    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    function handleChange(event){
        const {value, name} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    function handleLogin(event){
        event.preventDefault();
        api.post('signin', values).then(response =>{
            const { data } = response;

            if(data){
                setToken(data.tokem);
                history.push('/');
            }
            console.log(data);
            setValues(initialState);
        }).catch(err => {
            setValues(initialState);
            console.error('Erro: ', err);
        })

    }

    return (
        <Container fluid="sm" id="container">
            <Row>
                <Col md>
                    <img src={logoMedclin} alt="Medclin" />
                </Col>


                <Col md>
                    <Card id="mt-card" style={{ padding: '2rem' }}>
                        <h1>Bem-vindo a Medclin</h1>
                        <p>Faça seu login</p>
                        <Form onSubmit={handleLogin} id="page-login-form">
                            <Form.Group >
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Digite seu email" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Digite sua senha" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Check type="checkbox" label="Mantenha-me conectado" />
                            </Form.Group>
                            <Button type="submit" size="lg" block variant="primary">Entrar</Button>
                        </Form>
                        <div id="mt-text">
                         Ainda não é cadastrado?
                        </div>
                        <Link className="link" to="/pacientes/cadastro"> Cadastre-se</Link>

                        <Link className="link" to="/">Esqueci a senha</Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}