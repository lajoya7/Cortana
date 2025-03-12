import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Card } from "primereact/card";

export default function TasaConversion() {
  // Datos de la gráfica
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Tasa de Conversión (%)",
        data: [5, 5, 6, 7, 6.67, 8],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  // Opciones estandarizadas para el gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#343a40",
          font: { size: 11 },
          boxWidth: 10,
          padding: 5,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Conversión: ${tooltipItem.raw}%`,
        },
        titleFont: { size: 11 },
        bodyFont: { size: 11 },
        padding: 6,
      },
    },
    scales: {
      x: {
        ticks: {
          font: { size: 10 },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: { size: 10 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        suggestedMin: 4,
        suggestedMax: 9,
      },
    },
  };

  // Calcular el promedio
  const promedio = (
    data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length
  ).toFixed(2);

  // Calcular el crecimiento (último mes vs. primer mes)
  const crecimiento = (
    ((data.datasets[0].data[data.datasets[0].data.length - 1] /
      data.datasets[0].data[0] -
      1) *
      100)
  ).toFixed(1);

  return (
    <div className="dashboard-card">
      <Card
        header={
          <div className="card-header">
            <h2 className="card-title">Tasa de Conversión (%)</h2>
          </div>
        }
        footer={
          <div className="card-footer">
            <div className="card-metric" style={{ backgroundColor: "rgba(0, 123, 255, 0.05)" }}>
              <div>
                <strong>Promedio:</strong> {promedio}%
              </div>
              <div>
                <strong>Crecimiento:</strong> {crecimiento}% {Number(crecimiento) > 0 ? "↑" : "↓"}
              </div>
            </div>
          </div>
        }
        className="card-content"
      >
        <p className="card-description">
          Evolución de la tasa de conversión de tus campañas de marketing.
        </p>

        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </Card>
    </div>
  );
}
