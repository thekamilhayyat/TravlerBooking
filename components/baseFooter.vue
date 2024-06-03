<template>
    <!-- footer-top -->
    <section
        class="flex justify-center items-center bg-no-repeat bg-cover  bg-[url('@/assets/images/TopFooter.svg')] h-[600px]">
        <div class="container mx-auto">
            <p class="text-d-black text-6xl font-medium text-center leading-snug">Experience The Beauty <br> of Businesses
                in your area</p>
            <p class="text-l-gray text-lg font-light  text-center leading-snug pt-8">Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod <br> tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <div class="pt-12 flex justify-center">
                     <UButton size="xl" class="rounded-lg border-d-black text-d-black text-2xl h-20 px-20" variant="outline" label="Get Started" />
                </div>
        </div>
    </section>
    <!-- footer Navigation -->
    <section class="py-20">
        <div class="flex justify-between  container mx-auto">
            <div class="w-4/12 pr-10">
                <img src="@/assets/images/Logo.png" />
                <p class="text-l-gray text-lg pt-4 pb-5 font-light w-3/4">Lorem ipsum dolor sit amet, con sectetur
                    adipiscing elit, sed do eiusmod tempor.</p>
                <div class="flex justify-start items-center">
                    <img src="@/assets/images/Fb.svg" />
                    <img src="@/assets/images/X.svg" class="mx-5" />
                    <img src="@/assets/images/In.svg" />
                </div>
            </div>
            <div class="w-1/6 pr-10">
                <h4 class="font-medium text-lg mb-2">Links</h4>
                <div class="w-3/4 h-0.5 bg-paris-daisy-300 mb-4"></div>
                <ul>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Home</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Contact Us</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">About Us</nuxtLink>
                    </li>
                </ul>
            </div>
            <div class="w-1/6 pr-10">
                <h4 class="font-medium text-lg mb-2">Support</h4>
                <div class="w-3/4 h-0.5 bg-paris-daisy-300 mb-4"></div>
                <ul>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Terms & Conditions</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Privacy Policy</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Faq's</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">Add Dleel</nuxtLink>
                    </li>
                </ul>
            </div>
            <div class="w-4/12 ">
                <h4 class="font-medium text-lg mb-2">Contact Us</h4>
                <div class="w-1/2 h-0.5 bg-paris-daisy-300 mb-4"></div>
                <ul>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">+971 (908) 123 567</nuxtLink>
                    </li>
                    <li class="pb-3 text-d-black text-base">
                        <nuxtLink to="/">info@dleel.com</nuxtLink>
                    </li>
                </ul>
                <p class="pt-4 font-medium text-lg text-d-black">Download App</p>
                <div class="flex items-center justify-start">
                    <img src="@/assets/images/GooglePlayFooter.png" />
                    <img src="@/assets/images/GooglePlayDarkFooter.svg" class="ml-3" />
                </div>
        </div>
    </div>
</section>
<!-- copy-right -->
<section class="bg-paris-daisy h-14 flex justify-start items-center">
    <div class="container mx-auto ">
        <p class="text-base text-d-black">Copyright © 2024 dleel. All Rights Reserved.</p>
    </div>
</section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>