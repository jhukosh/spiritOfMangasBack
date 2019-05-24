-- -----------------------------------------------------
-- HOW TO IMPORT FILE :
-- $mysql -u root -p spiritofmanga < hardDatas.sql
-- -----------------------------------------------------

INSERT INTO State (name) VALUES ('Comme neuf'), ('Très bon état'), ('Bon état'), ('Légèrement abîmé'), ('Mauvais état');
INSERT INTO Type (name) VALUES ('Anime-comics'), ('Apprentissage - guide'), ('Artbook - fanbook'), ('Chungnyun (+14 ans)'), ('Dôjinshi - parodie'), ('Ecchi - hentai (+18 ans)'), ('Essai-roman'), ('Global-manga'), ('Josei (+14 ans)'), ('Kodomo'), ('Magazine'), ('Manhua'), ('Seinen (+14 ans)'), ('Shôjo'), ('Shonen'), ('Sonyun-manhwa'), ('Sunjung-sunjeong'), ('Yaoi (+ 16 ans)'), ('Yuri (+16 ans)');
INSERT INTO `Public` (name) VALUES ('+14 ans'), ('+18 ans'), ('Tout public'), ('Jeunesse');
INSERT INTO `Genres` (name) VALUES ('Action'), ('Arts martiaux'), ('Aventure'), ('Combat'), ('Comédie'), ('Conte'), ('Drame'), ('Ecchi'), ('Ecole'), ('Erotique'), ('Fantastique'), ('Gastronomie'), ('Gay-lesbien'), ('Heroic-fantasy'), ('Histoires-courtes'), ('Historique'), ('Horreur'), ('Horreur-thriller'), ('Humour'), ('Jeux vidéo'), ('Magie'), ('Mecha'), ('Musique'), ('Parodie'), ('Philosophique'), ('Policier'), ('Romance'), ('Samuraï-ninja'), ('Science-fiction'), ('Social'), ('Sport'), ('Suspense'), ('Thriller'), ('Tranches-de-vie'), ('Vampire');