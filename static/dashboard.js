document.addEventListener("DOMContentLoaded", () => {
  const registeredUsers = 1500;
  const padsDispensed = 3200;

  // Update statistics
  document.getElementById("registered-users").textContent = `Registered Users: ${registeredUsers}`;
  document.getElementById("pads-dispensed").textContent = `Pads Dispensed: ${padsDispensed}`;

  // Data for the chart
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Sep", "Oct", "Nov", "Dec"];
  const userData = [100, 170, 300, 200, 510, 97, 340, 750, 432, 654];

  // Chart Data
  const data = {
    labels: months, // Add labels for better understanding
    datasets: [
      {
        label: "Number of Users",
        data: userData,
        borderColor: "#007bff", // Use a vibrant color for the line
        backgroundColor: "rgba(0, 123, 255, 0.2)", // Add a translucent fill under the line
        borderWidth: 3, // Make the line thicker
        fill: true, // Fill the area under the line
        tension: 0, // Make the line straight
        pointBackgroundColor: "#fff", // Add white points for better visibility
        pointBorderColor: "#007bff", // Match point borders with the line color
        pointRadius: 5, // Increase the size of data points
      },
    ],
  };

  // Chart Configurations
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true, // Display the legend
          position: "top", // Place the legend at the top
        },
        tooltip: {
          enabled: true, // Enable tooltips
          callbacks: {
            label: (context) => `Users: ${context.raw}`, // Customize tooltip label
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months", // Add a label for the x-axis
            color: "#333",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Users Count", // Add a label for the y-axis
            color: "#333",
            font: {
              size: 14,
              weight: "bold",
            },
          },
          grid: {
            color: "rgba(200, 200, 200, 0.5)", // Light grid lines for better aesthetics
            borderDash: [5, 5], // Dashed grid lines
          },
        },
      },
    },
  };

  // Initialize Chart.js
  const ctx = document.getElementById("usageChart").getContext("2d");
  new Chart(ctx, config);
});
