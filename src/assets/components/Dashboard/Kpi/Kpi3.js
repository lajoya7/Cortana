import { Card } from "primereact/card"
import "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function RotacionEmpleados() {
  // Datos de la gráfica (Tasa de Rotación de Empleados)
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Tasa de Rotación (%)",
        data: [5, 5.71, 6.36, 3.48, 6.67, 8],
        borderColor: "#dc3545",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  }

  // Opciones estandarizadas para el gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 10,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 11,
        },
        bodyFont: {
          size: 11,
        },
        padding: 6,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  }

  // Calcular el promedio
  const promedio = (data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length).toFixed(2)
  // Obtener el último valor
  const ultimoMes = data.datasets[0].data[data.datasets[0].data.length - 1]

  return (
    <div className="dashboard-card">
      <Card
        header={
          <div className="card-header">
            <h2 className="card-title">Tasa de Rotación de Empleados</h2>
          </div>
        }
        footer={
          <div className="card-footer">
            <div className="card-metric" style={{ backgroundColor: "rgba(220, 53, 69, 0.05)" }}>
              <div>
                <strong>Promedio:</strong> {promedio}%
              </div>
              <div>
                <strong>Último mes:</strong> {ultimoMes}%
              </div>
            </div>
          </div>
        }
        className="card-content"
      >
        <p className="card-description">
          Porcentaje de empleados que dejaron la empresa. Una tasa alta puede indicar problemas de retención.
        </p>

        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </Card>
    </div>
  )
}