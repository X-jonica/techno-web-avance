<script>
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'
    import Product from '../components/Product.vue'

    export default {
        name: 'HomeView',
        components: {
            Header,
            Footer,
            Product
        },
        methods: {
            navigateToCart() {
                this.$router.push('/panier')
            }
        }
    }
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-50 bg-white shadow-sm">
            <div class="container mx-auto px-4">
                <!-- Contenu du header -->
                <div class="flex justify-between items-center h-16">
                    <!-- Logo - SUN CO. -->
                    <div class="flex items-center">
                        <!-- Icône soleil -->
                        <img src="/public/icon.svg" alt="icone enterprise" />

                        <span @click="navigateToCart" class="text-2xl font-bold tracking-tight mx-">
                            SUN CO.
                        </span>
                    </div>

                    <!-- Bouton Panier - Visible sur tous les appareils -->
                    <button
                        @click="navigateToCart"
                        class="flex items-center space-x-1 group border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        <span class="">View Cart</span>
                    </button>
                </div>
            </div>
        </header>

        <main class="flex-grow mx-auto mb-6">
            <Product />
        </main>

        <Footer />
    </div>
</template>
