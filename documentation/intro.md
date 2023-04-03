# Cette saison :  Data, Organisation de projet, SQL

## QQVVA? (aujourd'hui ? )

## Gestion de projet

- Cahier des charges
- User stories
- Kanban

## Architecture 

- Mettre en place une architecture express
- Lister les != composantes d'un site express
- Rôle de chaque élement
- Le modèle MVC (modèle vue controlleur)
- dotenv
- BDD
- Manifesto agile

## Modèle MVC

Le modèle MVC est une architecture (ou une organisation de fichiers) où on découpe notre projet en 3 gros segments, le modèle, la vue et le controlleur

- Modèle : définir le format de données qu'on va retrouver côté SQL, définit la structure des informations
  
- Vue : l'affichage qu'on va envoyer au client

- Controlleur : se charge d'appeler le modèle pour récupérer les données, et d'envoyer la vue à au client

- Le routeur a pour objectif de se préparer à réagir à une URL demandée par l'utilisateur, en fonction de l'url demandée, une action ou une autre sera réalisée (ex : je veux accéder à /, le routeur va appeler le controlleur pour répondre à la demande de l'utilisateur)

En gros : le routeur reçoit une route, il appelle un controlleur, qui récupère des données dans une BDD, puis prépare une vue qu'il va envoyer à l'utilisateur


```
.
├── app
│   ├── controllers
│   │   └── mainController.js
│   ├── router.js
│   └── views
│       └── index.ejs
├── data
│   ├── promos.json
│   └── students.json
├── index.js
├── package.json
├── public
|   L__favicon.ico
│   └── css
│       └── style.css
├── .env
├── .gitignore
└── README.md
```

Si ce projet est segmenté (MVC), c'est pour répondre au principe de SOC (séparation of concepts)



## .env

Le .env est un fichier caché d'environnement, il a pour objectif de contenir des variables qui sont propres à la machine sur laquelle il se trouve, on y stocke généralement des données sensibles (mot de passe adresse etc...) et lorsqu'on développe un projet, on stocke un .env à la racine qui possède par exemple le mdp de notre BDD, une clé d'API, un PORT, une adresse etc.. Son objectif premier est de conserver hors de la vue des utilisateurs des données sensibles

NB : on ne push pas le .env sur github (donc on le rajoute dans gitignore)
NB2 : dans le projet qu'on va voir en saison 4, on va utiliser dotenv pour lire le fichier .env


## Ajouter un dépôt distant à notre projet local

une fois que votre projet git a été initialisé en local (git init git add git commit ...), vous pouvez rajouter un dépôt distant à ce projet, pour se faire :

1 - Créer un dépôt en ligne (github, bitbucket, gitlab ...)
2 - Copier l'adresse SSH du dépôt en ligne
3 - dans le dossier du projet, utiliser la commande : `git remote add origin adresseDuDépot` (/!\ origin représente le nom du dépôt distant, on aurait pû l'appeler Michel, mais généralement le dépôt distant est nommé comme ça)
3 - 1 - pour vérifier que ovtre dépôt distant a bien été rajouté : `git remote -v` va vous afficher le nom et l'adresse du dépôt distant
4 - vous pouvez maintenant push, vous aurez surement une erreur vous indiquant que le lien n'est pas établi, par la même occasion git va vous suggérer une commande que vous pouvez copier pour faire un push



#### Points importants de la journée

- Organisation pré-production (juste la compréhension)
  - user stories
  - kanban
  - sprint poker

- Organisation du code 
  - modèle (soon)
  - vue
  - controlleur
  - routeur
  - public
  - data

- variables d'environnement (.env)