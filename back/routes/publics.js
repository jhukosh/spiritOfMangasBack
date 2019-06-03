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

router.post("/manage-publics", (req, res) => {

  const publicData = req.body;
  console.log(publicData);
  
  connexion.query('INSERT INTO publics SET ?', [publicData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un public");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// PUT OK

router.put("/manage-publics", (req, res) => {

    const publicId = req.body.id
    const publicData = req.body
  
    connexion.query('UPDATE publics SET ? WHERE id=' + publicId, [publicData], (err, results) => {
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de la modification du public");
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    });
  
  })

// DELETE OK

router.delete("/manage-publics", (req, res) => {

  const publicId = req.body.id

  connexion.query('DELETE FROM publics WHERE id=' + publicId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un public");
    } else {
      res.sendStatus(200);
    }
  });

})

// FETCH OK

router.get("/manage-publics", (req, res) => {

  connexion.query('SELECT * FROM publics', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les publics");
    } else {
      console.log(results);
      res.json(results);
      res.status(200);
    }
  });

})

// FETCH data by id OK

router.get("/manage-publics/:id", (req, res) => {

  const publicId = req.params.id
  console.log(publicId);

  connexion.query('SELECT * FROM publics WHERE id=' + publicId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un public");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

module.exports = router