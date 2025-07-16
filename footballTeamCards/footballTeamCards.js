let footballTeam = {
    team: "Argentina", 
    year: 1986, 
    headCoach: "Carlos Bilardo", 
    players: [
        {
            name: "Sergio Almiròn",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Ricardo Bochini",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Claudio Borghi",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "José Luis Brown",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Daniel Passarella",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Jorge Burruchaga",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Néstor Clausen",
            position: "defender",
            isCaptain: false
        },
        {
            name: "José Luis Cuciuffo",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Diego Maradona",
            position: "midfielder",
            isCaptain: true
        },
        {
            name: "Jorge Valdano",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Héctor Enrique",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Oscar Garré",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            isCaptain: false
        },
    ],
};

const teamElement = document.getElementById("team")
const yearElement = document.getElementById("year")
const headCoachElement = document.getElementById("head-coach")

teamElement.innerText = footballTeam.team
yearElement.innerText = footballTeam.year
headCoachElement.innerText = footballTeam.headCoach

const playerCards = document.getElementById("player-cards")
const dropboxSelector = document.getElementById("players")

function createPlayerCard(player) {
  return `
    <div class="player-card">
      <h2>${player.isCaptain? "(Captain)" : ""} ${player.name}</h2>
      <p>Position: ${player.position}</p>
    </div>
  `;
}

dropboxSelector.addEventListener("change", () => {
    playerCards.innerHTML = ""
    let selectedPosition = dropboxSelector.value
    footballTeam.players.forEach((players) => {
        if (selectedPosition == "all") {
            playerCards.innerHTML += createPlayerCard(players)
        } else if (players.position == selectedPosition) {
            playerCards.innerHTML += createPlayerCard(players)
        }
    })
})