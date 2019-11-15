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
    let result = []
    let i = 0
    let quit = 0

    // query to get packs containing mangas of sent kind

    connexion.query(`SELECT mangas.id
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
                let len = results.length
                results.forEach(element => {
                    i = i + 1
                    connexion.query(`SELECT namePack, photoPack 
                                   FROM packsMangas
                                   JOIN packs
                                   ON packs.id=packsMangas.packs_id
                                   JOIN mangas
                                   ON mangas.id=packsMangas.mangas_id
                                   WHERE mangas.id=${element.id}
                                   GROUP BY namePack`, (err, results) => {
                        if (err) {
                            console.log(err)
                            res.status(500)
                        } else {
                            results.filter(item => {
                                item === [] || result.includes(item) ? null : result.push(results[0])
                                if (i === len && quit === 0) {
                                    quit++
                                    res.status(200).json(result)
                                }                                
                        })
                    }
                })
            });
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
    let result = []
    let i = 0
    let quit = 0

    // query to get packs containing mangas of sent type

    connexion.query(`SELECT mangas.id 
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
            let len = results.length
            results.forEach(element => {
                i = i + 1
                connexion.query(`SELECT namePack, photoPack 
                                FROM packsMangas
                                JOIN packs
                                ON packs.id=packsMangas.packs_id
                                JOIN mangas
                                ON mangas.id=packsMangas.mangas_id
                                WHERE mangas.id=${element.id}
                                GROUP BY namePack`, (err, results) => {
                    if (err) {
                        console.log(err)
                        res.status(500)
                    } else {
                        results.filter(item => {
                            item === [] || result.includes(item) ? null : result.push(results[0])
                            if (i === len && quit === 0) {
                                quit++
                                res.status(200).json(result)
                            } 
                        })
                    }
                })
            });
        }
    })

})


module.exports = router