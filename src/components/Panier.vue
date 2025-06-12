<template>
    <div class="max-w-7xl mx-auto p-4 md:p-8">
        <h1 class="text-2xl md:text-[36px] font-[700] leading-[48px] mb-4 md:mb-8">Your Bag</h1>

        <div v-if="loading" class="flex justify-center items-center h-64">
            <p>Loading cart...</p>
        </div>

        <div v-else class="flex flex-col lg:flex-row gap-8">
            <!-- Colonne de droite - Récapitulatif (en premier pour mobile) -->
            <div class="w-full lg:w-1/3 order-first lg:order-last">
                <div
                    class="w-full lg:w-[460px] bg-[#FFFFFF] border shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)] p-6 lg:p-8 rounded-[20px] lg:sticky lg:top-8 mb-6 lg:mb-0"
                >
                    <h2 class="font-[700] text-2xl md:text-[36px] leading-[48px] mb-4">Summary</h2>

                    <div class="space-y-3 mb-8 mt-8">
                        <div class="flex justify-between">
                            <span
                                class="font-[500] text-lg md:text-[20px] leading-[24px] text-[#201B21]"
                            >
                                Subtotal
                            </span>
                            <span
                                class="font-[500] text-base md:text-[18px] leading-[24px] text-[#201B21]"
                            >
                                ${{ subtotal.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span
                                class="font-[500] text-lg md:text-[20px] leading-[24px] text-[#201B21]"
                            >
                                Shipping and delivery
                            </span>
                            <span
                                class="font-[500] text-base md:text-[18px] leading-[24px] text-[#201B21]"
                            >
                                ${{ shippingCost.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span
                                class="font-[500] text-lg md:text-[20px] leading-[24px] text-[#201B21]"
                            >
                                Tax
                            </span>
                            <span
                                class="font-[500] text-base md:text-[18px] leading-[24px] text-[#201B21]"
                            >
                                ${{ tax.toFixed(2) }}
                            </span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-green-600">
                            <span
                                class="font-[500] text-lg md:text-[20px] leading-[24px] text-[#201B21]"
                            >
                                Discount
                            </span>
                            <span
                                class="font-[500] text-base md:text-[18px] leading-[24px] text-[#201B21]"
                            >
                                -${{ discount.toFixed(2) }}
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between border-t mt-8 pt-4 mb-6">
                        <span class="font-[700] text-xl md:text-[24px] leading-[32px]">Total</span>
                        <span class="font-[500] text-base md:text-[18px] leading-[24px]">
                            ${{ total.toFixed(2) }}
                        </span>
                    </div>

                    <button
                        class="w-full lg:w-[388px] h-[64px] bg-[#201B21] text-white py-[20px] px-[80px] rounded-[10px] font-bold flex items-center justify-center gap-[10px] mt-[30px] lg:mt-[50px] hover:bg-gray-800 transition-colors"
                        :disabled="cartItems.length === 0"
                        @click="checkout"
                    >
                        Checkout
                        <span>→</span>
                    </button>
                </div>
            </div>

            <!-- Colonne de gauche - Articles -->
            <div class="w-full lg:w-2/3 order-last lg:order-first">
                <div v-if="cartItems.length === 0" class="text-center py-10">
                    <p class="text-lg">Your cart is empty</p>
                </div>
                <div v-else class="space-y-6">
                    <!-- Article dynamique -->
                    <div
                        v-for="item in cartItems"
                        :key="item.id"
                        class="flex flex-col sm:flex-row gap-4 border-b pb-6"
                    >
                        <div class="w-full sm:w-1/3 lg:w-1/4">
                            <div
                                class="w-full max-w-[165px] h-[166px] bg-gray-100 rounded-[18.77px] flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    :src="
                                        item.Chossure.image_url ||
                                        'http://localhost:4000/uploads/default.png'
                                    "
                                    :alt="item.Chossure.nom"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>
                        </div>
                        <div class="w-full sm:w-2/3 lg:w-3/4 sm:mx-4 lg:mx-10">
                            <div class="flex justify-between">
                                <h2 class="font-[700] text-lg md:text-[20px] leading-[24px]">
                                    {{ item.Chossure.marque }}
                                </h2>
                                <p
                                    class="font-[500] text-base md:text-[18px] leading-[24px] text-[#201B21]"
                                >
                                    ${{ item.Chossure.prix.toFixed(2) }}
                                </p>
                            </div>
                            <p class="font-[400] text-base md:text-[18px] leading-[24px] mt-2">
                                {{ item.Chossure.nom }}
                            </p>
                            <div class="flex items-center gap-4 mt-4 sm:mt-16">
                                <div
                                    class="flex items-center justify-between border w-[136px] h-[48px] rounded-[10px] px-[16px] py-[12px]"
                                >
                                    <button
                                        class="w-[24px] h-[24px] font-[300] text-[18px] leading-[24px] text-[#201B21] flex items-center justify-start"
                                        @click="updateQuantity(item.id, item.quantite - 1)"
                                        :disabled="item.quantite <= 1"
                                    >
                                        -
                                    </button>
                                    <span
                                        class="flex-1 text-center font-[700] text-[18px] leading-[24px] text-[#201B21]"
                                    >
                                        {{ item.quantite }}
                                    </span>
                                    <button
                                        class="w-[24px] h-[24px] font-[700] text-[18px] leading-[24px] text-[#201B21] flex items-center justify-end"
                                        @click="updateQuantity(item.id, item.quantite + 1)"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    class="font-[700] text-[16px] leading-[24px] text-[#67696E] underline"
                                    @click="removeItem(item.id)"
                                >
                                    Remove
                                </button>
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

    export default {
        name: 'Panier',
        data() {
            return {
                cartItems: [],
                loading: true,
                shippingCost: 20.0,
                taxRate: 0.06,
                discount: 6.0
            }
        },
        async created() {
            await this.fetchCartItems()
        },
        methods: {
            async fetchCartItems() {
                try {
                    const response = await axios.get('http://localhost:4000/api/panier')
                    this.cartItems = response.data.data || response.data
                    this.loading = false
                } catch (error) {
                    console.error('Error fetching cart items:', error)
                    this.loading = false
                }
            },
            async updateQuantity(itemId, newQuantity) {
                if (newQuantity < 1) return

                try {
                    await axios.put(`http://localhost:4000/api/panier/${itemId}`, {
                        quantite: newQuantity
                    })
                    await this.fetchCartItems()
                } catch (error) {
                    console.error('Error updating quantity:', error)
                }
            },
            async removeItem(itemId) {
                const confirmed = window.confirm(
                    'Voulez-vous vraiment supprimer cet article du panier ?'
                )
                if (!confirmed) return

                try {
                    await axios.delete(`http://localhost:4000/api/panier/${itemId}`)
                    await this.fetchCartItems()
                } catch (error) {
                    console.error('Error removing item:', error)
                }
            },

            checkout() {
                alert('Proceeding to checkout')
            }
        },
        computed: {
            subtotal() {
                return this.cartItems.reduce((sum, item) => {
                    return sum + item.Chossure.prix * item.quantite
                }, 0)
            },
            tax() {
                return this.subtotal * this.taxRate
            },
            total() {
                return this.subtotal + this.shippingCost + this.tax - this.discount
            }
        }
    }
</script>
