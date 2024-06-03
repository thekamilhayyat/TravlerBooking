<template>
    <!-- Edit-modal -->
    <CommonGlobalModal class="!w-[970px]" v-model="store.showEditUserModal">
        <div class="flex justify-center items-center flex-col py-5 px-8">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="bg-gray-50 text-sm rounded-full absolute right-3 top-2" @click="store.showEditUserModal = false" />
            <p class="text-4xl	font-medium text-d-black">Edit Profile</p>
            <p class="text-base	pt-2 text-l-gray">Edit your profile information</p>
            <!-- upload image avatar -->
            <div class="my-12">
                <span class="relative inline-block shadow-lg border-4 border-white rounded-full">
                    <img :src="avatarUrl" class="h-28 w-28 rounded-full" alt="Profile avatar" />
                    <img src="@/assets/images/Camera.svg" @click="triggerFileInput"
                        class="absolute -bottom-4 -right-3 block cursor-pointer" alt="Upload Icon" />
                </span>
                <input type="file" hidden @change="handleFileChange" ref="fileInput" />
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-8 w-full">
                <CommonField label="First Name"  v-model="email" required /> 
                <CommonField label="Last Name"  v-model="email" required /> 
                <CommonField label="Email" v-model="email" required /> 
                <CommonField label="Phone Number" v-model="email" required /> 
            </div>
            <div class="w-full flex justify-center mt-10">
                <UButton class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 w-1/2 h-16 bg-paris-daisy text-d-black text-xl font-medium " block>Update Profile</UButton>
            </div>
        </div>
    </CommonGlobalModal>
</template>

<script setup>
import { useStore } from '../../stores'
const store = useStore()
const email = ref('') 
const avatarUrl = ref( 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' )
const triggerFileInput = () => {
    fileInput.value.click()
}
const fileInput = ref( null )
const handleFileChange = ( event ) => {
    const file = event.target.files[0]
    if ( file && file.type.startsWith( 'image/' ) ) {
        const reader = new FileReader()
        reader.onload = ( e ) => {
            avatarUrl.value = e.target.result
        }
        reader.readAsDataURL( file )
    }
}
</script>

<style lang="scss" scoped>

</style>