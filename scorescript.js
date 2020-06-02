var highScoresList = document.querySelector("#highScoresList");
var clearHighscores = document.querySelector("#clearHighscoresID");

// ----- Functions
renderHighScores();

// Write each high score to a list item and display on page.
function renderHighScores() {

    highScores = getHighScores();
    highScoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScoreItem = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScoreItem;
        li.setAttribute("data-index", i);

        highScoresList.appendChild(li);
    }
}

// Get scores from local storage.
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