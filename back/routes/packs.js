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

// POST OK 

router.post("/manage-packs", (req, res) => {

  const packData = req.body;
  
  connexion.query('INSERT INTO packs SET ?', [packData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un pack");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// DELETE OK

router.delete("/manage-packs", (req, res) => {

  const packId = req.body.id
  console.log(packId)

  connexion.query('DELETE FROM packs WHERE id=' + packId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un pack");
    } else {
      res.sendStatus(200);
    }
  });

})

// FETCH OK

router.get("/manage-packs", (req, res) => {

  connexion.query('SELECT * FROM packs', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les packs");
    } else {
      console.log(results);
      res.json(results);
      res.status(200);
    }
  });

})

// FETCH data by ID OK

router.get("/manage-packs/:id", (req, res) => {

  const packId = req.body.id

  connexion.query('SELECT * FROM packs WHERE id=' + packId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un pack");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// UPDATE OK
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/manage-packs", (req, res) => {

  const packId = req.body.id
  const packData = req.body

  connexion.query('UPDATE packs SET ? WHERE id='+ packId, [packData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un pack");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})

module.exports = router