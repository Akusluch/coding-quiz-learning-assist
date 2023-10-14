var quizstart = document.querySelector("#quizstart");
var code = document.querySelector("#code");
var question = document.querySelector("#question");
var answerbank = document.querySelector("#bank")
var timer = document.querySelector("#timer")



function quiz() {
    countdown();

    var answer = document.createElement("ul");
    var a1 = document.createElement("li");
    var a2 = document.createElement("li");
    var a3 = document.createElement("li");
    var a4 = document.createElement("li");
    
    code.textContent = "";
    question.textContent = "Commonly used data types Do NOT include _____?";
    question.style.padding = '10px';

    answerbank.appendChild(answer);

    a1.textContent = "Boolean";
    a1.style.padding = '10px';
    a1.setAttribute("data-state", "wrong")
    answer.appendChild(a1);
    a1.addEventListener("click", function(event) {
        event.preventDefault();
        var state = element.getAttribute("data-state")

        if (state === "correct") {
            //next quetion
        } else {
            timeLeft = timeLeft - 10;
        }
    })

    a2.textContent = "Strings";
    a2.style.padding = '10px';
    a2.setAttribute("data-state", "wrong")
    answer.appendChild(a2);
    a2.addEventListener("click", function(event) {
        event.preventDefault();
        var state = element.getAttribute("data-state")

        if (state === "correct") {
            //next quetion
        } else {
            timeLeft = timeLeft - 10;
        }
    })

    a3.textContent = "Alerts";
    a3.style.padding = '10px';
    a3.setAttribute("data-state", "correct")
    answer.appendChild(a3);
    a3.addEventListener("click", function(event) {
        event.preventDefault();
        var state = element.getAttribute("data-state")

        if (state === "correct") {
            //next quetion
        } else {
            timeLeft = timeLeft - 10;
        }
    })

    a4.textContent = "Numbers";
    a4.style.padding = '10px';
    a4.setAttribute("data-state", "wrong")
    answer.appendChild(a4);
    a4.addEventListener("click", function(event) {
        event.preventDefault();
        var state = element.getAttribute("data-state")

        if (state === "correct") {
            //next quetion
        } else {
            timeLeft = timeLeft - 10;
        }
    })
}

quizstart.addEventListener("click", quiz)

function countdown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function () {
  
      if (timeLeft > 1){
        timer.textContent = "Timer: " + timeLeft;
        timeLeft --;
      } else if (timeLeft === 1){
        timer.textContent = "Timer: " + timeLeft;
        timeLeft -- ;
      } else {
        clearInterval(timeInterval);
        timer.textContent = "Timer"; 
      }
      
    }, 1000);
  }

