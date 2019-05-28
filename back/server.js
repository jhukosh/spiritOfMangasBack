
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const routes = require("./routes/")

const app = express()
const port = 4242

app.use(morgan("dev"))
app.use(morgan(":method :url :status :res[content-length] - :response-time "))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/genres", routes.genres)
app.use("/users", routes.users)
app.use("/states", routes.states)
app.use("/types", routes.types)
app.use("/mangas", routes.mangas)
app.use("/packs", routes.packs)
app.use("/publics", routes.publics)
app.use("/series", routes.series)
app.use("/mangasAwaiting", routes.mangasAwaiting)
app.use("/commandsMangas", routes.commandsMangas)
app.use("/packsOrders", routes.packsOrders)
app.use("/packsMangas", routes.packsMangas)
app.use("/packsAwaiting", routes.packsAwaiting)
app.use("/genresMangas", routes.genresMangas)

app.get("/", (req, res) => {
  res.status(200).send("je suis dans /")
})

app.listen(port, console.log(`http://localhost:${port}`))
