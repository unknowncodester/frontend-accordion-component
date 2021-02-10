
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".card__question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            let targetIcon = question.children[1];
            let targetAnswer = question.nextElementSibling;
            
            const visibleAnswer = document.querySelector("p:not(.question__answer--hide)");
            const flippedIcon = document.querySelector(".question__icon--flipped");

            if(visibleAnswer !== targetAnswer) {
                toggleAnswerVisibility(visibleAnswer);
                rotateIcon(flippedIcon);
            }
            
            toggleAnswerVisibility(targetAnswer);
            rotateIcon(targetIcon);
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
});
