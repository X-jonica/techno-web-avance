import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProduitDescription from "../views/ProduitDescription.vue";
import PanierView from "../views/PanierView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/product/:id",
        name: "description-produit",
        component: ProduitDescription,
        props: true,
    },
    {
        path: "/panier",
        name: "Panier",
        component: PanierView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
