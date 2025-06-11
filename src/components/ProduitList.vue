<template>
    <!-- products section -->
    <div class="w-full min- max-w-[1440px] mt-[80px] md:px-6">
        <!-- Loading screen -->
        <div v-if="loading" class="flex justify-center items-center h-64">
            <div
                class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"
            ></div>
        </div>

        <!-- Content when data is loaded -->
        <div v-else>
            <!-- title and navigation -->
            <div class="flex justify-between items-center mb-6">
                <h2
                    class="font-bold text-2xl md:text-[28px] leading-[36px] tracking-[-1px] text-[#201B21]"
                >
                    Explore our latest drops
                </h2>
            </div>

            <!-- Version Mobile -->
            <div class="md:hidden">
                <div class="relative mx-auto">
                    <!-- products list -->
                    <div
                        ref="productsContainerMobile"
                        class="flex overflow-x-hidden scroll-smooth space-x-4 pb-4"
                    >
                        <div
                            v-for="(product, index) in products"
                            :key="index"
                            class="flex-shrink-0 w-[195.75px] h-[307px] gap-[18px]"
                            @click="goToProduct(product.id)"
                        >
                            <!-- product card -->
                            <div
                                class="w-[195.75px] h-[213px] rounded-[14.08px] bg-[#F4F4F4] overflow-hidden"
                            >
                                <img
                                    :src="product.image_url"
                                    :alt="product.marque"
                                    class="w-[195.75px] h-[213px] object-contain mix-blend-darken"
                                />
                            </div>

                            <!-- product info -->
                            <div class="w-full mt-3">
                                <p class="font-bold text-[16px] leading-[18px] tracking-[-0.5px]">
                                    {{ product.marque }}
                                </p>
                                <span class="font-inter text-[14px] leading-[14px] text-[#67696E]">
                                    {{ product.nom }}
                                </span>

                                <!-- price -->
                                <div class="mt-2">
                                    <p
                                        class="font-medium text-[16px] leading-[20px] tracking-[-0.5px]"
                                    >
                                        ${{ product.prix }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- navigation arrows - mobile -->
                    <div class="flex mt-6">
                        <div class="flex items-center gap-4">
                            <button
                                @click="scrollLeft('mobile')"
                                class="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <img
                                    src="/src/assets/icones/icons8-left-arrow-50.png"
                                    alt="icon direction left"
                                    class="w-6 h-6"
                                />
                            </button>
                            <button
                                @click="scrollRight('mobile')"
                                class="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <img
                                    src="/src/assets/icones/icons8-right-arrow-50.png"
                                    alt="icon direction right"
                                    class="w-6 h-6"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Version Desktop -->
            <div class="hidden md:block mx-auto">
                <div class="relative">
                    <!-- products list - desktop -->
                    <div class="grid grid-cols-4 gap-6">
                        <div
                            v-for="(product, index) in products"
                            :key="index"
                            class="w-full h-auto"
                            @click="goToProduct(product.id)"
                        >
                            <!-- product card -->
                            <div
                                class="w-full h-[300px] rounded-[18.77px] bg-[#F4F4F4] overflow-hidden"
                            >
                                <img
                                    :src="product.image_url"
                                    :alt="product.marque"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>

                            <!-- product info -->
                            <div class="w-full mt-4">
                                <p class="font-bold text-lg leading-[20px] tracking-[-0.5px]">
                                    {{ product.marque }}
                                </p>
                                <span class="font-inter text-[14px] leading-[16px] text-[#67696E]">
                                    {{ product.nom }}
                                </span>

                                <!-- price -->
                                <div class="mt-3">
                                    <p class="font-medium text-lg leading-[22px] tracking-[-0.5px]">
                                        ${{ product.prix }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { useRouter } from 'vue-router'

    export default {
        name: 'ProduitList',
        data() {
            return {
                products: [],
                loading: true
            }
        },
        methods: {
            scrollLeft(version) {
                const container =
                    version === 'mobile'
                        ? this.$refs.productsContainerMobile
                        : this.$refs.productsContainerDesktop
                container.scrollBy({ left: -150, behavior: 'smooth' })
            },

            scrollRight(version) {
                const container =
                    version === 'mobile'
                        ? this.$refs.productsContainerMobile
                        : this.$refs.productsContainerDesktop
                container.scrollBy({ left: 150, behavior: 'smooth' })
            },

            async fetchProducts() {
                try {
                    const response = await axios.get('http://localhost:4000/api/chossures')
                    console.log("Données Chossures récupérées depuis l'API :", response.data)

                    this.products = response.data.data.map(item => ({
                        id: item.id,
                        marque: item.marque,
                        nom: item.nom,
                        prix: item.prix,
                        image_url: item.image_url
                    }))
                } catch (error) {
                    console.error(`Erreur lors de la récupération des produits:`, error)
                } finally {
                    this.loading = false
                }
            },

            goToProduct(productId) {
                this.$router.push(`/product/${productId}`)
            }
        },
        mounted() {
            this.fetchProducts()
        }
    }
</script>

<style scoped>
    /* Existing styles remain unchanged */
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .font-inter {
        font-family: 'Inter', sans-serif;
    }
    .text-middle {
        color: inherit;
    }

    /* New styles for mobile scroll behavior */
    @media (max-width: 350px) {
        .hide-scrollbar {
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    }
</style>
