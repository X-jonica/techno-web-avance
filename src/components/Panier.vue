<template>
    <div class="max-w-7xl mx-auto p-4 md:p-8">
        <h1 class="text-2xl font-bold mb-6 md:mb-8">Your Bag</h1>

        <div class="flex flex-col md:flex-row gap-8">
            <!-- Colonne de gauche - Articles -->
            <div class="w-full md:w-2/3">
                <div class="space-y-6">
                    <!-- Article 1 -->
                    <div class="flex flex-col md:flex-row gap-4 border-b pb-6">
                        <div class="w-full md:w-1/4">
                            <div
                                class="bg-gray-100 rounded-lg h-32 md:h-40 flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    :src="cartItems[0].image"
                                    :alt="cartItems[0].name"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-3/4">
                            <div class="flex justify-between">
                                <h2 class="font-bold text-lg">{{ cartItems[0].brand }}</h2>
                                <p class="font-bold">${{ cartItems[0].price.toFixed(2) }}</p>
                            </div>
                            <p class="text-gray-600 mb-4">{{ cartItems[0].name }}</p>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center border rounded-md px-3 py-1">
                                    <button class="px-2" @click="decreaseQuantity(cartItems[0])">
                                        -
                                    </button>
                                    <span class="mx-2">{{ cartItems[0].quantity }}</span>
                                    <button class="px-2" @click="increaseQuantity(cartItems[0])">
                                        +
                                    </button>
                                </div>
                                <button class="text-red-500" @click="removeItem(cartItems[0].id)">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Article 2 -->
                    <div class="flex flex-col md:flex-row gap-4 border-b pb-6">
                        <div class="w-full md:w-1/4">
                            <div
                                class="bg-gray-100 rounded-lg h-32 md:h-40 flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    :src="cartItems[1].image"
                                    :alt="cartItems[1].name"
                                    class="w-full h-full object-contain mix-blend-darken"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-3/4">
                            <div class="flex justify-between">
                                <h2 class="font-bold text-lg">{{ cartItems[1].brand }}</h2>
                                <p class="font-bold">${{ cartItems[1].price.toFixed(2) }}</p>
                            </div>
                            <p class="text-gray-600 mb-4">{{ cartItems[1].name }}</p>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center border rounded-md px-3 py-1">
                                    <button class="px-2" @click="decreaseQuantity(cartItems[1])">
                                        -
                                    </button>
                                    <span class="mx-2">{{ cartItems[1].quantity }}</span>
                                    <button class="px-2" @click="increaseQuantity(cartItems[1])">
                                        +
                                    </button>
                                </div>
                                <button class="text-red-500" @click="removeItem(cartItems[1].id)">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Colonne de droite - Récapitulatif -->
            <div class="w-full md:w-1/3">
                <div class="bg-gray-50 p-6 rounded-lg sticky top-8">
                    <h2 class="font-bold text-xl mb-4">Summary</h2>

                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between">
                            <span>Subtotal</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Shipping and delivery</span>
                            <span>$20.00</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Tax</span>
                            <span>$6.00</span>
                        </div>
                        <div class="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-$6.00</span>
                        </div>
                    </div>

                    <div class="flex justify-between border-t pt-4 mb-6">
                        <span class="font-bold">Total</span>
                        <span class="font-bold">${{ total.toFixed(2) }}</span>
                    </div>

                    <button
                        class="w-full bg-black text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                        Checkout
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Panier',
        data() {
            return {
                cartItems: [
                    {
                        id: 1,
                        brand: 'Nike',
                        name: 'Nike Air Force Premium',
                        price: 98.23,
                        quantity: 1,
                        image: 'http://localhost:4000/uploads/img_1.png'
                    },
                    {
                        id: 2,
                        brand: 'adidas',
                        name: 'DAILY 3.0 SHOES',
                        price: 98.23,
                        quantity: 1,
                        image: 'http://localhost:4000/uploads/img_2.png'
                    }
                ],
                shippingCost: 20.0,
                taxRate: 6.0,
                discount: 6.0
            }
        },
        methods: {
            increaseQuantity(item) {
                item.quantity++
            },
            decreaseQuantity(item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            },
            removeItem(itemId) {
                this.cartItems = this.cartItems.filter(item => item.id !== itemId)
            }
        },
        computed: {
            subtotal() {
                return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
            },
            tax() {
                return this.taxRate
            },
            total() {
                return this.subtotal + this.shippingCost + this.tax - this.discount
            }
        }
    }
</script>

<style scoped>
    /* Styles spécifiques si nécessaire */
</style>
