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

INSERT INTO series (nameSeries, types_id, photoCover, description) VALUES 

('Détective conan', 19, 'http://www.spiritofmanga.com/images/series/fiches/manga-detective-conan.jpg', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa'), 

('L Attaque des Titans', 19, 'http://www.spiritofmanga.com/images/produits/fiches/23434-1.jpg', 'Le monde appartient désormais aux Titans, des êtres gigantesques qui ont presque décimé l Humanité. Voilà une centaine d’années, les derniers rescapés ont bâti une place forte, une cité cernée d’une haute muraille au sein de laquelle vivent aujourd hui leurs descendants. Parqués, ignorants tout du monde extérieur, ils s estiment au moins à l abri de ces effroyables êtres qui ne feraient d eux qu une bouchée. 
Hélas, cette illusion de sécurité vole en éclats le jour où surgit un Titan démesuré...'), 

('Naruto', 19, 'http://www.spiritofmanga.com/images/produits/fiches/3339-1.jpg', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage. En plus, un secret l entoure. il est possédé par le puissant démon renard à neuf queues qui ravagea Konoha il y a de cela 12 ans, Kyubi.
C est sous la direction du professeur Kakashi Hatake qu il se retrouvera en équipe avec la belle  Sakura Haruno et son pire ennemi, le génie Sasuke Uchiwa.'), 

('One-Punch Man', 19, 'http://www.spiritofmanga.com/images/produits/fiches/31685-1.jpg', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…'), 

('Death Note', 19, 'http://www.spiritofmanga.com/images/produits/fiches/3969-1.jpg', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.'),

('Pokémon, Attrapez les tous!', 19, 'http://www.spiritofmanga.com/images/series/fiches/manga-pokemon.jpg', 'Nos jeunes héros sont prêts à tout pour devenir les meilleurs éleveurs de Pokémon de la planète. Pour cela, il faut en attraper le plus possible, 
les entrainer pour les livrer à des combats durant lesquels ils vont prendre du galon. Arrivés à un certain seuil de force, les Pokémon subissent ce que les initiés appellent une évolution, se transformant en monstres beaucoup plus puissants.'),

('Pokémon x/y', 19, 'http://www.spiritofmanga.com/images/produits/fiches/30617-1.jpg', 'Xavier et ses quatre amis d enfance mènent une vie tranquille à Bourg Croquis. Jusqu au jour où apparaissent les Pokémon légendaires Yveltal et Xerneas, 
venant bouleverser le quotidien des jeunes gens. Qui sont ces étranges personnes malveillantes vêtues de rouge ? Qu est-ce que la Méga-Évolution ? Ce sera à nos cinq amis de le découvrir dans cette nouvelle grande aventure palpitante !!'),

('One piece', 19, 'http://www.spiritofmanga.com/images/series/fiches/manga-one-piece.jpg', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.'),

('Fullmetal alchemist', 19, 'http://www.spiritofmanga.com/images/produits/fiches/4768-1.jpg', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...'),

('Ranma 1/2', 19, 'http://www.spiritofmanga.com/images/series/fiches/manga-ranma-12.jpg', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.'),

('Dragon Ball', 19, 'https://www.spiritofmanga.com/images/series/fiches/manga-dragon-ball-france-loisirs.jpg', 'C est LA référence des amateurs de mangas, au succès colossal. Épopée fantastique, parcours initiatique d un enfant vers l âge adulte, 
une saga-fleuve génialement inventive, bondissante, pleine d humour, idéale pour s initier au genre.');

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO genresSeries (genres_id, series_id) VALUES (9, 1), (10, 1), (13, 1), (27, 1), (30,1), (34, 1), (1, 2), (4, 2), (7, 2), (32, 2), (1, 3), (4, 3), (7, 3), (32, 3),(1, 4), (4, 4), (7, 4), (32, 4) ;

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangas (series_id, publics_id, title, photoCover, tome, auteur, editeur, resume, prixNeuf, weight) VALUES 

(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/series/fiches/manga-detective-conan.jpg', 1, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.85, 240),
(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/produits/fiches/4346-1.jpg', 2, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.25, 240),
(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/produits/fiches/4347-1.jpg', 3, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.85, 240),
(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/produits/fiches/4348-1.jpg', 4, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.85, 240),
(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/produits/fiches/4349-1.jpg', 5, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.85, 240),
(1,1, 'Détective conan', 'http://www.spiritofmanga.com/images/produits/fiches/4350-1.jpg', 6, 'AOYAMA Goshô', 'Kana', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de résoudre de difficiles affaire.
Mais un jour qu il se promenait avec son amie Ran Mouri, il fut forcé de boire une boisson expérimentale qui rajeunira son corps à l âge d enfant tout en lui laissant ses facultés mentales.
C est alors qu avec l aide du Professeur Hiroshi Agasa, il partira à la poursuite de l organisation l ayant transformé, sous le pseudo de Conan Edogawa', 6.85, 240),

(2, 1, 'L Attaque des Titans', 'http://www.spiritofmanga.com/images/produits/fiches/23434-1.jpg', 1, 'Hajime Isayama', 'Pika Édition', 'Le monde appartient désormais aux Titans, des êtres gigantesques qui ont presque décimé l Humanité. Voilà une centaine d’années, les derniers rescapés ont bâti une place forte, une cité cernée d’une haute muraille au sein de laquelle vivent aujourd hui leurs descendants. Parqués, ignorants tout du monde extérieur, ils s estiment au moins à l abri de ces effroyables êtres qui ne feraient d eux qu une bouchée. Hélas, cette illusion de sécurité vole en éclats le jour où surgit un Titan démesuré...', 11.4, 256),
(2, 1,'L Attaque des Titans', 'http://www.spiritofmanga.com/images/produits/fiches/23435-1.jpg', 2, 'Hajime Isayama', 'Pika Édition', 'Cinq ans après l attaque de la forteresse, l humanité subit un nouvel assaut des titans. La bataille fait rage et Mikasa ne sait pas encore qu’Eren a été victime de l’un d’eux. Lorsqu’elle l’apprend, bouleversée, elle perd sa lucidité et dans un accès de désespoir, s élance sauvagement dans un assaut à corps perdu. Tombant à terre, elle se retrouve à la merci d un titan. Mais alors qu’elle s apprête à mourir, se produit quelque chose de totalement inattendu !', 11.4, 256),
(2, 1,'L Attaque des Titans', 'http://www.spiritofmanga.com/images/produits/fiches/23436-1.jpg', 3, 'Hajime Isayama', 'Pika Édition', 'Le titan colossal est de retour pour défoncer le mur et permettre à ses congénères d envahir la cité.Mikasa met tout son cœur à l ouvrage et tranche les effroyables intrus les uns après les autres, mais la nouvelle de la mort d Eren la déstabilise. Alors qu elle est sur le point de se faire prendre, surgit un énigmatique spécimen qui se rue sur les gigantesque assaillants.', 12, 256),
(2, 1,'L Attaque des Titans', 'http://www.spiritofmanga.com/images/produits/fiches/23437-1.jpg', 4, 'Hajime Isayama', 'Pika Édition', 'Le titan colossal est de retour pour défoncer le mur et permettre à ses congénères d envahir la cité.Mikasa met tout son cœur à l ouvrage et tranche les effroyables intrus les uns après les autres, mais la nouvelle de la mort d Eren la déstabilise. Alors qu elle est sur le point de se faire prendre, surgit un énigmatique spécimen qui se rue sur les gigantesque assaillants.', 12, 256),
(2, 1,'L Attaque des Titans', 'http://www.spiritofmanga.com/images/produits/fiches/23438-1.jpg', 5, 'Hajime Isayama', 'Pika Édition', 'Le titan colossal est de retour pour défoncer le mur et permettre à ses congénères d envahir la cité.Mikasa met tout son cœur à l ouvrage et tranche les effroyables intrus les uns après les autres, mais la nouvelle de la mort d Eren la déstabilise. Alors qu elle est sur le point de se faire prendre, surgit un énigmatique spécimen qui se rue sur les gigantesque assaillants.', 12, 256),


(3, 1, 'Naruto', 'http://www.spiritofmanga.com/images/produits/fiches/3339-1.jpg', 1, 'KISHIMOTO Masashi', 'Kana', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage. En plus, un secret l entoure. il est possédé par le puissant démon renard à neuf queues qui ravagea Konoha il y a de cela 12 ans, Kyubi.
C est sous la direction du professeur Kakashi Hatake qu il se retrouvera en équipe avec la belle  Sakura Haruno et son pire ennemi, le génie Sasuke Uchiwa.', 6.85, 255 ),
(3, 1, 'Naruto', 'http://www.spiritofmanga.com/images/produits/fiches/24069-1.jpg', 2, 'KISHIMOTO Masashi', 'Kana', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage. En plus, un secret l entoure. il est possédé par le puissant démon renard à neuf queues qui ravagea Konoha il y a de cela 12 ans, Kyubi.
Seulement Orochimaru, un puissant ninja exilé est en train de mettre en place un plan machiavélique...', 6.85, 255 ),
(3, 1, 'Naruto', 'http://www.spiritofmanga.com/images/produits/fiches/3341-1.jpg', 3, 'KISHIMOTO Masashi', 'Kana', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage.
C est sous la direction du professeur Kakashi Hatake qu il se retrouvera en équipe avec la belle  Sakura Haruno et son pire ennemi, le génie Sasuke Uchiwa.
Seulement Orochimaru, un puissant ninja exilé est en train de mettre en place un plan machiavélique...', 6.85, 255 ),
(3, 1, 'Naruto', 'http://www.spiritofmanga.com/images/produits/fiches/3342-1.jpg', 4, 'KISHIMOTO Masashi', 'Kana', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage.
C est sous la direction du professeur Kakashi Hatake qu il se retrouvera en équipe avec la belle  Sakura Haruno et son pire ennemi, le génie Sasuke Uchiwa.
Seulement Orochimaru, un puissant ninja exilé est en train de mettre en place un plan machiavélique...', 6.85, 255 ),
(3, 1, 'Naruto', 'http://www.spiritofmanga.com/images/produits/fiches/3343-1.jpg', 5, 'KISHIMOTO Masashi', 'Kana', 'Naruto Uzumaki n est pas un ninja comme les autres.
Bien qu étant la pire recrue de l académie, son rêve est de devenir le plus puissant des ninjas du village caché Konoha, à savoir, l Hokage.
C est sous la direction du professeur Kakashi Hatake qu il se retrouvera en équipe avec la belle  Sakura Haruno et son pire ennemi, le génie Sasuke Uchiwa.
Seulement Orochimaru, un puissant ninja exilé est en train de mettre en place un plan machiavélique...', 6.85, 255 ),

(4, 1, 'One-Punch Man', 'http://www.spiritofmanga.com/images/produits/fiches/31685-1.jpg', 1, 'MURATA Yûsuke / ONE', 'Kurokawa', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…', 6.80, 258) ,
(4, 1, 'One-Punch Man', 'http://www.spiritofmanga.com/images/produits/fiches/31686-1.jpg', 2, 'MURATA Yûsuke / ONE', 'Kurokawa', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…', 6.80, 258) ,
(4, 1, 'One-Punch Man', 'http://www.spiritofmanga.com/images/produits/fiches/31687-1.jpg', 3, 'MURATA Yûsuke / ONE', 'Kurokawa', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…', 6.80, 258) ,
(4, 1, 'One-Punch Man', 'http://www.spiritofmanga.com/images/produits/fiches/32535-1.jpg', 4, 'MURATA Yûsuke / ONE', 'Kurokawa', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…', 6.80, 258) ,
(4, 1, 'One-Punch Man', 'http://www.spiritofmanga.com/images/produits/fiches/32536-1.jpg', 5, 'MURATA Yûsuke / ONE', 'Kurokawa', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, jusqu au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. 
Il s entraîne alors sans relâche pendant trois ans et devient si puissant qu il est capable d éliminer ses adversaires d un seul coup de poing. On le surnomme désormais One-Punch Man. Mais rapidement, l euphorie du succès cède place à l ennui, car lorsqu on est si fort, les victoires perdent de leur saveur…', 6.80, 258),

(5, 1, 'Death Note', 'http://www.spiritofmanga.com/images/produits/fiches/3969-1.jpg', 1, 'OHBA Tsugumi / OBATA Takeshi', 'Kana', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 6.25, 255),
(5, 1, 'Death Note', 'http://www.spiritofmanga.com/images/produits/fiches/3970-1.jpg', 2, 'OHBA Tsugumi / OBATA Takeshi', 'Kana', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 6.25, 255),
(5, 1, 'Death Note', 'http://www.spiritofmanga.com/images/produits/fiches/3971-1.jpg', 3, 'OHBA Tsugumi / OBATA Takeshi', 'Kana', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 6.25, 255),
(5, 1, 'Death Note', 'http://www.spiritofmanga.com/images/produits/fiches/3972-1.jpg', 4, 'OHBA Tsugumi / OBATA Takeshi', 'Kana', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 6.25, 255),
(5, 1, 'Death Note', 'http://www.spiritofmanga.com/images/produits/fiches/3973-1.jpg', 5, 'OHBA Tsugumi / OBATA Takeshi', 'Kana', 'Light Yagami est un jeune étudiant surdoué qui considère le monde comme perverti et injuste.
Tout cela changea le jour où il ramassa le cahier du shinigami (dieu de la mort) Ryuk, la Death Note. Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 6.25, 255),

(6, 1, 'Pokémon, Attrapez les tous!', 'http://www.spiritofmanga.com/images/series/fiches/manga-pokemon.jpg', 1, 'ASADA Miho', 'Glénat', 'Nos jeunes héros sont prêts à tout pour devenir les meilleurs éleveurs de Pokémon de la planète. Pour cela, il faut en attraper le plus possible, 
les entrainer pour les livrer à des combats durant lesquels ils vont prendre du galon. Arrivés à un certain seuil de force, les Pokémon subissent ce que les initiés appellent une évolution, se transformant en monstres beaucoup plus puissants.', 7.60, 270 ),
(6, 1, 'Pokémon, Attrapez les tous!', 'http://www.spiritofmanga.com/images/produits/fiches/9527-1.jpg', 2, 'ASADA Miho', 'Glénat', 'Nos jeunes héros sont prêts à tout pour devenir les meilleurs éleveurs de Pokémon de la planète. Pour cela, il faut en attraper le plus possible, 
les entrainer pour les livrer à des combats durant lesquels ils vont prendre du galon. Arrivés à un certain seuil de force, les Pokémon subissent ce que les initiés appellent une évolution, se transformant en monstres beaucoup plus puissants.', 7.60, 270 ),
(7, 1, 'Pokémon x/y', 'http://www.spiritofmanga.com/images/series/fiches/manga-pokemon-xy.jpg', 1, 'YAMAMOTO Satoshi / KUSAKA Hidenori', 'Kurokawa', 'Xavier et ses quatre amis d enfance mènent une vie tranquille à Bourg Croquis. Jusqu au jour où apparaissent les Pokémon légendaires Yveltal et Xerneas, 
venant bouleverser le quotidien des jeunes gens. Qui sont ces étranges personnes malveillantes vêtues de rouge ? Qu est-ce que la Méga-Évolution ? Ce sera à nos cinq amis de le découvrir dans cette nouvelle grande aventure palpitante !!', 6.80, 250),
(7, 1, 'Pokémon x/y', 'http://www.spiritofmanga.com/images/produits/fiches/30617-1.jpg', 2, 'YAMAMOTO Satoshi / KUSAKA Hidenori', 'Kurokawa', 'Xavier et ses quatre amis d enfance mènent une vie tranquille à Bourg Croquis. Jusqu au jour où apparaissent les Pokémon légendaires Yveltal et Xerneas, 
venant bouleverser le quotidien des jeunes gens. Qui sont ces étranges personnes malveillantes vêtues de rouge ? Qu est-ce que la Méga-Évolution ? Ce sera à nos cinq amis de le découvrir dans cette nouvelle grande aventure palpitante !!', 6.80, 250),
(7, 1, 'Pokémon x/y', 'http://www.spiritofmanga.com/images/produits/fiches/30618-1.jpg', 3, 'YAMAMOTO Satoshi / KUSAKA Hidenori', 'Kurokawa', 'Xavier et ses quatre amis d enfance mènent une vie tranquille à Bourg Croquis. Jusqu au jour où apparaissent les Pokémon légendaires Yveltal et Xerneas, 
venant bouleverser le quotidien des jeunes gens. Qui sont ces étranges personnes malveillantes vêtues de rouge ? Qu est-ce que la Méga-Évolution ? Ce sera à nos cinq amis de le découvrir dans cette nouvelle grande aventure palpitante !!', 6.80, 250),
(7, 1, 'Pokémon x/y', 'http://www.spiritofmanga.com/images/produits/fiches/32587-1.jpg', 4, 'YAMAMOTO Satoshi / KUSAKA Hidenori', 'Kurokawa', 'Xavier et ses quatre amis d enfance mènent une vie tranquille à Bourg Croquis. Jusqu au jour où apparaissent les Pokémon légendaires Yveltal et Xerneas, 
venant bouleverser le quotidien des jeunes gens. Qui sont ces étranges personnes malveillantes vêtues de rouge ? Qu est-ce que la Méga-Évolution ? Ce sera à nos cinq amis de le découvrir dans cette nouvelle grande aventure palpitante !!', 6.80, 250),

(8, 1, 'One piece', 'http://www.spiritofmanga.com/images/series/fiches/manga-one-piece.jpg', 1, 'ODA Eiichirô', 'Glénat', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.', 6.90, 250),
(8, 1, 'One piece', 'http://www.spiritofmanga.com/images/produits/fiches/2689-1.jpg', 2, 'ODA Eiichirô', 'Glénat', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.', 6.90, 250),
(8, 1, 'One piece', 'http://www.spiritofmanga.com/images/produits/fiches/2690-1.jpg', 3, 'ODA Eiichirô', 'Glénat', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.', 6.90, 250),
(8, 1, 'One piece', 'http://www.spiritofmanga.com/images/produits/fiches/2691-1.jpg', 4, 'ODA Eiichirô', 'Glénat', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.', 6.90, 250),
(8, 1, 'One piece', 'http://www.spiritofmanga.com/images/produits/fiches/2692-1.jpg', 5, 'ODA Eiichirô', 'Glénat', 'Quiconque possèdera le légendaire trésor One Piece deviendra le seigneur des pirates. Ayant mangé enfant un Fruit démoniaque, le jeune Monkey D. Luffy devint un homme-caoutchouc capable de se tordre dans tous les sens et de résister aux balles. 
C est ainsi qu il décide de prendre la mer sur la route de tous les périls avec comme bagage, son chapeau de paille.', 6.90, 250),

(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4768-1.jpg', 1, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),
(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4769-1.jpg', 2, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),
(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4770-1.jpg', 3, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),
(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4771-1.jpg', 4, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),
(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4772-1.jpg', 5, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),
(9, 1, 'Fullmetal alchemist', 'http://www.spiritofmanga.com/images/produits/fiches/4773-1.jpg', 6, 'ARAKAWA Hiromu', 'Kurokawa', 'L histoire se déroule dans le monde d Amestris où l Alchimie est une science concrète et utilisée au quotidien.
Lorsque Trisha Elric succomba à sa maladie, ses deux enfants, Edward et Alphonse, tentèrent de lui rendre la vie grâce à un complexe et illégal recourt, la transmutation humaine...', 6.50, 255),

(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/series/fiches/manga-ranma-12.jpg', 1, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3406-1.jpg', 2, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3407-1.jpg', 3, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3408-1.jpg', 4, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3409-1.jpg', 5, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3410-1.jpg', 6, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240),
(10, 1, 'Ranma 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3411-1.jpg', 7, 'TAKAHASHI Rumiko', 'Glénat', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement 
dans un lac aux propriétés mystérieuses. Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles.', 6.90, 240);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO mangasAwaiting (mangas_id, users_id) VALUES (1, 1);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO users (pseudo, firstname, lastname, password, forgetPassword, email, telephone, numRue, rue, cp, ville, connaissance, newsletter, droits) VALUES 
('MangaLovers', 'Pierre', 'Vincent', 'iLoveGaming', 'forgetPasswordKeys', 'pvincent@gmail.com', 0681232452, 1, 'Place de la Republique', 75011, 'Paris', 'Amis', 1, 'users'),
('ourMangas', 'Valentin','Roger', 'rogerrabbit', 'forgetPasswordKeys', 'val@hotmail.fr', 0671273654, 10, 'rue du code', 75013, 'Paris', 'Google', 1, 'users'),
('paulka1','paul','charensol','lamartine','lamartine','charensolp@gmail.com',0670361178,23,'Marco',75019,'Paris','ojn',0,'admin');



-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO packs (namePack, photoPack, resumePack, stock, weight, prixPublic, promo, notrePrix ) VALUES 

('LIFE', 'http://www.spiritofmanga.com/images/produits/fiches/20199-1.jpg', 'Ayumu est une collégienne aux résultats scolaires médiocres. Heureusement sa meilleure amie, la brillante Shii, est toujours là pour l aider et la soutenir. 
Elles se promettent d aller toutes les deux dans un lycée prestigieux et étudient ensemble pour passer l examen d entrée. Mais quand Ayumu est reçue et que Shii échoue, 
leur belle amitié vole en éclat.', 1, 600, 66, 0, 41.90 ),
('NANA', 'http://www.spiritofmanga.com/images/produits/fiches/8764-1.jpg', 'La première est rêveuse, rigolote et sensible, mais « coeur d artichaut », un brin capricieuse et loin d´être indépendante.
 La seconde est plus mature, déterminée, un peu mystérieuse mais peut être d une froideur qui glace le dos.
Toutes deux s appellent « Nana », ont un attrait pour l art et ont vécu en province.', 1, 600, 62.50, 0, 39.90),
('Détective conan', 'http://www.spiritofmanga.com/images/series/fiches/manga-detective-conan.jpg', 'Shinichi Kudô est un lycéen de Teitan, réputé pour son aide auprès de la police japonaise afin de 
résoudre de difficiles affaire.', 1, 600 , 62, 0, 39),
('One-Punch Man', 'http://www.spiritofmanga.com/images/series/fiches/manga-one-punch-man.jpg', 'Saitama est un jeune homme sans emploi et sans réelle perspective d avenir, 
jusqu au jour où il décide de prendre sa vie en main.', 1, 600 , 62, 0, 39),
('Pokemon !', 'http://www.spiritofmanga.com/images/series/fiches/manga-pokemon.jpg', 'Nos jeunes héros sont prêts à tout pour devenir les meilleurs éleveurs de Pokémon de la planète. Pour cela, 
il faut en attraper le plus possible, les entrainer pour les livrer à des combats durant lesquels ils vont prendre du galon.', 1, 600 , 62, 0, 39),
('Death Note', 'http://www.spiritofmanga.com/images/series/fiches/manga-death-note.jpg', 'Celui-ci donnerai le pouvoir de tuer quiconque dont on connaitrait le nom et le visage.
C est ainsi que Light entra dans une série de meurtres afin de créer un monde utopique sans criminels sous le pseudo de Kira.', 1, 600 , 62, 0, 39),
('Full Metal Alchemist', 'http://www.spiritofmanga.com/images/series/fiches/manga-fullmetal-alchemist-edition-reliee.jpg', 'Edward et Alphonse sont deux frères maîtrisant le mystérieux pouvoir de l alchimie. Suite à la tentaive de résurrection de leur mère, Edward a perdu sa jambe et Alphonse son corps complet. Alors que tout semblait perdu, 
Edward réussit à fixer l âme de son frère dans une armure géante,', 1, 600 , 62, 0, 39),
('Naruto First Generation', 'http://www.spiritofmanga.com/images/series/fiches/manga-naruto.jpg', 'Naruto Uzumaki n est pas un ninja comme les autres.', 1, 600 , 62, 0, 39),
('Ramna 1/2', 'http://www.spiritofmanga.com/images/produits/fiches/3415-1.jpg', 'Un jeune garçon et son père, tous deux adeptes des arts martiaux effectuent un voyage initiatique en Chine. Au cours d un de leurs exercices rituels, ils plongent malencontreusement dans un lac aux propriétés mystérieuses. 
Suite à cette baignade forcée, certains bouleversements vont s opérer dans leurs structures corporelles. ', 1, 600 , 62, 0, 39);
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
(3, 12, 'lorem blabla', 1, false, true, 20, 12, 20, 14.4),
(3, 9, 'lorem blabla', 1, true, true, 20, 12, 20, 14.4),
(3, 16, 'lorem blabla', 1, true, true, 20, 12, 20, 7.8),
(3, 32, 'lorem blabla', 1, true, true, 20, 12, 20, 8.4),
(3, 48, 'lorem blabla', 1, true, true, 20, 12, 20, 12.4);

-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO finalOrders (mangasOrders_id, packsOrders_id, treated) VALUES (1, 1, 0)

