<template>
    <div :class="{'border border-red-500' : hasError, '!min-h-[200px]' : inputField == 'textarea'}" class="bg-[#F9F9FC] rounded-lg px-5 relative cursor-pointer h-[70px]" @click="focusInput">
        <div v-if="prefix" class="absolute left-6 top-[35%]" >
            <slot name="prefix"></slot>
      </div>
      <div :class="{'pl-16' : prefix}">
          <p :class="['absolute left-5 top-6 transition-all duration-300 ease-in-out', labelClass,{ '!left-20' : prefix }]" class="w-full" @click="focusInput()">
          {{ label }}<span v-if="required" class="text-red-500">*</span>
        </p>
        <input
        v-if="inputField === 'input'"
          v-show="inputFocused || modelValue.length > 0"
          ref="passwordInput"
          class="bg-[#F9F9FC] pt-8 w-full focus:outline-none focus:bg-[#F9F9FC]"
          :value="modelValue"
          :type="currentFieldType"
          :class="inputClass"
          :placeholder="placeholder"
          @input="updateValue($event.target.value)"
          @focus="inputFocused = true"
          @blur="checkInput"
        >
        <textarea
        v-else-if="inputField === 'textarea'"
        v-show="inputFocused || modelValue.length > 0"
        ref="inputRef"
        class="bg-[#F9F9FC] pt-8 w-full focus:outline-none focus:bg-[#F9F9FC]"
        :value="modelValue"
        :class="inputClass"
        rows="6"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
        @focus="inputFocused = true"
        @blur="checkInput"
      ></textarea>
      </div>

      <div v-if="fieldType === 'password'" class="absolute right-6 top-[35%]" @click.stop="togglePasswordVisibility">
        <!-- <img :src="showPassword ? hidePasswordIcon : ShowPasswordIcon" /> -->
        <UIcon v-if="showPassword" name="i-heroicons-eye" class="h-6 w-6 text-gray-300" />
        <UIcon  v-else class="h-6 w-6 text-gray-300" name="i-heroicons-eye-slash" />
      </div>
      <div v-if="suffix" class="absolute right-6 top-[35%]">
        <slot name="suffix"></slot>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed, nextTick } from 'vue';
  import hidePasswordIcon from '@/assets/images/PasswordHide.svg'
  import ShowPasswordIcon from '@/assets/images/PasswordHide.svg'
  const props = defineProps({
    label: {
      type: String,
      default: 'Label'
    }, 
    required: {
      type: Boolean,
      default: false
    },
    prefix:{
    type: Boolean,
      default: false
    },
    suffix:{
    type: Boolean,
      default: false
    },
    fieldType: {
      type: String,
      validator: function (value) {
        return ["text", "password"].indexOf(value) !== -1;
      },
      default: "text",
    },
    modelValue: String,
    placeholder: String,
    inputClass: String,
    inputField: {
    type: String,
    default: 'input', // 'input' for input element, 'textarea' for textarea element
    validator: value => ['input', 'textarea'].includes(value)
  }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const passwordInput = ref(null);
  const inputRef = ref(null);
  const inputFocused = ref(false);
  const showPassword = ref(false);
  
  const labelClass = computed(() => {
    return inputFocused.value || props.modelValue.length > 0
      ? '!top-2 text-xs text-gray-500'
      : 'text-sm text-l-gray';
  });
  
  // Computed property to dynamically change the input type
  const currentFieldType = computed(() => {
    if (props.fieldType === 'password') {
      return showPassword.value ? 'text' : 'password';
    }
    return props.fieldType;
  });
  
  const focusInput = () => {
    inputFocused.value = true;
    nextTick(() => {
      passwordInput.value.focus();
    });
  };
  
  const updateValue = (value) => {
    emit('update:modelValue', value);
  };
  
  const checkInput = () => {
    if (props.modelValue.length === 0) {
      inputFocused.value = false;
    }
  };
  
  // Toggle the visibility state of the password
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const validateInput = () => {
  if (props.required && !props.modelValue) {
    return 'Field is required';
  } else if (props.fieldType === 'email' && !/\S+@\S+\.\S+/.test(props.modelValue)) {
    return 'Invalid email address';
  } else if (props.fieldType === 'password' && props.modelValue.length < 6) {
    return 'Password must be at least 8 characters';
  }
  return '';
};

const hasError = computed(() => {
  return !!validateInput();
});
  
  watch(() => props.modelValue, (newValue) => {
    inputFocused.value = newValue.length > 0;
  }, { immediate: true });
  </script>
  