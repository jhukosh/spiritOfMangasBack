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

// Post into UsersDB, creating new user OK

router.post("/manage-wishlist-mangas", (req, res) => {

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

// PUT OK

router.put("/manage-wishlist-mangas", (req, res) => {

  const wishListMangasId = req.body.id
  const wishListData = req.body

  connexion.query('UPDATE mangasAwaiting SET ? WHERE id='+ wishListMangasId, [wishListData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un manga en attente");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})

// Fetch data of all mangasAwaiting OK

router.get("/manage-wishlist-mangas", (req, res) => {

  connexion.query('SELECT * FROM mangasAwaiting', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas en attente");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

// Fetch data by ID of one mangaOrderAwaiting

router.get("/manage-wishlist-mangas/:id", (req, res) => {

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

// Delete an user in UsersDB OK

router.delete("/manage-wishlist-mangas", (req, res) => {

  const mangaOrderAwaitingId = req.body.id

  connexion.query('DELETE FROM mangasAwaiting WHERE id=' + mangaOrderAwaitingId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppresion d'un orderMangaAwaiting");
    } else {
      res.sendStatus(200);
    }
  });

})

module.exports = router