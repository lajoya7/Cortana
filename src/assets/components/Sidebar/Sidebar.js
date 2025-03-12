import { useState } from "react"
import { Sidebar } from "primereact/sidebar"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar1() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="card flex justify-content-center">
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} />

      <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-glass">
        <div className="sidebar-content">
          {/* Header del Sidebar */}
          <div className="sidebar-header">
            <div className="logo-container">
            <img 
            src="https://cdn.iconscout.com/icon/free/png-128/free-cortana-logo-icon-download-in-svg-png-gif-file-formats--microsoft-brand-logos-pack-icons-226411.png?f=webp" 
            alt="Logo Cortana" 
            className="logo-image" 
            />
              <h1>Cortana</h1>
            </div>
          </div>

          {/* Menú del Sidebar */}
          <div className="sidebar-menu">
            <ul>
              <li>
                <i className="pi pi-home"></i>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <i className="pi pi-user"></i>
                <Link to="/perfil">Perfil</Link>
              </li>
              <li>
                <i className="pi pi-comments"></i>
                <Link to="/mensajes">Mensajes</Link>
              </li>
              <li>
                <i className="pi pi-users"></i>
                <Link to="/recursos-humanos">Recursos Humanos</Link>
              </li>
              <li>
                <i className="pi pi-calculator"></i>
                <Link to="/contabilidad">Contabilidad</Link>
              </li>
              <li>
                <i className="pi pi-briefcase"></i>
                <Link to="/clientes">Clientes</Link>
              </li>
              <li>
                <i className="pi pi-cog"></i>
                <Link to="/ajustes">Ajustes</Link>
              </li>
              <li>
                <i className="pi pi-question-circle"></i>
                <Link to="/soporte">Soporte</Link>
              </li>
              <li>
                <i className="pi pi-shield"></i>
                <Link to="/privacidad">Privacidad</Link>
              </li>
            </ul>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

