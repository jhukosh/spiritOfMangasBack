const express = require("express")
const router = express.Router()
const connexion = require('../conf');

// Body parser module

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

/* GET */

router.get("/manage-states-stock", (req, res) => {

    connexion.query('SELECT * FROM statesMangas', (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'affichage de toutes les séries");
      } else {
        console.log(results);
        res.json(results);
        res.status(200);
      }
    });
  
  })

/* POST */

router.post("/manage-states-stock", (req, res) => {
    const dataBody = req.body;

    connexion.query('INSERT INTO series SET ?', [dataBody], (err, results) => {

        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la création d'un état");
        } else {
          console.log(results);
          res.sendStatus(200);
        }
    });
})

/* PUT */

/* DELETE */


module.exports = router