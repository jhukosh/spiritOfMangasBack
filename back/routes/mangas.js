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

// Post into Manga, creating new manga

router.post("/manga"), (req,res) => {

  const mangaData = req.body;

  connexion.query('INSERT INTO Mangas SET ?', mangaData, (err,result) => {
    
    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {

      res.sendStatus(200);
    }
  });
}

// Delete a Manga in Mangas

router.delete("/manga", (req, res) => {

  const mangaId = req.query.id
  console.log(userId)

  connexion.query('DELETE FROM Manga WHERE id=' + mangaId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur");
    } else {

      res.sendStatus(200);
    }
  });

})