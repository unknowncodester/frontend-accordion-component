
document.addEventListener("DOMContentLoaded", function() {
  
  let questions = document.querySelectorAll(".card__question");

  questions.forEach(function(question) {
      question.addEventListener("click", function() {
          question.parentElement.children[1].classList.toggle("card__answer--hide");  
          question.classList.toggle("card__question--flipped");              
      });
  });
});
