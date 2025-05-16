<script>
export default {
    name: "Footer",
};
</script>

<template>
    <footer class="bg-[#201B21] text-white py-8 border-t border-gray-100">
        <div class="container mx-auto px-4">
            <!-- Contenu principal -->
            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <!-- Partie supérieure pour mobile - Logo + Icônes sociaux -->
                <div class="flex justify-between items-center md:hidden">
                    <!-- Logo SUN CO. -->
                    <div class="flex items-center">
                        <img src="/public/icon.svg" alt="icone enterprise" />
                        <span class="text-2xl font-bold ml-2">SUN CO.</span>
                    </div>

                    <!-- Icônes sociaux - seulement en mobile -->
                    <div class="flex space-x-4">
                        <img src="/public/Instagram.svg" alt="instagram logo" />
                        <img src="/public/Twitter.svg" alt="twiter logo" />
                        <img src="/public/Youtube.svg" alt="Youtube logo" />
                    </div>
                </div>

                <!-- Partie pour desktop - Logo + copyright -->
                <div
                    class="hidden md:flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0"
                >
                    <!-- Logo SUN CO. -->
                    <div class="flex items-center">
                        <img src="/public/icon.svg" alt="icone enterprise" />
                        <span class="text-2xl font-bold ml-2">SUN CO.</span>
                    </div>
                </div>

                <!-- Texte copyright - seulement en mobile -->
                <div class="mt-4 text-left text-gray-500 text-sm">
                    <!-- Version mobile - deux paragraphes -->
                    <div class="block">
                        <p>© 2023 dot.cards text task.</p>
                        <p>All rights reserved</p>
                    </div>
                </div>

                <!-- Icônes sociaux - seulement en desktop -->
                <div class="hidden md:flex space-x-4">
                    <img src="/public/Instagram.svg" alt="instagram logo" />
                    <img src="/public/Twitter.svg" alt="twiter logo" />
                    <img src="/public/Youtube.svg" alt="Youtube logo" />
                </div>
            </div>
        </div>
    </footer>
</template>
