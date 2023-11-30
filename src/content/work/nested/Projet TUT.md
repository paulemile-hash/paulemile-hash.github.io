---
title: Projet Universitaire
publishDate: 2020-03-04 00:00:00
img: /assets/Projet TUT.jpg
img_alt: Image couverture de projet
description: |
  Conception d'une station météo intéligente
tags: 
  - Recherche de matériel
  - Assemblage éléctronique
  - Programation
  - Modélisation 3D
---
<div style="display:flex; justify-content:center;">
    <img src="/assets/Chaine-TUT.jpg" alt="Image 4" width="100%">
</div>

#### Cahier des charges
Dans le cadre de ma fin d'année j'ai conçu une station météo pouvant récupérer et traiter 4 paramètres météorologiques et les afficher de manière les plus agréables possibles sur un site Web. 
Cependant, en vue de créer une corrélation avec ma start-up, j'ai décidé d'ajouter une étude de risques de départ de feux en fonction des paramètres de ma station.

#### Choix des capteurs

<div style="display:flex; justify-content:center;">
    <img src="/assets/anemometre.jpg" alt="Image 1" width="40%">
    <img src="/assets/girouette.jpg" alt="Image 2" width="54%">
    <img src="/assets/DHT-22.jpg" alt="Image 3" width="40%">
</div>
J'ai effectué une étude de cas en comparant différents paramètres comme le prix, la sensibilité, les seuils afin de choisir un capteur de température, d'humidité, de force et de direction du vent.

#### Montage 

<div style="display:flex; justify-content:center;">
    <img src="/assets/montage complet.png" alt="Image 4" width="100%">
</div>
J'ai appris à assembler plusieurs capteurs sur la même mon carte Arduino. De plus, afin de connecter les capteurs de vents qui étaient en sortie RJ11, j'ai dû assembler et souder une plaquette d'intervalle Grove/Arduino.

#### Modélisation
<div style="display:flex; justify-content:center;">
    <img src="/assets/Station_1.png" alt="Image 1" width="80%">
    <img src="/assets/Station_2.png" alt="Image 2" width="80%">
</div>

En tenant compte des différentes contraintes de chaque capteur, j'ai modélisé un assemblage pour loger les capteurs dans des conditions optimales. 
Pour les capteurs de température et d'humidité, j'ai créé un espace ventilé avec des grilles en nid d'abeilles de part et d'autre, et un intérieur noir pour éviter qu'une trop forte luminosité ne fausse la valeur de la température et pour l'anémomètre et la girouette, un espace a été laissé au sommet de la station pour assurer une parfaite circulation de l'air. 
Le tout est imprimé en acide polylactique (PLA) mais nous pourrions l'améliorer en l'imprimant en ABS, qui est plus résistant. 

#### Métrologie 
Pour m'assurer de la fiabilité de mes résultats j'ai fait une étude métrologique de chacun des capteurs.

#### Page web

<div style="display:flex; justify-content:center;">
    <img src="/assets/Site_attention.png" alt="Image 1" width="80%">
    <img src="/assets/Site_validé.png" alt="Image 2" width="80%">
</div>
Pour la réalisation de mon site, je l'ai structuré en 3 blocs: "STATIC" avec mes illustrations CSS et Javascript; "TOOLS" pour permettre de convertir les informations de l'Arduino dans ma base de données et de les afficher; et enfin "TEMPLATES" avec tout le squelette du site. Pour finir, l'ensemble des données est moyenné par des diagrammes et cliquables pour voir toutes les données. Et enfin, un indicateur de risque en fonction de la moyenne de chaque paramètre.

