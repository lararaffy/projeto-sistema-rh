import React from 'react'

const InconsistenciesTable: React.FC = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Inconsistências Encontradas</h2>
        <div className="table-actions">
          <button className="approve">Aprovar Selecionados</button>
          <button className="reject">Reprovar</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Colaborador</th>
            <th>Data</th>
            <th>Inconsistência</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              nome: 'Beatriz Costa',
              data: '15/11/2023',
              tipo: 'Atraso (22 min)',
              status: 'Pendente',
              statusClass: 'pendente',
              checked: true,
            },
            {
              nome: 'Carlos Pereira',
              data: '14/11/2023',
              tipo: 'Falta',
              status: 'Falta não justificada',
              statusClass: 'reprovado',
            },
            {
              nome: 'Daniel Almeida',
              data: '13/11/2023',
              tipo: 'Hora Extra (45 min)',
              status: 'Aprovado',
              statusClass: 'aprovado',
            },
            {
              nome: 'Mariana Lima',
              data: '12/11/2023',
              tipo: 'Atraso (10 min)',
              status: 'Pendente',
              statusClass: 'pendente',
            },
          ].map(({ nome, data, tipo, status, statusClass, checked }, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" defaultChecked={checked} />
              </td>
              <td>{nome}</td>
              <td>{data}</td>
              <td>{tipo}</td>
              <td>
                <span className={`status ${statusClass}`}>{status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InconsistenciesTable
