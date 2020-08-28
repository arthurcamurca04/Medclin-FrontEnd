import React from 'react';
import Navigation from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';

export default function ProfissionalForm() {
    return (
        <>
            <Navigation />

            <Container id="cadastro" className="justify-content-center" fixed>
                <h1>Cadastro de profissionais</h1>

                <Form id="page-login-form">
                    <Form.Group controlId="formBasicInformation">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" placeholder="Informe um nome" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group controlId="ControlSelectProf">
                        <Form.Label>Profissão</Form.Label>
                        <Form.Control as="select">
                            <option>MÉDICO</option>
                            <option>FISIOTERAPEUTA</option>
                            <option>NUTRICIONISTA</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="ControlSelectEsp">
                        <Form.Label>Especialidades</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>CARDIOLOGISTA</option>
                            <option>PNEUMOLOGISTA</option>
                            <option>REUMATOLOGISTA</option>
                            <option>ORTOPEDISTA</option>
                            <option>OFTALMOLOGISTA</option>
                        </Form.Control>
                    </Form.Group>

                    <Container id="buttons">
                        <Row>
                            <Col>
                                <Button block size="lg" variant="success">Voltar</Button>
                            </Col>
                            <Col>
                                <Button block size="lg" variant="primary" type="submit">Salvar</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Container>
        </>
    );
}