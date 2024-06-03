<template>
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-2">Contact Us</p>
            <p class="text-l-gray font-normal text-lg text-d-black mb-12">Please fill out the information, our CSR will contact you.</p>
            <div class="grid grid-cols-2 grid-rows-2 gap-12">
                <CommonField label="First Name" v-model="email" required /> 
                <CommonField label="Last Name" v-model="email" required /> 
                <CommonField label="Email" v-model="email" required /> 
                <CommonField label="Phone Number" v-model="email" required /> 
            </div>
            <CommonField class="mt-10" label="Notes" inputField='textarea' v-model="email" required /> 
            <div class="w-full flex justify-center mt-10">
                <UButton class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 w-1/2 h-16 bg-paris-daisy text-d-black text-xl font-medium " block>Submit</UButton>
            </div>
        </div>
    </section>
    <appSection />
    <reviewCrousal />
</template>

<script setup>
import { ref } from "vue";
const email = ref('')
const isModalOpen = ref(false)
</script>

<style lang="scss" scoped>

</style>