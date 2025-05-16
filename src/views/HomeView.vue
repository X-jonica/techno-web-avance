<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import PromotionBanner from '../components/PromotionBanner.vue';


export default {
    name: "HomeView",
    components: {
        Header,
        Footer,
        PromotionBanner,
    },
};
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Header />

        <!-- Contenu principal -->
        <main class="flex-grow">
            <PromotionBanner />

            <!-- Autres sections à ajouter -->
            <section class="container mx-auto px-4 py-8">
                <!-- Vos produits/variantes ici -->
            </section>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
