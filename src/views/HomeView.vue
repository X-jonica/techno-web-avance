<template>
   <div class="min-h-screen flex flex-col">
      <Header />

      <main class="flex-grow mb-6 px-4 md:px-6 lg:px-8 xl:px-10">
         <div class="max-w-[1440px] w-full mx-auto">
            <PromotionBanner class="mb-10" />
            <ProduitList />
         </div>
      </main>

      <Footer />
   </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import ProduitList from "../components/ProduitList.vue";
import PromotionBanner from "../components/PromotionBanner.vue";

export default {
   name: "HomeView",
   components: {
      Header,
      Footer,
      PromotionBanner,
      ProduitList,
      
   },
};
</script>

<style>
/* Styles globaux si nécessaire */
</style>