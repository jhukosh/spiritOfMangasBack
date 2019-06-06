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

router.post("/manage-series", (req, res) => {

  const seriesData = req.body;
  console.log(seriesData);
  
  connexion.query('INSERT INTO series SET ?', [seriesData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'une série");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// PUT OK

router.put("/manage-series", (req, res) => {

    const seriesId = req.body.id
    const seriesData = req.body.data
    
  
    connexion.query('UPDATE series SET ? WHERE id=' + seriesId, [seriesData], (err, results) => {
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de la modification de la série");
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    });
  
  })

// DELETE OK

router.delete("/manage-series", (req, res) => {

  const serieId = req.body.id

  connexion.query('DELETE FROM series WHERE id=' + serieId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'une série");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// FETCH OK

router.get("/manage-series", (req, res) => {

  connexion.query('SELECT * FROM series', (err, results) => {

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

// FETCH data by id OK

router.get("/manage-series/:id", (req, res) => {

  const serieId = req.params.id

  connexion.query('SELECT * FROM series WHERE id=' + serieId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'une série");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

module.exports = router