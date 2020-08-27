import React from 'react';
import Navigation from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../../components/Cards';
import landing from '../../assets/images/landing.svg';
import './styles.css';

export default function Dashboard() {
    return (
        <>
       <Navigation/>

       <main>
           
            <Container>
                <Row className="justify-content-md-center">
                    <Col >
                        <Cards/>
                    </Col>
                    <Col>
                        <img id="landing" src={landing} alt="Pacientes"/>
                    </Col>
                </Row>
            </Container>
       </main>
       </>
    );
}