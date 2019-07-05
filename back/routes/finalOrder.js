const express = require("express")
const router = express.Router()
const connexion = require('../conf');

// Body parser module

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

// *******************************************
// ****************** Query ******************
// *******************************************

// GET ALL THE ITEMS IN THE TABLE

router.get("/manage-final-order", (req,res) => {

    connexion.query('SELECT ', (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send("Erreur lors de l'affichage de toutes les commandes")
        } else {
            console.log(results)
            res.json(results);
        }
    })
})

module.exports = router
