import React, { useState } from 'react';
import TitleForm from './components/TitleForm';
import InvestmentList from './components/InvestmentList';
import Chart from './components/Chart';
import { Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  const [selicValue, setSelicValue] = useState(10.75); // Valor SELIC inicial
  const [ipcaValue, setIpcaValue] = useState(4.42);   // Valor IPCA inicial
  const [investments, setInvestments] = useState([]); // Lista de títulos cadastrados

  const handleAddInvestment = (newInvestment) => {
    setInvestments([...investments, newInvestment]);
  };

  return (
    <Container>
      <h1 className="text-center my-4">Comparador de Títulos de Renda Fixa</h1>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Valor Selic (%)</Form.Label>
            <Form.Control
              type="number"
              value={selicValue}
              onChange={(e) => setSelicValue(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Valor IPCA (%)</Form.Label>
            <Form.Control
              type="number"
              value={ipcaValue}
              onChange={(e) => setIpcaValue(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <TitleForm addInvestment={handleAddInvestment} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <InvestmentList investments={investments} selic={selicValue} ipca={ipcaValue} />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Chart investments={investments} selic={selicValue} ipca={ipcaValue} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
