import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import usersFormIcon from "../../assets/images/undraw_medical_care_movn.svg";
import api from "../../services/api";
import "./styles.css";

export default function UsersForm() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("Masculino");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rua, setRua] = useState("");
  const [estado, setEstado] = useState("PB");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("Patos");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      dateofbirth,
      cpf,
      sexo,
      password,
      confirmPassword,
      endereco: {
        rua,
        estado,
        bairro,
        cidade,
      },
    };
    console.log(data)
    await api.post("/signup", data);
    alert("Cadastro realizado com sucesso.");
    history.push('/login');
  }

  return (
    <Container>
      <Row>
        <Col className="text-center" md={6}>
          <img id="user-form-icon" src={usersFormIcon} alt="Médicos" />
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="p-4">
            <h1 className="title-form">Faça seu cadastro</h1>
            <h4 className="subtitle-form mb-4">Venha cuidar da sua saúde</h4>

            <Form.Group>
              <Form.Label htmlFor="name">Nome completo</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="cpf">CPF</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="dateofbirth">
                  Data de nascimento
                </Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="dateofbirth"
                  value={dateofbirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="password">Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="confirmPassword">
                  Confirmar senha
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label htmlFor="rua">Rua</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor="sexo">Sexo</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                >
                  
                  <option>Masculino</option>
                  <option>Feminino</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="estado">Estado</Form.Label>
                <Form.Control
                  as="select"
                  name="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="pb">Paraíba</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label htmlFor="cidade">Cidade</Form.Label>
                <Form.Control
                  as="select"
                  name="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                >
                  <option value="patos">Patos</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor="bairro">Bairro</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Button
              block
              size="lg"
              variant="primary"
              className="mt-4"
              type="submit"
            >
              Finalizar cadastro
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
