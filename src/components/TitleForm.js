import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import InvestmentTitle from '../models/InvestmentTitle'; // Importa a classe

function TitleForm({ addInvestment }) {
  const [type, setType] = useState('selic');
  const [initialValue, setInitialValue] = useState(1000);
  const [interestRate, setInterestRate] = useState(10);
  const [period, setPeriod] = useState(12);
  const [applyTax, setApplyTax] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Cria uma nova instância da classe InvestmentTitle
    const newInvestment = new InvestmentTitle(type, initialValue, interestRate, period, applyTax);
    
    // Adiciona o título à lista de investimentos
    addInvestment(newInvestment);
    
    // Resetar valores do formulário
    // setInitialValue(1000);
    // setInterestRate(10);
    // setPeriod(12);
    // setApplyTax(true);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded">
      <h4>Adicionar Título</h4>
      <Form.Group className="mb-3">
        <Form.Label>Tipo de Título</Form.Label>
        <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="selic">Selic</option>
          <option value="ipca">IPCA</option>
          <option value="pre-fixado">Pré Fixado</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valor Inicial (R$)</Form.Label>
        <Form.Control
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Taxa de Juros (% ao ano) ou % Selic</Form.Label>
        <Form.Control
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Período (meses)</Form.Label>
        <Form.Control
          type="number"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="Calcular Imposto" 
          checked={applyTax} 
          onChange={(e) => setApplyTax(e.target.checked)} 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Adicionar
      </Button>
    </Form>
  );
}

export default TitleForm;
