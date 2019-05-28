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

router.post("/manage-packs-orders", (req, res) => {

  const commandesPacksData = req.body;
  
  connexion.query('INSERT INTO packsOrders SET ?', [commandesPacksData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'une commande de pack");
    } else {

      res.sendStatus(200);
    }
  });

})

// DELETE OK 

router.delete("/manage-packs-orders", (req, res) => {

  const commandesPacksId = req.body.id

  connexion.query('DELETE FROM packsOrders WHERE id=' + commandesPacksId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'une commande de pack");
    } else {
      res.sendStatus(200);
    }
  });

})

// FETCH OK 

router.get("/manage-packs-orders", (req, res) => {

  connexion.query('SELECT * FROM packsOrders', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de toutes les commandes de packs");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// FETCH data by ID OK

router.get("/manage-packs-orders/:id", (req, res) => {

  const commandesPacksId = req.params.id

  connexion.query('SELECT * FROM packsOrders WHERE id=' + commandesPacksId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'une commande de pack");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

// UPDATE OK !
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/manage-packs-orders", (req, res) => {

  const commandesPacksId = req.body.id
  const commandesPacksData = req.body

  connexion.query('UPDATE packsOrders SET ? WHERE id='+ commandesPacksId, [commandesPacksData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'une commande de pack");
    } else {

      res.sendStatus(200);
    }
  });
})

module.exports = router