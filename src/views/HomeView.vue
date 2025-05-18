<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Products from "../components/Products.vue";
import PromotionBanner from "../components/PromotionBanner.vue";

export default {
    name: "HomeView",
    components: {
        Header,
        Footer,
        PromotionBanner,
        Products,
    },
};
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Header />

        <!-- Contenu principal -->
        <main class="flex-grow mx-auto mb-6">
            <PromotionBanner />

            <!-- Autres sections à ajouter -->
            <section class="container mx-auto">
                <!-- Vos produits/variantes ici -->
                <Products />
            </section>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
