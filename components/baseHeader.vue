<template>
    <!-- topHeader -->
    <section class="bg-paris-daisy h-16 flex justify-start items-center">
        <div class="container mx-auto ">
            <div class="flex justify justify-between items-center">
                <div class="flex justify-start items-center">
                    <p class="text-base text-d-black">Stay Connected:</p>
                    <a class="pl-5" href=""><img src="@/assets/images/Facebook.png" /></a>
                    <a class="pl-5" href=""><img src="@/assets/images/Twitter.png" /></a>
                    <a class="pl-5" href=""><img src="@/assets/images/Google.png" /></a>
                    <a class="pl-5" href=""><img src="@/assets/images/Youtube.png" /> </a>
                </div>
                <div class="selectContainer">
                    <USelect class="!cursor-pointer bg-white text-sm text-l-gray font-thin rounded-md" v-model="country"
                        variant="none" :options="countries">
                        <template #leading>
                            <img src="@/assets/images/Pin.svg" class="w-4" />
                        </template>
                    </USelect>
                </div>
            </div>
        </div>
    </section>
    <!-- main-header-sticky -->
    <!-- <div class="bg-white sticky top-0 z-50"> -->
    <section class="flex justify-start items-center h-28 ">
        <div class="container mx-auto ">
            <div class="flex justify justify-between items-center">
                <div class="flex justify-start items-center">
                    <img class="" src="@/assets/images/Logo.png" />
                    <!-- search-bar -->
                    <div class="ml-44 py-4 px-8 rounded-3xl bg-[#F9F9FC] h-12 flex justify-start items-center w-[700px]">
                        <img class="" src="@/assets/images/Search.svg" />
                        <input class="focus:outline-none pl-4 bg-[#F9F9FC] h-8 w-full" placeholder="I'm searching for " />
                    </div>
                </div>

                <div class="flex justify-end items-center">
                    <NuxtLink to="/wishlist"><img class="" src="@/assets/images/IconBell.svg" /></NuxtLink>
                    <NuxtLink to="/notifictaion"><img class="mx-9" src="@/assets/images/IconHeart.svg" /></NuxtLink>
                    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                        :popper="{ placement: 'bottom-start', offsetDistance: 5, }">
                        <!-- v-if="user.img" -->
                        <img class="inline-block h-10 w-10 rounded-full" src="@/assets/images/User.png" alt="userImg" />
                        <!-- <span v-else class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                            <span class="font-medium leading-none text-white">{{ user.img }}</span>
                        </span> -->
                        <template v-if="user" #account="{ item }">
                            <div class="text-left">
                                <p>
                                    Signed in as
                                </p>
                                <p class="truncate font-medium text-gray-900 dark:text-white">
                                    {{ user.email }}
                                </p>
                            </div>
                        </template>
                        <template #item="{ item }">
                            <NuxtLink v-if="item.path" :to="item.path">
                                <span class="font-medium text-d-black truncate">{{ item.label }}</span>
                            </NuxtLink>
                            <span v-else class="font-medium text-d-black truncate">{{ item.label }}</span>
                        </template>
                    </UDropdown>
                </div>
            </div>
        </div>
    </section>
    <section class="flex justify-between items-center h-20 border-y border-gray-200">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class=" flex justify-start items-center">
                    <UPopover mode="hover">
                        <p class="text-base text-d-black !font-medium">Categories
                            <UIcon name="i-heroicons-chevron-down-20-solid" />
                        </p>
                        <template #panel>
                            <div class="h-80 w-[630px] ">
                                <div class="flex">
                                    <div class="h-full p-4 bg-paris-daisy w-1/3 flex justify-start items-center flex-col">
                                        <NuxtLink @mouseover="hoverFun(category)" v-for="category in categories"
                                            :key="category.name" :to="category.to"
                                            class="text-base text-d-black font-medium hover:font-bold w-full"
                                            :class="{ 'pt-5': category.name !== 'All Categories', '!font-bold': category.name == newLabel }">
                                            {{ category.name }}
                                        </NuxtLink>
                                    </div>
                                    <div class="p-8 pt-4 w-2/3">
                                        <p class="transition-all text-base text-d-black font-medium pb-4">{{ newLabel }}</p>
                                        <div>
                                            <img class="w-full h-full" src="@/assets/images/DDBaner.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UPopover>
                    <div class="flex items-center justify-start">
                        <NuxtLink to="/myReviews" class="text-base text-d-black font-medium pl-12">My Reviews</NuxtLink>
                        <NuxtLink to="/about" class="text-base text-d-black font-medium pl-12">About Us</NuxtLink>
                        <NuxtLink to="/contact" class="text-base text-d-black font-medium pl-12">Contact Us</NuxtLink>
                    </div>
                </div>
                <NuxtLink to="/addDaleel" class="flex items-center text-base text-d-black font-medium pl-12"><img
                        src="@/assets/images/Brifcase.svg" /> <span class="pl-2">Add Dleel</span></NuxtLink>
            </div>
        </div>
    </section>
   <!-- Edit Profile -->
   <modalsEditProfile />
    <!-- Change Password -->
    <modalsChangePassword />
</template>

<script setup>
import { computed } from "vue"
import { useStore } from '../stores/index'
const store = useStore()
const user = computed( () => store.user )
const items = [
    [{
        label: 'Edit Profile',
        click: () => {
            showProfileModel()
        }
    }], [{
        label: 'Change Password',
        click: () => {
            showPasswordModel()
        }
    }, {
        label: 'Terms and Conditions',
        path: '/termsConditions'
    }, {
        label: 'Privacy Policy',
        path: '/PrivacyPolicy'
    }], [{
        label: 'Logout',
        click: () => {
            store.logout()
        }
    }]
]
const countries = ['Dubai', 'Sharjah', 'Mexico']
const country = ref( countries[0] )
const categories = [
    { name: 'All Categories', to: '/' },
    { name: "Cafe’s", to: '/cafes' },
    { name: "Gym’s", to: '/gyms' },
    { name: "Fashion", to: '/fashion' },
    { name: "Retail", to: '/retail' },
    { name: "Leisure", to: '/leisure' },
    { name: "Entertainment", to: '/entertainment' },
]
const newLabel = ref( 'All categories' )
const showPasswordModel = ( c ) => {
    store.showChangePasswordModal = true
}
const showProfileModel = ( c ) => {
    store.showEditUserModal = true
}

const hoverFun = ( c ) => {
    newLabel.value = c.name
}



</script>

<style lang="scss">
.selectContainer {
    .form-select {
        padding-inline-end: 30px !important;
        padding-inline-start: 34px !important;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>../stores