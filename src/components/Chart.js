import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';

function generateChartData(investments, selic, ipca) {
  return investments.map((inv, index) => ({
    name: `Título ${index + 1}`,
    valorFinal: inv.calculateFinalValue(selic, ipca),
  }));
}

function calculateFinalValue(initialValue, interestRate, period) {
  const monthlyRate = interestRate / 12 / 100;
  return initialValue * Math.pow(1 + monthlyRate, period);
}

function Chart({ investments, selic, ipca }) {
  const data = generateChartData(investments, selic, ipca);
  
  return (
    <Card className="p-3">
      <h4>Gráfico Comparativo</h4>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valorFinal" fill="#8884d8" />
      </BarChart>
    </Card>
  );
}

export default Chart;
