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

// Post into states, creating new states OK

router.post("/manage-states/:name", (req, res) => {

    const stateData = req.params.name;
    console.log(stateData)
    connexion.query(`INSERT INTO states (name) VALUES ("${stateData}")`, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de l'état");
      } else {
        console.log(results);
        res.json(results);
      }

    });
})


// Delete a state OK

router.delete("/manage-states/:id", (req, res) => {

  const stateId = req.params.id

  connexion.query('DELETE FROM states WHERE id='+ stateId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression de l'état");
    } else {
      res.sendStatus(200);
    }

  });
})

// Select all states OK

router.get("/manage-states", (req,res) => {
  connexion.query('SELECT * FROM states', (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage des états")
    } else {
      console.log(results)
      res.json(results);
    }

  });
})

// Select an etat by Id OK

router.get("/manage-states/:id", (req,res) => {

  const stateId = req.params.id

     connexion.query('SELECT * FROM states WHERE id=' + stateId, (err, results) => {

       if (err) {
         console.log(err);
         res.status(500).send("Erreur lors de l'affichage de l'état")
       } else {
         console.log(results)
         res.json(results);
         res.sendStatus(200);
       }

     });
    })

// Change name of etat OK (requires to write the id of the item to modify)

router.put("/manage-states", (req,res) => {
  const stateId = req.body.id;
  const stateUpdate = req.body;

  connexion.query('UPDATE states SET ? WHERE id=' + stateId, stateUpdate, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification");
    } else {
      console.log(results);
      res.sendStatus(200)
    }

  })
})

module.exports = router 