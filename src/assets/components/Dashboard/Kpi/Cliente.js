import "chart.js/auto";
import { useState } from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";

export default function Cliente() {
  // Estado para controlar la visualización (pie o doughnut)
  const [chartType, setChartType] = useState("pie");

  // Calcular el total para los porcentajes
  const values = [100, 10, 20, 5, 5, 10];
  const total = values.reduce((sum, value) => sum + value, 0);

  // Calcular porcentajes para mostrar en las etiquetas
  const percentages = values.map((value) => ((value / total) * 100).toFixed(1) + "%");

  // Datos con etiquetas que incluyen porcentajes
  const data = {
    labels: ["Activos", "Marketing", "Potenciales", "Inactivos", "Perdidos", "Ganados"],
    datasets: [
      {
        data: values,
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#9CA3AF", "#F87171", "#2563EB"],
        hoverBackgroundColor: ["#059669", "#2563EB", "#D97706", "#6B7280", "#DC2626", "#1E40AF"],
        borderWidth: 2,
        borderColor: "#ffffff",
        hoverOffset: 15,
        borderRadius: 3,
      },
    ],
  };

  // Opciones mejoradas para el gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#495057",
          font: {
            size: 14,
            weight: "bold",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          display: true,
          text: "Categorías",
          font: {
            size: 16,
            weight: "bold",
          },
          padding: {
            bottom: 10,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 14,
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        boxWidth: 10,
        boxHeight: 10,
        boxPadding: 3,
        usePointStyle: true,
      },
      datalabels: {
        formatter: (value, ctx) => {
          return percentages[ctx.dataIndex];
        },
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 12,
        },
        textStrokeColor: "rgba(0, 0, 0, 0.5)",
        textStrokeWidth: 2,
        textShadowBlur: 5,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1000,
      easing: "easeOutQuart",
    },
    cutout: chartType === "doughnut" ? "50%" : "0%",
  };

  // Estilos para el contenedor principal
  const containerStyle = {
    maxWidth: "700px",
    margin: "20px auto",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
    background: "linear-gradient(to right, #f8f9fa, #ffffff)",
    padding: "20px",
    border: "1px solid #e9ecef",
  };

  // Estilos para la tarjeta
  const cardStyle = {
    backgroundColor: "#ffffff",
    color: "#343a40",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    border: "none",
  };

  // Estilos para el contenedor del gráfico
  const chartContainerStyle = {
    position: "relative",
    height: "350px",
    marginTop: "20px",
    padding: "10px",
  };

  // Estilos para el texto descriptivo
  const descriptionStyle = {
    margin: "0 0 20px 0",
    color: "#6c757d",
    fontSize: "15px",
    lineHeight: "1.6",
    fontStyle: "italic",
  };

  // Estilos para los botones
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "15px",
  };

  // Componente de encabezado personalizado para la tarjeta
  const header = (
    <div
      style={{
        borderBottom: "1px solid #e9ecef",
        paddingBottom: "15px",
        marginBottom: "15px",
      }}
    >
      <h2
        style={{
          margin: "0",
          color: "#343a40",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Resumen de Clientes
      </h2>
    </div>
  );

  // Componente de pie personalizado para la tarjeta
  const footer = (
    <div
      style={{
        borderTop: "1px solid #e9ecef",
        paddingTop: "15px",
        marginTop: "15px",
        textAlign: "center",
        color: "#6c757d",
        fontSize: "14px",
      }}
    >
      Última actualización: {new Date().toLocaleDateString()}
    </div>
  );

  return (
    <div style={containerStyle}>
      <Card header={header} footer={footer} style={cardStyle}>
        <p style={descriptionStyle}>
          Este gráfico muestra la distribución de clientes según su estado actual. Haz clic en las categorías de la
          leyenda para filtrar la visualización.
        </p>

        <div style={buttonContainerStyle}>
          <Tooltip target=".chart-type-button" position="top" />
          <Button
            className="chart-type-button"
            data-pr-tooltip="Gráfico circular"
            icon="pi pi-chart-pie"
            onClick={() => setChartType("pie")}
            severity={chartType === "pie" ? "info" : "secondary"}
            outlined={chartType !== "pie"}
            style={{ width: "40px", height: "40px" }}
          />
          <Button
            className="chart-type-button"
            data-pr-tooltip="Gráfico de anillo"
            icon="pi pi-circle"
            onClick={() => setChartType("doughnut")}
            severity={chartType === "doughnut" ? "info" : "secondary"}
            outlined={chartType !== "doughnut"}
            style={{ width: "40px", height: "40px" }}
          />
        </div>

        <div style={chartContainerStyle}>
          <Chart type={chartType} data={data} options={options} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <div>
            <strong>Total de clientes:</strong> {total}
          </div>
          <div>
            <strong>Clientes activos:</strong> {values[0]} ({percentages[0]})
          </div>
        </div>
      </Card>
    </div>
  );
}