import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import logoMedclin from '../../assets/images/logo-medclin.svg';
import './styles.css';

export default function Login() {
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
                        <Form id="page-login-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Mantenha-me conectado" />
                            </Form.Group>
                            <Button block variant="primary" type="submit">Entrar</Button>
                        </Form>
                        <div id="mt-text">
                         Ainda não é cadastrado?
                        </div>
                        <Link className="link" to="/"> Cadastre-se</Link>

                        <Link className="link" to="/signup">Esqueci a senha</Link>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}