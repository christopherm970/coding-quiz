var highScoresList = document.querySelector("#highScoresList");
var clearHighscores = document.querySelector("#clearHighscores");


renderHighScores();

// Put high scores to an item on the page
function renderHighScores() {

    highScores = getHighScores();
    console.log(highScores);
    highScoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScoreItem = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScoreItem;
        li.setAttribute("data-index", i);

        highScoresList.appendChild(li);
    }
}

// Pull scores from local storage.
function getHighScores() {
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

    if (storedHighScores === null) {
        storedHighScores = [];
    }

    return(storedHighScores);
  }

// Clear scores from local storage when "Clear Highscores" is clicked.
function clearScores() {
    localStorage.clear();
    renderHighScores();  
};



// ----- Event Listeners
clearHighscores.addEventListener("click", clearScores);