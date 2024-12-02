document.addEventListener("DOMContentLoaded", () => {
    const registeredUsers = 1500; // Replace with dynamic data
    const padsDispensed = 3200; // Replace with dynamic data
  
    // Update the dashboard
    document.getElementById("registered-users").textContent = registeredUsers;
    document.getElementById("pads-dispensed").textContent = padsDispensed;
  });