import "./Dashboard.css"
import Cliente1 from "./Kpi/Cliente"
import TasaConversion from "./Kpi/Kpi2"
import RotacionEmpleados from "./Kpi/Kpi3"
import EngagementKPI from "./Kpi/Kpi4"
import { LayoutGrid, BarChart3, Users, Activity } from "lucide-react"

export default function Dashboard1() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Panel de Control</h1>
        <div className="dashboard-breadcrumb">
          <span>Inicio</span> &gt; <span className="active">Dashboard</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card" data-aos="fade-up" data-aos-delay="100">
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon">
                <Users size={20} />
              </div>
              <h3 className="card-title">Clientes</h3>
            </div>
            <div className="chart-container">
              <Cliente1 />
            </div>
            <div className="card-footer">
              <div className="card-metric">
                <span>Total clientes</span>
                <span className="metric-value">1,248</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon">
                <BarChart3 size={20} />
              </div>
              <h3 className="card-title">Tasa de Conversión</h3>
            </div>
            <div className="chart-container">
              <TasaConversion />
            </div>
            <div className="card-footer">
              <div className="card-metric">
                <span>Conversión actual</span>
                <span className="metric-value">53.94%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card" data-aos="fade-up" data-aos-delay="300">
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon">
                <Activity size={20} />
              </div>
              <h3 className="card-title">Rotación de Empleados</h3>
            </div>
            <div className="chart-container">
              <RotacionEmpleados />
            </div>
            <div className="card-footer">
              <div className="card-metric">
                <span>Tasa mensual</span>
                <span className="metric-value">4.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card" data-aos="fade-up" data-aos-delay="400">
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon">
                <LayoutGrid size={20} />
              </div>
              <h3 className="card-title">Engagement</h3>
            </div>
            <div className="chart-container">
              <EngagementKPI />
            </div>
            <div className="card-footer">
              <div className="card-metric">
                <span>Promedio</span>
                <span className="metric-value">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
