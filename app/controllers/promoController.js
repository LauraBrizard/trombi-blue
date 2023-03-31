


// plus tard notre controller va appeler la BDD via un modèle pour ensuite envoyer les données avec la vue

const promoController = {
    homePage: (req, res) => {
        res.render('home');
    }

}

module.exports = promoController;