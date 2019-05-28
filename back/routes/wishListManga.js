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

// Post into UsersDB, creating new user 

router.post("/manage-wishListManga", (req, res) => {

    const wishListMangaData = req.body;
    
    connexion.query('INSERT INTO mangasAwaiting SET ?', wishListMangaData, (err, results) => {
  
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de l'import dans la liste d'attente");
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    });
  
})

// Fetch data of all mangasAwaiting 

router.get("/manage-wishListManga", (req, res) => {

  connexion.query('SELECT * FROM mangasAwaiting', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Fetch data by ID of one mangaOrderAwaiting

router.get("/manage-wishListManga/:id", (req, res) => {

  const mangaOrderAwaitingId = req.params.id

  connexion.query('SELECT * FROM mangasAwaiting WHERE id=' + mangaOrderAwaitingId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un mangaOrderAwaiting");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

// Delete an user in UsersDB

router.delete("/manage-wishListManga", (req, res) => {

  const mangaOrderAwaitingId = req.body.id
  console.log(mangaOrderAwaitingId)

  connexion.query('DELETE FROM mangasAwaiting WHERE id=' + mangaOrderAwaitingId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppresion d'un orderMangaAwaiting");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

module.exports = router