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


// GET mangasStates by ID 

router.get("/manage-states-mangas/:id", (req, res) => {

  const mangaId= req.params.id

  connexion.query('SELECT * FROM statesMangas WHERE mangas_id =' + mangaId, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de toutes les séries");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });

})

// Get mangas declared as favorite in back-office

router.get("/get-favorites", (req, res) => {

  connexion.query(`SELECT mangas_id, title, tome, photoCover, tome, resume, promo, promoValue, prixTTC 
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

  connexion.query(`SELECT mangas_id, title, tome, photoCover, tome, resume, promo, promoValue, prixTTC 
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

  connexion.query(`SELECT statesMangas.id, title, tome, photoCover, tome, resume, stock, promo, promoValue, prixTTC 
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

// Get orders by States and id. Panier

router.get("/get-mangas-order/:mangaId/:statesId", (req, res) => {

  const mangaId= req.params.mangaId
  const statesId = req.params.statesId
  
  connexion.query(`SELECT states.name, statesMangas.prixTTC, mangas.title, 
                  mangas.tome, mangas.weight, mangas.photoCover, mangas.auteur 
                  FROM statesMangas 
                  JOIN states 
                  ON states.id = statesMangas.states_id 
                  JOIN mangas  
                  ON mangas.id = statesMangas.mangas_id 
                  WHERE mangas.id = ${mangaId} and statesMangas.id = ${statesId}`, (err,results) => {

                    if(err){
                      res.status(500).send("Erreur lors de la récupération des mangas")
                    } else {
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

  connexion.query(`SELECT * FROM statesMangas WHERE favorite=1`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un état");
    } else if (results.length >= 5) {
      console.log('Vous avez atteint le nombre maximum de favoris')
      res.send(409)
    } else {
      connexion.query(`UPDATE statesMangas SET favorite=1 WHERE mangas_id=${mangaId}`, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la création d'un état");
        } else {
          res.status(200)
        }
      })
    }
  })
})

router.put("/unpromote-on-home/:id", (req, res) => {
  const mangaId = req.params.id
  console.log('id or not id ? ' + mangaId)

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