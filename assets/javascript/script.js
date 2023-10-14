var quizstart = document.querySelector("#quizstart");
var code = document.querySelector("#code");
var question = document.querySelector("#question");
var answerbank = document.querySelector("#bank")
var timer = document.querySelector("#timer")
var timeLeft = 75;
var answer = document.createElement("div");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var as = [a1, a2, a3, a4]
var colors = ["red", "light blue", "green","yellow"]


function quiz() {
    quizstart.textContent = "";
    countdown();
    var options = ["Boolean", "Strings", "Alerts", "Numbers"]
    
    code.textContent = "";
    question.textContent = "Commonly used data types Do NOT include _____?";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';
    

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        as[i].setAttribute("style", "padding: 10px; display: flex; flex-direction: column;")
        as[i].style.backgroundColor = colors.shift();
        answer.appendChild(as[i]);

        as[0].setAttribute("data-state", "wrong");
        as[1].setAttribute("data-state", "wrong");
        as[2].setAttribute("data-state", "correct");
        as[3].setAttribute("data-state", "wrong")
        
    }

}

quizstart.addEventListener("click", quiz)

function check1() {
    var check = a1.getAttribute("data-state");
    
    if (check === "correct") {
        //next quetion
    } else {
        timeLeft = timeLeft - 10;
        //next quetion
    }
}

function check2() {
    var check = a2.getAttribute("data-state");
    
    if (check === "correct") {
        //next quetion
    } else {
        timeLeft = timeLeft - 10;
        //next quetion
    }
}

function check3() {
    var check = a3.getAttribute("data-state");
    
    if (check === "correct") {
        //next quetion
    } else {
        timeLeft = timeLeft - 10;
        //next quetion
    }
}

function check4() {
    var check = a4.getAttribute("data-state");
    
    if (check === "correct") {
        //next quetion
    } else {
        timeLeft = timeLeft - 10;
        //next quetion
    }
}

a1.addEventListener("click", check1);
a2.addEventListener("click", check2);
a3.addEventListener("click", check3);
a4.addEventListener("click", check4);

function countdown() {
    // var timeLeft = 75;
  
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

