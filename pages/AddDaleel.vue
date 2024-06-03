<template>
    <div class="container mx-auto pb-12 pt-16">
        <!-- Business Info -->
        <p class="text-4xl	font-medium text-d-black pb-12">Business Info</p>
        <div class="grid grid-cols-2 grid-rows-2 gap-8 w-full">
                <CommonField label="Business Name"  v-model="email" required /> 
                <CommonField label="Website Name"  v-model="email" required /> 
                <CommonField label="Email" v-model="email" required /> 
                <CommonField suffix label="Business Location" v-model="email" required>
                <template #suffix>
                    <img src="@/assets/images/locationPin.svg" />
                </template>
                </CommonField> 
              
        </div>
          <!-- add amenities -->
          <div class="bg-[#F9F9FC] rounded-lg px-8 py-5 mt-16 mb-8">
            <div class="flex justify-between items-center border-b border-gray-200 pb-4">
                <p class="text-lg	font-medium text-d-black ">Add Amenities</p>   
                <img class="-mt-2" src="@/assets/images/ArrowDown.svg" />     
            </div>
            <div class="flex mt-4">
                <span class="flex bg-white rounded-md w-fit text-d-black py-[6px] px-3 text-sm">Transport <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="ml-1 !text-d-black text-sm p-0"  /></span>
            </div>

        </div>
        <div class="grid grid-cols-2 gap-8 w-full">
            <CommonField suffix label="Timings" v-model="email" required>
                <template #suffix>
                    <img src="@/assets/images/TimeIcon.svg" />
                </template>
                </CommonField> 
                <CommonField suffix label="Price Range" v-model="email" required>
                <template #suffix>
                    <img src="../assets/images/Dollar.svg" />
                </template>
                </CommonField> 
        </div>
        <!-- Basic Info -->
        <p class="text-4xl	font-medium text-d-black py-12">Basic Info</p>
        <div class="grid grid-cols-2 grid-rows-1 gap-8">
                <CommonField label="Email" v-model="email" required /> 
                <CommonField label="Phone Number" v-model="email" required /> 
        </div>
        <CommonField class="mt-8" label="Add Description" inputField='textarea' v-model="email" required /> 
        <!-- Add Social Media -->
        <p class="text-4xl	font-medium text-d-black py-12">Add Social Media</p>
        <div class="grid grid-cols-2 grid-rows-2 gap-8">
            <CommonField prefix label="Facebook" v-model="email" >
                <template #prefix>
                    <img class="-mt-2" src="@/assets/images/Facebook.svg" />
                </template>
            </CommonField> 
            <CommonField prefix label="Instagram" v-model="email" >
                <template #prefix>
                    <img class="-mt-2" src="@/assets/images/Insta.svg" />
                </template>
            </CommonField> 
            <CommonField prefix label="Youtube" v-model="email" >
                <template #prefix>
                    <img class="-mt-2" src="@/assets/images/Youtube.svg" />
                </template>
            </CommonField> 
            <CommonField prefix label="Twitter" v-model="email" >
                <template #prefix>
                    <img class="-mt-2" src="@/assets/images/Twitter.svg" />
                </template>
            </CommonField> 
        </div>
        <div class="w-full flex justify-center mt-12">
                <UButton class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 w-1/2 h-16 bg-paris-daisy text-d-black text-xl font-medium " block>Submit</UButton>
            </div>
    </div>
</template>

<script setup>
const email = ref('') 
</script>

<style lang="scss" scoped>

</style>