
// permet d'utiliser et initialiser le module dotenv
// à partir de l'initialisation, un objet process.env est disponible, il contient toutes les variables contenues dans le .env
require('dotenv').config();
const express = require("express");
const router = require('./app/router');



const app = express();

// port vaudra process.env.PORT OU 3000, en fonction de si la première variable existe ou non
const port = process.env.PORT || 3000;


// configuration d'EJS
app.set("view engine", "ejs");
app.set("views", "app/views");

// ajout du dossier public
app.use(express.static("app/public"));

// middleware router
app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})






