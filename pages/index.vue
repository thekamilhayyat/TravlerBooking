<template>

<div class="bg-no-repeat bg-auto bg-bottom bg-[url('@/assets/images/Bg.png')] h-screen">
    <div class="flex justify-center items-center h-screen ">
        <div class="bg-white shadow-md rounded-3xl p-8 w-3/4 flex justify-center items-center h-3/4 relative">
            <div class="w-full text-center flex flex-col  items-center ">
                <div class="overflow-auto" :class="[openSignUp ? 'w-full' : 'w-3/4'] ">
                    <div class="flex justify-center pt-2">
                        <img class="sm:w-[120px] md:w-[120px] xl:w-[120px] 2xl:w-[140px]" src="@/assets/images/Logo.png" />
                    </div>
                    <p class="md:pt-5 xl:pt-8 2xl:pt-10 pb-5 text-d-black  font-medium sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl">Get going with <span class="font-bold">dleel.</span></p>
                    <p v-if="openSignUp" class="text-l-gray sm:text-sm md:text-sm xl:text-sm 2xl:text-base pb-8">Fill the form bellow for new signup</p>
                    <p v-else class="text-l-gray sm:text-sm md:text-sm xl:text-sm 2xl:text-base pb-8">Login with your username or email.</p>
                    <signUp v-if="openSignUp" />
                    <signIn v-else />
                    <p class="text-d-black text-base pt-3">Don't have an account? <span @click="showSignUpPg" class="cursor-pointer">{{openSignUp ? 'Sign In' : 'Sign Up'}}</span></p>
                </div>
              </div>
              <!-- sm:hidden md:hidden lg:block -->
              <div :class="[openSignUp ? 'w-3/4' : 'w-full'] " class=" h-full  text-center  bg-no-repeat bg-cover bg-[url('@/assets/images/Slider.png')] flex flex-col justify-end items-end pb-10">
                <p class="text-white  font-bold pb-5 pt-14  sm:text-base md:text-base xl:text-lg 2xl:text-2xl">Start enjoying and Exploring your <br> Dream vacation</p>
                <p class="text-white text-base sm:text-sm md:text-sm xl:text-base 2xl:text-xl">A new and easy way to travel by air and fast way.<br> Try it now by filling out the form below!</p>
              </div>
              
        </div>  
        </div>
</div>
    <!-- <img src="@/assets/images/Logo.png" />
    <p class="font-bold bg-paris-daisy">Kamil is here for testing</p> -->

</template>

<script setup>
import { useRouter } from 'vue-router';


definePageMeta({
    layout: 'auth'
})
const openSignUp = ref(false)
const router = useRouter();
const showSignUpPg = () =>{
    openSignUp.value = !openSignUp.value
}

onMounted(() => {
  const token = localStorage.getItem('authToken');
  if (token) {
    router.push('/categories');
  }
  // If no token is found, do nothing and let the user stay on the current page
});

</script>

<style lang="scss">

</style>
