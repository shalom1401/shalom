// Sample data for the cricket team
const teams = [
    {
      id: 0,
      name: "Mumbai Indians",
      logo: "mi_logo.png",
    },
    {
      id: 1,
      name: "Chennai Super Kings",
      logo: "csk_logo.png",
    },
    // Add more teams here
  ];
  
  // Function to display the team card grid on the homepage
  function displayTeamGrid() {
    const teamGrid = document.getElementById("teamGrid");
  
    teams.forEach((team) => {
      // Create a card for each team
      const teamCard = document.createElement("div");
      teamCard.classList.add("team-card");
  
      // Display team name and logo on the card
      teamCard.innerHTML = `
        <img src="${team.logo}" alt="${team.name}" width="100">
        <h3>${team.name}</h3>
      `;
  
      // Add an event listener to navigate to the team details page when the card is clicked
      teamCard.addEventListener("click", () => {
        window.location.href = `team-details.html?id=${team.id}`;
      });
  
      // Add the team card to the team grid
      teamGrid.appendChild(teamCard);
    });
  }
  
  // Call the function to display the team grid when the page is loaded
  document.addEventListener("DOMContentLoaded", displayTeamGrid);
  