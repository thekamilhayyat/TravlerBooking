<template>
    <div class="flex items-center">
      <div v-for="star in maxStars" :key="star" class="cursor-pointer" @click="setRating(star)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="star <= rating ? 'text-yellow-400' : 'text-gray-300'"
          class="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.425 8.2.594-6 5.373 1.898 8.021-7.766-4.09-7.766 4.09 1.898-8.021-6-5.373 
            8.2-.594L12 .587z"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['update:rating']);
  const rating = ref(0);
  const maxStars = 5;
  
  const setRating = (newRating) => {
    rating.value = newRating;
    emit('update:rating', newRating);
  };

  </script>
  
  <!-- <template>
    <StarRating @update:rating="handleRatingUpdate" />
  </template>
  
  <script setup>
  import StarRating from './StarRating.vue';
  
  const handleRatingUpdate = (newRating) => {
    console.log('New rating is:', newRating);
    // Handle the new rating value as needed
  };
  </script> -->
  
  