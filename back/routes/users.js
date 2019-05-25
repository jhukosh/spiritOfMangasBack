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

module.exports = router