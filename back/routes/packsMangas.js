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

// Post into packManga, creating new packmanga OK

router.post("/create-packs-mangas", (req, res) => {

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

// Delete a pack of manga in packMangas OK

router.delete("/manage-packs-mangas/:id", (req, res) => {

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

//Delete a Manga in a PACK 

        // DELETE FROM packsMangas WHERE `mangas_id` = BODY ? AND `packs_id` =  BODY 2?;

  router.delete("/manage-packs-mangas/:idPack/:idManga", (req, res) => {

    const packID = req.params.idPack
    const mangaID = req.params.idManga
    console.log(packID)
    console.log(mangaID)

    connexion.query('DELETE FROM packsMangas WHERE `packs_id`= ' + packID + ' AND `mangas_id`= ' + mangaID, (err, results) => {

      if (err) {

        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un pack");
      } else {
        console.log(
          'results', results
        );
        
        res.sendStatus(200);
      }
    });

  })
          
// Select * packs Mangas OK

router.get("/manage-packs-mangas", (req, res) => {

  connexion.query('SELECT * FROM packsMangas', (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage de tous les packs de Manga");
    } else {
      console.log(results);
      res.json(results);
      res.sendStatus(200);
    }
  });

})

// Select packs Mangas by ID OK


router.get("/manage-packs-mangas/:id", (req, res) => {

  const packsMangasId = req.params.id

  connexion.query('SELECT * FROM packsMangas WHERE packs_id=' + packsMangasId, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de l'affichage d'un pack de manga");
    } else {
      console.log(results);
      res.json(results);
      res.status(200);
    }
  });

})

// UPDATE OK
// PUT method is better than POST when working with existing value

router.put("/manage-packs-mangas", (req, res) => {

  const packsMangasId = req.body.id
  const packsMangasData = req.body

  connexion.query('UPDATE packsMangas SET ? WHERE id='+ packsMangasId, [packsMangasData], (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Erreur lors de la modification de données d'un pack de manga");
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
})


module.exports = router