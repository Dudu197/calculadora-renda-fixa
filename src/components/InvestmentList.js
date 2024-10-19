import React from 'react';
import { ListGroup } from 'react-bootstrap';

function InvestmentList({ investments, selic, ipca }) {
  return (
    <div>
      <h4>Lista de Títulos</h4>
      <ListGroup>
        {investments.map((inv, index) => {
          // Atualiza a taxa de acordo com o tipo do título
          // inv.interestRate = inv.type === 'selic' ? selic * (inv.interestRate / 100) : inv.type === 'ipca' ? ipca + inv.interestRate : inv.interestRate;
          
          return (
            <ListGroup.Item key={index}>
              {inv.type.toUpperCase()} - Valor Inicial: R$ {inv.getFormattedInitialValue()}, Período: {inv.period} meses ({inv.period / 12} anos), Valor Final: R$ {inv.getFormattedFinalValue(selic, ipca)} {inv.applyTax ? '(com imposto)' : '(sem imposto)'}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default InvestmentList;
