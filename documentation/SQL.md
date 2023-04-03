

# SQL

SQL est un langage qui permet de récupérer des données dans une BDD

## Comment se connecter à une BDD

On peut se connecter à une BDD locale qu'on aura créée au préalable OU se connecter à une BDD distante, c'est la seconde option qu'on va réaliser ajd avec la commande suivante, aujourd'hui on va se connecter à la BDD sur le serveur d'oclock

```
    psql -h pg.oclock.lan -U etudiant -d trombi 
    /*
        psql - postgresql (le SGBD qu'on utilise)
        -h - spécifie l'adresse de la BDD
        -U le nom de l'utilisateur
        -d la base de données
    */
```
mot de passe : js4life 

Une fois que vous aurez tapé cette commande, vous vous retrouverez dans l'interface de la BDD (psql)
NB : on peut se connecter à la BDD depuis n'importe où, en effet on va atterir dans une autre interface, et la commande ne demande pas de chemin


## Comment faire des requêtes dans PostgresSQL

Maintenant qu'on est dans la BDD on peut exécuter des commandes : 


#### Commandes d'affichage

`\dt` - affiche les tables de la BDD
`\d nomDeLaTable` - affiche les champs de la table
`\q` - quitter l'environnement psql

#### Commandes d'interraction avec la BDD

Une commande classique ressemble à ça : 

```
SELECT -valeurs a récuperer FROM -origine de l'information-;
```
On rajoute souvent une condition à notre requête SQL
```
SELECT -valeurs a récuperer FROM -origine de l'information- WHERE condition;
```
/!\ penser au `;` en fin de commande

#### Quelques exemples

Dans nos exemples, on va utiliser la BDD mentionnée au dessus, elle contient les tables student et promo, on va essayer de récupérer != informations

```
// récupérer tous les étudiants
SELECT * FROM student;

// récupérer toutes les promos
SELECT * FROM promo;

// récupérer toutes les promos dont l'id est supérieur à 400
SELECT * FROM promo WHERE id > 400;

// récupérer toutes les promos ayant un id entre 400 et 500
SELECT * FROM promo WHERE id > 400 AND id < 501;

// récupérer toutes les promos ayant un id inférieur à 400 ou supérieur à 500
SELECT * FROM promo WHERE id < 400 OR id > 501;

// Récupérer des champs qui possèdent un nom qui ressemble à quelque chose comme ... 
SELECT * FROM promo WHERE name LIKE '%ium';

// trier le résultat en fonction d'un champ : 
SELECT * FROM promo WHERE name LIKE '%ium' ORDER BY name DESC;

// `%` permet de dire que ici on peut trouver n'importe quels caractères  (un ou plusieurs)
// `_` permet de dire qu'il y a ici un caractère qu'on ne connaît pas
```

## Créer une table et un utilisateur associé

1 - on se connecte à postgres en local
NB (dans notre contexte on se co en local mais on peut se co à distance)
```
sudo -i -u postgres psql
```
le mot de passe demandé est celui de votre environnement

Maintenant que vous êtes connectés à la BDD, on va pouvoir créer un utilisateur puis une BDD liée à celui-ci:

```
// créer un utilisateur nommé trombi avec la possibilité de se connecter à la BDD ET un mot de passe 'trombi';
CREATE USER trombi  WITH LOGIN PASSWORD 'trombi';

// créer une BDD liée à notre utilisateur 
CREATE DATABASE trombi OWNER trombi;
```

## Comment utiliser psql dans un projet JS ? 

1 - installer dans votre projet pg