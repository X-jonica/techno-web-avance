<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Product from "../components/Product.vue";

export default {
    name: "HomeView",
    components: {
        Header,
        Footer,
        Product,
    },
};
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-grow mx-auto mb-6">
          <Product />
        </main>

        <Footer />
    </div>
</template>
