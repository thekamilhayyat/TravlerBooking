<template>
    <div class="rounded-lg overflow-hidden mb-12">
      <!-- Header -->
      <div  @click="toggle" :class="{'cursor-pointer' : showCollapsable}" class="flex items-center justify-between  ">
        <span class="text-4xl	font-medium text-d-black">{{ title }}</span>
        <svg v-if="showCollapsable" :class="{'transform transition-transform rotate-180': isOpen}" class="h-6 w-6 fill-[#FDB515] transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Collapsible Content -->
      <transition name="collapse">
        <div v-show="isOpen" class="p-4">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      title: String,
      showCollapsable:{
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const isOpen = ref(true);
  
      function toggle() {
        if(showCollapsable){
            isOpen.value = !isOpen.value;
        }
      }
  
      // Expose to template
      return { isOpen, toggle };
    },
  };
  </script>
  
  <style>
  /* Transition for the collapsible content */
  .collapse-enter-active, .collapse-leave-active {
    transition: height .3s ease;
  }
  .collapse-enter-from, .collapse-leave-to {
    height: 0;
    opacity: 0;
  }
  .collapse-enter-to, .collapse-leave-from {
    height: auto;
    opacity: 1;
  }
  </style>
  