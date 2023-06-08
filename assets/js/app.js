const suggestions = document.querySelector("#suggestions");

// Récupération des données de l'API contenant les dialogues
fetch("https://api-robot.onrender.com/api/v1/chats")
    .then(response => response.json()) // Conversion de la réponse en format JSON
    .then(data => {
        // Configuration de Fuse pour la recherche de correspondances dans les dialogues
        const options = {
            includeScore: true, // Inclure le score de correspondance dans le résultat
            keys: ['question'] // Définir la clé de recherche sur le champ 'question'
        };
        const fuse = new Fuse(data, options); // Création d'un objet Fuse avec les données et les options

        // Remplissage de la liste déroulante des suggestions avec les questions des dialogues
        suggestions.innerHTML = data.map(dialog => `<option value="${dialog.question}">`).join('');

        // Gestion de l'événement de soumission du formulaire
        document.getElementById("chatbot-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du formulaire

            const userInput = document.getElementById("question").value; // Récupération de la saisie de l'utilisateur
            document.getElementById("question").value = ""
            

            // Création de l'élément de question
            const questionElement = document.createElement("div");
            questionElement.classList.add("chatbot-question");
            const questionText = document.createElement("p");
            questionText.innerHTML = userInput;
            questionElement.appendChild(questionText);
            document.getElementById("chatbot-messages").appendChild(questionElement);

            // Création de l'élément de réponse
            const answerElement = document.createElement("div");
            answerElement.classList.add("chatbot-reponse");
            const answerText = document.createElement("p");

            let answer = "Je n'ai pas compris la question. Peux-tu reformuler ?";

            // Recherche de la meilleure correspondance dans les dialogues à l'aide de Fuse
            const result = fuse.search(userInput);
            if (result.length > 0) {
                const bestMatch = result[0].item;
                answer = bestMatch.answer;
            }

            answerText.innerHTML = answer;
            answerElement.appendChild(answerText);
            document.getElementById("chatbot-messages").appendChild(answerElement);
        });
    })
    .catch(error => console.log(error));

// Récupération d'une blague de Chuck Norris depuis une autre API
const chuck = document.getElementById("chuck");
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json()) // Conversion de la réponse en format JSON
    .then(data => chuck.innerHTML = data.value) // Affichage de la blague dans un élément HTML
    .catch(error => console.log(error));
