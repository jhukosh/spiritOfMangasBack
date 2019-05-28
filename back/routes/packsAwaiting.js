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

router.post("/manage-packs-awaiting", (req, res) => {

  const packsAwaitingData = req.body;
  
  connexion.query('INSERT INTO packsAwaiting SET ?', [packsAwaitingData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un pack en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// DELETE OK

router.delete("/manage-packs-awaiting", (req, res) => {

  const packsAwaitingId = req.body.id
  console.log(packsAwaitingId)

  connexion.query('DELETE FROM packsAwaiting WHERE id=' + packsAwaitingId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un pack en attente");
    } else {
      res.sendStatus(200);
    }
  });

})

// FETCH OK

router.get("/manage-packs-awaiting", (req, res) => {

  connexion.query('SELECT * FROM packsAwaiting', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les pack en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// FETCH data by ID OK

router.get("/manage-packs-awaiting/:id", (req, res) => {

  const packsAwaitingId = req.body.id

  connexion.query('SELECT * FROM packsAwaiting WHERE id=' + packsAwaitingId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un pack en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// UPDATE OK
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/manage-packs-awaiting", (req, res) => {

  const packsAwaitingId = req.body.id
  const packsAwaitingData = req.body

  connexion.query('UPDATE packsAwaiting SET ? WHERE id='+ packsAwaitingId, [packsAwaitingData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un pack en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})

module.exports = router