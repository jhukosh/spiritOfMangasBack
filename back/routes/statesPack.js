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

router.post("/manage-statesPack", (req, res) => {

    const stateData = req.body;
  
    connexion.query('INSERT INTO statesPack SET ?', stateData, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de l'état de packs");
      } else {
        console.log(results);
        res.status(200); 
      }

    });
})


// Delete a state OK

router.delete("/manage-statesPack", (req, res) => {

  const stateId = req.body.id

  connexion.query('DELETE FROM statesPack WHERE id='+ stateId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression de l'état du pack");
    } else {
      res.sendStatus(200);
    }

  });
})

// Select all states OK

router.get("/manage-statesPack", (req,res) => {
  connexion.query('SELECT * FROM statesPack', (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage des états des packs")
    } else {
      console.log(results)
      res.json(results);
      res.status(200);
    }

  });
})

// Select an etat by Id OK

router.get("/manage-statesPack/:id", (req,res) => {

  const stateId = req.params.id

     connexion.query('SELECT * FROM statesPack WHERE id=' + stateId, (err, results) => {

       if (err) {
         console.log(err);
         res.status(500).send("Erreur lors de l'affichage de l'état du pack")
       } else {
         console.log(results)
         res.json(results);
         res.status(200);
       }

     });
    })

// Change name of etat OK (requires to write the id of the item to modify)

router.put("/manage-statesPack", (req,res) => {
  const stateId = req.body.id;
  const stateUpdate = req.body;

  connexion.query('UPDATE statesPack SET ? WHERE id=' + stateId, stateUpdate, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un état de pack");
    } else {
      console.log(results);
      res.sendStatus(200)
    }

  })
})

module.exports = router 