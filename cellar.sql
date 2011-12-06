-- MySQL dump 10.13  Distrib 5.5.15, for osx10.6 (i386)
--
-- Host: localhost    Database: cellar
-- ------------------------------------------------------
-- Server version	5.5.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wine`
--

DROP TABLE IF EXISTS `wine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `grapes` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `region` varchar(45) DEFAULT NULL,
  `description` blob,
  `picture` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine`
--

LOCK TABLES `wine` WRITE;
/*!40000 ALTER TABLE `wine` DISABLE KEYS */;
INSERT INTO `wine` VALUES (1,'CHATEAU DE SAINT COSME','2009','Grenache / Syrah','France','Southern Rhone / Gigondas','The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.','saint_cosme.jpg'),(2,'LAN RIOJA CRIANZA','2006','Tempranillo','Spain','Rioja','A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.','lan_rioja.jpg'),(3,'MARGERUM SYBARITE','2010','Sauvignon Blanc','USA','California Central Cosat','The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of\nblack cherry and licorice. This is a taste sure to transport you back in time.','margerum.jpg'),(4,'OWEN ROE \"EX UMBRIS\"','2009','Syrah','USA','Washington','A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don\'t miss\nthis award-winning taste sensation.','ex_umbris.jpg'),(5,'REX HILL','2009','Pinot Noir','USA','Oregon','One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch\nthe debut that everyone will be talking about tomorrow.','rex_hill.jpg'),(6,'VITICCIO CLASSICO RISERVA','2007','Sangiovese Merlot','Italy','Tuscany','Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.','viticcio.jpg'),(7,'CHATEAU LE DOYENNE','2005','Merlot','France','Bordeaux','Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\nsenses.','le_doyenne.jpg'),(8,'DOMAINE DU BOUSCAT','2009','Merlot','France','Bordeaux','The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.','bouscat.jpg'),(9,'BLOCK NINE','2009','Pinot Noir','USA','California','With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.','block_nine.jpg'),(10,'DOMAINE SERENE','2007','Pinot Noir','USA','Oregon','Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.','domaine_serene.jpg'),(11,'BODEGA LURTON','2011','Pinot Gris','Argentina','Mendoza','Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.','bodega_lurton.jpg'),(12,'LES MORIZOTTES','2009','Chardonnay','France','Burgundy','Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in\nperfect alignment with more traditional notes. Breaking the mold of the classics, this offering will surprise and\nundoubtedly get tongues wagging with the hints of coffee and tobacco in\nperfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.','morizottes.jpg');
/*!40000 ALTER TABLE `wine` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-12-01  9:22:24
