var highScoresList = document.querySelector("#highScoresList");
var clearHighscores = document.querySelector("#clearHighscores");


renderHighScores();

// Put high scores to an item on the page
function renderHighScores() {

    highScores = getHighScores();
    console.log(highScores.username);
    highScoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScoreItem = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScoreItem.username + '' + highScoreItem.score;
        li.setAttribute("data-index", i);

        highScoresList.appendChild(li);
    }
}

// Pull scores from local storage.
function getHighScores() {
    var localArrayObj = localStorage.getItem('highScores')
    var storedHighScores = JSON.parse(localArrayObj, function(key, value){
        if (key == 'username') {
            return value.toUpperCase();}
            else {
                return value;
            }
        }
    );
    console.log(storedHighScores)
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