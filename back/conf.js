const  mysql = require('mysql');
const  connexion = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
<<<<<<< HEAD
password :  '', // le mot de passe
=======
password :  'Symetry1988', // le mot de passe
>>>>>>> 66893a14467cb82d9583b54a8fa64f9abdb14212
database :  'spiritofmanga', // le nom de la base de données
});
module.exports = connexion;