---
title: Projet Start-Up
publishDate: 2019-12-01 00:00:00
img: /assets/Projet Start-UP vf.jpg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Prévoir les départ de feux grace à la technologie
tags:
  - Entreprenariat
  - Audace 
  - Persevérance 
  - Electronique
  - Informatique
---
Grâce à de nombreux sponsors, pendant près de 55 heures nous avons
réfléchi et développé une idée révolutionnaire permettant de lutter contre
les feux de forêts; tout cela au sein d’une équipe pluridisciplinaire de 8
personnes. À l'issue de ce week-end, nous avons remporté le 1er prix
face à 9 autres équipes.
### Mise en contexte
Ayant été témoin de l'augmentation des incendies, j'ai profité d'un week-end start-up pour présenter et entamer un projet de station préventive de risque d'incendie. Nous pouvons l'expliquer rapidement par cette chaine.

<div style="text-align:center;">
    <img src="/assets/chaine-start-up.png" alt="Illustration chaine élément" width="100%">
</div>

#### Principe de fonctionnement 
<div style="display:flex; align-items:center;">
    <img src="/assets/shémalora.png" alt="Illustration Exemple plan station" width="50%" style="margin-right:10px;">
    <p style="margin-left:10px;">
    L’idée derrière cette chaine d’acquisition est de connecter les capteurs à des ESP23 qui communiqueront via liaison UART à des cartes de développement LoRa Wio E5mini et communiqueront via réseau LoRa et “ THE THINGS Network” sur une carte Raspberry pi qui s’occupera d’enregistrer les infos dans un fichier CSV et afficher via Node RED sur le site internet ou applications. 
    </p>
</div>

<div style="display:flex; align-items:center;">
    <img src="/assets/dataserveur.png" alt="Illustration Exemple plan station" width="50%" style="margin-right:10px;">
    <p style="margin-left:10px;"> Création d'une schéma de serveur afin d'assurer le flux de donnée et leur sécuritée avec un serveur Firewall.
    </p>
</div>

#### Niveaux de risques
<div style="display:flex; align-items:center;">
    <img src="/assets/seuilsderisques.png" alt="Illustration Exemple plan station" width="70%" style="margin-right:10px;">
    <p style="margin-left:10px;">
    Mise en place de niveaux de risques en fonction d'une sommes de paramètres météo calculé avec un modèle mathématique et du machine learning.
    </p>
</div>

###  Création Application
<div style="display:flex; justify-content:center;">
    <img src="/assets/Widget.jpg" alt="Illustration Widget" width="50%">
    <img src="/assets/Application.jpg" alt="Illustration application" width="50%">
    <img src="/assets/Chartre graphique.jpg" alt="Illustration Exemple plan station" width="50%">
</div>
L’application a pour but d’être extrêmement synthétique afin de comprendre au premier coup d’œil s'il y a un risque ou non. Les différents facteurs de risques sont visibles sur la première page et il est également possible d’observer sur ces facteurs de quelles stations provient les données ce qui permet de savoir vers quelle station se produit le risque.
L’application permet, également, de faire de la maintenance sur les possibles dérèglements puisque nous pourrons être en mesure de constater les fluctuations de chaque station individuellement et donc de signaler les évolutions anormales. Elle est pour le moment en voie de développement à l’aide du framework flutter de Google et codé avec du « ya », « dart », « yaml », « HTML », « python », et du « C ».

###  Création Page Web

<div style="display:flex; align-items:center;">
    <img src="/assets/HomesiteF.png" alt="Illustration maquette 3D" width="65%" style="margin-right:10px;">
    <p style="margin-left:10px;">La page d'acceuil permet d'informer sur les grandes principes du projet.</p>
</div>

<div style="display:flex; align-items:center;">
    <img src="/assets/Mapsite.png" alt="Illustration maquette 3D" width="65%" style="margin-right:10px;">
    <p style="margin-left:10px;">Fenêtre qui utilise l'API (Application Programming Interface) de google Maps pour localiser les stations, renseigner leurs paramètres et mesures.</p>
</div>

<div style="display:flex; justify-content:center;">
    <img src="/assets/EspacesiteF.png" alt="Illustration application" width="50%">
    <img src="/assets/Espacesite2F.png" alt="Illustration Exemple plan station" width="50%">
</div>
Nous avons 2 types de profils en fonction de si l'utilisateur est un professionnel comme un pompier ou si c'est particulier. Cela permettra de divulger des informations différentes.

#### Création Business plan
<div style="display:flex; align-items:center;">
    <img src="/assets/Exemple plan station.jpg" alt="Illustration Exemple plan station" width="60%" style="margin-right:10px;">
    <p style="margin-left:10px;">
    Afin de couvrir au mieux une zone, nous avons créé un système de maillage pour assurer une communication et fiable et optimale. 
    De plus, nous avons estimé les coûts pour une forêt test. Pour cela, nous avons choisi la forêt domaniale de Blois. En ciblant les zones à fort risque, nous avons estimé la nécessité de 13 stations. Cela nous a donc permis de dresser un business plan en comptant les entrées et sorties d'argent.
    </p>
</div>

#### Création maquette 3D
<div style="display:flex; align-items:center;">
    <img src="/assets/stationvf.png" alt="Illustration maquette 3D" width="65%" style="margin-right:10px;">
    <p style="margin-left:10px;">L'objectif de cette conception est de fournir les meilleurs conditions de mesures pour nos différents capteurs toute en assurant une soliditée et fiabilitée. </p>
</div>

#### Charte Graphique
<div style="display:flex; justify-content:center;">
    <img src="/assets/Graphique1.png" alt="Illustration application" width="50%">
    <img src="/assets/Graphique2.png" alt="Illustration Exemple plan station" width="50%">
    <img src="/assets/Graphique3.png" alt="Illustration Exemple plan station" width="50%">
    <img src="/assets/Graphique4.png" alt="Illustration Exemple plan station" width="50%">
</div>
Dans l'objectif d'identité de marque, nous avons développé une charte graphique au tour de Fotià. Cela permet de donner une identité globale à la marque et de la différentier, ainsi que la rentre plus attrayante même pour des personnes non sensibilisé à notre domaine d'activité.

#### Suite avec Université 
Le projet est toujours en cours de dévelopement en parallèle de mes études.  




