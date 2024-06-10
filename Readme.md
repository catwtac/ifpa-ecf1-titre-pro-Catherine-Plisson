# Consignes Techniques du projet

## Responsive
- Il a deux versions :
  - mobile (moins de 750px)
  - desktop (750px et plus)

## Google Fonts utilisées :

- "Ubuntu" pour les textes du projet.
- "Montserrat" pour le titre principal.

## Couleurs utilisées :

- Vert principal : #16a34a
- Vert clair : #22c55e
- Vert foncé : #15803d

- Bleu principal : #2563eb
- Bleu clair : #3b82f6
- Bleu foncé : #1d4ed8

## Liens des icones :

- Les icones de technologies renvoie respectivement vers leur documentation :
  - HTML : https://developer.mozilla.org/fr/docs/Web/HTML
  - CSS : https://developer.mozilla.org/fr/docs/Web/CSS
  - JS : https://developer.mozilla.org/fr/docs/Web/JavaScript
  - Github : https://github.com/
- Les liens ouvrent un nouvel onglet.
- Il y a un effet au survol des icones (voir vidéo).

## Contraintes du Formulaire :

- Au survol du bouton *"Envoyer"*, la couleur du bouton change pour une couleur un peu plus sombre (voir vidéo)
- Pour que le formulaire puisse être soumis, il y a des contraintes :
  - Les champs _Nom_, _Prénom_, _Email_ et _Message_ sont des champs obligatoires.
  - Le champ _Télephone_ n'est pas obligatoire.
  - Le message doit faire au moins 15 caractères.
    Vous devez gérer la validation du champ _Message_ en **Javacript**.
    Lorsque le formulaire est soumis, si le message ne respecte pas la contrainte, on affiche un message en rouge : _"Le message doit contenir au moins 15 caractères."_ (voir vidéo)
- Lorsque le formulaire est soumis et que toutes les contraintes sont respectées, on affiche une alerte avec le message : _"Message soumis avec succès !"_.

## Gestion du thème de couleur :

- Par defaut, le thème du site est vert.
- Au survol des deux ronds de couleur (vert et bleu) dans la navigation :
  - la couleur des ronds change pour une couleur un peu plus claire (voir vidéo).
- Les deux ronds de couleur sont cliquable (gestion en **Javascript**). Lorsque l'on clique sur le bouton vert ou bleu : on change le theme, et donc les couleurs de plusieurs éléments (voir vidéo) :
  - Le fond de la bannière en haut de page, et la couleur de fond du bas de page.
  - La bordure autour de la photo.
  - La couleur de soulignement des titres.
  - La couleur du bouton _"envoyer"_ du formulaire, et la couleur au survol de ce bouton (voir vidéo).

## Textes du site

*"Développeur web de père en fils, passionné par la technologie et
l'innovation. J'ai acquis une expertise en HTML, CSS, JavaScript
et Git, me permettant de créer des sites web performants et
esthétiques. Prêt à relever de nouveaux défis."*
