---
title: Projet Spectrometre
publishDate: 2020-03-04 00:00:00
img: /assets/Projet spectrometre.png
img_alt: Image couverture de projet
description: |
  
tags: 
  - Mener une campagne de mesures-n°2
  - Déployer la métrologie et la démarche qualité-n°2
  - Mettre en oeuvre une chaîne de mesure et d'instrument-n°2
---
<div style="display:flex; justify-content:center;">
    <img src="/assets/Chaine-spectro.png" alt="Image 4" width="150%">
</div>

#### Objectif
Ce projet, avait pour but de concevoir entièrement un spectromètre afin de doser les Nitirites présent dans l'eau de la Loire.Ainsi, qu'une étude métrologie pour confirmer la fiabilité de notre instument. Le tout relatée sur une page Web.

### Choix des composants éléctroniques

<div style="display:flex; align-items:center;">
    <img src="/assets/Diode laser.jpg"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;">Nous avons decider de prends comme émetteur une diode laser de 530 nm afin de nous rapprocher le plus du pics d'absorbance des nitrites qui est de 540 nm, de plus, la couleur de notre photodiode est verte qui est la opposé du rose (couleur de notre réactif chique en résence de Nitrite).</p>
</div>
<div style="display:flex; align-items:center;">
    <img src="/assets/Photodiode.jpg"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;">Puis, pour le récepteur, nous avons prit une photodiode compte-tenue de sa meilleur sensibilitée (cette conclusion est le résultats d'un test de performance entre une photorésistance, une photodiode et un phototransistor.)</p>
</div>


#### Conception mécanique

En tenant compte des différentes contraintes de chaque capteur et du principe de mesure optique, j'ai conçue un boitié à la fois compact, solide, impèrméable à la lumière et fonctionnel.

<div style="display:flex; align-items:center;">
    <img src="/assets/Modelspectro.jpg"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;">Conception du fichier de modélisation 3D global sous Fusion 360 pour visualiser et discuter des propriétées, de l'apparence du boitié afin de déterminer les méthodes de conception à prioriser. </p>
</div>

<div style="display:flex; align-items:center;">
    <img src="/assets/decoupe_laser.png"  width="40%" style="margin-right:10px;">
    <p style="margin-left:10px;">Réalisation du fichier .svg de découpe par CNC concentratrice de CO2 (Commande Numérique par Calculateur) sur des plaques de bois de 5 mm. Pour profiter de ses caractères de Solidité, précision et fiabilité. Ce dernier est composé d'une multitude de créneaux pour imbriquer les différentes pièces et de former la boite, elle est séparée en deux par une plaque également en bois pour maintenir les bords et éviter que le bois ce gondole et laisse passer de la lumière. De plus, cela permet de créer 2 espaces un pour la partie optique qui sera peinte en noir et une pour les branchements optiques.  </p>
</div>

 Puis, j'ai imprimé avec mon imprimante FDM (Fused Deposition Modeling) un support de cuve pour éviter des potentiels renversement lors des manipulations, une poignet afin de faciliter l'ouverture du spectromètre et le support de sample et des capteurs. Ce dernier a été modélisé de façon à optimiser la précision de nos mesures que ce soit par la distance entre les capteurs, les espaces de liberté des éléments ou sa hauteur pour laisser l'espace du circuit imprimé en dessous.
Le tout est imprimé en acide polylactique (PLA) mais nous pourrions l'améliorer en l'imprimant en ABS, qui est plus résistant. 
<div style="display:flex; justify-content:center;">
    <img src="/assets/supportdecuve.png" alt="Image 3" width="40%">
    <img src="/assets/poignet.png" alt="Image 4" width="30%">
    <img src="/assets/supportcuve.png" alt="Image 3" width="30%">
</div>

### Conception circuit éléctroniques

<div style="display:flex; align-items:center;">
    <img src="/assets/Circuitimprimé.png"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;"> - Un AO différentiel (Ajouter du gain) - Pont diviseur de tension - filtre RC pass-bas d'ordre 1 - entrées de corants - pins bananes pour l'alimentation extêrne  </p>
</div>

<div style="display:flex; align-items:center;">
    <img src="/assets/spectrovuH2.png"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;"> Branchement de l'arduino, du boton et de l'écran dans le compartiments éléctronique. Ainsi, la tension de la photodiode -> entrée analogique A0 -> Amplificateur Opérationnel -> Tension de sortie de A0 -> filtre RC -> tension de sortie du filtre RC -> Sortie de l'arduino (traitement de la donnée) -> Ecran analogique</p>
</div>

### Chimie

<div style="display:flex; align-items:center;">
    <img src="/assets/photosupportcuve.png"  width="50%" style="margin-right:10px;">
    <p style="margin-left:10px;"> Réalisation d'une gamme de solutions étalon par ajout dosé à partir d'une solution de 1 mg/L de Nitrites. Ainsi, nous avons de solutions de 0.07; 0.05; 0.03; 0.01; et 0.005 mg/L d'entourer notre solution d'eau de la Loire. </p>
</div>

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

<div style="display:flex; align-items:center;">
    <img src="/assets/cahierdeschargesvf.png"  width="60%" style="margin-right:10px;">
    <p style="margin-left:10px;">Ainsi, nous avons pû rédiger un tableau comparatif complets entre notre cahier des charges et nos résultats à la fin de notre projet.</p>
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

#### Rédaction guide d'utilisation

<div style="display:flex; justify-content:center;">
    <img src="/assets/Usermanuel1.png" alt="Image 1" width="40%">
    <img src="/assets/Usermanuel2.png" alt="Image 2" width="40%">
    <img src="/assets/Usermanuel3.png" alt="Image 3" width="40%">
</div>
La réalisation de ce guide en anglais a pour bute de nous détacher de l'instrument et de permettre à m'importe qui de pouvoir l'utiliser avec toutes les indications necessaires. cela nous demandais un travaille de vilgarisation et de synthétisation.

#### Poster de vulgarisation

<div style="display:flex; align-items:center;">
    <img src="/assets/Posterspectro.png"  width="60%" style="margin-right:10px;">
    <p style="margin-left:10px;"> Réalisation d'un poster de vulgarisation scientifique pour résumer le projet de manière graphique. Ce poster a pour but de permettre la compréhension du projet pour le plus grand nombre. </p>
</div>