const apiUrl =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


const resultContainer = document.querySelector(".result");

async function gameFacts() {
    try {
  const response = await fetch(apiUrl);
  const results = await response.json();

  const games = results.results;
resultContainer.innerHTML ="";
console.log(results.results);

  for (let i = 0; i < games.length; i++) {
  

    if (i === 8) {
      break;
    }
   resultContainer.innerHTML += `<div class="content"> ${[i +1]} Name: ${games[i].name} 
   Rating: ${games[i].rating} 
   Amount of tags: ${games[i].tags.length} </div>`
  }
}
catch (error) {
    resultContainer.innerHTML = "We don't know what happened !"
}
}
gameFacts();
