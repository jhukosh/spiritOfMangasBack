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
  
  connexion.query('INSERT INTO Users SET ?', userData, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {

      res.sendStatus(200);
    }
  });

})

// Delete an user in UsersDB

router.delete("/delete-profile", (req, res) => {

  const userId = req.query.id
  console.log(userId)

  connexion.query('DELETE FROM Users WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {

      res.sendStatus(200);
    }
  });

})

// Fetch data of all users in UsersDB

router.get("/display-allProfile", (req, res) => {

  connexion.query('SELECT * FROM Users', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les utilisateurs");
    } else {

      res.sendStatus(200);
    }
  });

})

// Fetch data by ID of one user in UsersDB

router.get("/display-profile/:id", (req, res) => {

  const userId = req.body.id

  connexion.query('SELECT * FROM Users WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un utilisateur");
    } else {

      res.sendStatus(200);
    }
  });

})

// Change pseudo of an user in UsersDB
// IMPORTANT : new value MUST in req must be push with the '' to match MYSQL syntax
// PUT method is better than POST when working with existing value

router.put("/change-profile", (req, res) => {

  const userId = req.body.id
  const newUserPseudo = req.body.pseudo

  connexion.query('UPDATE Users SET pseudo ='+newUserPseudo + ' WHERE id='+userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données");
    } else {

      res.sendStatus(200);
    }
  });

})

module.exports = router