const  mysql = require('mysql');
const  connexion = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Symetry1988', // le mot de passe
database :  'spiritofmanga', // le nom de la base de données
});
module.exports = connexion;