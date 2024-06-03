<template>
<section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Notifications</p>
            <div class="shadow-lg rounded-lg p-14">
                <div  v-for="(i , index) in 5" :key="i" :class="{ '!mt-0': index == 0 }" class="flex justify-start items-start shadow-md rounded-lg p-7 mt-12">
                    <div class="mr-4 flex-shrink-0">
                        <img class="inline-block  rounded-full" src="@/assets/images/Dleel.svg" alt="" />
                    </div>
                    <div>
                        <h4 class="text-lg font-medium text-d-black">Business Added</h4>
                        <p class="text-left text-base text-l-gray pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>