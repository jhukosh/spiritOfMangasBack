-- -----------------------------------------------------
-- HOW TO IMPORT FILE :
-- $mysql -u root -p spiritofmanga < testDatas.sql
-- -----------------------------------------------------

INSERT INTO `states` (name) VALUES ('Comme neuf'), ('Très bon état'), ('Bon état'), ('Légèrement abîmé'), ('Mauvais état');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO `types` (name) VALUES ('Anime-comics'), ('Apprentissage - guide'), ('Artbook - fanbook'), ('Chungnyun (+14 ans)'), ('Dôjinshi - parodie'), ('Ecchi - hentai (+18 ans)'), ('Essai-roman'), ('Global-manga'), ('Josei (+14 ans)'), ('Kodomo'), ('Magazine'), ('Manhua'), ('Seinen (+14 ans)'), ('Shôjo'), ('Shonen'), ('Sonyun-manhwa'), ('Sunjung-sunjeong'), ('Yaoi (+ 16 ans)'), ('Yuri (+16 ans)');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO `publics` (name) VALUES ('+14 ans'), ('+18 ans'), ('Tout public'), ('Jeunesse');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO `genres` (name) VALUES ('Action'), ('Arts martiaux'), ('Aventure'), ('Combat'), ('Comédie'), ('Conte'), ('Drame'), ('Ecchi'), ('Ecole'), ('Erotique'), ('Fantastique'), ('Gastronomie'), ('Gay-lesbien'), ('Heroic-fantasy'), ('Histoires-courtes'), ('Historique'), ('Horreur'), ('Horreur-thriller'), ('Humour'), ('Jeux vidéo'), ('Magie'), ('Mecha'), ('Musique'), ('Parodie'), ('Philosophique'), ('Policier'), ('Romance'), ('Samuraï-ninja'), ('Science-fiction'), ('Social'), ('Sport'), ('Suspense'), ('Thriller'), ('Tranches-de-vie'), ('Vampire');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO series (nameSeries, types_id, photoCover, description) VALUES ('Sakura Trick', 19, 'https://www.nautiljon.com/images/anime/00/27/sakura_trick_2972.jpg','Haruka Takayama et Yū Sonoda sont inséparables depuis le collège, mais une fois arrivées dans leur nouvelle classe au lycée, elles se retrouvent placées trop loin l\'une de l\'autre. Haruka, devenant jalouse quand elle voit Yū bien s\'entendre avec les autres camarades, décide de partager quelque chose avec Yū qui rendra leur relation un peu plus « spéciale ».'), 
('L\'Attaque des Titans', 15, 'http://fr.web.img3.acsta.net/r_1280_720/pictures/18/10/31/18/23/3568691.jpg', 'Plus de cent ans avant le début de l’histoire, des créatures géantes humanoïdes nommées Titans sont subitement apparues et ont presque anéanti l’humanité. Ces créatures géantes font habituellement entre trois et quinze mètres de haut, avec quelques exceptions comme le Titan colossal qui en mesure soixante1. Il semblerait que les Titans dévorent les humains par instinct et uniquement pour les tuer : en effet, ils ne possèdent pas de système digestif et n’ont pas besoin de se nourrir, puisant leur énergie dans la lumière du soleil. Ils ont la peau dure, des capacités régénératrices et ne peuvent être tués que par une incision profonde à la base de la nuque.');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO genresSeries (genres_id, series_id) VALUES (9, 1), (10, 1), (13, 1), (27, 1), (30,1), (34, 1), (1, 2), (4, 2), (7, 2), (32, 2), (1, 3), (4, 3), (7, 3), (32, 3),(1, 4), (4, 4), (7, 4), (32, 4) ;

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangas (series_id, publics_id, title, photoCover, tome, auteur, editeur, resume, prixNeuf, weight) VALUES 
(1, 1, 'Sakura Trick', 'https://cdn1.booknode.com/book_cover/321/full/sakura-trick-tome-1-320811.jpg', 1, 'Tachi', 'Houbunsha', 'Afin d\'entretenir une "relation spéciale" entre elles, Haruka et Yū, deux amies lycéennes, partagent un baiser afin d\'approfondir leur relation.', 10.20, 256),
(2, 1, 'L\'Attaque des Titans', 'https://images2.medimops.eu/product/56b01a/M0281161169X-large.jpg', 1, 'Hajime Isayama', 'Pika Édition', 'Le monde appartient désormais aux Titans, des êtres gigantesques qui ont presque décimé l’Humanité. Voilà une centaine d’années, les derniers rescapés ont bâti une place forte, une cité cernée d’une haute muraille au sein de laquelle vivent aujourd’hui leurs descendants. Parqués, ignorants tout du monde extérieur, ils s’estiment au moins à l’abri de ces effroyables êtres qui ne feraient d’eux qu’une bouchée. Hélas, cette illusion de sécurité vole en éclats le jour où surgit un Titan démesuré...', 11.4, 256),
(2, 1,'L\'Attaque des Titans', 'https://images2.medimops.eu/product/909949/M02811611703-large.jpg', 2, 'Hajime Isayama', 'Pika Édition', 'Cinq ans après l\'attaque de la forteresse, l’humanité subit un nouvel assaut des titans. La bataille fait rage et Mikasa ne sait pas encore qu’Eren a été victime de l’un d’eux. Lorsqu’elle l’apprend, bouleversée, elle perd sa lucidité et dans un accès de désespoir, s’élance sauvagement dans un assaut à corps perdu. Tombant à terre, elle se retrouve à la merci d’un titan. Mais alors qu’elle s’apprête à mourir, se produit quelque chose de totalement inattendu !', 11.4, 256),
(2, 1,'L\'Attaque des Titans', 'https://media.senscritique.com/media/000010592905/source_big/L_Attaque_des_Titans_tome_3.jpg', 3, 'Hajime Isayama', 'Pika Édition', 'Le titan colossal est de retour pour défoncer le mur et permettre à ses congénères d\'envahir la cité.Mikasa met tout son cœur à l\'ouvrage et tranche les effroyables intrus les uns après les autres, mais la nouvelle de la mort d\'Eren la déstabilise. Alors qu\'elle est sur le point de se faire prendre, surgit un énigmatique spécimen qui se rue sur les gigantesque assaillants.', 12, 256);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangasAwaiting (mangas_id, users_id) VALUES (1, 1);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO users (pseudo, firstname, lastname, password, forgetPassword, email, telephone, numRue, rue, cp, ville, connaissance, newsletter, droits) VALUES 
('MangaLovers', 'Adolf', 'Hitler', 'iLovePologne', 'forgetPasswordKeys', 'angryGuy@germany.de', 0681232452, 1, 'Platz der Republik', 11011, 'Berlin', 'Mes services de renseignements', 1, 'users'),
('ourMangas', 'Joseph','Stalin', 'goulag34', 'forgetPasswordKeys', 'sexyStach@redmail.ru', 0671273654, 10, 'rue du Kremlin', 103073, 'Moscou', 'Le KGB', 1, 'users'),
('paulka1','paul','charensol','lamartine','lamartine','charensolp@gmail.com',0670361178,23,'Marco',75019,'Paris','ojn',0,'admin');



-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO packs (namePack, photoPack, resumePack, stock, weight, prixPublic, promo, prixPromo, notrePrix, tomes) VALUES 
('L\'Attaque des Titans, le commencement', 'http://fr.web.img4.acsta.net/pictures/17/02/15/17/33/286530.jpg','Le monde appartient désormais aux Titans, des êtres gigantesques qui ont presque décimé l’Humanité. Voilà une centaine d’années, les derniers rescapés ont bâti une place forte, une cité cernée d’une haute muraille au sein de laquelle vivent aujourd’hui leurs descendants. Parqués, ignorants tout du monde extérieur, ils s’estiment au moins à l’abri de ces effroyables êtres qui ne feraient d’eux qu’une bouchée. Hélas, cette illusion de sécurité vole en éclats le jour où surgit un Titan démesuré...', 1, 768, 32, 1, 22, 25, 6),
('La totale', 'https://i.ytimg.com/vi/h98blVbubaI/maxresdefault.jpg', 'Tous nos mangas avec des gros nichons ', 1, 1024, 380, 0, NULL, 199, NULL);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO packsMangas (mangas_id, packs_id) VALUES (2 ,1), (3 ,1), (4 ,1);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO packsOrders (users_id, packs_id, date, quantity) VALUES (1, 1,'2019-06-29', 1);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO packsAwaiting (packs_id, users_id) VALUES (1, 1);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangasOrders (users_id, statesMangas_id, date, quantity ) VALUES (1, 1,'2019-06-29', 1); 

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangasAwaiting (mangas_id, users_id) VALUES (1, 2);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO statesMangas (states_id, mangas_id, commentaire, stock, favorite, promo, promoValue, prixHT, TVA, prixTTC) VALUES 
(1, 2, 'lorem blabla', 1, true, true, 20, 12, 20, 14.4),
(3, 3, 'lorem blabla', 1, false, true, 20, 12, 20, 14.4),
(3, 3, 'lorem blabla', 1, false, true, 20, 12, 20, 14.4),
(3, 3, 'lorem blabla', 1, true, true, 20, 12, 20, 14.4),
(3, 3, 'lorem blabla', 1, true, true, 20, 12, 20, 14.4);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO finalOrders (mangasOrders_id, packsOrders_id, treated) VALUES (1, 1, 0)

