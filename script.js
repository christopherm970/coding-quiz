var startbtn= document.querySelector('#startbtn');
var timerEl= document.querySelector('#timer');
var questionContainerEl= document.querySelector('#question-container');
var interval;
var seconds = 5
var qcounter = 0
// Questions, Answers, and Choices
var questions= [
    {
        title: "Question 1:",
        description: "Inside which HTML element do we put the Javascript?",
        possibleAnswers: ["<scripting>", "<javascript>", "<js>", "<script>"],
        correctAnswer: "<script>",
    },
    {
        title: "Question 2:",
        description: "The method.push() method does what?",
        possibleAnswers: ["adds one or more elements to the end of an array", "Removes the last element from an array and returns that element", "Indexes all of the array.", "Does nothing"],
        correctAnswer: "adds one or more elements to the end of an array",
    },
    {
        title: "Question 3:",
        description: "How to write an IF statement in Javascript?",
        possibleAnswers: ["if i = 10", "if i === 10 then", "if i =10 then", "if(i === 5)"],
        correctAnswer: "if(i === 5)",
    },
    {
        title: "Question 4:",
        description: "How does a FOR loop start",
        possibleAnswers: ["for i = 2 to 6", "for (i = 0; i<= 10)", "if(i <= 10; i++)", "for(i = 0; i <= 10; i++)"],
        correctAnswer: "for(i = 0; i <= 10; i++)",
    },
    {
        title: "Question 5:",
        description: "What operator is used to assign a value to a variable?",
        possibleAnswers: ["x", "/", "=", "-"],
        correctAnswer: "=",
    },
];

// Function to start quiz.
function startQuiz(){ 
    if(seconds > 0){
        interval = setInterval(function(){
            seconds--;
            timerEl.textContent = seconds
            if(seconds === 0){
                clearInterval(interval)
            }
        }, 1000)
        showQuiz()
    }
}
// Function to show quiz on page
function showQuiz(){
    var title= document.createElement('h1')
    var description= document.createElement('p')
    
    title.textContent = questions[qcounter].title
    description.textContent = questions[qcounter].description
    questionContainerEl.appendChild(title)
    questionContainerEl.appendChild(description)
    
    for(var i = 0; i < questions[qcounter].possibleAnswers.length; i++){
        var possibleAnswers= document.createElement('button')
        possibleAnswers.className = 'choices'
        possibleAnswers.textContent = questions[qcounter].possibleAnswers[i];
        questionContainerEl.appendChild(possibleAnswers)
    }
}

document.
document.addEventListener
// Fuction to loop questions randomly and log answers

// Function for Score and Timer

startbtn.addEventListener('click', function(){
    console.log('It works')
    startQuiz()
})