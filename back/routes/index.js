const users = require('./users');
const mangas = require('./mangas');
const packs = require('./packs');
const publics = require('./publics');
const series = require('./series');
const mangasAwaiting = require('./mangasAwaiting')
const commandsMangas = require('./commandsMangas')
const packsOrders = require('./packsOrders')
const packsMangas = require('./packsMangas');
const types = require('./types');
const genres = require('./genres');
const states = require('./states');
const statesPack = require('./statesPack')
const packsAwaiting = require('./packsAwaiting');
const genresMangas = require('./genresMangas');
const statesMangas = require('./statesMangas');


module.exports = { users, mangas, packs, publics, series, types, genres, states, statesPack, packsMangas, packsOrders, commandsMangas, genresMangas, mangasAwaiting, packsAwaiting, statesMangas };
