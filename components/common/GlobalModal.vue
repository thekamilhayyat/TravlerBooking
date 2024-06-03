<template>
    <UModal v-model="isVisible">
      <div class="p-4">
        <slot></slot>
      </div>
    </UModal>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  
  const props = defineProps({
    modelValue: Boolean, // This prop is used for v-model
    title: String,
    content: String
  })
  
  const isVisible = ref(props.modelValue)
  
  // Sync isVisible with the parent's v-model value
  watchEffect(() => {
    isVisible.value = props.modelValue
  })
  
  // Emit update to modelValue on change
  const emit = defineEmits(['update:modelValue'])
  watchEffect(() => {
    emit('update:modelValue', isVisible.value)
  })
  </script>
  <style lang="scss" >/* Transition for the collapsible content */
  .collapse-enter-active,
  .collapse-leave-active {
      transition: height .1s ease;
  }
  
  .collapse-enter-from,
  .collapse-leave-to {
      height: 0;
      opacity: 0;
  }
  
  .collapse-enter-to,
  .collapse-leave-from {
      height: auto;
      opacity: 1;
  }</style>