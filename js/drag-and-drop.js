document.addEventListener("DOMContentLoaded", function () {
let correct = 0;
let total = 0;

const scoreSection = document.querySelector(".score");
const correctSpan = scoreSection.querySelector(".correct");
const totalSpan = scoreSection.querySelector(".total");
const playAgainBtn = document.querySelector("#play-again-btn");
playAgainBtn.style.display = "none";


let draggableElements;
let droppableElements;



initiateGame();

function initiateGame() {
     draggableElements = document.querySelectorAll(".house-part-draggable");
     droppableElements = document.querySelectorAll(".droppable");

     draggableElements.forEach(elem => {
          elem.addEventListener("dragstart", dragStart);
     });

     droppableElements.forEach(elem => {
          elem.addEventListener("dragover", dragOver);
          elem.addEventListener("drop", drop);
     });
}

function dragStart(event) {
     event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
     event.preventDefault();
}

function drop(event) {
     event.preventDefault();
     const draggableElementId = event.dataTransfer.getData("text");
     const droppableElementHouse = event.target.getAttribute("data-house-part");
     const isCorrectMatching = draggableElementId === droppableElementHouse;
     total++;

     if (isCorrectMatching) {
          const draggableImage = document.getElementById(draggableElementId);
          event.target.style.backgroundImage = `url(${draggableImage.src})`;
          event.target.style.backgroundSize = "cover";
          event.target.style.backgroundRepeat = "no-repeat";
          event.target.style.backgroundPosition = "center";
          correct++;
     }

     correctSpan.textContent = correct;
     totalSpan.textContent = total;

     if (correct === droppableElements.length) {
          playAgainBtn.style.display = "block";
     }
}

playAgainBtn.addEventListener("click", () => {
     correct = 0;
     total = 0;
     correctSpan.textContent = correct;
     totalSpan.textContent = total;
     playAgainBtn.style.display = "none";
     droppableElements.forEach(elem => {
          elem.style.backgroundImage = "";
     });
});
});