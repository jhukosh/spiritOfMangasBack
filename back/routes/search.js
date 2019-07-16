const express = require("express")
const router = express.Router()
const connexion = require('../conf');

// Body parser module

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

// filter mangas by genre

router.get("/filter-genres/:id", (req, res) => {

    const genreId = req.params.id

    connexion.query(`SELECT mangas.id, mangas.photoCover, mangas.title, mangas.tome 
                    FROM genresSeries 
                    JOIN series 
                    ON series.id = genresSeries.series_id
                    JOIN mangas
                    ON mangas.series_id=series.id
                    WHERE genres_id = ${genreId}`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500)
        } else {
            console.log(results)
            res.status(200).json(results)
        }
    })
})

// filter packs by genre

router.get("/filter-packs-genres/:id", (req, res) => {

    const genreId = req.params.id

    connexion.query(`SELECT mangas.id, mangas.photoCover, mangas.title, mangas.tome 
                    FROM genresSeries 
                    JOIN series 
                    ON series.id = genresSeries.series_id
                    JOIN mangas
                    ON mangas.series_id=series.id
                    JOIN packsMangas
                    ON mangas.id = packsMangas.mangas_id
                    JOIN packs
                    ON packs.id = packsMangas.packs_id
                    WHERE genres_id = ${genreId}`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500)
        } else {
            console.log(results)
            res.status(200).json(results)
        }
    })
})

// filter mangas by types

router.get("/filter-types/:id", (req, res) => {

    const typeId = req.params.id

    connexion.query(`SELECT mangas.id, mangas.photoCover, mangas.title, mangas.tome 
                    FROM types
                    JOIN series 
                    ON types.id = series.types_id
                    JOIN mangas
                    ON mangas.series_id=series.id
                    WHERE types_id = ${typeId}`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500)
        } else {
            console.log(results)
            res.status(200).json(results)
        }
    })
})

// filter packs by type

router.get("/filter-packs-types/:id", (req, res) => {

    const typeId = req.params.id

    connexion.query()

})


module.exports = router