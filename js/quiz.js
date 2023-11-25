var houseQuestions = [{
          question: "What is the essential room for cooking and preparing meals in a house?",
          options: ["Living Room", "Bedroom", "Kitchen", "Bathroom"],
          correctAnswer: "Kitchen"
     },
     {
          question: "Which architectural style is known for its flat roofs and open floor plans?",
          options: ["Victorian", "Colonial", "Modern", "Cottage"],
          correctAnswer: "Modern"
     },
     {
          question: "What material is commonly used for traditional window frames?",
          options: ["Aluminum", "Vinyl", "Wood", "Fiberglass"],
          correctAnswer: "Wood"
     },
     {
          question: "In interior design, what does the term 'accent wall' refer to?",
          options: ["A wall with a unique color or material", "A load-bearing wall", "A wall with mirrors", "A wall with no decorations"],
          correctAnswer: "A wall with a unique color or material"
     },
     {
          question: "Which element is crucial for creating an energy-efficient home?",
          options: ["Large windows", "Thick curtains", "Proper insulation", "Multiple doors"],
          correctAnswer: "Proper insulation"
     },
     {
          question: "What does the acronym HVAC stand for in the context of home systems?",
          options: ["Heating, Ventilation, and Air Conditioning", "High Voltage Alternating Current", "Home Ventilation and Cooling", "Heat Vacuum and Cooling"],
          correctAnswer: "Heating, Ventilation, and Air Conditioning"
     },
     {
          question: "What is the purpose of a soffit in a house?",
          options: ["Decorative element", "Support for the roof", "Storage space", "Ventilation for the attic"],
          correctAnswer: "Ventilation for the attic"
     },
     {
          question: "In architecture, what does the term 'feng shui' refer to?",
          options: ["A style of furniture", "A type of flooring", "A system of harmonizing with the environment", "A type of window"],
          correctAnswer: "A system of harmonizing with the environment"
     },
     {
          question: "Which flooring material is known for its durability and classic appearance?",
          options: ["Carpet", "Tile", "Vinyl", "Hardwood"],
          correctAnswer: "Hardwood"
     },
     {
          question: "What is the purpose of a pergola in outdoor design?",
          options: ["Providing shade", "Growing plants", "Outdoor cooking", "Water features"],
          correctAnswer: "Providing shade"
     }
];


var quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
var quizResultsBody = document.getElementById('quizResults');
quizResultsBody.innerHTML = '';


function openQuizModal(quizTitle, questions) {
     document.getElementById('quizTitle').innerText = quizTitle;
     var quizModal = new bootstrap.Modal(document.getElementById('quizModal'));
     quizModal.show();

     var timeLeft = 0;
     document.getElementById('timeLeft').innerText = timeLeft;
     var timer;

     var correctAnswersCount = 0;

     document.getElementById('numberOfQuestions').innerText = questions.length;

     var questionsContainer = document.getElementById('questionsContainer');
     questionsContainer.innerHTML = "";
     questions.forEach(function (q, index) {
          var questionHtml = `<div class="mb-3">
               <label for="question${index + 1}" class="form-label">${q.question}</label>`;
          q.options.forEach(function (option, optionIndex) {
               questionHtml += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="question${index + 1}" id="q${index + 1}Option${optionIndex + 1}" value="${option}">
                    <label class="form-check-label" for="q${index + 1}Option${optionIndex + 1}">${option}</label>
               </div>`;
          });
          questionHtml += `</div>`;
          questionsContainer.innerHTML += questionHtml;
     });

     document.body.addEventListener("submit", function (event) {
          // Check if the submitted form is the quizForm
          if (event.target.id === "quizForm") {
               event.preventDefault();

               var userName = document.getElementById('userName').value;

               houseQuestions.forEach(function (q, index) {
                    var answer = getSelectedRadioValue(`question${index + 1}`);
                    if (answer === q.correctAnswer) {
                         correctAnswersCount++;
                    }
               });

               var quizModal = bootstrap.Modal.getInstance(document.getElementById('quizModal'));
               quizModal.hide();

               document.body.removeEventListener("submit", arguments.callee);

               clearInterval(timer);

               alert("Quiz completed!\nNumber of correct answers: " + correctAnswersCount + "/" + houseQuestions.length + "\nTime taken: " + timeLeft + " seconds");
          }
     });

     timer = setInterval(function () {
          timeLeft++;
          document.getElementById('timeLeft').innerText = timeLeft;
     }, 1000);

     function getSelectedRadioValue(questionName) {
          var options = document.getElementsByName(questionName);
          for (var i = 0; i < options.length; i++) {
               if (options[i].checked) {
                    return options[i].value;
               }
          }
          return null;
     }
}

