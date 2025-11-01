import React from 'react'
import PageLayout from './PageLayout'
import SettingsSidebar from './SettingsSidebar'
import SettingsHeader from './SettingsHeader'
import SettingsSection from './SettingsSection'

const SettingsPage: React.FC = () => {
  return (
    <PageLayout sidebar={<SettingsSidebar />}>
      <div className="settings-wrapper">
        <SettingsHeader />

        <SettingsSection
          title="Aparência"
          items={
            <>
              <div className="settings-item">
                <div className="settings-icon">
                  <span className="material-symbols-outlined">contrast</span>
                </div>
                <div className="settings-text">
                  <p>Tema Escuro</p>
                  <p>Ative para uma experiência visual com menos brilho.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>

              <div className="settings-item">
                <div className="settings-icon">
                  <span className="material-symbols-outlined">translate</span>
                </div>
                <div className="settings-text">
                  <p>Idioma</p>
                  <p>Selecione o idioma de exibição do sistema.</p>
                </div>
                <select>
                  <option>Português (Brasil)</option>
                  <option>English (US)</option>
                  <option>Español</option>
                </select>
              </div>
            </>
          }
        />

        <SettingsSection
          title="Regional"
          items={
            <div className="settings-item">
              <div className="settings-icon">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="settings-text">
                <p>Fuso Horário</p>
                <p>Define o fuso horário para exibição de datas e horários.</p>
              </div>
              <select>
                <option>(GMT-03:00) Brasília</option>
                <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                <option>(GMT+01:00) Central European Time</option>
              </select>
            </div>
          }
        />

        <div className="settings-actions">
          <button className="cancel">Cancelar</button>
          <button className="save">Salvar Alterações</button>
        </div>
      </div>
    </PageLayout>
  )
}

export default SettingsPage
