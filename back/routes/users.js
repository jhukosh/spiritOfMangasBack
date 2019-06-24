const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

const connexion = require('../conf');
const jwtSecret = require("../jwtSecret")

// Body parser module

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());


// Verify token function

const verifToken = req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1]
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
};

/* function from tuto 

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1]; 
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

*/

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
      res.status(500).send("Erreur lors de la suppression de l'utilisateur");
    } else {
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

// Fetch user by email

router.get('/get-users/:email', (req, res) => {
  const userMail = "'" + req.params.email + "'"
  console.log('mail : ' + userMail)

  connexion.query(`SELECT * FROM users WHERE email=${userMail}`, (err, results) => {
    if (err) {
      console.error(err)
      res.status(500).send("Erreur lors de la récupération de l'utilisateur")
    } else {
      res.status(200).json(results)
      console.log(results)
    }
  })
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

// Login standard pour tous les users qui ont déjà un profil

router.post("/login", (req, res) => {
  const userData = req.body
  const userEmail = req.body.email
  const userPw = req.body.password

  connexion.query(`SELECT email FROM users WHERE email = '${userEmail}'`, (err, results) => {
    if (results.length === 0) {
      res.status(401).send("Vous n'avez pas de compte")
    } else {
      connexion.query(`SELECT password FROM users WHERE email = '${userEmail}' AND password = '${userPw}'`, (err, results) => {
        if(results.length === 0) {
          console.error(err)
          res.status(401).send("Mauvais mot de passe")
        } else {
          console.log("T'existes bravo")
          const token = jwt.sign(userData, jwtSecret, (err, token) => {
            res.json({
              token
            })
          })
          res.header("Access-Control-Expose-Headers", "x-access-token")
          res.set("x-access-token", token)
          res.status(200)
        }
      })
    }
  })
})

// vérifier le token pour les pages protégées (type BO ou panier, commandes, infos persos...)

router.post("/protected", (req, res, next) => {
  const token = verifToken(req);
  
  console.log('protected',req.headers);
  const objectTests = { //data appelées par la bdd 
    test: 'ok',
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if(err) {
      console.log(err)
      return res.status(200).send({mess: "Tu n'as pas accès aux données"})
    }
    console.log('decode',decoded)
    return res.status(200).send({mess: 'Données du user', objectTests })
  })
})

module.exports = router