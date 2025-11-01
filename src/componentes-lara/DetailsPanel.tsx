import React from 'react'

const DetailsPanel: React.FC = () => {
  return (
    <aside className="details-panel">
      <div className="panel-header">
        <h3>Detalhes da Ocorrência</h3>
        <button>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="panel-content">
        <div className="profile">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkS4Omlf-CZtZ1omtiIULh89lgYkNktWNMM4cuCPeoFM60VdfRQnQt3F6InlUE7LD1pasxtSTGiN5I9cvQJteWVtR4v5K5srCNH6q9VxHpBNfOO1KZM5JT64LlIGkzpgLyljH2HehsIlrbz5gR_YSZU5HurRJF00g268emNnWlpNjEVMCsGaoDpUBgjUigA2WcZy5cMqdp3AVGs5m4q1l1xrbZYbPHeI_Nb0-q9Vta7uxkfTsnvzAumTpxE4syzswYd68iWMhM5bk" width={70}
            alt="Beatriz Costa"
          />
          <div>
            <p>Beatriz Costa</p>
            <p>#1024</p>
          </div>
        </div>

        <div className="details">
          <p><strong>Data:</strong> 15/11/2023</p>
          <p><strong>Horário Esperado:</strong> 09:00</p>
          <p><strong>Horário Registrado:</strong> <span className="text-red">09:22</span></p>
          <p><strong>Inconsistência:</strong> Atraso (22 min)</p>
        </div>

        <div className="form">
          <label htmlFor="action-select">Ação a ser tomada</label>
          <select id="action-select">
            <option>Abonar Atraso</option>
            <option>Justificar Falta</option>
            <option>Aprovar Hora Extra</option>
            <option>Reprovar</option>
          </select>

          <label htmlFor="justification">Justificativa / Observações</label>
          <textarea
            id="justification"
            rows={4}
            placeholder="Ex: Atestado médico, problema no transporte..."
          />
        </div>

        <div className="form-actions">
          <button className="cancel">Cancelar</button>
          <button className="save">Salvar Alterações</button>
        </div>
      </div>
    </aside>
  )
}

export default DetailsPanel
