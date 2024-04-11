// let play = document.querySelector(".btn1");
// let cancel = document.querySelector(".btn2");
// let section1 = document.querySelector(".section1");
// let section2 = document.querySelector(".section2");
// let btnR = document.querySelector(".btnR");
// let btnP = document.querySelector(".btnP");
// let btnS = document.querySelector(".btnS");

// let arr = ["p", "r", "s"];

// let random = Math.floor(Math.random() * 3);
// let randArr = arr[random];

// play.addEventListener("click", function () {
//   section1.style.display = "none";
//   section2.style.display = "block";
// });

// cancel.addEventListener("click", function () {
//   window.close(section1);
// });

// btnR.addEventListener("click",function(){

// })

let play = document.querySelector(".btn1");
let cancel = document.querySelector(".btn2");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let btnR = document.querySelector(".btnR");
let btnP = document.querySelector(".btnP");
let btnS = document.querySelector(".btnS");
let myPointElement = document.querySelector(".myPoint");
let aiPointElement = document.querySelector(".aiPoint");
let pointWin = document.querySelector(".pointWin");
let pointLost = document.querySelector(".pointLost");
let notificationWin = document.querySelector(".notificationWin");
let notificationLost = document.querySelector(".notificationLost");

let choices = ["r", "p", "s"];
let myPoints = 0;
let aiPoints = 0;
let winCount = 0;
let loseCount = 0;

play.addEventListener("click", function () {
  section1.style.display = "none";
  section2.style.display = "block";
});

cancel.addEventListener("click", function () {
  window.close(section1);
});

btnR.addEventListener("click", function () {
  playRound("r");
});

btnP.addEventListener("click", function () {
  playRound("p");
});

btnS.addEventListener("click", function () {
  playRound("s");
});
let winSound = new Audio("./music/success-fanfare-trumpets-6185.mp3");
let loseSound = new Audio("./music/wahwahwahwaaaahahahahahaha-94669.mp3");

function playRound(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (
    (userChoice === "r" && computerChoice === "s") ||
    (userChoice === "p" && computerChoice === "r") ||
    (userChoice === "s" && computerChoice === "p")
  ) {
    myPoints++;
  } else {
    if (userChoice !== computerChoice) {
      aiPoints++;
    }
  }

  if (myPoints === 3) {
    notificationWin.style.display = "block";
    winSound.play();
  } else if (aiPoints === 3) {
    notificationLost.style.display = "block";
    loseSound.play();
  }

  document.querySelector(".myHand").src = `./images/${userChoice}.png`;
  document.querySelector(".aiHand").src = `./images/${computerChoice}.png`;
  myPointElement.textContent = myPoints;
  aiPointElement.textContent = aiPoints;

  setTimeout(function () {
    if (myPoints === 3) {
      winCount++;
      myPoints = 0;
      aiPoints = 0;
      document.querySelector(".myHand").src = `./images/r.png`;
      document.querySelector(".aiHand").src = `./images/r.png`;
    } else if (aiPoints === 3) {
      loseCount++;
      aiPoints = 0;
      myPoints = 0;

      document.querySelector(".myHand").src = `./images/r.png`;
      document.querySelector(".aiHand").src = `./images/r.png`;
    }
    myPointElement.textContent = myPoints;
    aiPointElement.textContent = aiPoints;
    pointWin.textContent = winCount;
    pointLost.textContent = loseCount;
    notificationWin.style.display = "none";
    notificationLost.style.display = "none";
  }, 5000);
}
