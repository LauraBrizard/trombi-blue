// on a récupéré un fichier json dans la variable promos
const promos = require('../../data/promos.json');


// plus tard notre controller va appeler la BDD via un modèle pour ensuite envoyer les données avec la vue

const promoController = {

    // affiche la liste des promos
    promoList: (req, res) => {
        
        res.render('promo', {promos});
    },

    promoDetail: (req, res, next) => {
        // on récupère l'id de la promo
        const promoId = req.params.id;
        // on filtre nos données pour récupérer uniquement ladite promo (filter // find // ou une boucle à l'ancienne)
        const foundPromo = promos.find(promo => promo.id == promoId );
        console.log(foundPromo);

        if (!foundPromo) {
            console.log("hello");
            return next();
        } 
        console.log("plop");

        // on fait un render avec les données extraites
        res.render('promoDetail', {promo: foundPromo});
    }
}

module.exports = promoController;