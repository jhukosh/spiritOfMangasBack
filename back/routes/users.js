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

// Query
// Post into UsersDB

router.post("/create-profile", (req, res) => {

  const userData = req.body;
  
  // connexion à la base de données, et insertion de l'employé
  connexion.query('INSERT INTO Users SET ?', userData, (err, results) => {


    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      console.log('Hey je suis un console log!',results)
      res.sendStatus(200);
    }
  });

})

// Delete in UsersDB

router.delete("/delete-profile", (req, res) => {

  const userId = req.query.id
  console.log(userId)
  
  // connexion à la base de données, et insertion de l'employé
  connexion.query('DELETE FROM Users WHERE id=' + userId, (err, results) => {


    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      console.log('Hey je suis un console log!',results)
      res.sendStatus(200);
    }
  });

})

module.exports = router