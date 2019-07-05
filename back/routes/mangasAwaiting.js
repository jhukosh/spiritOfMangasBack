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

router.post("/manage-mangas-awaiting", (req, res) => {

    const wishListMangaData = req.body;
    
    connexion.query(`INSERT INTO mangasAwaiting (mangas_id, users_id) VALUES (${wishListMangaData[0]}, ${wishListMangaData[1]})`, (err, results) => {
  
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

router.put("/manage-mangas-awaiting", (req, res) => {

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

router.get("/manage-mangas-awaiting", (req, res) => {

  connexion.query('SELECT * FROM mangasAwaiting', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas en attente");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });

})

// Fetch mangas datas and users datas from mangasAwaiting table

router.get("/awaiting-users-mangas", (req, res) => {

  connexion.query('SELECT firstname, lastname, email, title, tome FROM mangasAwaiting JOIN users ON users_id=users.id JOIN mangas ON mangas_id=mangas.id', (err, results) => {

    if(err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les mangas en attente");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  })

})

// Fetch data by ID of one mangaOrderAwaiting

router.get("/manage-mangas-awaiting/:id", (req, res) => {

  const mangaOrderAwaitingId = req.params.id

  connexion.query('SELECT * FROM mangasAwaiting WHERE id=' + mangaOrderAwaitingId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un mangaOrderAwaiting");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });

})

// Delete an user in UsersDB OK

router.delete("/manage-mangas-awaiting", (req, res) => {

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