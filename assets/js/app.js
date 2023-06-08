const suggestions = document.querySelector("#suggestions");

fetch("https://api-robot.onrender.com/api/v1/chats")
    .then(response => response.json())
    .then(data => {
        const options = {
            includeScore: true,
            keys: ['question']
        };
        const fuse = new Fuse(data, options);

        suggestions.innerHTML = data.map(dialog => `<option value="${dialog.question}">`).join('');

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
    })
    .catch(error => console.log(error));

const chuck = document.getElementById("chuck");
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => chuck.innerHTML = data.value)
    .catch(error => console.log(error));
