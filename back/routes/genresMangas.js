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

router.post("/manage-genres-mangas/:genreId/:serieId", (req, res) => {

  const genresId = req.params.genreId;
  const serieId = req.params.serieId;
  
  connexion.query(`INSERT INTO genresSeries (genres_id, series_id) values (${genresId}, ${serieId})`, (err, results) => {


    if (err) {

      console.log(err, 'malheur');
      res.status(500).send("Erreur lors de la création d'un genresMangas");
    } else {
      console.log(results);
      res.status(200);
    }
  });

})

// DELETE OK

router.delete("/manage-genres-mangas/:id", (req, res) => {

  // const genresMangasId = req.body.id
  const genresSeriesId = req.params.id

  console.log(genresSeriesId)

  connexion.query(`DELETE FROM genresSeries WHERE id=${genresSeriesId}`, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un genresMangas");
    } else {
      res.status(200);
    }
  });

})

// FETCH OK

router.get("/manage-genres-mangas", (req, res) => {

  connexion.query('SELECT * FROM genresMangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les genres de mangas");
    } else {
      console.log(results);
      res.json(results);
      // res.sendStatus(200);
    }
  });

})

// FETCH data by ID OK

router.get("/manage-genres-mangas/:id", (req, res) => {

  const serieId = req.params.id

  connexion.query('SELECT genres_id, name, genresSeries.id FROM genresSeries INNER JOIN genres WHERE series_id= ' + serieId + ' AND genres.id=genresSeries.genres_id', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un genresMangas");
    } else {
      console.log(results);
      res.status(200).json(results);
      // res.sendStatus(200);
    }
  });

})

// UPDATE OK

router.put("/manage-genres-mangas", (req, res) => {

  const genresMangasId = req.body.id
  const genresMangasData = req.body

  connexion.query('UPDATE genresMangas SET ? WHERE id='+ genresMangasId, [genresMangasData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un genre de manga");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})

module.exports = router