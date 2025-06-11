<script>
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'
    import Panier from '../components/Panier.vue'

    export default {
        name: 'PanierView',
        components: {
            Header,
            Footer,
            Panier
        }
    }
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-grow mx-auto mb-6">
            <Panier />
        </main>

        <Footer />
    </div>
</template>
