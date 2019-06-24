SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- HOW TO IMPORT FILE :
-- Open msql server : 
-- mysql -u root -p
-- Create the database :
-- CREATE SCHEMA IF NOT EXISTS `spiritofmanga` DEFAULT CHARACTER SET utf8 ;
-- Exit the database (ctrl+C)
-- Run this command :
-- mysql -u root -p spiritofmanga < DB-Creation1-3.sql
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `spiritofmanga`.`publics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`publics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`series` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nameSeries` VARCHAR(45) NOT NULL,
  `types_id` INT NOT NULL,
  `photoCover` VARCHAR(200) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_Series_Type1_idx` ON `spiritofmanga`.`series` (`types_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`mangas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`mangas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `series_id` INT NOT NULL,
  `publics_id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `photoCover` VARCHAR(200) NOT NULL,
  `tome` INT NOT NULL,
  `auteur` VARCHAR(45) NOT NULL,
  `editeur` VARCHAR(45) NULL,
  `resume` VARCHAR(500) NOT NULL,
  `prixNeuf` INT NOT NULL,
  `weight` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = DEFAULT;

CREATE INDEX `fk_Mangas_Public1_idx` ON `spiritofmanga`.`mangas` (`publics_id` ASC);

CREATE INDEX `fk_Mangas_Series1_idx` ON `spiritofmanga`.`mangas` (`series_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(36) NOT NULL,
  `forgetPassword` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telephone` INT NULL,
  `numRue` INT NOT NULL,
  `rue` VARCHAR(45) NOT NULL,
  `cp` INT NOT NULL,
  `ville` VARCHAR(45) NOT NULL,
  `connaissance` VARCHAR(50) NOT NULL,
  `newsletter` TINYINT NOT NULL,
  `droits` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`mangasOrders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`mangasOrders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `treated` TINYINT(1) NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_mangasOrders_users1_idx` ON `spiritofmanga`.`mangasOrders` (`users_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`statesPack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`statesPack` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`packs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`packs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `namePack` VARCHAR(80) NOT NULL,
  `photoPack` VARCHAR(200) NOT NULL,
  `resumePack` VARCHAR(800) NOT NULL,
  `stock` INT NOT NULL,
  `weight` INT NOT NULL,
  `prixPublic` INT NOT NULL,
  `promo` TINYINT(1) NOT NULL,
  `prixPromo` INT NULL,
  `statesPack_id` INT NOT NULL,
  `notrePrix` INT NOT NULL,
  `tomes` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_packs_statesPack1_idx` ON `spiritofmanga`.`packs` (`statesPack_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`packsMangas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`packsMangas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mangas_id` INT NOT NULL,
  `packs_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_Packs/Mangas_Mangas1_idx` ON `spiritofmanga`.`packsMangas` (`mangas_id` ASC);

CREATE INDEX `fk_Packs/Mangas_Packs1_idx` ON `spiritofmanga`.`packsMangas` (`packs_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`packsOrders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`packsOrders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `quantity` INT NOT NULL,
  `treated` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_Commandes/Pack_Users1_idx` ON `spiritofmanga`.`packsOrders` (`users_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`statesMangas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`statesMangas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `states_id` INT NOT NULL,
  `mangas_id` INT NOT NULL,
  `commentaire` VARCHAR(100) NULL,
  `stock` INT NOT NULL,
  `promo` TINYINT(1) NOT NULL,
  `promoValue` INT NULL,
  `prixHT` INT NOT NULL,
  `TVA` INT NOT NULL,
  `prixTTC` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spiritofmanga`.`statesMangas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`statesMangas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `states_id` INT NOT NULL,
  `mangas_id` INT NOT NULL,
  `commentaire` VARCHAR(100) NULL,
  `stock` INT NOT NULL,
  `promo` TINYINT(1) NOT NULL,
  `promoValue` INT NULL,
  `prixHT` INT NOT NULL,
  `TVA` INT NOT NULL,
  `prixTTC` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_states_has_mangas_mangas1_idx` ON `spiritofmanga`.`statesMangas` (`mangas_id` ASC);

CREATE INDEX `fk_states_has_mangas_states1_idx` ON `spiritofmanga`.`statesMangas` (`states_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`genresSeries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`genresSeries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genres_id` INT NOT NULL,
  `series_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_genres_has_series_series1_idx` ON `spiritofmanga`.`genresSeries` (`series_id` ASC);

CREATE INDEX `fk_genres_has_series_genres1_idx` ON `spiritofmanga`.`genresSeries` (`genres_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`mangasAwaiting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`mangasAwaiting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mangas_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = DEFAULT;

CREATE INDEX `fk_mangas_has_users_users1_idx` ON `spiritofmanga`.`mangasAwaiting` (`users_id` ASC);

CREATE INDEX `fk_mangas_has_users_mangas1_idx` ON `spiritofmanga`.`mangasAwaiting` (`mangas_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`packsAwaiting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`packsAwaiting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `packs_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_packs_has_users_users1_idx` ON `spiritofmanga`.`packsAwaiting` (`users_id` ASC);

CREATE INDEX `fk_packs_has_users_packs1_idx` ON `spiritofmanga`.`packsAwaiting` (`packs_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`listOrders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`listOrders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `statesMangas_id` INT NOT NULL,
  `mangasOrders_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_statesMangas_has_mangasOrders_mangasOrders1_idx` ON `spiritofmanga`.`listOrders` (`mangasOrders_id` ASC);

CREATE INDEX `fk_statesMangas_has_mangasOrders_statesMangas1_idx` ON `spiritofmanga`.`listOrders` (`statesMangas_id` ASC);


-- -----------------------------------------------------
-- Table `spiritofmanga`.`listPacksOrders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spiritofmanga`.`listPacksOrders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `packs_id` INT NOT NULL,
  `packsOrders_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_packs_has_packsOrders_packs1_idx` ON `spiritofmanga`.`listPacksOrders` (`packs_id` ASC);

CREATE INDEX `fk_listPacksOrders_packsOrders1_idx` ON `spiritofmanga`.`listPacksOrders` (`packsOrders_id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
