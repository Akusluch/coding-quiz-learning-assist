var quizstart = document.querySelector("#quizstart");
var code = document.querySelector("#code");
var question = document.querySelector("#question");
var answerbank = document.querySelector("#bank")
var timer = document.querySelector("#timer")
var timeLeft = 100;
var answer = document.createElement("div");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var sub = document.createElement("button");
var initals = document.createElement("input");
var as = [a1, a2, a3, a4];


//quetion 1
function quiz() {
    quizstart.remove();
    countdown();
    var options = ["Boolean", "Strings", "Alerts", "Numbers"]
    
    code.textContent = "";
    question.textContent = "Commonly used data types Do NOT include _____?";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';
    

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        as[i].setAttribute("style", "padding: 10px; margin: 10px; display: flex; flex-direction: column;")
        as[i].style.backgroundColor = "yellow";
        answer.appendChild(as[i]);

        as[0].setAttribute("data-state", "wrong");
        as[1].setAttribute("data-state", "wrong");
        as[2].setAttribute("data-state", "correct");
        as[3].setAttribute("data-state", "wrong")
        
    }

    function check1() {
        var check = a1.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz1();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz1();
        }
    }
    
    function check2() {
        var check = a2.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz1();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz1();
        }
    }
    
    function check3() {
        var check = a3.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz1();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz1();
        }
    }
    
    function check4() {
        var check = a4.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz1();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz1();
        }
    }
    
    a1.addEventListener("click", check1);
    a2.addEventListener("click", check2);
    a3.addEventListener("click", check3);
    a4.addEventListener("click", check4);

}
// quetion 2
function quiz1() {
    var options = ["Quotes", "Curly brakets", "Parenthesis", "Square brackets"]
    
    code.textContent = "";
    question.textContent = "The condition in an if / else statement is enclosed with _____.";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';
    

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        // as[i].setAttribute("style", "padding: 10px; margin: 10px; display: flex; flex-direction: column;")
        // as[i].style.backgroundColor = "yellow";
        // answer.appendChild(as[i]);

        // as[0].setAttribute("data-state", "wrong");
        // as[1].setAttribute("data-state", "wrong");
        // as[2].setAttribute("data-state", "correct");
        // as[3].setAttribute("data-state", "wrong")
        
    }

    function check1() {
        var check = a1.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz2();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz2();
        }
    }
    
    function check2() {
        var check = a2.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz2();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz2();
        }
    }
    
    function check3() {
        var check = a3.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz2();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz2();
        }
    }
    
    function check4() {
        var check = a4.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz2();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz2();
        }
    }
    
    a1.addEventListener("click", check1);
    a2.addEventListener("click", check2);
    a3.addEventListener("click", check3);
    a4.addEventListener("click", check4);

}
//quetion 3
function quiz2() {
    var options = ["numbers and strings", "other arrays", "booleans", "All of the above"]
    
    code.textContent = "";
    question.textContent = "Arrays in JavaScript can be used to store ____.";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';
    

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        // as[i].setAttribute("style", "padding: 10px; margin: 10px; display: flex; flex-direction: column;")
        // as[i].style.backgroundColor = "yellow";
        // answer.appendChild(as[i]);

        // as[0].setAttribute("data-state", "wrong");
        // as[1].setAttribute("data-state", "wrong");
        as[2].setAttribute("data-state", "wrong");
        as[3].setAttribute("data-state", "correct")
        
    }

    function check1() {
        var check = a1.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz3();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz3();
        }
    }
    
    function check2() {
        var check = a2.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz3();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz3();
        }
    }
    
    function check3() {
        var check = a3.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz3();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz3();
        }
    }
    
    function check4() {
        var check = a4.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz3();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz3();
        }
    }
    
    a1.addEventListener("click", check1);
    a2.addEventListener("click", check2);
    a3.addEventListener("click", check3);
    a4.addEventListener("click", check4);

}
//quetion 4 
function quiz3() {
    var options = ["comas", "currly brackets", "quotes", "parenthesis"]
    
    code.textContent = "";
    question.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';
    

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        // as[i].setAttribute("style", "padding: 10px; margin: 10px; display: flex; flex-direction: column;")
        // as[i].style.backgroundColor = "yellow";
        // answer.appendChild(as[i]);

        as[0].setAttribute("data-state", "wrong");
        as[1].setAttribute("data-state", "wrong");
        as[2].setAttribute("data-state", "correct");
        as[3].setAttribute("data-state", "wrong")
        
    }

    function check1() {
        var check = a1.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz4();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz4();
        }
    }
    
    function check2() {
        var check = a2.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz4();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz4();
        }
    }
    
    function check3() {
        var check = a3.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz4();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz4();
        }
    }
    
    function check4() {
        var check = a4.getAttribute("data-state");
        
        if (check === "correct") {
            //next quetion
            quiz4();
        } else {
            timeLeft = timeLeft - 10;
            //next quetion
            quiz4();
        }
    }
    
    a1.addEventListener("click", check1);
    a2.addEventListener("click", check2);
    a3.addEventListener("click", check3);
    a4.addEventListener("click", check4);

}
//quetion 5
function quiz4() {
    var options = ["JavaScript", "for loops", "console.log", "terminal/dash"]
    
    code.textContent = "";
    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    question.style.padding = '10px';
    answer.style.textAlign = 'center';

    answerbank.appendChild(answer);

    for (i=0; i < as.length; i++){
        as[i].textContent = options.shift();
        // as[i].setAttribute("style", "padding: 10px; margin: 10px; display: flex; flex-direction: column;")
        // as[i].style.backgroundColor = "yellow";
        // answer.appendChild(as[i]);

        as[0].setAttribute("data-state", "wrong");
        as[1].setAttribute("data-state", "wrong");
        as[2].setAttribute("data-state", "correct");
        as[3].setAttribute("data-state", "wrong")
        
    }

    function check1() {
        var check = a1.getAttribute("data-state");
        
        if (check === "correct") {
            endgame();
            
        } else {
            timeLeft = timeLeft - 10;
            endgame();
            
        }
    }
    
    function check2() {
        var check = a2.getAttribute("data-state");
        
        if (check === "correct") {
            endgame();
            
        } else {
            timeLeft = timeLeft - 10;
            endgame();
            
        }
    }
    
    function check3() {
        var check = a3.getAttribute("data-state");
        
        if (check === "correct") {
            endgame();
            
        } else {
            timeLeft = timeLeft - 10;
            endgame();
           
        }
    }
    
    function check4() {
        var check = a4.getAttribute("data-state");
        
        if (check === "correct") {
            endgame();
            
        } else {
            timeLeft = timeLeft - 10;
            endgame();
            
        }
    }
    
    a1.addEventListener("click", check1);
    a2.addEventListener("click", check2);
    a3.addEventListener("click", check3);
    a4.addEventListener("click", check4);

}

quizstart.addEventListener("click", quiz)

function endgame() {
    code.textContent = "All done!";
    question.textContent = "Your final score is " + timeLeft;
    sub.textContent = "Submit"
    sub.addEventListener("click", highscore);
    answer.appendChild(sub);

    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();

    answer.appendChild(initals);
    initals.setAttribute("placeholder", "enter intials here");
}

function highscore(){
    code.textContent = "High scores";
    initals.remove();
    localStorage.setItem("score", timeLeft);
    localStorage.setItem("user", initals.value)

    question.textContent = localStorage.getItem("user") + "-" + localStorage.getItem("score");
}

function countdown() {
  
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
        endgame();
      }
      
    }, 1000);
  }

