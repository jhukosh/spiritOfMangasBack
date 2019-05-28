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

router.post("/manage-genresMangas", (req, res) => {

  const genresMangasData = req.body;
  
  connexion.query('INSERT INTO genresMangas SET ?', [genresMangasData], (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un genresMangas");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// DELETE OK

router.delete("/manage-genresMangas", (req, res) => {

  const genresMangasId = req.body.id
  console.log(genresMangasId)

  connexion.query('DELETE FROM genresMangas WHERE id=' + genresMangasId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un genresMangas");
    } else {
      res.sendStatus(200);
    }
  });

})

// FETCH OK

router.get("/manage-genresMangas", (req, res) => {

  connexion.query('SELECT * FROM genresMangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les genresMangas");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// FETCH data by ID OK

router.get("/manage-genresMangas/:id", (req, res) => {

  const genresMangasId = req.body.id

  connexion.query('SELECT * FROM genresMangas WHERE id=' + genresMangasId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un genresMangas");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// UPDATE OK
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/manage-genresMangas", (req, res) => {

  const genresMangasId = req.body.id
  const genresMangasData = req.body

  connexion.query('UPDATE genresMangas SET ? WHERE id='+ genresMangasId, [genresMangasData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un genresMangas");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})

module.exports = router