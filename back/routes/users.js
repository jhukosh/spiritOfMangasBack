const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

const connexion = require('../conf');
const jwtSecret = require("../jwtSecret")
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

// Body parser module

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

let transporter = nodemailer.createTransport({
  host: 'smtp.mail.gmail.com',
  port: 465,
  service:'gmail',
  secure: false,
  auth: {
      user: "juliahukoshi@gmail.com",
      pass: "symetry1988"
  }, 
  debug: false,
  logger: true
});

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


// *******************************************  
// ****************** Query ******************
// *******************************************

// Post into UsersDB, creating new user 

router.post("/create-profile", (req, res) => {

  const userData = req.body;
  const userMail = req.body.email

  connexion.query(`SELECT email FROM users WHERE email = '${userMail}'`, (err, results) => {
    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la vérification de l'email");
    } else if (results.length > 0) {
      res.status(409, 'L\'email existe déja dans la base de données')
    } 
    else {
      bcrypt.hash(userData.password, 10, (err, hash) => {
        userData.password = hash;
        if (err) {
          res.send(err)
        }
        payload = {
          "mail": userMail,
          "password": userData.password,
        }
        const token = jwt.sign(payload, jwtSecret, (err, token) => {
          userData.forgetPassword = token;
        
        connexion.query('INSERT INTO users SET ?', [userData], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la creation de l'utilisateur");
        }
        else {
          res.status(200).json(results)
        } 
      });
    })
    })
  }
});
})

// Improve route to send an email

// router.post("/", (req, res) => {

//   const userData = req.body['0'];
//   console.log(userData)
//   const userMail = req.body['0'].mail
//   const userDataAddress = req.body['1'];

//   connection.query(`SELECT mail FROM users WHERE mail = '${userMail}'`, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la vérification de l'email");
//     } else if (results.length > 0) {
//       console.log("L'email existe déjà")
//       res.status(409, 'L\'email existe déja dans la base de donnée')
//     } 
//     else {
//       // User bcrypt package to crypt user password
//       bcrypt.hash(userData.password, 10, (err, hash) => {
//         userData.password = hash; // Hash user password
//         if (err) {
//           res.send('error ', err)
//         }
//         payload = {
//           "mail": userMail,
//           "password": userData.password,
//         }
//         const token = jwt.sign(payload, jwtSecret, (err, token) => {
//           userData.forgotPassword = token;
//           connection.query('INSERT INTO users SET ?', userData, (err, results) => {
//             if (err) {
//               console.log(err);
//               res.status(500).send("Erreur lors de la création de l'utilisateur");
//             }
//             else {
//               connection.query(`SELECT idUsers FROM users WHERE mail = '${userMail}'`, (err, results) => {
//                 userDataAddress.idUsers = results['0'].idUsers;
//                 connection.query('INSERT INTO userAddress SET ?', [userDataAddress], (err, results) => {
//                   if (err) {
//                     console.log(err);
//                     res.status(500).send("Erreur lors de la création de l'utilisateur");
//                   }
//                   else {
//                     transporter.sendMail({
//                       from: "OhMyFood", // Expediteur
//                       to: userMail, // Destinataires
//                       subject: "Création de votre compte", // Sujet
//                       text: `Merci d'avoir créé un compte chez OhMyFood, vous pourrez désormais accéder au service de commande en ligne de l'application avec votre adresse mail ${userMail}`, // plaintext body
//                     }, (error, response) => {
//                         if(error){
//                             console.log(error);
//                         }else{
//                             console.log("Message sent: " + response.message);
//                         }
//                     });
//                     res.sendStatus(200)
//                   } 
//                 });
//               });
//             } 
//           });
//         });
//       })
//     } 
//   });
// });



// Delete an user in UsersDB

router.delete("/delete-users/:id", (req, res) => {
  console.log('BODY',req.params.id)
  
  const userId = req.params.id
  console.log(userId)

  connexion.query('DELETE FROM users WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la suppression de l'utilisateur");
    } else {
      res.status(200).json(results);
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
      res.json(results)
      res.status(200);
    }
  }); 

})

// Fetch user by email

router.get('/display-user/:email', (req, res) => {
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

// Fetch data by ID of one user in UsersDB

router.get("/get-users/:id", (req, res) => {
                                          
  const userId = req.params.id

  connexion.query('SELECT * FROM users WHERE id=' + userId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un utilisateur");
    } else {
      console.log(results);
      res.json(results);
      res.status(200);
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
      res.sendStatus(200);
    }
  });

})

// Login standard pour tous les users qui ont déjà un profil

router.post("/login", (req, res) => {
  const userData = req.body
  const userEmail = req.body.email
  const userPw = req.body.password

  connexion.query(`SELECT password FROM users WHERE email = '${userEmail}'`, (err, results) => {
    if (results[0].length === 0) {
      res.status(401).send("Vous n'avez pas de compte");
    }
    if (err) {
      res.send('error ' + err);
    } else {

      if (bcrypt.compareSync(userPw, results[0].password) || userPw === results[0].password) {

      connexion.query(`SELECT * FROM users WHERE email="${userEmail}" AND password="${results[0].password}"`, (err, results) => {
        if (err) {
          res.status(500).send("Email inexistant ou mauvais mot de passe");
        } else {
          const tokenUserInfo = {id: results[0].id, lastname: results[0].lastname, firstname: results[0].firstname, email: userEmail, droits: results[0].droits}
          const token = jwt.sign(tokenUserInfo, jwtSecret, (err, token) => {
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

// forgotten password

router.post("/forgottenPassword", (req, res) => {
  const userMail = req.body.email;

  connexion.query(`SELECT email, forgetPassword FROM users WHERE email = '${userMail}'`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la vérification de l'email");
    } else {

      transporter.sendMail({
        from: "Spirit of manga", // Expediteur
        to: userMail, // Destinataire
        subject: "Récupération de votre mot de passe", // Sujet
        text: `Ce mail vous est envoyé par Spirit Of manga. Cliquez sur le lien suivant pour continuer la procédure : 
        http://localhost:4200/front/TzApeyaNpBzRJmGrit59K4NJ5Cy/${results[0].forgetPassword}`, // plaintext body
      }, (error, response) => {
          if(error) {
            console.log(error);
          } else {
            console.log("Message sent: " + response.message);
            res.status(200)
          }
      });
    }
  });
});

// set new password

router.put("/new-password", (req, res) => {
  const userData = req.body
  const userToken = userData.email

  bcrypt.hash(userData.password, 10, (err, hash) => {
    userData.password = hash;
    if (err) {
      res.send(err)
    }
    payload = {
      "mail": userData.email,
      "password": userData.password,
    }
    const token = jwt.sign(payload, jwtSecret, (err, token) => {
      userData.forgetPassword = token;
    
    connexion.query(`UPDATE users SET password='${userData.password}', forgetPassword='${userData.forgetPassword}' WHERE forgetPassword='${userToken}'`, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la creation de l'utilisateur");
      }
      else {
        res.status(200).json(results)
      } 
    });
  })
})



})

module.exports = router