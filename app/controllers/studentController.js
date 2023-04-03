const promos = require('../../data/promos.json');
const students = require('../../data/students.json')

const studentController = {

    studentList: (req, res, next) => {

        // on récupère l'id passé en paramètre
        const promoId = req.params.id;
        const promo = promos.find((candidate) => {
            // si cette opération est vraie, l'élément regardé à l'instant T (candidate) sera renvoyé
            return candidate.id == promoId; 
        })
        // on vérifie que promo existe 
        if (!promo) {
            // si ce n'est pas le cas, on utilise next, qui nous enverra sur notre page 404
            // return va nous faire sortir de la fonction
            return next();
        }
        // on cherche les étudiants en fonction du paramètre récupéré
        const studentsOfPromo = students.filter(candidateStudents => 
            candidateStudents.promo == promoId
        )
        // on fait un render avec les données en paramètres
        res.render('promoStudents', {students: studentsOfPromo, title: `Liste des étudiants de la promotion ${promo.name}`})
    }

}


module.exports = studentController;