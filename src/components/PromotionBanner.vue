<template>
  <div class="w-full max-w-[1200px] h-auto mt-5 md:mt-10 mx-auto px-4">
    <div class="w-full h-full rounded-[20px] bg-[#EAEEEF] overflow-hidden">
      <div class="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
        <!-- Text Content - Left Side (Desktop) / Top (Mobile) -->
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="flex flex-col items-center md:items-start gap-5">
            <!-- 25% OFF -->
            <div class="w-full text-center md:text-left">
              <div class="font-bold text-[36px] leading-[42px] tracking-[-1px] text-[#EC5E2A]">
                25% OFF
              </div>
            </div>

            <!-- Summer Sale -->
            <div class="w-full text-center md:text-left">
              <div class="font-bold text-[36px] md:text-[48px] leading-[42px] md:leading-[54.75px] tracking-[-1px] text-[#201B21]">
                Summer Sale
              </div>
            </div>

            <!-- Description -->
            <div class="w-full max-w-[277px] text-center md:text-left">
              <div class="font-inter font-normal text-[14px] leading-[20px] text-[#67696E]">
                Discover our summer styles with discount
              </div>
            </div>

            <!-- Button -->
            <div 
              class="w-full max-w-[302px] h-[48px] mt-6 md:mt-10 rounded-[10px] px-[80px] py-[12px] bg-[#201B21] flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#333] transition-colors duration-300"
            >
              <span class="font-inter font-bold text-[16px] leading-[20px] text-white">
                Shop Now
              </span>
              <span class="text-white text-[16px]">
                →
              </span>
            </div>
          </div>
        </div>

        <!-- Image - Right Side (Desktop) / Top (Mobile) -->
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end mb-6 md:mb-0">
          <div class="w-[207.4px] h-[136px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[260px] flex items-center justify-center">
            <img 
              src="/public/homePage/ShoeHome.svg" 
              alt="image chaussure" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PromotionBanner",
};
</script>

