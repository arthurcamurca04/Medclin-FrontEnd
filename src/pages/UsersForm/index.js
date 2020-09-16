import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import usersFormIcon from '../../assets/images/undraw_medical_care_movn.svg';
import './styles.css';

export default function UsersForm(){
    return(
        <Container className="form-user-container">
            <Row className="form-user-container-row">
                <Col className="mr-4">
                    <img id="user-form-icon" src={usersFormIcon} alt="Médicos"/>
                </Col>
                <Col className="mt-4 ml-4">
                    <h1 className="title-form" >Faça seu cadastro</h1>
                    <h4 className="subtitle-form" >Venha cuidar da sua saúde</h4>
        
                    <Form className="mt-4">
                        <Form.Group controlId="formForName">
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control required type="text"/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formForCpf">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control required type="text"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formForBirthday">
                                <Form.Label>Data de nascimento</Form.Label>
                                <Form.Control required type="date"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formForEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email"/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formForPass">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control required type="password"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formForConfirmPas">
                                <Form.Label>Confirmar a senha</Form.Label>
                                <Form.Control required type="password"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formForAddress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control required type="text"/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formForState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control as="select">
                                    <option value="paraiba">Paraíba</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formForCity">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control as="select">
                                    <option value="patos">Patos</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formForNeighbor">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control required type="text"/>
                            </Form.Group>
                        </Form.Row>

                        <Button 
                            block 
                            size="lg" 
                            variant="primary"
                            className="mt-4"
                            type="submit"
                        >Finalizar cadastro</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}