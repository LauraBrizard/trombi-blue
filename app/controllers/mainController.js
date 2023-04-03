



const mainController = {
    homePage: (req, res) => {
        res.render('home', {title: 'home'});
    },
}

module.exports = mainController;