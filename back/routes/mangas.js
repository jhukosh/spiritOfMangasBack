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

// Post into Manga, creating new manga OK

router.post("/create-manga", (req, res) => {

  const mangaData = req.body;
  
  connexion.query('INSERT INTO mangas SET ?', [mangaData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un manga");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})


// Delete a Manga in Mangas OK

router.delete("/manage-mangas/:id", (req, res) => {

  const mangaId = req.params.id
  console.log(mangaId);

  connexion.query('DELETE FROM mangas WHERE id= ?', [mangaId], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un manga");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Fetch data of all manga in Mangas OK

router.get("/manage-mangas", (req, res) => {

  connexion.query('SELECT * FROM mangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas");
    } else {
      res.json(results);
      res.status(200);
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
      console.log(results);
      res.sendStatus(200);
    }
  });

})

//Fetch manga by title

router.get("/search-mangas/:title", (req, res) => {

  const mangaTitle = req.params.title;
  const search = '%' + mangaTitle + '%';

  connexion.query('SELECT * FROM mangas WHERE title LIKE ' + '"' + search + '"', (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération d'un manga");
    } else {
      console.log(results);
      res.json(results);
      res.status(200);
    }
  });

})

//Update manga

router.put("/manage-mangas", (req, res) => {

  const mangaId = req.body.id
  const modifiedManga = req.body

  connexion.query('UPDATE mangas SET ? WHERE id=' + mangaId, [modifiedManga], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
});

module.exports = router
