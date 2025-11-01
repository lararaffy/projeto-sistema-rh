import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Filters from './Filters'
import InconsistenciesTable from './InconsistenciesTable'
import DetailsPanel from './DetailsPanel'

const AuditPage: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header />
        <Filters />
        <div className="audit-content">
          <InconsistenciesTable />
          <DetailsPanel />
        </div>
      </main>
    </div>
  )
}

export default AuditPage
