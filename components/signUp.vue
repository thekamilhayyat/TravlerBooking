<template>
    <div class="w-full grid grid-cols-2 gap-x-5 pr-8">
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">First Name<span class="text-red-500">*</span></p>
            <UInput :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value" size="xl" />
        </div>
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">Last Name<span class="text-red-500">*</span></p>
            <UInput :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value" size="xl" />
        </div>
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">Email<span class="text-red-500">*</span></p>
            <UInput :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value" size="xl" />
        </div>
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">Phone Number<span class="text-red-500">*</span></p>
            <UInput :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value" size="xl" />
        </div>
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">Password<span class="text-red-500">*</span></p>
            <UInput type="password" :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value"
                size="xl" />
        </div>
        <div class="bg-[#F9F9FC] rounded-lg py-3 px-5 mb-5">
            <p class="text-left text-l-gray text-sm pb-1">Confirm Password<span class="text-red-500">*</span></p>
            <UInput type="password" :padded="false" placeholder="Type..." color="gray" variant="none" v-model="value"
                size="xl" />
        </div>
    </div>
    <div class="w-full flex justify-center">
        <UButton class="hover:bg-transparent hover:text-d-black hover:border-2 transition-all hover:border-paris-daisy-200 w-1/2 h-16 bg-paris-daisy text-d-black text-xl font-medium " block>Sign Up</UButton>
    </div>
</template>

<script setup>
const value = ref( '' )
</script>

<style lang="scss" scoped></style>