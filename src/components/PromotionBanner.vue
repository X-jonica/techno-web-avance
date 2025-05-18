<template>
  <div class="w-[350px] md:w-full  h-[449px] md:h-auto mt-[20px] md:mt-10 mx-auto md:px-4">
    <div class="w-full h-full rounded-[20px] bg-[#EAEEEF] md:overflow-hidden">
      <!-- Version Mobile (identique à l'original) -->
      <div class="md:hidden">
        <div class="w-[207.4px] h-[136px] mx-auto pt-[20px]">
          <img src="/public/homePage/ShoeHome.svg" alt="image chaussure" />
        </div>

        <div class="w-[302px] h-[221px] mt-[50px] mx-auto gap-[36px]">
          <div class="w-[145px] h-[42px] mt-[20px] mx-auto">
            <div class="font-bold text-[36px] leading-[42px] tracking-[-1px] text-center text-[#EC5E2A]">
              25% OFF
            </div>
          </div>

          <div class="w-[295px] h-[55px] mt-[20px] mx-auto">
            <div class="font-bold text-[48px] leading-[54.75px] tracking-[-1px] text-center text-[#201B21]">
              Summer Sale
            </div>
          </div>

          <div class="w-[277px] h-[20px] mt-[20px] mx-auto">
            <div class="font-inter font-normal text-[14px] leading-[20px] text-center text-[#67696E]">
              Discover our summer styles with discount
            </div>
          </div>

          <div class="w-[302px] h-[48px] mt-[40px] rounded-[10px] px-[80px] py-[12px] bg-[#201B21] flex items-center justify-center gap-[10px] cursor-pointer mx-auto">
            <span class="font-inter font-bold text-[16px] leading-[20px] text-white">
              Shop Now
            </span>
            <span class="text-white text-[16px]">→</span>
          </div>
        </div>
      </div>

      <!-- Version Desktop -->
      <div class="hidden md:flex items-center justify-between p-10 h-full">
        <div class="w-1/2 flex flex-col items-start gap-5">
          <div class="font-bold text-[36px] leading-[42px] tracking-[-1px] text-[#EC5E2A]">
            25% OFF
          </div>

          <div class="font-bold text-[48px] leading-[54.75px] tracking-[-1px] text-[#201B21]">
            Summer Sale
          </div>

          <div class="max-w-[277px] font-inter font-normal text-[14px] leading-[20px] text-[#67696E]">
            Discover our summer styles with discount
          </div>

          <div class="w-[302px] h-[48px] rounded-[10px] px-[80px] py-[12px] bg-[#201B21] flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#333] transition-colors">
            <span class="font-inter font-bold text-[16px] leading-[20px] text-white">
              Shop Now
            </span>
            <span class="text-white text-[16px]">→</span>
          </div>
        </div>

        <div class="w-1/2 flex justify-end">
          <div class="w-[400px] h-[260px] flex items-center justify-center">
            <img src="/public/homePage/ShoeHome.svg" alt="image chaussure" class="w-full h-full object-contain" />
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