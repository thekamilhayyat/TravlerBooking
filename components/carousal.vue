<template>
    <Carousel :itemsToShow="2">
      <Slide v-for="slide in 5" :key="slide">
        <div class="carousel__item">
            <div class="bg-white rounded-lg p-12">
                    <div class="flex justify-start items-center">
                        <img :class="{ '!pl-0': index == 0 }" v-for="(i, index) in 5" class="pl-1" :key="i"
                            src="@/assets/images/Star-lg.png" alt="star">
                    </div>
                    <p class="text-left text-lg text-l-gray pt-7">I personally realy like the taste of hotel power it has a defferent
                        taste from Manage money products. as a hotelpower owner, i recommend you to try single orign</p>
                    <div class="flex justify-start items-center mt-12">
                        <div class="mr-4 flex-shrink-0">
                            <img class="inline-block h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div>
                            <h4 class="text-xl font-medium text-d-black">Samuel Subiyanto</h4>
                            <p class="text-left text-base text-blue-500">Finance kordo.co</p>
                        </div>
                    </div>
            </div>
        </div>
      </Slide>
  
      <template #addons>
        <div class="topNavigationCrousal">
            <Navigation  />
        </div>
        <Pagination  />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

//   import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })
  
  </script>
  
  <style lang="scss" >
  .carousel__item {
    min-height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }

  .topNavigationCrousal{
position: absolute;
top: -20%;
right: 0%;
width: 14%;
    }
  
  .carousel__prev,
  .carousel__next {
    border: 1px solid #999B9F;
    border-radius: 50%;
    width: 74px;
    height: 74px;
  }
  .carousel__pagination-button::after{background-color: #999B9F !important; height: 5px !important;width: 24px; border-radius: 6px;}
  .carousel__pagination-button--active::after{background: #FDB515 !important;}
  .carousel__pagination{justify-content: flex-start !important; margin-top: 30px !important;}
  </style>
  