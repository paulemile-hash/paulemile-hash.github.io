---
title: Sonde échographique
publishDate: 2020-03-04 00:00:00
img: /assets/Projet sonde.png
img_alt: Image couverture de projet
description: |
  
tags: 
  - Caractérisation de grandeur chimique-n°3
  - Déployer la métrologie et la démarche qualité-n°3
  - Rédaction technique
---
<div style="display:flex; justify-content:center;">
    <img src="/assets/Chaine sonde.png" alt="Image 4" width="160%">
</div>

### Objectif
Réalisation complète d'une sonde échographique pour des tester non-destructifs doté d'un software de traitement de données adaptée.

### Le cadre du projet
<div style="display:flex; align-items:center;">
    <img src="/assets/vermon.jpg"  width="30%" style="margin-right:10px;"style="margin-left:10px;">
<p> Ce projet nous fut introdu par l'entreprise Vermon spécialisé dans le réalisation d'outils médicaux et plus spécifiquement des sondes échographiques. Cette intervention nous a permit de poser le cadre de notre projet.</p>
</div>

### Conception de la pastille
<div style="display:flex; align-items:center;">
    <img src="/assets/pastille.png"  width="30%" style="margin-right:10px;">
    <p style="margin-left:10px;">Cette partie fut majoritairement réalisée par le groupe matériaux de ce projet. Nous avons réalisé plusieurs pastilles de KNN et de KMN pour leurs propriétés piézoélectriques. Puis nous l'avons polarisé pour permettre de diriger le couran.</p>
</div>

### Conception de la sonde 
<div style="display:flex; align-items:center;">
    <img src="/assets/tube.png"  width="20%" style="margin-right:10px;">
    <img src="/assets/Tubepla.jpg" alt="Image 3" width="50%">
    <img src="/assets/Sonde monté.jpg" alt="Image 3" width="50%">
</div>
  <p> Une fois la pastille réalisé nous avons réaliser un backing pour éviter les dissipations de courant de composition 70 % tungstène et 30 % de résine époxie + durcisseur. Avec de la laque d'argent nous avons fixé des  cable sur la pastille. Puis nous avons réalisé une impression 3D en PLA transparent pour couler l'ensemble à l'intérieur avec de la résine époxie. </p>

### Lien carte éléctronique
<div style="display:flex; align-items:center;">
    <img src="/assets/redpitaya.png"  width="60%" style="margin-right:10px;">
</div>
<p>Nous avons commandé une carte redpitaya pour pouvoir remplacer le traitement de la donnée que faisait l'oscilloscope et ainsi pouvoir miniaturiser notre produit. Cette carte fut choisie pour sa haute fréquence d'échantillonnage et son commandement par python.</p>

### Application
<div style="display:flex; justify-content:center;">
    <img src="/assets/applisonde1.png" alt="Image 3" width="70%">
    <img src="/assets/applisonde.png" alt="Image 4" width="70%">
</div>
<p>L'application a été réalisée en python et permet d'être installé sur son bureau. Elle permet de récupérer les données transférées de la carte, de zoomer sur l'écho dans le domaine temporel le représenter dans le domaine fréquentiel et calculer la fréquence centrale, la bande passante.</p>
