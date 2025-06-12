<template>
    <div v-if="product" class="max-w-6xl mx-auto p-4 md:p-8">
        <!-- Version Mobile -->
        <div class="md:hidden">
            <!-- Image produit -->
            <div class="w-full h-[300px] rounded-[20px] flex items-center justify-center">
                <img
                    :src="product.image_url || 'https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/uploads/img_4.png'"
                    :alt="product.nom"
                    class="w-full h-full rounded-[20px] object-cover"
                />
            </div>

            <!-- Navigation entre produits mobile -->
            <div class="flex items-center justify-between mt-4 px-2">
                <button
                    @click="navigateToPreviousProduct"
                    :disabled="currentProductIndex === 0"
                    class="p-2"
                >
                    <img
                        src="/public/left-50.png"
                        alt="Gauche"
                        class="w-6 h-6"
                        :class="{ 'opacity-50': currentProductIndex === 0 }"
                    />
                </button>

                <div class="flex gap-2">
                    <span
                        v-for="(dot, index) in totalProducts"
                        :key="index"
                        class="w-2 h-2 rounded-full"
                        :class="index === currentProductIndex ? 'bg-black' : 'bg-gray-300'"
                    ></span>
                </div>

                <button
                    @click="navigateToNextProduct"
                    :disabled="currentProductIndex === totalProducts - 1"
                    class="p-2"
                >
                    <img
                        src="/public/right-50.png"
                        alt="Droite"
                        class="w-6 h-6"
                        :class="{ 'opacity-50': currentProductIndex === totalProducts - 1 }"
                    />
                </button>
            </div>

            <!-- Info produit mobile -->
            <div class="mt-6 p-4 bg-white rounded-[20px] shadow">
                <h1 class="font-bold text-xl text-[#201B21] mb-1">
                    {{ product.marque }}
                </h1>
                <h2 class="text-lg font-normal text-[#67696E] mb-3">
                    {{ product.nom }}
                </h2>
                <p class="text-xl font-medium mb-4">${{ product.prix }}</p>

                <div class="w-full h-[1px] bg-[#E9EBEE] my-4"></div>

                <!-- Quantité mobile -->
                <div class="mb-4">
                    <label class="block font-medium mb-2">Quantity</label>
                    <div class="flex w-[120px] h-[40px] border rounded-[10px] items-center">
                        <button
                            class="px-3 py-2 font-bold text-lg"
                            @click="decrementQuantity"
                            :disabled="quantity <= 1"
                        >
                            -
                        </button>
                        <span class="flex-1 text-center font-bold text-lg">
                            {{ quantity }}
                        </span>
                        <button
                            class="px-3 py-2 font-bold text-lg"
                            @click="incrementQuantity"
                            :disabled="quantity >= product.stock"
                        >
                            +
                        </button>
                    </div>
                    <p v-if="product.stock" class="text-sm text-gray-500 mt-1">
                        {{ product.stock }} available
                    </p>
                </div>

                <!-- Bouton Add to Cart mobile -->
                <button
                    class="w-full h-[50px] rounded-[10px] bg-[#201B21] hover:bg-gray-800 transition text-white font-bold mt-4"
                    @click="addToCart"
                >
                    Add to Cart
                </button>
            </div>

            <!-- Description mobile -->
            <div class="mt-6 p-4 bg-white rounded-[20px] shadow">
                <h3 class="font-bold text-lg mb-3">Description</h3>
                <div class="w-full h-[1px] bg-[#E9EBEE] mb-4"></div>
                <p class="text-[#67696E]">
                    {{ product.description || 'No description available' }}
                </p>

                <ul class="list-disc mt-4 pl-5 text-[#67696E]">
                    <li>Regular fit</li>
                    <li>Lace closure</li>
                    <li>Rubber outside with vulcanized look</li>
                    <li>Imported</li>
                </ul>
            </div>

            <!-- Image supplémentaire mobile -->
            <div v-if="product.autre_url" class="mt-6">
                <div class="w-full h-[250px] rounded-[20px] overflow-hidden">
                    <img
                        :src="product.autre_url"
                        :alt="product.nom"
                        class="w-full h-full object-cover mix-blend-darken"
                    />
                </div>
            </div>
        </div>

        <!-- Version Desktop (identique à l'original) -->
        <div class="hidden md:block">
            <!-- Section 1 : Produit et actions -->
            <section class="flex w-[1116px] h-[443px] flex-col md:flex-row gap-8 mb-8">
                <div class="w-[546px] flex flex-col items-center">
                    <div
                        class="w-[546px] h-[375px] rounded-[20px] flex items-center justify-center p-4 md:p-8"
                    >
                        <img
                            :src="product.image_url || 'https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/uploads/img_4.png'"
                            :alt="product.nom"
                            class="w-[546px] h-[375px] rounded-[20px] object-cover"
                        />
                    </div>

                    <!-- Navigation entre produits -->
                    <div class="w-[500px] h-[40px] mt-4 flex items-center justify-between">
                        <button
                            class="px-3 py-2"
                            @click="navigateToPreviousProduct"
                            :disabled="currentProductIndex === 0"
                        >
                            <img
                                src="/public/left-50.png"
                                alt="Gauche"
                                class="w-6 h-6"
                                :class="{ 'opacity-50': currentProductIndex === 0 }"
                            />
                        </button>

                        <div class="flex gap-2">
                            <span
                                v-for="(dot, index) in totalProducts"
                                :key="index"
                                class="w-2 h-2 rounded-full"
                                :class="index === currentProductIndex ? 'bg-black' : 'bg-gray-300'"
                            ></span>
                        </div>

                        <button
                            class="px-3 py-2"
                            @click="navigateToNextProduct"
                            :disabled="currentProductIndex === totalProducts - 1"
                        >
                            <img
                                src="/public/right-50.png"
                                alt="Droite"
                                class="w-6 h-6"
                                :class="{ 'opacity-50': currentProductIndex === totalProducts - 1 }"
                            />
                        </button>
                    </div>
                </div>

                <!-- Info produit et actions -->
                <div
                    class="flex-1 w-[528px] h-[443px] border p-6 bg-[#FFFFFF] rounded-[20px] shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)] flex flex-col justify-between"
                >
                    <div>
                        <div class="px-6">
                            <h1 class="font-[700] text-[24px] text-[#201B21] leading-[32px] mb-1">
                                {{ product.marque }}
                            </h1>
                            <h2 class="text-[20px] font-[400] leading-[24px] text-[#67696E] mb-4">
                                {{ product.nom }}
                            </h2>
                            <p class="text-lg font-[500] text-[24px] leading-[24px] mb-6">
                                ${{ product.prix }}
                            </p>
                        </div>

                        <div class="w-full h-[1px] bg-[#E9EBEE]"></div>

                        <div class="mb-6 px-6">
                            <label class="block font-medium mb-2 mt-4">Quantity</label>
                            <div
                                class="flex w-[136px] h-[48px] border-[1px] rounded-[10px] items-center border rounded w-32"
                            >
                                <button
                                    class="px-3 py-2 font-[700] text-[18px] text-[#201B21]"
                                    @click="decrementQuantity"
                                    :disabled="quantity <= 1"
                                >
                                    -
                                </button>
                                <span
                                    class="flex-1 text-center font-[700] text-[18px] text-[#201B21]"
                                >
                                    {{ quantity }}
                                </span>
                                <button
                                    class="px-3 py-2 font-[700] text-[18px] text-[#201B21]"
                                    @click="incrementQuantity"
                                    :disabled="quantity >= product.stock"
                                >
                                    +
                                </button>
                            </div>
                            <p v-if="product.stock" class="text-sm text-gray-500 mt-1">
                                {{ product.stock }} available
                            </p>
                        </div>

                        <div class="px-6 mt-20">
                            <button
                                class="w-[456px] h-[60px] rounded-[10px] pt-[20px] px-[80px] pb-[20px] bg-[#201B21] hover:bg-gray-800 transition"
                                @click="addToCart"
                            >
                                <div class="font-[700] text-[18px] leading-[20px] text-[#FFFFFF]">
                                    Add to Cart
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 2 : Description et caractéristiques -->
            <section class="flex flex-col md:flex-row gap-8">
                <!-- Contenu description -->
                <div class="flex-1 p-8">
                    <h3 class="font-bold text-lg md:text-xl mb-4">Description</h3>
                    <div class="w-full h-[1px] bg-[#E9EBEE] mb-4"></div>
                    <p class="w-[482px] font-[400] text-[18px] leading-[24px] text-[#67696E]">
                        {{ product.description || 'No description available' }}
                    </p>

                    <ul class="list-disc mt-6 pl-5 font-[400] text-[18px] text-[#67696E] mx-4">
                        <li>Regular fit</li>
                        <li>Lace closure</li>
                        <li>Rubber outside with vulcanized look</li>
                        <li>Imported</li>
                    </ul>
                </div>

                <div
                    v-if="product.autre_url"
                    class="hidden md:block flex-1 w-[546px] h-[375px] rounded-[20px] flex items-center justify-center mx-auto"
                >
                    <img
                        :src="product.autre_url"
                        :alt="product.nom"
                        class="w-[546px] h-[375px] rounded-[20px] object-cover mix-blend-darken"
                    />
                </div>
            </section>
        </div>
    </div>
    <div v-else class="flex justify-center items-center h-screen">
        <p>Loading product...</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Product',
        props: ['id'],
        data() {
            return {
                product: null,
                quantity: 1,
                productFeatures: [],
                allProducts: [], // Pour stocker tous les produits
                currentProductIndex: 0, // Index du produit actuel
                totalProducts: 0 // Nombre total de produits
            }
        },
        async created() {
            try {
                // Charger le produit actuel
                const id = this.$route.params.id
                const productResponse = await axios.get(`https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/chossures/${id}`)
                this.product = productResponse.data.data

                // Charger tous les produits pour la navigation
                const allProductsResponse = await axios.get('https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/chossures')
                this.allProducts = allProductsResponse.data.data
                this.totalProducts = this.allProducts.length

                // Trouver l'index du produit actuel
                this.currentProductIndex = this.allProducts.findIndex(p => p.id === this.product.id)

                if (this.product.description) {
                    this.extractFeatures()
                }
            } catch (error) {
                console.error('Erreur lors du chargement du produit:', error)
            }
        },
        methods: {
            // Navigation au produit précédent
            navigateToPreviousProduct() {
                if (this.currentProductIndex > 0) {
                    this.currentProductIndex--
                    this.navigateToProduct(this.allProducts[this.currentProductIndex].id)
                }
            },

            // Navigation au produit suivant
            navigateToNextProduct() {
                if (this.currentProductIndex < this.totalProducts - 1) {
                    this.currentProductIndex++
                    this.navigateToProduct(this.allProducts[this.currentProductIndex].id)
                }
            },

            // Navigation vers un produit spécifique
            navigateToProduct(productId) {
                this.$router.push({ name: 'description-produit', params: { id: productId } })
                // Recharger les données du produit
                this.loadProductData(productId)
            },

            // Charger les données d'un produit
            async loadProductData(productId) {
                try {
                    const response = await axios.get(
                        `https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/chossures/${productId}`
                    )
                    this.product = response.data.data
                    this.currentProductIndex = this.allProducts.findIndex(p => p.id === productId)

                    if (this.product.description) {
                        this.extractFeatures()
                    }
                } catch (error) {
                    console.error('Erreur lors du chargement du produit:', error)
                }
            },

            // Extraction des caractéristiques
            extractFeatures() {
                const featureRegex = /-\s*(.*?)(?=\n-|$)/g
                const matches = [...this.product.description.matchAll(featureRegex)]
                this.productFeatures = matches.map(match => match[1].trim())
            },

            incrementQuantity() {
                if (this.quantity < (this.product.stock || 10)) {
                    this.quantity++
                }
            },

            decrementQuantity() {
                if (this.quantity > 1) {
                    this.quantity--
                }
            },

            async addToCart() {
                try {
                    const response = await axios.post('https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/panier', {
                        chossure_id: this.product.id,
                        quantite: this.quantity
                    })

                    console.log('Produit ajouté au panier:', response.data)
                    alert('Produit ajouté au panier avec succès!')
                } catch (error) {
                    console.error("Erreur lors de l'ajout au panier:", error)
                    alert("Une erreur est survenue lors de l'ajout au panier")
                }
            }
        }
    }
</script>
