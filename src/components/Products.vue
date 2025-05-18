<template>
  <!-- products section -->
  <div class="w-full max-w-[1116px] mt-[50px] mx-auto px-4 md:px-6">
    <!-- title and navigation -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-2xl md:text-[28px] leading-[36px] tracking-[-1px] text-[#201B21]">
        Explore our latest drops
      </h2>
    </div>

    <!-- products container with scroll -->
    <div class="relative mx-auto">
      <!-- products list -->
      <div ref="productsContainer" class="flex overflow-x-auto scroll-smooth space-x-4 md:space-x-6 pb-4 hide-scrollbar">
        <div v-for="(product, index) in products" :key="index" class="flex-shrink-0 w-[160px] md:w-[195.75px]">
          <!-- product card -->
          <div class="w-full h-[180px] md:h-[213px] rounded-xl md:rounded-[14.08px] bg-[#F4F4F4] overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-contain mix-blend-darken">
          </div>
          
          <!-- product info -->
          <div class="w-full mt-3">
            <p class="font-bold text-base leading-[18px] tracking-[-0.5px]">{{ product.brand }}</p>
            <span class="font-inter font-normal text-sm leading-[14px] text-[#67696E]">{{ product.name }}</span>
            
            <!-- price -->
            <div class="mt-2">
              <p class="font-medium text-base leading-[20px] tracking-[-0.5px]">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- navigation arrows - mobile -->
      <div class="md:hidden flex mt-6">
        <div class="flex items-center gap-4">
          <button @click="scrollLeft" class="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/src/assets/icones/icons8-left-arrow-50.png" alt="icon direction left" class="w-6 h-6">
          </button>
          <button @click="scrollRight" class="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/src/assets/icones/icons8-right-arrow-50.png" alt="icon direction right" class="w-6 h-6">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          brand: "Off-White",
          name: "Out Of Office \"Ooo\" sneakers",
          price: 775,
          image: "/src/assets/img-produits/img_1.png"
        },
        {
          brand: "Nike",
          name: "Air Jordan 1 Retro High",
          price: 200,
          image: "/src/assets/img-produits/img_2.png"
        },
        {
          brand: "Nike",
          name: "Nike Air Force Premium",
          price: 98.23,
          image: "/src/assets/img-produits/img_3.png"
        },
        {
          brand: "Adidas",
          name: "DAILY 3.0 SHOES",
          price: 98.99,
          image: "/src/assets/img-produits/img_4.png"
        },
      ]
    }
  },
  methods: {
    scrollLeft() {
      const container = this.$refs.productsContainer;
      container.scrollBy({ left: -250, behavior: 'smooth' });
    },
    scrollRight() {
      const container = this.$refs.productsContainer;
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Maintain text styles as per original */
.font-inter {
  font-family: 'Inter', sans-serif;
}
.text-middle {
  color: inherit;
}
</style>