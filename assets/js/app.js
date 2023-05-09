const dialog = [
    { question: "toto", answer: "tata" },
    { question: "Salut", answer: "Salut" },
    { question: "ça va ?", answer: "bien et toi ?" },
];

document.getElementById("chatbot-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const questionElement = document.createElement("p");
    questionElement.classList.add("question");
    questionElement.innerHTML = document.getElementById("question").value;
    document.querySelector(".chatbot-question").appendChild(questionElement);

    const answerElement = document.createElement("p");
    answerElement.classList.add("answer");

    let answer = "Coucou";
    dialog.forEach((element) => {
        if (element.question === document.getElementById("question").value) {
            answer = element.answer;
        }
    });
    answerElement.innerHTML = answer;
    document.querySelector(".chatbot-reponse").appendChild(answerElement);
});
