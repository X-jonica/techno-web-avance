# 🛒 Projet E-commerce : Chossure & Panier

> Un projet complet avec un frontend développé en Vue 3 + Vite + Tailwind CSS et un backend développé en Node.js + Express + PostgreSQL + Sequelize, avec une documentation Swagger intégrée.

![Banner](https://techno-web-avance.vercel.app/)

---

## 📖 Table des matières

1. [Fonctionnement global](#1️⃣-fonctionnement-global-de-lapplication)
2. [Technologies & dépendances](#2️⃣-technologies--dépendances-utilisées)
3. [Installation & exécution](#3️⃣-installation--exécution)
4. [Structure du projet](#4️⃣-structure-générale-du-projet)
5. [API Documentation](#5️⃣-documentation-de-lapi)
6. [Variables d'environnement](#6️⃣-variables-denvironnement)
7. [Tests](#7️⃣-tests)
8. [Déploiement](#8️⃣-déploiement)
9. [Contribuer](#9️⃣-contribuer)
10. [Auteur](#🔟-auteur)
11. [Licence](#1️⃣1️⃣-licence)

---

## 1️⃣ Fonctionnement global de l'application

L'application est une plateforme e-commerce spécialisée dans la vente de chaussures, composée de :

### 🔵 Frontend (Client)
- **Interface utilisateur moderne** avec Vue 3
- **Design responsive** grâce à Tailwind CSS
- **Fonctionnalités clés** :
  - Catalogue produits avec filtres
  - Panier dynamique
  - Gestion des quantités
  - Simulation de checkout
- **Optimisations** :
  - Chargement lazy des images
  - Animation fluides
  - Gestion d'état réactive

### 🟢 Backend (API REST)
- **Endpoints sécurisés** :
  - Gestion produits (CRUD complet)
  - Gestion panier (session utilisateur)
  - Upload fichiers (images produits)
- **Caractéristiques techniques** :
  - Documentation Swagger intégrée
  - Validation des données
  - Rate limiting
  - Cache Redis (optionnel)
  - Système de logs complet

### 🟣 Base de données
- Structure relationnelle PostgreSQL :
  - Table Produits
  - Table Utilisateurs
  - Table Commandes
  - Table Paniers
- Migrations Sequelize
- Seeds pour données de test

---

## 2️⃣ Technologies & dépendances utilisées

### 🖥️ Frontend

| Technologie | Version | Usage |
|------------|---------|-------|
| Vue 3      | 3.5.13  | Framework principal |
| Vite       | 6.3.5   | Build tool |
| Pinia      | 2.1.7   | State management |
| Axios      | 1.9.0   | Requêtes HTTP |
| Tailwind   | 3.4.17  | Styling |
| Vue Router | 4.5.1   | Navigation |
| ESLint     | 8.56.0  | Linting |
| Prettier   | 3.5.3   | Formatage |

### ⚙️ Backend

| Technologie | Version | Usage |
|------------|---------|-------|
| Node.js    | 18.x    | Runtime |
| Express    | 4.18.2  | Framework API |
| Sequelize  | 6.37.1  | ORM |
| PostgreSQL | 15.x    | Base de données |
| Swagger UI | 4.18.3  | Documentation |
| JWT        | 9.0.2   | Authentification |
| Multer     | 1.4.5   | Upload fichiers |

---

## 3️⃣ Installation & exécution

### Prérequis
- Node.js 18.x
- PostgreSQL 15.x
- npm 9.x ou yarn 1.22.x

### 🚀 Installation complète

```bash
# Clonez le dépôt
git clone https://github.com/X-jonica/frontend-technoweb-avance.git
cd frontend

# Installez les dépendances
cd backend && npm install
cd ../frontend && npm install

# Configurez l'environnement (voir section 6)
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Dans un premier terminal
cd backend && npm run start

# Dans un second terminal
cd frontend && npm run dev

# Api-doc avec swagger 
[https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api-docs/]
