import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuditPage from './componentes-lara/AuditPage'
import SettingsPage from './componentes-lara/SettingsPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuditPage />} />
      <Route path="/configuracoes" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
