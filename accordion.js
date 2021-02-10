
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".card__question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const targetIcon = question.children[1];
            const flippedIcon = document.querySelector(".question__icon--flipped");         
            const targetAnswer = question.nextElementSibling;
            const visibleAnswer = document.querySelector("p:not(.question__answer--hide)");   
            const targetQuestionTitle = question.children[0];
            const activeQuestionTitle = document.querySelector(".question__title--active");

            if(visibleAnswer !== targetAnswer) {
                toggleAnswerVisibility(visibleAnswer);
                rotateIcon(flippedIcon);
                toggleQuestionActive(activeQuestionTitle);
            }
            
            toggleAnswerVisibility(targetAnswer);
            rotateIcon(targetIcon);
            toggleQuestionActive(targetQuestionTitle);
        });
    });

    /**
     * Toggle whether the clicked answer should be displayed
     * 
     * @param {Element} answer 
     * @return void
     */
    function toggleAnswerVisibility(answer) {
        if(answer){
            answer.classList.toggle("question__answer--hide");
        }
    }

    /**
     * Rotate the question icon
     * 
     * @param {Element} icon
     * @return void
     */
    function rotateIcon(icon) {
        if(icon) {
            icon.classList.toggle("question__icon--flipped");            
        }
    }

    /**
     * Toggle whether the question is active
     * 
     * @param {Element} question 
     */
    function toggleQuestionActive(question){
        if(question) {
            question.classList.toggle("question__title--active");            
        }
    }
});
