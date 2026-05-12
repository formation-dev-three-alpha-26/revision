# Plant Store - Application E-commerce

Tu vas construire une **application e-commerce complète** pour une boutique de plantes avec Node, Express, Sequelize(sql) pour le back-end et React, Redux, Vite pour le front-end. 



## Back-end

En utilisant le code existant dans `back-end/`, suis les étapes ci-dessous pour construire l'API e-commerce :

### Endpoints API - Plantes

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/plants      |    GET     |      vide          |                   Retourne le JSON de toutes les plantes                    |
|                    
| /api/plants/:id      |    GET     |      vide          |    Retourne le JSON d'une seule plante correspondant à l'`id`               |
|  |
|

### Endpoints API - Utilisateurs

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|    /api/users/register|   POST    |      JSON          |    Crée un nouvel utilisateur et retourne un token JWT                      |
|    /api/users/login   |   POST    |      JSON          |  Authentifie un utilisateur et retourne un token JWT                        |
|   

### Endpoints API - Panier

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/cart        |    GET     |      vide          |    Retourne les articles du panier de l'utilisateur                         |
|   /api/cart/add      |    POST    |      JSON          |    Ajoute une plante au panier et retourne le panier mis à jour             |
|   /api/cart   |   DELETE    |      JSON          |   Supprime une plante du panier et retourne le panier mis à jour            |
|  /api/cart | PUT |  JSON | Met à jour la quantité d’un produit dans le panier |

### Étapes à suivre

####  Configuration Base de Données

- Configurer Sequelize dans config/config.js
- Tester la connexion au serveur MySQL

#### Créer les Modèles 

**Modèle Plante** (`models/Plant.js`) :
- [ ] `name` : chaîne 
- [ ] `description` : chaîne
- [ ] `price` : nombre 
- [ ] `image` : chaîne

**Modèle Utilisateur** (`models/User.js`) :
- [ ] `username` : chaîne (unique, requis)
- [ ] `email` : chaîne (unique, requis)
- [ ] `password` : chaîne (hachée, requis)


**Modèle Panier** (`models/Cart.js`) :
- [ ] `quantity` : nombre (calculé)

**Relations entre les modèles**
 - [ ]   Mettre en place une relation One-to-Many entre User et Cart
 - [ ]  Mettre en place une relation One-to-Many entre Plant et Cart
 - [ ]  Chaque ligne du Cart représente un produit + une quantité
#### Créer les Contrôleurs

**Contrôleur Plantes** (`controllers/plantController.js`) :
- [ ] `getAllPlants()` - récupère toutes les plantes
- [ ] `getPlantById()` - récupère une plante par ID


**Contrôleur Utilisateurs** (`controllers/userController.js`) :
- [ ] `register()` - crée un nouvel utilisateur (hash password)
- [ ] `login()` - authentifie un utilisateur (JWT)

**Contrôleur Panier** (`controllers/cartController.js`) :
- [ ] `getCart()` - récupère le panier de l'utilisateur
- [ ] `addToCart()` - ajoute une plante au panier
- [ ] `removeFromCart()` - supprime une plante du panier
- [ ] `updateQuantity()` - update le quantity

#### Créer les Routes

**Routes Plantes** (`routes/plantRoutes.js`) :
- [ ] `GET /api/plants`
- [ ] `GET /api/plants/:id`


**Routes Utilisateurs** (`routes/userRoutes.js`) :
- [ ] `POST /api/users/register`
- [ ] `POST /api/users/login`


**Routes Panier** (`routes/cartRoutes.js`) :
- [ ] `GET /api/cart` (protégé)
- [ ] `POST /api/cart/add` (protégé)
- [ ] `DELETE /api/cart` (protégé)
- [ ] `PUT /api/cart`  (protégé)

#### Middleware d'Authentification

- [ ] Créer un middleware JWT dans 
- [ ] Vérifier et valider les tokens JWT
- [ ] Bloquer les requêtes non authentifiées sur les routes protégées
- [ ] Retourner un statut 401 si le token est invalide



##  Rate Limiting (Protection de l'API)

Tu dois protéger ton API contre les abus en limitant le nombre de requêtes par utilisateur (IP).



## Front-end

En utilisant React + Vite + Redux + Axios, construis l'interface utilisateur.

### Structure des Composants

|              Composant            |                   Description                          |
| :-------------------------------: | :----------------------------------------------------: |
|           `Navbar.jsx`            |  Barre de navigation avec logo et liens de menu        |
|           `Home.jsx`              |  Page d'accueil avec liste des meilleures plantes      |
|        `ProductsList.jsx`         |  Liste de toutes les plantes avec filtres et tri       |
|       `ProductDetails.jsx`        |  Détails d'une plante unique et bouton "Ajouter"       |
|           `Cart.jsx`              |  Panier avec gestion des quantités et suppression      |
|           `Login.jsx`             |  Formulaire de connexion                               |
|         `Register.jsx`            |  Formulaire d'inscription                              |
|           `Search.jsx`            |  Barre de recherche (filtrage des plantes)             |


####  Configuration Redux

- [ ] Créer les slices Redux pour :
  - [ ] `plants` : gestion de la liste des plantes
  - [ ] `cart` : gestion du panier
  - [ ] `user` : gestion de l'authentification
- [ ] Créer le store Redux
- [ ] Connecter les composants aux actions Redux

####  les Composants

- [ ] **Navbar** : affiche le logo, menu de navigation et icône panier
- [ ] **Home** : affiche une sélection de plantes populaires
- [ ] **ProductsList** : liste toutes les plantes avec pagination/filtres
- [ ] **ProductDetails** : détails d'une plante + bouton "Ajouter au panier"
- [ ] **Cart** : affiche les articles du panier avec modifier quantité/supprimer
- [ ] **Login** : formulaire avec email + password
- [ ] **Register** : formulaire avec username, email, password
- [ ] **Search** : barre de recherche pour filtrer les plantes

