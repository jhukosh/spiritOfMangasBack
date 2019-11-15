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

// Fetch all OK

router.get('/manage-commands-mangas',(req,res) => {

    connexion.query('SELECT * FROM mangasOrders', (err, results) => {

        if (err) {
  
            console.log(err);
            res.status(500).send("Erreur lors de l'affichage de tous les commandMangas");
          } else {
            console.log(results);
            res.sendStatus(200);
          }
    });
})

// Fetch data by ID OK

router.get("/manage-commands-mangas/:id", (req, res) => {

    const mangaOrderId = req.params.id
  
    connexion.query('SELECT * FROM mangasOrders WHERE id=' + mangaOrderId, (err, results) => {
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de l'affichage d'un mangaOrders");
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    });
  
})

// DELETE OK

router.delete("/manage-commands-mangas", (req, res) => {

    const mangaOrderId = req.body.id
  
    connexion.query('DELETE FROM mangasOrders WHERE id=' + mangaOrderId, (err, results) => {
  
  
      if (err) {
  
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'une série");
      } else {
        res.sendStatus(200);
      }
    });
  
})


// POST OK but server crashes after posting, some issue with the header to fix

router.post("/manage-commands-mangas", (req, res) => {

const mangaOrderData = req.body;

connexion.query('INSERT INTO mangasOrders SET ?', [mangaOrderData], (err, results) => {


    if (err) {

    console.log(err);
    res.status(500).send("Erreur lors de la création d'une série");
    } else {
    console.log(results);
    res.json(results);
    res.sendStatus(200);
    }
});

})

// PUT OK

router.put("/manage-commands-mangas", (req, res) => {

    const mangaOrderId = req.body.id
    const mangaOrderData = req.body

    connexion.query('UPDATE mangasOrders SET ? WHERE id=' + mangaOrderId, [mangaOrderData], (err, results) => {

    if (err) {

        console.log(err);
        res.status(500).send("Erreur lors de la modification de la série");
    } else {
        console.log(results);
        res.sendStatus(200);
    }
    });

})
module.exports = router