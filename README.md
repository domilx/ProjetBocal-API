# Projet Bocal

 - FR : Centralisateur de Regina. 
 - EN : Centralisation for all things Regina
## Description

  - FR : Un site pour integrer tous nos sites du college etc..
    - Regrouper Coba, Moodle, Remise de travaux en une platforme
    - Réutiliser uniquement Classroom à l'aide de son API (intégration au site)
    - Pour les sites de livres électronique, juste ajouter un lien (intégration si possible).
 - EN : A site to integrate all of the sites to simplify our student lives.
    - Consolidate Coba, Moodle, Assignments in one platform
    - Only reuse Classroom using its API (site integration)
    - For e-book sites, just add a link (integration if possible).

## Documentation
This program is a RESTful API. A RESTful API is an API that follows the rules of the HTTP protocol. In our case, we use the HTTP protocol to communicate with our database. Here are the different rules of the HTTP protocol:
<p></p>
GET http://localhost:3000/user/list -  List all users
<p></p>
GET http://localhost:3000/user/list/user/:id - Get a user by id
<p></p>
POST http://localhost:3000/user/delete/:id - Delete a user by id
<p></p>

#### JSON Body
POST http://localhost:3000/user/add - Create a user
<p></p>


```javascript
{
    "name": "Domenico Valentino",
    "email": "email@email.com",
    "password": "Passowrd5!"
}
```

<p></p>
POST http://localhost:3000/user/update/:id - Update a user by id
<p></p>

```javascript
{
    "name": "Name Changed",
    "email": "email@email.com",
    "password": "Changed"
}
```

POST http://localhost:3000/user/login - Login a user
<p></p>

```javascript
{
    "email": "email@email.com",
    "password": "Passowrd5!"
}
```

# Développement

### Prérequis

* [NodeJS](https://nodejs.org/en/)
* [Express JS](expressjs.com)
* [MongoDB](https://www.mongodb.com/)

### Exécution

1. Cloner le répertoire.
2. Installer les prérequis ci-dessus.
3. Exécuter cette commande sous le projet.

```
$ npm run dev
```

## Auteurs

Programmeurs

 - Domenico Valentino  [@domilx](https://github.com/domilx)
<p></p>

 - Charles Lesage [@ma17du32et422](https://github.com/ma17du32et422)
<p></p>

Aide et contribution
 - Camil Bisson [@CamilBis](https://github.com/CamilBis)


## Historique des versions

* 0.2
    * Fix de plusieurs bugs et optimisation
    * Voir [commit change]() ou [release history]()
* 0.1
    * Version initiale

## License

Le projet est licensié sour la license MIT - voir le fichier LICENSE.md pour plus de détails