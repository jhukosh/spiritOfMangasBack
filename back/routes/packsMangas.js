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

// Post into packManga, creating new packmanga

router.post("/create-packsMangas", (req, res) => {

    const packsMangasData = req.body;
    console.log(packsMangasData);
    
    connexion.query('INSERT INTO packsMangas SET ?', [packsMangasData], (err, results) => {
  
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de la création d'un pack de mangas");
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    });
  
  })

// Delete a pack of manga in packMangas

router.delete("/manage-packsMangas", (req, res) => {

  const packsMangasId = req.body.id
  console.log(packsMangasId)

  connexion.query('DELETE FROM packsMangas WHERE id=' + packsMangasId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un pack");
    } else {

      res.sendStatus(200);
    }
  });

})
  
// Select * packs Mangas

router.get("/manage-packsMangas", (req, res) => {

  connexion.query('SELECT * FROM packsMangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les packs de Manga");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Select packs Mangas by ID


router.get("/manage-packsMangas/:id", (req, res) => {

  const packsMangasId = req.body.id

  connexion.query('SELECT * FROM packsMangas WHERE id=' + packsMangasId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un pack de manga");
    } else {

      res.sendStatus(200);
    }
  });

})

// UPDATE 
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/manage-packsMangas", (req, res) => {

  const packsMangasId = req.body.id
  const packsMangasData = req.body

  connexion.query('UPDATE packsMangas SET ? WHERE id='+ packsMangasId, [packsMangasData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un pack de manga");
    } else {

      res.sendStatus(200);
    }
  });
})


module.exports = router