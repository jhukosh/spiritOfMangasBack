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

router.post("/create-profile", (req, res) => {

  const userData = req.body;
  
  connexion.query('INSERT INTO users SET ?', userData, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Delete an user in UsersDB

router.delete("/manage-users", (req, res) => {

  const userId = req.body.id
  console.log(userId)

  connexion.query('DELETE FROM users WHERE id=' + userId, (err, results) => {


    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Fetch data of all users in UsersDB

router.get("/manage-users", (req, res) => {

  connexion.query('SELECT * FROM users', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les utilisateurs");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

// Fetch data by ID of one user in UsersDB

router.get("/manage-users/:id", (req, res) => {

  const userId = req.params.id

  connexion.query('SELECT * FROM users WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un utilisateur");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

// Change pseudo of an user in UsersDB
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/edit-profile", (req, res) => {

  const userId = req.body.id
  const newUserPseudo = req.body.pseudo

  connexion.query('UPDATE users SET pseudo =' + newUserPseudo + ' WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });

})

module.exports = router