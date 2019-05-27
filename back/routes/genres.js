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

// Post into GenreDB, creating new genre

router.post("/manage-genres", (req, res) => {

  const genreData = req.body;

  connexion.query('INSERT INTO genres SET ?', genreData, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création du genre");
    } else {
      console.log("ça fonctionne bien")
      res.sendStatus(200); 
    }
  });

})


// Delete a genre in genreDB

  router.delete("/manage-genres", (req, res) => {

    const genreId = req.body.id
    console.log(genreId)

    connexion.query('DELETE FROM genres WHERE id='+ genreId, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression du genre");
      } else {
        console.log("ça fonctionne bien")
        res.sendStatus(200);
      }

    });
  })

// Select All genres 

  router.get("/manage-genres", (req,res) => {
    connexion.query('SELECT * FROM genres', (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'affichage des genres")
      } else {
        console.log("ça fonctionne bien")
        res.sendStatus(200);
      }

    });
  })


// Select a genre by id  

  router.get("/manage-genre", (req,res) => {

    const genreId = req.body.id

       connexion.query('SELECT * FROM genres WHERE id=' + genreId, (err, results) => {

         if (err) {
           console.log(err);
           res.status(500).send("Erreur lors de l'affichage du genre")
         } else {
           console.log(genreId)
           res.sendStatus(200);
         }

       });
     })

// Change name of an genre in GenresDB

  router.put("/manage-genres", (req,res) => {
    const genreId = req.body.id
    const newGenreName = req.body.name

    connexion.query('UPDATE genres SET name=' + newGenreName + 'WHERE id='+genreId, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification");
      } else {
        console.log('je crois bien que ca marche');
        res.sendStatus(200)
      }

    })
  })

module.exports = router