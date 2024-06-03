<template>
    <div class="w-full">
        <CommonField label="Email" v-model="email" required /> 
        <CommonField label="Password" v-model="password" required fieldType="password" />
        <p class="text-sm text-l-gray text-right pb-8">Forgot Password?</p>
        <UButton @click="login"
        :loading="loading"
            class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 h-16 bg-paris-daisy text-d-black text-xl font-medium"
            block>Login</UButton>
    </div>
</template>

<script setup>
import { useStore } from '../stores/index'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const { $showToast } = useNuxtApp();
const email = ref( 'hunt@yopmail.com' )
const password = ref( 'Hunt@2023' )
const store = useStore()
const loading = ref( false )

const login = () => {
    loading.value = true
    if ( email.value == '' ) {
        $showToast('Please Check', 'Your Email  field is wrong'); // Usage example
        return
    } 
    else if ( password.value == '' ) {
        $showToast('Please Check', 'Your Password field is wrong'); // Usage example
        return
    }
    store.login( { email: email.value, password: password.value } )
    // router.push('/Categories');
    loading.value = true
}
</script>

<style lang="scss" scoped></style>../stores