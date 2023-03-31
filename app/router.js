
// Ici on utilise la déconstruction, cela nous permet de récupérer UNIQUEMENT le module Router sur cette page
// PS : on doit connaître le nom du module qu'on veut récupérer pour le mettre entre les accolades, en effet, les noms utilisés ont été déclérés au préalable
const { Router } = require('express');
const promoController = require('./controllers/promoController');
const mainController = require('./controllers/mainController');


const router = Router();

router.get('/', mainController.homePage);
// promos
router.get('/promos', promoController.promoList);
router.get('/promo/:id', promoController.promoDetail);
// students



module.exports = router;