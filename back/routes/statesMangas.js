const express = require("express")
const router = express.Router()
const connexion = require('../conf');

// Body parser module

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

/* GET */

router.get("/manage-states-stock", (req, res) => {

    connexion.query('SELECT * FROM statesMangas', (err, results) => {
  
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

// Get mangas declared as favorite in back-office

router.get("/get-favorites", (req, res) => {

  connexion.query(`SELECT title, tome, photoCover, tome, resume, promo, promoValue, prixTTC 
                  FROM statesMangas 
                  JOIN mangas ON mangas_id=mangas.id
                  WHERE favorite=1`, (err, results) => {
      if(err) {
        console.log(err)
        res.status(500).send("Erreur lors de la récupération des mangas en promotion")
      } else {
        console.log(results)
        res.status(200).json(results)
      }
  })
})


// Fetch all mangas in promotion

router.get("/get-promotions", (req, res) => {

  connexion.query(`SELECT title, tome, photoCover, tome, resume, promo, promoValue, prixTTC 
                  FROM statesMangas 
                  JOIN mangas ON mangas_id=mangas.id
                  WHERE promo=1`, (err, results) => {
      if(err) {
        console.log(err)
        res.status(500).send("Erreur lors de la récupération des mangas en promotion")
      } else {
        console.log(results)
        res.status(200).json(results)
      }
  })
})


// Fetch mangas in promotion by ID

router.get("/get-promotions/:id", (req, res) => {

  const mangaId= req.params.id

  connexion.query(`SELECT title, tome, photoCover, tome, resume, promo, promoValue, prixTTC 
                  FROM statesMangas 
                  JOIN mangas ON mangas_id=mangas.id
                  WHERE promo=1 AND mangas.id=${mangaId}`, (err, results) => {
      if(err) {
        console.log(err)
        res.status(500).send("Erreur lors de la récupération des mangas en promotion")
      } else {
        console.log(results)
        res.status(200).json(results)
      }
  })
})

/* POST */

router.post("/manage-states-stock", (req, res) => {
    const dataBody = req.body;

    connexion.query('INSERT INTO statesMangas SET ?', [dataBody], (err, results) => {

        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la création d'un état");
        } else {
          console.log(results);
          res.sendStatus(200);
        }
    });
})

/* PUT */

// Declare a manga as favorite (to display in home page header)

router.put("/promote-on-home/:id", (req, res) => {
  const mangaId = req.params.id

  connexion.query(`UPDATE statesMangas SET favorite=1 WHERE mangas_id=${mangaId}`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un état");
    } else {
      res.status(200)
    }
  })
})

router.put("/unpromote-on-home/:id", (req, res) => {
  const mangaId = req.params.id

  connexion.query(`UPDATE statesMangas SET favorite=0 WHERE mangas_id=${mangaId}`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un état");
    } else {
      res.status(200)
    }
  })
})


/* DELETE */


module.exports = router