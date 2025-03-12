import "chart.js/auto";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";

export default function EngagementKPI() {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Engagement (%)",
        data: [5, 5.24, 5.45, 4.74, 5.42, 5.6],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
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
          label: (tooltipItem) => `Engagement: ${tooltipItem.raw}%`,
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
        suggestedMax: 6,
      },
    },
  };

  // Calcular el promedio
  const promedio = (
    data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length
  ).toFixed(2);

  // Determinar la tendencia
  const tendencia =
    data.datasets[0].data[data.datasets[0].data.length - 1] >
    data.datasets[0].data[0]
      ? "↑"
      : "↓";

  return (
    <div className="dashboard-card">
      <Card
        header={
          <div className="card-header">
            <h2 className="card-title">Engagement en Redes Sociales</h2>
          </div>
        }
        footer={
          <div className="card-footer">
            <div
              className="card-metric"
              style={{ backgroundColor: "rgba(40, 167, 69, 0.05)" }}
            >
              <div>
                <strong>Promedio:</strong> {promedio}%
              </div>
              <div>
                <strong>Tendencia:</strong> {tendencia}
              </div>
            </div>
          </div>
        }
        className="card-content"
      >
        <p className="card-description">
          Porcentaje de engagement de nuestra audiencia en redes sociales.
        </p>

        <div className="chart-container">
          <Chart type="line" data={data} options={options} />
        </div>
      </Card>
    </div>
  );
}
