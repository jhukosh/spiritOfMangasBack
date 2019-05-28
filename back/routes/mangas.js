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

// Post into Manga, creating new manga

router.post("/manage-mangas"), (req,res) => {

  const mangaData = req.body;
  console.log(mangaData);

  connexion.query('INSERT INTO mangas SET ?', [mangaData], (err,results) => {
    
    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un manga");
    } else {
      console.log(results)
      res.sendStatus(200);
    }
  });
}

// Delete a Manga in Mangas

router.delete("/manage-mangas", (req, res) => {

  const mangaId = req.query.id
  console.log(userId)

  connexion.query('DELETE FROM manga WHERE id=' + mangaId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur");
    } else {
      console.log(results)
      res.sendStatus(200);
    }
  });

})

// Fetch data of all manga in Mangas

router.get("/manage-mangas", (req, res) => {

  connexion.query('SELECT * FROM mangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas");
    } else {
      res.json(results)
      console.log(results)
      res.sendStatus(200);
    }
  });

})

// Fetch data by ID of one user in UsersDB

router.get("/manage-mangas/:id", (req, res) => {

  const mangaId = req.body.id

  connexion.query('SELECT * FROM mangas WHERE id=' + mangaId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un manga");
    } else {
      res.json(results)
      console.log(results)
      res.sendStatus(200);
    }
  });

})

module.exports = router