import React from 'react';
import Navigation from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AsidePanel from '../../components/AsidePanel';
import avatarIcon from '../../assets/icons/user.svg';
import './styles.css';

export default function ProfissionalForm() {
    return (
        <>
            <Navigation />

            <Container id="cadastro" fluid className="mt-4">

                <Row>
                    <Col md={3}>
                        <AsidePanel />
                    </Col>

                    <Col md={9}>

                        <div className="container-title">
                            <h1>Profissionais</h1>
                        </div>
                        <Form>
                            <Container id="container-cadastro" className="bg-white p-4">
                                <Row>
                                    <Col md={1}>
                                        <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicInformation">
                                                    <Form.Label>Nome</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicInformation">
                                                    <Form.Label>Sobrenome</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col md={5}>
                                        <Row>

                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>ID. PROF.</Form.Label>
                                                    <Form.Control readOnly type="text"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group controlId="ControlSelectProf">
                                                    <Form.Label>Profissão</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>MÉDICO</option>
                                                        <option>FISIOTERAPEUTA</option>
                                                        <option>NUTRICIONISTA</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>

                                            <Col>
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
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                                <h3>Dados pessoais</h3>
                                <Row>
                                    <Col md={8}>
                                        <Row>
                                            <Col>
                                                <Form.Label>Sexo</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Masculino</option>
                                                    <option>Feminino</option>
                                                </Form.Control>
                                            </Col>
                                            <Col>
                                                <Form.Label>Data de Nascimento</Form.Label>
                                                <Form.Control type="date" />
                                            </Col>
                                            <Col>
                                                <Form.Label>Telefone</Form.Label>
                                                <Form.Control type="text" /></Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col md={3}>
                                                <Form.Label>CPF</Form.Label>
                                                <Form.Control readOnly type="text" />
                                            </Col>
                                            <Col md={3}>
                                                <Form.Label>Estado civil</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Solteiro(a)</option>
                                                    <option>Casado(a)</option>
                                                    <option>Divórciado(a)</option>
                                                    <option>Viúvo(a)</option>
                                                </Form.Control>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>E-mail</Form.Label>
                                                <Form.Control readOnly type="email" />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={4}></Col>

                                </Row>

                                <h3 className="mt-4" >Endereço</h3>
                                <Col md={8}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Label>Rua</Form.Label>
                                            <Form.Control type="text" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>nº</Form.Label>
                                            <Form.Control min={0} type="number">
                                            </Form.Control>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label>Bairro</Form.Label>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Label>País</Form.Label>
                                            <Form.Control as="select">
                                                <option>Argentina</option>
                                                <option>Brasil</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label>Estado</Form.Label>
                                            <Form.Control as="select">
                                                <option>Paraíba</option>
                                                <option>Pernambuco</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label>Cidade</Form.Label>
                                            <Form.Control as="select">
                                                <option>Patos</option>
                                                <option>Piancó</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}></Col>

                            </Container>
                            <Row className="d-flex justify-content-end mt-2 mr-2 mb-4">
                                <Col md={1}>
                                    <Button size="lg" type="button" variant="danger">Excluir</Button>
                                </Col>
                                <Col md={1}>
                                    <Button size="lg" type="submit" variant="primary">Salvar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}