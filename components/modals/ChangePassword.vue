<template>
     <CommonGlobalModal class="!w-[970px]" v-model="store.showChangePasswordModal">
        <div class="flex justify-center items-center flex-col py-5 px-8">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="bg-gray-50 text-sm rounded-full absolute right-3 top-2" @click="store.showChangePasswordModal = false" />
            <p class="text-4xl	font-medium text-d-black">Change Password</p>
            <p class="text-base	pt-2 text-l-gray">Enter New password for your account</p>
            <!-- upload image avatar -->
            <div class="grid  gap-8 w-full  mt-12">
                <CommonField label="Current Password" fieldType="password" v-model="email" required /> 
                <CommonField label="New Password"  fieldType="password" v-model="email" required /> 
                <CommonField label="Confirm Password" fieldType="password" v-model="email" required /> 
            </div>
            <div class="w-full flex justify-center mt-10">
                <UButton class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 w-3/4 h-16 bg-paris-daisy text-d-black text-xl font-medium " block>Submit</UButton>
            </div>
        </div>
    </CommonGlobalModal>
</template>

<script setup>
import { useStore } from '../stores/index'
const store = useStore()
const email = ref('') 
</script>

<style lang="scss" scoped>

</style>