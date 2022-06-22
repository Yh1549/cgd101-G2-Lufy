-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-22 10:18:00
-- 伺服器版本： 8.0.29
-- PHP 版本： 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `lufy`
--

-- --------------------------------------------------------

--
-- 資料表結構 `carousel`
--

CREATE TABLE `carousel` (
  `carousel_no` int NOT NULL,
  `carousel_name` varchar(50) NOT NULL,
  `carousel_path` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `carousel`
--

INSERT INTO `carousel` (`carousel_no`, `carousel_name`, `carousel_path`) VALUES
(1, 'lufy_10_anniversary', 'index_carousel_banner_01.webp'),
(2, 'friendly_home_lighting_environment_guide', 'index_carousel_banner_02.webp'),
(3, 'tips_for_choosing_lamps_for_children_at_home', 'index_carousel_banner_03.webp');

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_no` int NOT NULL,
  `member_no` int NOT NULL,
  `coupon_name` varchar(10) NOT NULL,
  `expire_date` date NOT NULL,
  `discount` int NOT NULL,
  `coupon_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`coupon_no`, `member_no`, `coupon_name`, `expire_date`, `discount`, `coupon_status`) VALUES
(1, 1, 'aaa', '2022-06-15', 100, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `designer`
--

CREATE TABLE `designer` (
  `des_no` int NOT NULL,
  `manager_no` int NOT NULL,
  `des_name` varchar(50) NOT NULL,
  `des_text` varchar(500) NOT NULL,
  `des_img_path` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `art_1` varchar(50) NOT NULL,
  `art1_text` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `art_2` varchar(50) NOT NULL,
  `art2_text` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `art_3` varchar(50) NOT NULL,
  `art3_text` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `designer`
--

INSERT INTO `designer` (`des_no`, `manager_no`, `des_name`, `des_text`, `des_img_path`, `art_1`, `art1_text`, `art_2`, `art2_text`, `art_3`, `art3_text`) VALUES
(1, 3, 'SIMON SCHMITZ', '« The greatest thing when you’re a designer is that you can amaze yourself. When you create something innovative and think ‘well, it s finally quite nice !’ »', '/designer4.webp', 'Galaxy', 'And yet their light fittings seem to be invitations to travel aboard ships, setting out to discover our galaxy. In the presence of a “curtain” of VVV, in addition to its unmatched elegance, there is an emergent energy. Speed and power take over the void.', 'ARRD', 'The starting point of AARO was a gesture. A movement. He wanted to create an as fluid motion as possible, which immediately lead him to the sphere. A sphere has so many fantastic attributes. With a sphere as a joint they are no limited directions, it has no left or right, no top or bottom. So with the sphere as the defining element of this piece, everything else \" revolved \" around it. The geometry, the balance, the friction. It all comes down to the sphere, visually pointing at it. The end result is an object that seems to be moved by the wind. It revolves effortless around it\'s centerpiece, like planets orbiting around each other. With AARO, inspired by Aaron\'s rod, the magician', 'material', 'We often use material or processes as a starting point, it determines the way we get into the project. Working on materials and their properties, respecting the limits they have, while exploring the extent of the possibilities or twisting know-hows are key dimensions of our approach.'),
(2, 4, 'BERNARD SCHOTTLANDER', 'Bernard Schottlander was born in Mainz, Germany in 1924 and moved to England in 1939. After serving with the British Army in India, he learnt to weld and took a course in Sculpture at Leeds College of Art and subsequently – with the help of a bursary – at the Anglo-French art centre in St John’s Wood. Bernard Schottlander described himself as a designer for interiors and a sculptor for exteriors.', '/designer5.webp', 'Light', 'Their favourite area to work with is light. They work on their light fittings down to the last detail. They do not just draw. They also prototype and create, sharing a love for mechanics and movement. Their mathematical approach to design encourages them to avoid the obvious, to reinvent objects when they build. When asked what inspires them, they respond without hesitation: “Everything! We are curious. We are inspired by observing the world.”', 'Movement', 'Movement is intrinsic to all of Schottlander’s work : an artist, an engineer and in no small measure a handyman, he devised a clever system of counterweights combined with a series of strong and flexible metal bars. The shade also is unique of its kind. Like an acrobat suspended in mid-air, it is made from aluminium using spinning and chasing techniques that are a part of the metalworker’s inventory of skills, but to which he has brought his sculptor’s eye to create a helical movement in which the symmetrical and the asymmetrical are in opposition.', 'Transfer', '« This transfer of universes is nothing new. The domestic interior is these days constantly being penetrated by the industrial, which in turn has long since lost its aura of being something nasty and noisy, separate to the rest of the world. Nowadays it is normal to make use of these components which fit naturally into the world of design ».'),
(3, 5, 'ALBIN GRAS', 'In 1921 Albin GRAS designed a series of lamps for use in offices and in industrial environments. The GRAS lamp, as it was subsequently called, was astounding in its simple, robust and yet very ergonomic design. There are neither screws nor welded joints in the basic form. In 1927 the Ravel company purchased the patent and started production of the GRAS lamps.', '/designer6.webp', 'Teamworks', 'Teamwork is essential to us because it forges and refines objects to their smallest details, through the iterations of their development and everybody’s experiences.', 'Artists', 'Others such as Robert Mallet-Stevens, Jacques Emile Ruhlmann and Eileen Gray followed this trend as well. Furthermore, such well-known artists as Sonia Delaunay and Georges Braque also used these lamps in their studios. For the first time in history, a lamp was equally popular in professional as well as in residential applications. Bernard-Albin Gras’ talented and visionary design has proven to be timeless.', 'Signature', 'Not one who is prone to brandishing himself in the media, his conceptual hedonism comes allied with an infectious enthusiasm and a healthy dose of fun. Dominique Perrault’s signature is barely seen on products. It is something of an event therefore when he uses it, along with that of Gaëlle Lauriot-Prévost, on the IN THE TUBE and IN THE SUN collections. It is, in its way, a way of domesticating and refining the raw power of the industrial, of filtering the source into something considered and thought-out, resulting in an object that is comfortable, soft and sophisticated.');

-- --------------------------------------------------------

--
-- 資料表結構 `favorite`
--

CREATE TABLE `favorite` (
  `product_no` int NOT NULL,
  `member_no` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `favorite`
--

INSERT INTO `favorite` (`product_no`, `member_no`) VALUES
(3, 1),
(6, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `manager`
--

CREATE TABLE `manager` (
  `manager_no` int NOT NULL,
  `manager_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(10) NOT NULL,
  `manager_account` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `manager_password` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `state` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `manager`
--

INSERT INTO `manager` (`manager_no`, `manager_name`, `role`, `manager_account`, `manager_password`, `state`) VALUES
(1, 'Lee', '後台管理人員', 'Lee123', 'Lee123', 0),
(2, 'Cheryl', '後台管理人員', 'Cheryl123', 'Cheryl123', 0),
(3, 'SIMON SCHMITZ', '設計師', '123', '123', 0),
(4, 'BERNARD SCHOTTLANDER', '設計師', '123', '123', 0),
(5, 'ALBIN GRAS', '設計師', '123', '123', 0),
(6, 'Peter', '後台管理人員', 'Peter123', 'Peter123', 0),
(7, 'Zin', '後台管理人員', 'Zin123', 'Zin123', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `member_no` int NOT NULL,
  `member_name` varchar(10) NOT NULL,
  `member_mail` varchar(50) NOT NULL,
  `member_psw` varchar(10) NOT NULL,
  `member_tel` varchar(10) NOT NULL,
  `member_birthday` date NOT NULL,
  `member_address` varchar(100) NOT NULL,
  `member_state` tinyint(1) NOT NULL,
  `member_pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`member_no`, `member_name`, `member_mail`, `member_psw`, `member_tel`, `member_birthday`, `member_address`, `member_state`, `member_pic`) VALUES
(1, 'david', 'david@gmail.com', 'david123', '0913066338', '2022-06-15', '320桃園市中壢區復興路46號8樓', 0, 'member_00.webp'),
(2, 'Jenny', 'jenny19900101@gmail.com', '19900101', '0986832123', '1990-01-01', '台北市松山區松菸南路一段26號7-1室', 0, 'member_01.webp'),
(3, 'John', 'john19930206@gmail.com', '19930206', '0963133266', '1993-02-06', '宜蘭市文化里22鄰文化新村一街46號3樓', 0, 'member_02.webp'),
(4, 'Selina', 'selina20061012@gmail.com', '20061012', '0919105366', '2006-10-12', '桃園市中壢區幸福里福州一街329號', 0, 'member_03.webp');

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `news_no` int NOT NULL,
  `news_title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `news_text` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `newsImage_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `news_publish` date DEFAULT NULL,
  `news_state` tinyint(1) NOT NULL COMMENT '0:上架 1:下架'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`news_no`, `news_title`, `news_text`, `newsImage_path`, `news_publish`, `news_state`) VALUES
(1, 'Lamp Maintenance Guide', 'In fact, as long as a simple maintenance program is carried out on a regular basis for the material of each lamp, the service life of the lamp can be extended and more time spent with family members.\r\n\r\nThe surface treatment of the metal lampshade can be divided into baking paint and electroplating methods. Usually, the dust attached to it can be wiped off with a soft cloth on a regular basis. If there are mimeographs or other dirt, wipe it in the same direction with a slightly damp cloth wrung out. Through regular cleaning, let the metal lampshade shine with a delicate luster at any time.\r\n\r\nWhether it is the warmth and haze of white jade glass, or the airy feeling of clear glass, the glass lamp accompanies our lives with its unique and pure atmosphere. Hands-on regular cleaning to get it back to its original clarity.', 'news_01_lamp_maintenance_guide.webp', '2022-03-06', 0),
(2, 'Tips for choosing lamps for children at home', 'Today, let\'s talk about the \"Notes on Lamps for Children\", so that everyone can confirm according to the description and help families with small children find a lamp that is suitable for accompanying the whole family.\r\n\r\n#Sufficient brightness, comfortable light\r\nWhen you reach a certain age, there will be more time for games and study besides sleeping in the room. At this time, sufficient brightness and comfortable light are very important. According to the CNS national standard, the overall brightness of the children\'s room is 200~300lux, and the children\'s homework, Reading requires 750~1000 lux. The overall lighting uses chandeliers and ceiling lamps to create a bright and comfortable atmosphere for the space, while for accent lighting, table lamps and standing lamps are used to directly supply sufficient light for the use area.', 'news_02_tips_for_choosing_lamps_for_children_at_home.webp', '2022-04-03', 0),
(3, 'Friendly Home Lighting Environment Guide', 'With age, vision naturally gradually weakens. After about 50 years old, people will gradually become less sensitive to color contrast, take longer to respond to light in the dark room, or easily feel soreness due to excessive intraocular pressure, and experience imagery. Phenomena such as center darkening or distortion. Therefore, when you want to create an age-friendly home environment, putting yourself in the situation and planning the necessary lighting configuration according to the actual needs is an important part that cannot be ignored.\r\n\r\nIn fact, as long as you master the general direction of \"not causing multiple shadows and clearly identifying the location of furniture items\" when setting lights, and then according to your living habits and hobbies, 1. Improve the overall brightness of the home, 2. Strengthen the lighting of the activity area, 3. Reduce dazzling glare, 4. Select the color temperature according to the situation, and mobilize the lighting details according to the above four-point proposals to create a safe and comfortable home space.', 'news_03_friendly_home_lighting_environment_guide.webp', '2022-06-13', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail`
--

CREATE TABLE `orderdetail` (
  `order_no` int NOT NULL,
  `product_no` int NOT NULL,
  `order_count` int NOT NULL,
  `product_price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `orderdetail`
--

INSERT INTO `orderdetail` (`order_no`, `product_no`, `order_count`, `product_price`) VALUES
(1, 17, 1, 3690),
(1, 18, 1, 3390),
(2, 14, 1, 2290),
(2, 15, 1, 1790),
(2, 16, 1, 3290);

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_no` int NOT NULL,
  `category_no` int NOT NULL,
  `des_no` int NOT NULL,
  `des_select` tinyint(1) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `specification` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `on_market` tinyint(1) NOT NULL,
  `in_stock` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_no`, `category_no`, `des_no`, `des_select`, `name`, `description`, `specification`, `price`, `on_market`, `in_stock`) VALUES
(1, 1, 1, 1, 'In The Wind', 'A very creative attempt, Japanese designer Yuyo Miyake uses asymmetrical twist manufacturing technology to diffuse light 360 degrees, realizing the visual appearance of abstract light. Through Nemo\'s patented technology, LED lighting becomes warmer and more comfortable. Naturally, In the wind is a new direction for lighting design based on the innovation of contemporary LED technology and the attempt and application to break away from traditional rules.', 'Dimensions : \r\nIn The Wind Floor: Ø26 x H183 cm\r\n\r\nLight Source : \r\nIn The Wind Floor: Linear LED 58W 2700K/3000K CRI85 2850lm', 1800, 1, 1),
(2, 1, 2, 1, 'Polo', 'With flexible limbs, slender body, standing where you need it, small LED light source port, so that the light can be accurately illuminated where you need it, the switch on the lampshade is turned on by rotation, which is more neat, The aluminum joints have 3 adjustable lighting angles, which makes the Polo more ductile. The overall lightness is easy to rotate without losing stability. The color is black or hair gray to choose from.', 'Dimensions : \r\nØ4.5 x W35 x H104.9 cm\r\n\r\nLight Source : \r\nPolo Floor : LED 7W 350mA 3000K 520lm (included)', 1450, 1, 1),
(3, 1, 3, 1, 'Claritas', 'The first lamp designed by Italian modernist master Vico Magistretti was produced in 1946. The semi-enclosed lampshade covers the open light source and is easily adjusted to suit any usage needs. The light source is not dazzling, and the chrome-plated paint lamp body exudes an elegant atmosphere, showing a classic that spans half a century under the warm light.', 'Dimensions : \r\nClaritas: L50 x W47 x H164 cm\r\n\r\nLight Source : \r\nClaritas: E27 LED', 1650, 1, 1),
(4, 2, 1, 1, 'Aballs', 'Jaime Hayón, known as the most unique designer and artist in Spain today, combines gorgeous materials with stunning visual effects, and paints the lamp body with lacquer metal ceramics, like a beautiful lady sitting in the air. The blown glass is white and flawless like the moon, giving the space a supremely beautiful vision.', 'Dimensions : \r\nAballs A II PE : Ø14 x H22 cm\r\nAballs A II ME : Ø18 x H26 cm\r\nAballs A II GR : Ø24 x H32.5 cm\r\n\r\nLight Source : \r\nAballs A II PE : G9 LED\r\nAballs A II ME : G9 LED\r\nAballs A II GR : G9 LED', 2190, 1, 1),
(5, 2, 2, 1, 'Mondrian', 'As the name suggests, the Mondrian series is composed of geometric shapes. The designer uses lines to create a \"space of light\" in the environment, allowing the light source to wander freely in the square interlaced structure, presenting a sense of flowing rhythm. Emphasizes the expression of pure shape and abstract design, like a style painting.', 'Dimensions : \r\nMondrian LED Ceiling: L150 x W51 x H90 cm\r\nMondrian Glass Ceiling: L160x W75 x H105 cm\r\n\r\nLight Source : \r\nMondrian LED Ceiling: Strip LED 27W 2700K CRI80 3600lm\r\nMondrian Glass Ceiling: 5 x G9 LED', 2690, 1, 1),
(6, 2, 3, 1, 'Discoco', 'Full of dramatic tension, Discoco is made up of 35 arc-shaped leaves stacked on top of each other. The rich appearance is contrasted with a restrained and warm light. The changing light and shadow projected on the space always makes people involuntarily pay attention. force on it. The pure white Discoco is quiet and elegant during the day, but becomes the protagonist of the space at night, bringing the charm of white into full play; the combination of black and gold makes the luxury more stable; the new colors fog gray and fog rice can cater to more directions The atmosphere of the space. Discoco has a total of four colors and five sizes to choose from, which is widely used in spaces with different attributes, such as living rooms, bedrooms, dining rooms, entrances and even commercial spaces, and it also displays its gorgeousness, elegance and generosity in many ways.', 'Dimensions : \r\nDiscoco C88: Ø88 x H54.5 cm\r\nDiscoco C68: Ø68 x H43.8 cm\r\nDiscoco C53: Ø53 x H34 cm\r\n\r\nLight Source : \r\nDiscoco C88 : 3 x E27 LED\r\nDiscoco C68 : 3 x E27 LED\r\nDiscoco C53 : E27 LED', 2490, 1, 1),
(7, 3, 1, 1, 'BORNE BETON PETITE', 'Concrete indoor table lamp, conceived for the Unite d’habitation de Marseille and for Bhakra Dam, Sukhna Dam in India in 1952.\r\nEach lamp is a handcrafted product: small aesthetic and finishing differences between one lamp and the other make them unique.', 'Dimensions : \r\nBORNE BETON PETITE : W30 x D22 x H 31 cm\r\n\r\nLight Source : \r\nBORNE BETON PETITE_INDOOR & OUTDOOR IP44 : LED board', 3190, 1, 1),
(8, 3, 2, 1, 'Cala Metal', 'The new Cala with a metal stand is even more sophisticated: a structure that is easier on the eyes, and is lighter. Both versions speak the same language: the proportions, the harmony, the cosy light, and now with two different finishes to offer more possibilities. This collection is expanding, and this new metal edition provides a more neutral and versatile version.', 'Dimensions : \r\nCala Metal: ø56.4 x H145 cm\r\n\r\nLight Source : \r\nCala Metal: E27 LED', 3880, 1, 1),
(9, 3, 3, 1, 'Ginger p', 'Ginger\'s thin lampshade is shaped like a cymbal in a drum kit, and in fact it is designer Joan Gaspar\'s tribute to Ginger Baker, the drummer of British rock band Cream in the 1960s, and hence the name. The lampshade is made of high-pressure integrated molding of paper and thin wood chips. It is only 4 mm thick with built-in LED light source. It is lightweight but not less powerful.', 'Dimensions : Ø42 x H125 cm\r\nLight Source : Ginger P : LED SMD 21.7W 700mA 2700K CRI90 Luminaire 698lm Light Source 2130lm (included)', 1650, 1, 1),
(10, 4, 1, 1, 'Theia', 'The Greek goddess of light, Theia, as the name implies, expresses beauty and worship through the fusion of light and shadow. The lacquer material is matched with the smoky shade. Through the rotating function, it can be used for reading and pointing lighting, to feel the wonderful warm atmosphere, and to wander between light and shadow, enjoying the beauty of the shadows.', 'Dimensions : \r\nØ32 x H43.5 cm\r\n\r\nLight Source : \r\nTheia M : LED SMD 11.3W 700mA 2700K CRI90 Light Source 1019lm (included)', 870, 1, 1),
(11, 4, 2, 1, 'Copérnica', 'If light has weight, Copérnica is its measuring instrument. Through precise proportions, designer Ramírez i Carrillo allows Copérnica to move and float effortlessly in space as if weightless, constructing a geometric sculpture of light, and endows the minimalist lines with powerful functionality. Copérnica includes standing lamps and table lamps, users can adjust the suitable height and distance according to their needs. Different color matching options also add a soft touch to the overall industrial feel.', 'Dimensions : \r\nØ12 x L104.6 x H60.3 cm\r\n\r\nLight Source : \r\nCopérnica M : LED SMD 6.9W 700mA 2700K CRI90 Light source 427lm (included)', 1150, 1, 1),
(12, 4, 3, 1, 'The Muse Portable Lamp', 'Recalling the promise and grandeur of the British pleasure garden, The Muse mixes the classic lantern aesthetic with ultra-modern technology. Designed to be repaired over time, it features cordless long-life battery, Dim to Warm LED technology and a custom integrated dimmer.', 'Dimensions : \r\nø12.5 x H 33.8 cm\r\n\r\nLight Source : \r\nhe Muse Portable lamp : LED Bulb 2000-2800K', 990, 1, 1),
(13, 5, 1, 1, 'Lid', 'Lid uses the simplest circular shape, through the wide-angle and evenly divergent LED light source behind the luminaire, and the halo reflected from the edge of the glass outlines the subtle contours, creating a fascinating atmosphere like a solar eclipse. When used in multiple arrangements, it is like a mysterious message carrier in the space, which opens a dialogue between people and the environment, and is an ideal choice to make commercial spaces stand out.', 'Dimensions : Lid : Ø23.5 x W6.7 cm\r\nLight Source : Lid : LED 17W, 1880 lm – 2700 K, 1880 lm – 3000 K EEI A+', 1990, 1, 1),
(14, 5, 2, 1, 'Urban', 'The Urban series simplifies the relationship between lamps and space, and creates a sense of hierarchy through the interlacing of neat horizontal and vertical lines with three-dimensional space. The brand\'s signature fog-black perforated metal lampshade creates both direct and indirect light sources, and with lightly polished brass decorative details, it presents an intellectual atmosphere of mature wash chains.', 'Dimensions : \r\nUrban Wall: L20 x D25 x H26 cm\r\n\r\nLight Source : \r\nUrban Wall: E14 LED', 2290, 1, 1),
(15, 5, 3, 1, 'Laser', 'Laser is a compact, versatile light fixture in the shape of a box with an attractive architectural look. From its painted steel structure, available in three different finishes, the LED light source diffuses a functional and evocative two-way light that creates plays of light and shadow on the wall.', 'Dimensions : \r\nLaser : W10 x D10 x H 10 cm\r\n\r\nLight Source : \r\nLaser: LED 2700K 15 W / 1750 lm or LED 3000K 15 W / 1850 lm', 1790, 1, 1),
(16, 6, 1, 1, 'Volum', 'Paying homage to the Italian tradition of spherical glass lamps and the art of glass blowing, which gives glass its naturally imperfect shape, Volum is conceived as four units of different shapes and sizes that can live independently or intuitively and harmoniously complement each other.', 'Dimensions : \r\nVolum 14: ø14 x H 13.5 cm\r\nVolum 22: ø22 x H 20.5 cm\r\nVolum 29: ø29 x H 25 cm\r\nVolum 42: ø42 x H 36 cm\r\nLight Source : \r\nVolum 14: E14 LED\r\nVolum 22,29,42: E27 LED', 3290, 1, 1),
(17, 6, 2, 1, 'Random', 'A lightweight, blown glass suspension lamp, Random is made up of three round diffusers of different sizes which form one simple, eye-catching whole. Each diffuser has an LED light source which emits a soft white light. When grouped together on a cluster, Random light fixtures form a poetic composition like soap bubbles, enhanced by the contemporary finishes which add a touch of character and originality.', 'Dimensions : Random: W 29 x H 79.5 cm\r\nLight Source : Random: LED 2700K or 3000K', 3690, 1, 1),
(18, 6, 3, 1, 'Jim', 'Immediate function, uncomplicated style, durable materials, modular at will. Inspired by the abat-jours of the ateliers of the early 1900s, JIM is a system of suspension lamps with distinctive shapes and a versatile composition that suits any interiors and living environment. JIM’s versatility is further enhanced by the colour range: the four different finishes for the shades can be combined with the three different suspension hook hues as desired.', 'Dimensions : \r\nJim bell: ø28 x H 33 cm\r\nJim cone: ø28 x H 32 cm\r\nJim cylinder: ø17.5 x H 35 cm\r\nJim dome: ø50 x H 34 cm\r\n\r\nLight Source : \r\nJim: E27 LED', 3390, 1, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_category`
--

CREATE TABLE `product_category` (
  `category_no` int NOT NULL,
  `category_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '"1:floor lamps\r\n2:pendant\r\n3:home accent\r\n4:table lamps\r\n5:wall lamps\r\n6.chandaliers"',
  `category_imgpath` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product_category`
--

INSERT INTO `product_category` (`category_no`, `category_name`, `category_imgpath`) VALUES
(1, 'floor lamps', 'product_category_floor_lamps.webp'),
(2, 'pendant', 'product_category_pendant.webp'),
(3, 'home accent', 'product_category_home_accent.webp'),
(4, 'table lamps', 'product_category_table_lamps.webp'),
(5, 'wall lamps', 'product_category_wall_lamps.webp'),
(6, 'chandaliers', 'product_category_chandeliers.webp');

-- --------------------------------------------------------

--
-- 資料表結構 `product_image`
--

CREATE TABLE `product_image` (
  `image_no` int NOT NULL,
  `product_no` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `product_show` tinyint(1) NOT NULL COMMENT '0：不顯示\r\n1：顯示',
  `image_path` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product_image`
--

INSERT INTO `product_image` (`image_no`, `product_no`, `name`, `product_show`, `image_path`) VALUES
(1, 1, 'In The Wind', 0, 'product_floor_lamps_in_the_wind_01.webp'),
(2, 1, 'In The Wind', 0, 'product_floor_lamps_in_the_wind_02.webp'),
(3, 1, 'In The Wind', 0, 'product_floor_lamps_in_the_wind_03.webp'),
(4, 2, 'Polo', 0, 'product_floor_lamps_polo_01.webp'),
(5, 2, 'Polo', 0, 'product_floor_lamps_polo_02.webp'),
(6, 2, 'Polo', 0, 'product_floor_lamps_polo_03.webp'),
(7, 3, 'Claritas', 0, 'product_floor_lamps_claritas_01.webp'),
(8, 3, 'Claritas', 0, 'product_floor_lamps_claritas_02.webp'),
(9, 3, 'Claritas', 0, 'product_floor_lamps_claritas_03.webp'),
(10, 4, 'Aballs', 0, 'product_pendant_aballs_01.webp'),
(11, 4, 'Aballs', 0, 'product_pendant_aballs_02.webp'),
(12, 4, 'Aballs', 0, 'product_pendant_aballs_03.webp'),
(13, 5, 'Mondrian', 0, 'product_pendant_mondrian_01.webp'),
(14, 5, 'Mondrian', 0, 'product_pendant_mondrian_02.webp'),
(15, 5, 'Mondrian', 0, 'product_pendant_mondrian_03.webp'),
(16, 6, 'Discoco', 0, 'product_pendant_discoco_01.webp'),
(17, 6, 'Discoco', 0, 'product_pendant_discoco_02.webp'),
(18, 6, 'Discoco', 0, 'product_pendant_discoco_03.webp'),
(19, 7, 'BORNE BETON PETITE', 0, 'product_home_accent_borne_beton_petite_01.webp'),
(20, 7, 'BORNE BETON PETITE', 0, 'product_home_accent_borne_beton_petite_02.webp'),
(21, 7, 'BORNE BETON PETITE', 0, 'product_home_accent_borne_beton_petite_03.webp'),
(22, 8, 'Cala Metal', 0, 'product_home_accent_cala_metal_01.webp'),
(23, 8, 'Cala Metal', 0, 'product_home_accent_cala_metal_02.webp'),
(24, 8, 'Cala Metal', 0, 'product_home_accent_cala_metal_03.webp'),
(25, 9, 'Ginger p', 0, 'product_home_accent_ginger_p_01.webp'),
(26, 9, 'Ginger p', 0, 'product_home_accent_ginger_p_02.webp'),
(27, 9, 'Ginger p', 0, 'product_home_accent_ginger_p_03.webp'),
(28, 10, 'Theia', 0, 'product_table_lamps_theia_01.webp'),
(29, 10, 'Theia', 0, 'product_table_lamps_theia_02.webp'),
(30, 10, 'Theia', 0, 'product_table_lamps_theia_03.webp'),
(31, 11, 'Copernica', 0, 'product_table_lamps_copprnica_01.webp'),
(32, 11, 'Copernica', 0, 'product_table_lamps_copprnica_02.webp'),
(33, 11, 'Copernica', 0, 'product_table_lamps_copprnica_03.webp'),
(34, 12, 'The Muse Portable Lamp', 0, 'product_table_lamps_the_muse_portable_lamp_01.webp'),
(35, 12, 'The Muse Portable Lamp', 0, 'product_table_lamps_the_muse_portable_lamp_02.webp'),
(36, 12, 'The Muse Portable Lamp', 0, 'product_table_lamps_the_muse_portable_lamp_03.webp'),
(37, 13, 'Lid', 0, 'product_wall_lamps_lid_01.webp'),
(38, 13, 'Lid', 0, 'product_wall_lamps_lid_02.webp'),
(39, 13, 'Lid', 0, 'product_wall_lamps_lid_03.webp'),
(40, 14, 'Urban', 0, 'product_wall_lamps_urban_01.webp'),
(41, 14, 'Urban', 0, 'product_wall_lamps_urban_02.webp'),
(42, 14, 'Urban', 0, 'product_wall_lamps_urban_03.webp'),
(43, 15, 'Laser', 0, 'product_wall_lamps_laser_01.webp'),
(44, 15, 'Laser', 0, 'product_wall_lamps_laser_02.webp'),
(45, 15, 'Laser', 0, 'product_wall_lamps_laser_03.webp'),
(46, 16, 'Volum', 0, 'product_chandaliers_volum_01.webp'),
(47, 16, 'Volum', 0, 'product_chandaliers_volum_02.webp'),
(48, 16, 'Volum', 0, 'product_chandaliers_volum_03.webp'),
(49, 17, 'Random', 0, 'product_chandaliers_random_01.webp'),
(50, 17, 'Random', 0, 'product_chandaliers_random_02.webp'),
(51, 17, 'Random', 0, 'product_chandaliers_random_03.webp'),
(52, 18, 'Jim', 0, 'product_chandaliers_jim_01.webp'),
(53, 18, 'Jim', 0, 'product_chandaliers_jim_02.webp'),
(54, 18, 'Jim', 0, 'product_chandaliers_jim_03.webp'),
(55, 1, 'In The Wind', 1, 'product_floor_lamps_in_the_wind.webp'),
(56, 2, 'Polo', 1, 'product_floor_lamps_polo.webp'),
(57, 3, 'Claritas', 1, 'product_floor_lamps_claritas.webp'),
(58, 4, 'Aballs', 1, 'product_pendant_aballs.webp'),
(59, 5, 'Mondrian', 1, 'product_pendant_mondrian.webp'),
(60, 6, 'Discoco', 1, 'product_pendant_discoco.webp'),
(61, 7, 'BORNE BETON PETITE', 1, 'product_home_accent_borne_beton_petite.webp'),
(62, 8, 'Cala Metal', 1, 'product_home_accent_cala_metal.webp'),
(63, 9, 'Ginger p', 1, 'product_home_accent_ginger_p.webp'),
(64, 10, 'Theia', 1, 'product_table_lamps_theia.webp'),
(65, 11, 'Copernica', 1, 'product_table_lamps_copprnica.webp'),
(66, 12, 'The Muse Portable Lamp', 1, 'product_table_lamps_the_muse_portable_lamp.webp'),
(67, 13, 'Lid', 1, 'product_wall_lamps_lid.webp'),
(68, 14, 'Urban', 1, 'product_wall_lamps_urban.webp'),
(69, 15, 'Laser', 1, 'product_wall_lamps_laser.webp'),
(70, 16, 'Volum', 1, 'product_chandaliers_volum.webp'),
(71, 17, 'Random', 1, 'product_chandaliers_random.webp'),
(72, 18, 'Jim', 1, 'product_chandaliers_jim.webp');

-- --------------------------------------------------------

--
-- 資料表結構 `product_order`
--

CREATE TABLE `product_order` (
  `order_no` int NOT NULL,
  `member_no` int NOT NULL,
  `order_datetime` datetime NOT NULL,
  `payer_name` varchar(20) NOT NULL,
  `payer_phone` varchar(10) NOT NULL,
  `payer_address` varchar(50) NOT NULL,
  `credit_card` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `card_date` int NOT NULL,
  `card_checkCode` int NOT NULL,
  `recipient_name` varchar(20) NOT NULL,
  `recipient_phone` varchar(10) NOT NULL,
  `recipient_address` varchar(50) NOT NULL,
  `recipient_datetime` timestamp NOT NULL,
  `order_state` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '待處理\r\n待出貨\r\n已出貨\r\n訂單完成',
  `order_total` int NOT NULL,
  `order_notes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product_order`
--

INSERT INTO `product_order` (`order_no`, `member_no`, `order_datetime`, `payer_name`, `payer_phone`, `payer_address`, `credit_card`, `card_date`, `card_checkCode`, `recipient_name`, `recipient_phone`, `recipient_address`, `recipient_datetime`, `order_state`, `order_total`, `order_notes`) VALUES
(1, 2, '2022-06-06 16:15:53', 'Jenny', '0986832123', '台北市松山區松菸南路一段26號7-1室', '4147622810105356', 1126, 660, 'Jenny', '0986832123', '台北市松山區松菸南路一段26號7-1室', '2022-06-22 01:58:51', '待處理', 7080, 'no,thanks.'),
(2, 3, '2022-06-07 16:15:53', 'John', '0963133266', '宜蘭市文化里22鄰文化新村一街46號3樓', '5323422688105657', 716, 46, 'John', '0963133266', '宜蘭市文化里22鄰文化新村一街46號3樓', '2022-06-22 01:58:51', '待出貨', 7370, 'no,thanks.');

-- --------------------------------------------------------

--
-- 資料表結構 `promotions`
--

CREATE TABLE `promotions` (
  `promotions_no` int NOT NULL,
  `promotions_state` tinyint(1) NOT NULL COMMENT '0:上架\r\n1:下架',
  `promotions_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `promotions_startDate` date NOT NULL,
  `promotions_endDate` date NOT NULL,
  `promotionsImage_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `promotions_text` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `promotions`
--

INSERT INTO `promotions` (`promotions_no`, `promotions_state`, `promotions_name`, `promotions_startDate`, `promotions_endDate`, `promotionsImage_path`, `promotions_text`) VALUES
(1, 0, '10th Anniversary', '2022-01-01', '2022-12-31', 'promotion_01_tenyear.webp', '\"In the future, don\'t forget the original intention, start from the heart\"\r\nThank you for the time we spent together. At the end of 2021, LUFY will be ten years old. In order to celebrate the 10th birthday with everyone, there will be a number of product promotions from December 1st to December 31st.'),
(2, 0, 'Happy New Year', '2022-01-01', '2022-02-06', 'promotion_02_newyear.webp', 'Celebrate the New Year and Spring Festival in 2022\r\nIn order to celebrate the arrival of the new year with you, LUFY offers a number of product promotions during the New Year, to illuminate everyone and accompany you to have a good year in the new year.'),
(3, 0, 'Happy Mother\'s Day', '2022-05-01', '2022-05-31', 'promotion_03_moms_day.webp', 'From the moment the child was born, \"mother\" was officially converted from a noun to a \"verb\" in the dictionary, and life began to have endless details. We have prepared a celebration proposal for mothers who are inconvenient and do not like to go out and crowd; this weekend, let\'s celebrate the festival at home together!');

-- --------------------------------------------------------

--
-- 資料表結構 `promotionsdetail`
--

CREATE TABLE `promotionsdetail` (
  `promotions_no` int NOT NULL,
  `product_no` int NOT NULL,
  `promotions_price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `promotionsdetail`
--

INSERT INTO `promotionsdetail` (`promotions_no`, `product_no`, `promotions_price`) VALUES
(1, 1, 1689),
(1, 2, 1359),
(1, 10, 1819),
(2, 13, 1869),
(2, 17, 999);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `carousel`
--
ALTER TABLE `carousel`
  ADD PRIMARY KEY (`carousel_no`);

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_no`),
  ADD KEY `coupon_member_fk` (`member_no`);

--
-- 資料表索引 `designer`
--
ALTER TABLE `designer`
  ADD PRIMARY KEY (`des_no`),
  ADD KEY `designer_manager_fk` (`manager_no`);

--
-- 資料表索引 `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`product_no`,`member_no`),
  ADD KEY `favorite_member_fk` (`member_no`);

--
-- 資料表索引 `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`manager_no`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_no`);

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_no`);

--
-- 資料表索引 `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`order_no`,`product_no`),
  ADD KEY `orderdetail_product_fk` (`product_no`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_no`),
  ADD KEY `product_product_category_fk` (`category_no`),
  ADD KEY `product_designer_fk` (`des_no`);

--
-- 資料表索引 `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`category_no`);

--
-- 資料表索引 `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`image_no`),
  ADD KEY `product_image_product_fk` (`product_no`);

--
-- 資料表索引 `product_order`
--
ALTER TABLE `product_order`
  ADD PRIMARY KEY (`order_no`),
  ADD KEY `product_order_member_fk` (`member_no`);

--
-- 資料表索引 `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`promotions_no`);

--
-- 資料表索引 `promotionsdetail`
--
ALTER TABLE `promotionsdetail`
  ADD PRIMARY KEY (`promotions_no`,`product_no`),
  ADD KEY `promotionsdetail_product_fk` (`product_no`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `carousel`
--
ALTER TABLE `carousel`
  MODIFY `carousel_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `designer`
--
ALTER TABLE `designer`
  MODIFY `des_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `manager`
--
ALTER TABLE `manager`
  MODIFY `manager_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `member_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `news_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_category`
--
ALTER TABLE `product_category`
  MODIFY `category_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_image`
--
ALTER TABLE `product_image`
  MODIFY `image_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order`
--
ALTER TABLE `product_order`
  MODIFY `order_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `promotions`
--
ALTER TABLE `promotions`
  MODIFY `promotions_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `coupon`
--
ALTER TABLE `coupon`
  ADD CONSTRAINT `coupon_member_fk` FOREIGN KEY (`member_no`) REFERENCES `member` (`member_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `designer`
--
ALTER TABLE `designer`
  ADD CONSTRAINT `designer_manager_fk` FOREIGN KEY (`manager_no`) REFERENCES `manager` (`manager_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_member_fk` FOREIGN KEY (`member_no`) REFERENCES `member` (`member_no`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `favorite_product_fk` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_product_fk` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `orderdetail_product_order_fk` FOREIGN KEY (`order_no`) REFERENCES `product_order` (`order_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_designer_fk` FOREIGN KEY (`des_no`) REFERENCES `designer` (`des_no`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `product_product_category_fk` FOREIGN KEY (`category_no`) REFERENCES `product_category` (`category_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_product_fk` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `product_order`
--
ALTER TABLE `product_order`
  ADD CONSTRAINT `product_order_member_fk` FOREIGN KEY (`member_no`) REFERENCES `member` (`member_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- 資料表的限制式 `promotionsdetail`
--
ALTER TABLE `promotionsdetail`
  ADD CONSTRAINT `promotionsdetail_product_fk` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `promotionsdetail_promotions_fk` FOREIGN KEY (`promotions_no`) REFERENCES `promotions` (`promotions_no`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
