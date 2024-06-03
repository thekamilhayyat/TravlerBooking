<template>
    <div class="h-[265px] rounded  shadow-lg p-3">
      <div  class="h-32 relative">
        <img class="w-full" :src="cardImage" />
        <div class="absolute top-0 right-0 z-50 cursor-pointer w-10 h-10" @click="favChoice">
          <img class="" v-if="fav" :src="heartIcon" alt="Heart Icon">
          <img v-else src="@/assets/images/HeartFill.png" alt="Heart Icon">
        </div>
      </div>
      <div class="pt-2">
        <div v-if="title" class="truncate font-medium text-sm mb-1">{{ title }}</div>
        <p class="text-l-gray text-xs">
          {{ subtitle }}
        </p>
        <div class="flex justify-start items-center pt-2">
          <div class="flex justify-start items-end">
            <img :class="{'!pl-0' : index == 0 }" v-for="(i, index) in 5" class="pl-1" :key="i" :src="starIcon" alt="star">
          </div>
          <p class="text-[10px] text-d-black font-medium pl-1">{{ rating }} ({{ reviewCount }})</p>
        </div>
        <div class="border-b h-1 my-3"></div>
        <div class="flex justify-start items-center">
          <img :src="pinIcon" alt="Location Pin" />
          <p class="text-d-black text-xs pl-2">{{ location }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue'

  import heartImg from "@/assets/images/HeartEmpty.png" 
  import starImg from "@/assets/images/Star.png"
  import pinImg from "@/assets/images/Pin.svg" 
  const props = defineProps({
    title: {
      type: String,
      default: 'Wet Deck Dubai Resort'
    },
    subtitle: {
      type: String,
      default: 'Report and Spa'
    },
    rating: {
      type: String,
      default: '4.8'
    },
    reviewCount: {
      type: String,
      default: '120+'
    },
    location: {
      type: String,
      default: 'Marina, Dubai'
    },
    cardImage: {
      type: String,
      default: '@/assets/images/Card-1.png'
    },
    heartIcon: {
      type: String,
      default: heartImg
    },
    starIcon: {
      type: String,
      default: starImg
    },
    pinIcon: {
      type: String,
      default: pinImg
    }
  })
  const fav = ref(false)
  const favChoice = () =>{
    fav.value = !fav.value
  }
  </script>
  
  <style scoped>
  
  </style>
  