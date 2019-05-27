const express = require("express")
const router = express.Router()
const connexion = require('../conf');

// Body parser module

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

// *******************************************
// ****************** Query ******************
// *******************************************

// Post into etatsDB, creating new etat

router.post("/manage-states", (req, res) => {

    const stateData = req.body;
  
    connexion.query('INSERT INTO states SET ?', stateData, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de l'état");
      } else {
        console.log("ça fonctionne bien")
        res.sendStatus(200); 
      }

    });
})


// Delete an etat

router.delete("/manage-states", (req, res) => {

  const stateId = req.body.id
  console.log(stateId)

  connexion.query('DELETE FROM states WHERE id='+ stateId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression de l'état");
    } else {
      console.log("ça fonctionne bien")
      res.sendStatus(200);
    }

  });
})

// Select all etats

router.get("/manage-states", (req,res) => {
  connexion.query('SELECT * FROM states', (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage des états")
    } else {
      console.log("ça fonctionne bien")
      res.sendStatus(200);
    }

  });
})

// Select an etat by Id 

router.get("/manage-state", (req,res) => {

  const stateId = req.body.id

     connexion.query('SELECT * FROM states WHERE id=' + stateId, (err, results) => {

       if (err) {
         console.log(err);
         res.status(500).send("Erreur lors de l'affichage de l'état")
       } else {
         console.log(stateId)
         res.sendStatus(200);
       }

     });
    })

// Change name of etat
// Add '' around the value when you need to test with postman :)

router.put("/manage-states", (req,res) => {
  const stateId = req.body.id
  const newStateName = req.body.name

  connexion.query('UPDATE states SET name=' + newStateName + 'WHERE id='+stateId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification");
    } else {
      console.log('je crois bien que ca marche');
      res.sendStatus(200)
    }

  })
})



module.exports = router 