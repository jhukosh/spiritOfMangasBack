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

// GET ALL THE ITEMS IN THE TABLE


router.get("/manage-final-order-archive", (req,res) => {

    let archivePackVariable = [];
    
    connexion.query(`SELECT packs.namePack, packs.photoPack
                    FROM packsOrders 
                    JOIN packs 
                    JOIN finalOrders 
                    ON packsOrders.packs_id = packs.id 
                    WHERE treated = 1`, (err, results) => {

        if (err) {
            console.log(err)
            res.status(500).send("Erreur lors de l'affichage de toutes les commandes")
        } else {
            archivePackVariable.push(results)
            console.log(results[0])
            connexion.query(`SELECT users.firstname, users.lastname
                            FROM packsOrders
                            JOIN users
                            JOIN finalOrders
                            ON packsOrders.users_id = users.id
                            WHERE treated = 1`, (err, results) => {
                if (err) {
                    console.log(err)
                    res.status(500).send("Erreur lors de l'affichage de toutes les commandes")  
                } else {
                    archivePackVariable.push(results)

                    connexion.query(`SELECT packsOrders.date, packsOrders.quantity
                                    FROM finalOrders
                                    JOIN packsOrders
                                    ON packsOrders.id = finalOrders.packsOrders_id
                                    WHERE treated = 1`, (err, results) => {
                        if (err) {
                            res.status(500).send("Erreur lors de l'affichage de toutes les commandes") 
                        } else {
                            archivePackVariable.push(results)
                            res.json(archivePackVariable)
                        }
                        })
                }              
          })
            
        }
    })
})


router.get("/manage-final-order-archive-manga", (req,res) => {

    let archiveMangaVariable = [];

    connexion.query(`SELECT mangas.title, mangas.tome 
                    FROM statesMangas 
                    JOIN mangas 
                    JOIN mangasOrders 
                    JOIN finalOrders 
                    ON mangasOrders.statesMangas_id = statesMangas.id 
                    WHERE treated = 1`, (err, results) => {

        if (err) {
            console.log(err)
            res.status(500).send("Erreur lors de l'affichage de toutes les commandes")
        } else {
            archiveMangaVariable.push(results)
            
            connexion.query(`SELECT users.firstname, users.lastname
                            FROM mangasOrders
                            JOIN users
                            JOIN finalOrders
                            ON mangasOrders.users_id = users.id
                            WHERE treated = 1`, (err, results) => {
                if (err) {
                    console.log(err)
                    res.status(500).send("Erreur lors de l'affichage de toutes les commandes")  
                } else {
                    archiveMangaVariable.push(results)

                    connexion.query(`SELECT mangasOrders.date, mangasOrders.quantity
                                    FROM finalOrders
                                    JOIN mangasOrders
                                    ON mangasOrders.id = finalOrders.mangasOrders_id
                                    WHERE treated = 1`, (err, results) => {
                        if (err) {
                            res.status(500).send("Erreur lors de l'affichage de toutes les commandes") 
                        } else {
                            archiveMangaVariable.push(results)
                            res.json(archiveMangaVariable)
                        }
                        })
                }              
          })
            
        }
    })
})


module.exports = router
