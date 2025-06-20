<template>
    <!-- Version Mobile -->
    <div class="md:hidden">
        <div class="w-full px-4 pt-6">
            <h1 class="text-2xl font-[700] leading-[32px] mb-6">Your Bag</h1>

            <div v-if="loading" class="flex justify-center items-center h-64">
                <p>Loading cart...</p>
            </div>

            <div v-else>
                <!-- Summary en haut sur mobile -->
                <div class="w-full bg-white rounded-[20px] shadow-md p-6 mb-6">
                    <h2 class="font-[700] text-xl leading-[28px] mb-4">Summary</h2>

                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between">
                            <span class="font-[500] text-base text-[#201B21]">Subtotal</span>
                            <span class="font-[500] text-base text-[#201B21]">
                                ${{ subtotal.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-[500] text-base text-[#201B21]">
                                Shipping and delivery
                            </span>
                            <span class="font-[500] text-base text-[#201B21]">
                                ${{ shippingCost.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-[500] text-base text-[#201B21]">Tax</span>
                            <span class="font-[500] text-base text-[#201B21]">
                                ${{ tax.toFixed(2) }}
                            </span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-green-600">
                            <span class="font-[500] text-base text-[#201B21]">Discount</span>
                            <span class="font-[500] text-base text-[#201B21]">
                                -${{ discount.toFixed(2) }}
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between border-t pt-4 mb-4">
                        <span class="font-[700] text-lg">Total</span>
                        <span class="font-[500] text-base">${{ total.toFixed(2) }}</span>
                    </div>

                    <button
                        class="w-full h-[48px] bg-[#201B21] text-white rounded-[10px] font-bold flex items-center justify-center gap-2 mt-4 hover:bg-gray-800 transition-colors"
                        :disabled="cartItems.length === 0"
                        @click="checkout"
                    >
                        Checkout <span>→</span>
                    </button>
                </div>

                <!-- Articles avec scroll si nécessaire -->
                <div v-if="cartItems.length === 0" class="text-center py-10">
                    <p class="text-lg">Your cart is empty</p>
                </div>
                <div v-else class="max-h-[60vh] overflow-y-auto pb-6">
                    <div
                        v-for="item in cartItems"
                        :key="item.id"
                        class="flex gap-4 border-b pb-6 mb-6"
                    >
                        <div class="w-1/3">
                            <div
                                class="w-full h-[120px] bg-gray-100 rounded-[18px] flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    :src="item.Chossure.image_url || '/default-shoe.png'"
                                    :alt="item.Chossure.nom"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>
                        </div>
                        <div class="w-2/3">
                            <div class="flex justify-between">
                                <h2 class="font-[700] text-base">{{ item.Chossure.marque }}</h2>
                                <p class="font-[500] text-base text-[#201B21]">
                                    ${{ item.Chossure.prix.toFixed(2) }}
                                </p>
                            </div>
                            <p class="font-[400] text-sm mt-1">{{ item.Chossure.nom }}</p>
                            <div class="flex items-center gap-4 mt-4">
                                <div
                                    class="flex items-center justify-between border w-[120px] h-[40px] rounded-[10px] px-3 py-2"
                                >
                                    <button
                                        class="w-5 h-5 text-base flex items-center justify-start"
                                        @click="updateQuantity(item.id, item.quantite - 1)"
                                        :disabled="item.quantite <= 1"
                                    >
                                        -
                                    </button>
                                    <span class="flex-1 text-center font-[700] text-base">
                                        {{ item.quantite }}
                                    </span>
                                    <button
                                        class="w-5 h-5 text-base flex items-center justify-end"
                                        @click="updateQuantity(item.id, item.quantite + 1)"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    class="font-[700] text-sm text-[#67696E] underline"
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

    <!-- Version Desktop adaptative -->
    <div class="hidden md:block w-full px-4 lg:px-8 max-w-7xl mx-auto py-6 lg:py-8">
        <h1 class="text-2xl lg:text-[36px] font-[700] leading-[32px] lg:leading-[48px] mb-6 lg:mb-8">Your Bag</h1>

        <div v-if="loading" class="flex justify-center items-center h-64">
            <p>Loading cart...</p>
        </div>

        <div v-else class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <!-- Articles avec scroll -->
            <div class="w-full lg:w-[65%] xl:w-[70%]">
                <div v-if="cartItems.length === 0" class="text-center py-10">
                    <p class="text-lg">Your cart is empty</p>
                </div>
                <div v-else class="max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-0 lg:pr-4">
                    <div
                        v-for="item in cartItems"
                        :key="item.id"
                        class="flex flex-col sm:flex-row gap-4 border-b pb-6 mb-6"
                    >
                        <div class="w-full sm:w-1/3 lg:w-1/4">
                            <div
                                class="w-full max-w-[165px] h-[120px] sm:h-[166px] bg-gray-100 rounded-[18px] flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    :src="item.Chossure.image_url || '/default-shoe.png'"
                                    :alt="item.Chossure.nom"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>
                        </div>
                        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pl-4 lg:pl-10">
                            <div class="flex justify-between">
                                <h2 class="font-[700] text-[18px] lg:text-[20px] leading-[24px]">
                                    {{ item.Chossure.marque }}
                                </h2>
                                <p class="font-[500] text-[16px] lg:text-[18px] leading-[24px] text-[#201B21]">
                                    ${{ item.Chossure.prix.toFixed(2) }}
                                </p>
                            </div>
                            <p class="font-[400] text-[16px] lg:text-[18px] leading-[24px] mt-2">
                                {{ item.Chossure.nom }}
                            </p>
                            <div class="flex items-center gap-4 mt-4 sm:mt-8 lg:mt-16">
                                <div
                                    class="flex items-center justify-between border w-[120px] sm:w-[136px] h-[40px] sm:h-[48px] rounded-[10px] px-3 sm:px-[16px] py-2 sm:py-[12px]"
                                >
                                    <button
                                        class="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] font-[300] text-[16px] sm:text-[18px] leading-[24px] text-[#201B21] flex items-center justify-start"
                                        @click="updateQuantity(item.id, item.quantite - 1)"
                                        :disabled="item.quantite <= 1"
                                    >
                                        -
                                    </button>
                                    <span
                                        class="flex-1 text-center font-[700] text-[16px] sm:text-[18px] leading-[24px] text-[#201B21]"
                                    >
                                        {{ item.quantite }}
                                    </span>
                                    <button
                                        class="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] font-[700] text-[16px] sm:text-[18px] leading-[24px] text-[#201B21] flex items-center justify-end"
                                        @click="updateQuantity(item.id, item.quantite + 1)"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    class="font-[700] text-[14px] sm:text-[16px] leading-[24px] text-[#67696E] underline"
                                    @click="removeItem(item.id)"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="w-full lg:w-[35%] xl:w-[30%] sticky top-6 lg:top-8 h-fit">
                <div
                    class="w-full lg:w-[400px] xl:w-[460px] bg-white border shadow-md lg:shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)] p-6 lg:p-8 rounded-[20px]"
                >
                    <h2 class="font-[700] text-xl lg:text-[36px] leading-[28px] lg:leading-[48px] mb-4">Summary</h2>

                    <div class="space-y-3 mb-6 lg:mb-8 mt-6 lg:mt-8">
                        <div class="flex justify-between">
                            <span class="font-[500] text-[16px] lg:text-[20px] leading-[24px] text-[#201B21]">
                                Subtotal
                            </span>
                            <span class="font-[500] text-[16px] lg:text-[18px] leading-[24px] text-[#201B21]">
                                ${{ subtotal.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-[500] text-[16px] lg:text-[20px] leading-[24px] text-[#201B21]">
                                Shipping and delivery
                            </span>
                            <span class="font-[500] text-[16px] lg:text-[18px] leading-[24px] text-[#201B21]">
                                ${{ shippingCost.toFixed(2) }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-[500] text-[16px] lg:text-[20px] leading-[24px] text-[#201B21]">
                                Tax
                            </span>
                            <span class="font-[500] text-[16px] lg:text-[18px] leading-[24px] text-[#201B21]">
                                ${{ tax.toFixed(2) }}
                            </span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-green-600">
                            <span class="font-[500] text-[16px] lg:text-[20px] leading-[24px] text-[#201B21]">
                                Discount
                            </span>
                            <span class="font-[500] text-[16px] lg:text-[18px] leading-[24px] text-[#201B21]">
                                -${{ discount.toFixed(2) }}
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between border-t mt-6 lg:mt-8 pt-4 mb-4 lg:mb-6">
                        <span class="font-[700] text-[18px] lg:text-[24px] leading-[24px] lg:leading-[32px]">Total</span>
                        <span class="font-[500] text-[16px] lg:text-[18px] leading-[24px]">
                            ${{ total.toFixed(2) }}
                        </span>
                    </div>

                    <button
                        class="w-full lg:w-[350px] xl:w-[388px] h-[48px] lg:h-[64px] bg-[#201B21] text-white rounded-[10px] font-bold flex items-center justify-center gap-2 mt-4 lg:mt-[50px] hover:bg-gray-800 transition-colors"
                        :disabled="cartItems.length === 0"
                        @click="checkout"
                    >
                        Checkout <span>→</span>
                    </button>
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
            discount: 6.0,
            currentUser: null
        }
    },
    async created() {
        let userString = localStorage.getItem('user') || sessionStorage.getItem('user')
        this.currentUser = userString ? JSON.parse(userString) : null
        await this.fetchCartItems()
    },
    methods: {
        async fetchCartItems() {
            if (!this.currentUser) {
                this.loading = false
                return
            }

            try {
                const response = await axios.get(
                    'https://backend-technoweb-avance.onrender.com/api/panier',
                    {
                        headers: {
                            'utilisateur-id': this.currentUser.id
                        }
                    }
                )

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
                await axios.put(
                    `https://backend-technoweb-avance.onrender.com/api/panier/${itemId}`,
                    {
                        quantite: newQuantity
                    }
                )
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
                await axios.delete(
                    `https://backend-technoweb-avance.onrender.com/api/panier/${itemId}`
                )
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