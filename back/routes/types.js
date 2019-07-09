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

// Post into Types, creating new Type OK

router.post("/manage-types", (req, res) => {

    const typeData = req.body;
  
    connexion.query('INSERT INTO types SET ?', [typeData], (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création du type");
      } else {
        console.log(results);
        res.sendStatus(200); 
      }
    });
  
  })

// Delete an Type in TypesDB OK


router.delete("/manage-types", (req, res) => {

    const typeId = req.body.id
    console.log(typeId)

    connexion.query('DELETE FROM types WHERE id='+ typeId, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression du type");
      } else {
        res.sendStatus(200);
      }

    });
  })

// Select All Types OK

router.get("/manage-types", (req,res) => {
    connexion.query('SELECT * FROM types', (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'affichage des types")
      } else {
        console.log(results);
        res.status(200);
        res.json(results);
      }

    });
  })
    

// Select a type by id Ok

router.get("/manage-types/:id", (req,res) => {

    const typeId = req.params.id

       connexion.query('SELECT * FROM types WHERE id =' + typeId, (err, results) => {

         if (err) {
           console.log(err);
           res.status(500).send("Erreur lors de l'affichage du type")
         } else {
           console.log(results)
           res.json(results);
           res.status(200);
         }

       });
     })



// Change name of a type in TypesDB
// Add '' around the value when you need to test with postman :)

router.put("/manage-types", (req,res) => {
    const typeId = req.body.id
    const newTypeName = req.body.name

    connexion.query('UPDATE types SET name=' + newTypeName + 'WHERE id='+typeId, (err, results) => {

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