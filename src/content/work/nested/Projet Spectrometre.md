---
title: Projet Spectrometre
publishDate: 2020-03-04 00:00:00
img: /assets/Projet spectrometre.png
img_alt: Image couverture de projet
description: |
  Conception d'un sopectrometre
tags: 
  - Conception électronique
  - Conception mécanique
  - Programation
  - Métrologie
  - Principes chimiques
---
<div style="display:flex; justify-content:center;">
    <img src="/assets/Chaine-spectro.png" alt="Image 4" width="120%">
</div>

#### Objectif
Ce projet, avait pour but de concevoir entièrement un spectromètre afin de doser les Nitirites présent dans l'eau de la Loire.Ainsi, qu'une étude métrologie pour confirmer la fiabilité de notre instument. Le tout relatée sur une page Web.


#### Conception mécanique
<div style="display:flex; justify-content:center;">
    <img src="/assets/decoupe_laser.png" alt="Image 1" width="30%">
    <img src="/assets/Modelspectro.jpg" alt="Image 2" width="30%"
    
</div>
<div style="display:flex; justify-content:center;">
    <img src="/assets/supportdecuve.png" alt="Image 3" width="30%">
    <img src="/assets/poignet.png" alt="Image 4" width="30%">
    <img src="/assets/supportcuve.png" alt="Image 3" width="30%">
</div>
En tenant compte des différentes contraintes de chaque capteur et du principe de mesure, j'ai con. 
Pour les capteurs de température et d'humidité, j'ai créé un espace ventilé avec des grilles en nid d'abeilles de part et d'autre, et un intérieur noir pour éviter qu'une trop forte luminosité ne fausse la valeur de la température et pour l'anémomètre et la girouette, un espace a été laissé au sommet de la station pour assurer une parfaite circulation de l'air. 
Le tout est imprimé en acide polylactique (PLA) mais nous pourrions l'améliorer en l'imprimant en ABS, qui est plus résistant. 

##### Métrologie

Nous allons réaliser différentes tests pour attester de la fiabilité et de la precision des mesures de notre instrument.

<div style="display:flex; align-items:center;">
    <img src="/assets/etenduedemesure.png"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;">On effectue des tests pour des solutions de concentrations différentes pour voir jusqu'où nous pouvons détecter, et ainsi caliber au mieux pour notre échantillon type.</p>
</div>
<div style="display:flex; align-items:center;">
    <img src="/assets/deriveinstrumentale.png"  width="50%" style="margin-right:10px;">
    <p style="margin-left:10px;">On laisse notre instrument allumé durant 10 heures puis nous effectuons à nouveaux une mesure pour constater ou non une influence du tempssur nos résultats, ici nous en observons pas il n'y a donc pas de dérive sur une plage de 10 heures.</p>
</div>
<div style="display:flex; align-items:center;">
    <img src="/assets/linearite.png"  width="50%" style="margin-right:10px;">
    <p style="margin-left:10px;">On effectue 5 mesures et nous comparons leur équation de régression linéaire pour déterminer si nous conservons bien le comportement linéaire de notre mesure, ici, nous pouvons constater que c'est bien le cas d'un point de vue graphique et sur les valeurs de coefficients de l'équation de droite.</p>
</div>

#### Page web

<div style="display:flex; justify-content:center;">
    <img src="/assets/Homepage.jpg" alt="Image 1" width="80%">
    <img src="/assets/Methodepage.jpg" alt="Image 2" width="80%">
</div>
<div style="display:flex; justify-content:center;">
    <img src="/assets/Resultpage.jpg" alt="Image 3" width="80%">
    <img src="/assets/Metropage.jpg" alt="Image 4" width="80%">
</div>
Ce projet et ses résultats de mesure sont illustré sur une page Web codé en HTML, CSS, PYTHON divisé en 5 fenêtres rempliçant un rôle d'information définie, "Accueil" "Méthode" "Résultats" "Performances Métrologiques" "Mode Opératoire".
Pour la réalisation de mon site, je l'ai structuré en 3 blocs: "STATIC" avec mes illustrations CSS et Javascript; "TOOLS" pour permettre de convertir les informations de l'Arduino dans ma base de données et de les afficher; et enfin "TEMPLATES" avec tout le squelette du site. Pour finir, les 20 données de chaque concentrations étalons sont moyonné en un points et représenté sur un graphique (matpotlib) pour observer son caractère linéaire. Puis, avec des propriété de matpotlib, je calcule l'équation de la droite selon un modèle de regression linéaire.Afin, avec elle je peut calculer d'après la loi de Beer-lambert la concentration de la solutions inconnu à partir de son absorbance.

#### Produit fini

<div style="display:flex; justify-content:center;">
    <img src="/assets/photoGspectro.png" alt="Image 1" width="50%">
</div>
<div style="display:flex; justify-content:center;">
    <img src="/assets/photosupportcuve.png" alt="Image 2" width="50%">
    <img src="/assets/spectrovuH2.png" alt="Image 2" width="50%">
</div>

#### Rédaction guide d'utilisation

<div style="display:flex; justify-content:center;">
    <img src="/assets/Usermanuel1.png" alt="Image 1" width="40%">
    <img src="/assets/Usermanuel2.png" alt="Image 2" width="40%">
    <img src="/assets/Usermanuel3.png" alt="Image 3" width="40%">
</div>
La réalisation de ce guide en anglais a pour bute de nous détacher de l'instrument et de permettre à m'importe qui de pouvoir l'utiliser avec toutes les indications necessaires. cela nous demandais un travaille de vilgarisation et de synthétisation.

