import React from 'react'
import { Link } from 'react-router-dom'

const SettingsSidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="profile">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcWScERFnWKv-GjBdtBHMhvaHaSzHEkUCB5edwc7BmrPLexJGxYh6OUi4KgUn-YbIpg1HW2flvRmL3aNdTJyeKwFdUbaulCAnXK-ds3vvYELjSFXf6eoTR0R_ydfPnITeIlv9elQ_FH3tUQJ-Y_z2l3K_hD1gqSS5NIhjr8cNju2pJI891fd5bfrQq0Y4hCOiFIQutpzmlA-h7Z5oN3IIU4eDdgVUdIzjga5R6u5kvP0mWeEDUpX-W18Fh0Zg0OxFJAKUZ0Czvhgk"
            alt="Admin RH"
          />
          <div>
            <h1>Admin RH</h1>
            <p>admin@empresa.com</p>
          </div>
        </div>

        <nav>
          <Link to="/configuracoes" className="nav-link active">
            <span className="material-symbols-outlined fill">tune</span>
            Preferências
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">notifications</span>
            Notificações
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">integration_instructions</span>
            Integrações
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">shield</span>
            Segurança
          </Link>
          <Link to="/" className="nav-link">
            <span className="material-symbols-outlined">schedule</span>
            Auditoria de Ponto
          </Link>
        </nav>
      </div>

      <div>
        <Link to="#" className="nav-link">
          <span className="material-symbols-outlined">help</span>
          Ajuda
        </Link>
        <button className="exit-button">
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}

export default SettingsSidebar
