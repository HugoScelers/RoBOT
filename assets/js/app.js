const dialog = [
    { question: "Quels sont les meilleurs exercices pour les pectoraux ?", answer: "Les meilleurs exercices pour les pectoraux sont le développé couché, le développé incliné et les pompes." },
    { question: "Comment améliorer mon endurance en basket ?", answer: "Pour améliorer ton endurance en basket, tu peux faire des exercices cardiovasculaires tels que la course à pied, la corde à sauter et les sprints." },
    { question: "Comment éviter les blessures lors de l'entraînement de musculation ?", answer: "Pour éviter les blessures lors de l'entraînement de musculation, il est important de bien s'échauffer avant chaque séance, de progresser de manière progressive et d'utiliser une bonne technique pour chaque exercice." },
    { question: "Quelle est la meilleure façon de travailler les abdominaux ?", answer: "La meilleure façon de travailler les abdominaux est de faire des exercices ciblant les muscles abdominaux tels que les crunchs, les relevés de jambes et les planches." },
    { question: "Comment améliorer mes shoots en basket ?", answer: "Pour améliorer tes shoots en basket, tu peux pratiquer régulièrement en utilisant les bonnes techniques de tir, en travaillant ta coordination et en augmentant ta force et ta souplesse." },
    { question: "Quels sont les meilleurs exercices pour les biceps ?", answer: "Les meilleurs exercices pour les biceps sont le curl avec haltères, le curl à la barre et le curl incliné." },
    { question: "Comment planifier un programme d'entraînement efficace en musculation ?", answer: "Pour planifier un programme d'entraînement efficace en musculation, il est important de prendre en compte vos objectifs, votre niveau de condition physique actuel et de progresser de manière progressive." },
    { question: "Comment éviter les plateaux en musculation ?", answer: "Pour éviter les plateaux en musculation, il est important de varier vos exercices, d'augmenter progressivement l'intensité de l'entraînement et de suivre un programme de musculation bien planifié." },
    { question: "Quelle est la meilleure façon de travailler les quadriceps en musculation ?", answer: "La meilleure façon de travailler les quadriceps en musculation est de faire des exercices tels que le squat, le fente et la presse à cuisses." },
    { question: "Comment améliorer ma technique de dribble en basket ?", answer: "Pour améliorer votre technique de dribble en basket, vous pouvez pratiquer régulièrement en utilisant les bonnes techniques de dribble, en travaillant votre coordination et en augmentant votre vitesse et votre agilité." },
    { question: "Quelle est la meilleure façon de travailler les muscles du dos en musculation ?", answer: "La meilleure façon de travailler les muscles du dos en musculation est de faire des exercices tels que le tirage horizontal, le rowing et les tractions." },
    { question: "Comment améliorer ma vitesse en basket ?", answer: "Pour améliorer votre vitesse en basket, vous pouvez faire des exercices de sprint, de saut et d'agilité, travailler votre coordination et améliorer votre endurance." },
];

const options = {
    includeScore: true,
    keys: ['question']
};

const fuse = new Fuse(dialog, options);

document.getElementById("chatbot-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("question").value;

    const questionElement = document.createElement("div");
    questionElement.classList.add("chatbot-question");
    const questionText = document.createElement("p");
    questionText.innerHTML = userInput;
    questionElement.appendChild(questionText);
    document.getElementById("chatbot-messages").appendChild(questionElement);

    const answerElement = document.createElement("div");
    answerElement.classList.add("chatbot-reponse");
    const answerText = document.createElement("p");

    let answer = "Je n'ai pas compris la question. Peux-tu reformuler ?";

    const result = fuse.search(userInput);
    if (result.length > 0) {
        const bestMatch = result[0].item;
        answer = bestMatch.answer;
    }

    answerText.innerHTML = answer;
    answerElement.appendChild(answerText);
    document.getElementById("chatbot-messages").appendChild(answerElement);
});

const choice = document.getElementById("suggestions")
dialog.forEach((val) => {
    choice.innerHTML += `<option value ="${val.question}">`
});

fetch("https://api-robot.onrender.com/api/v1/dialog/questions")
.then(response=>console.log(response))
