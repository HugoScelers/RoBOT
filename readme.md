# Front-end

# Fichiers
## index.html
Ce fichier est la page d'accueil de votre application. Il affiche un message de bienvenue et un bouton pour commencer à utiliser le chatbot.

## chatbot.html
Ce fichier contient l'interface utilisateur du chatbot. Il affiche les messages de conversation entre l'utilisateur et le chatbot.

## chatbot.css
Ce fichier contient les styles CSS pour l'interface du chatbot. Il définit la mise en page et l'apparence des différents éléments de l'interface.

## app.js
Ce fichier contient le code JavaScript pour le fonctionnement du chatbot. Il récupère les données des dialogues de l'API, gère la recherche de correspondances dans les dialogues et affiche les messages de question et de réponse dans l'interface du chatbot.

# Utilisation
Pour utiliser le chatbot, ouvrez le fichier index.html dans votre navigateur. Cliquez sur le bouton "Commencer" pour accéder à l'interface du chatbot.

# Liens API
- **POST** https://api-robot.onrender.com/api/v1/create/chats : Crée un nouvel enregistrement.
- **GET** https://api-robot.onrender.com/api/v1/chats : Récupère tous les enregistrements.
- **GET** https://api-robot.onrender.com/api/v1/chats/{id} : Récupère un enregistrement par son ID.
- **PUT** https://api-robot.onrender.com/api/v1/update/chats/{id} : Met à jour un enregistrement par son ID.
- **DELETE** https://api-robot.onrender.com/api/v1/delete/chats/{id} : Supprime un enregistrement par son ID.