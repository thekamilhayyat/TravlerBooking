<template>
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Wishlist</p>
            <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7">
                <CardComponent v-if="cardDummy.length > 0" v-for="(item, index) in cardDummy" :key="index"
                    :title="item.title" rating="5.0" reviewCount="300+" location="Palm Jumeirah, Dubai"
                    :cardImage="item.img" />
            </div>
        </div>
    </section>
    <appSection />
    <reviewCrousal />
</template>

<script setup>
import Card1 from  '@/assets/images/Card-1.png'
import Card2 from  '@/assets/images/Card-2.png'
import Card3 from  '@/assets/images/Card-3.png'
import Card4 from  '@/assets/images/Card-4.png'
import Card5 from  '@/assets/images/Card-5.png'
import Card6 from  '@/assets/images/Card-6.png'
const cardDummy = ref( [
    { title: 'Wet Deck Dubai Resort', img: Card1 },
    { title: 'Target Gym Dubai Gym and Spa', img: Card2 },
    { title: 'Lounge Cafè Italiano', img: Card3 },
    { title: 'Risen Cafe and Artisanal Bakery', img: Card4 },
    { title: 'Orange Feels Bar and Shisha', img: Card5 },
    { title: 'Wet Deck Dubai Resort', img: Card6 },
    { title: 'Wet Deck Dubai Resort', img: Card1 },
    { title: 'Target Gym Dubai Gym and Spa', img: Card2 },
    { title: 'Orange Feels Bar and Shisha', img: Card5 },
    { title: 'Wet Deck Dubai Resort', img: Card6 },
    { title: 'Risen Cafe and Artisanal Bakery', img: Card4 },
    { title: 'Lounge Cafè Italiano', img: Card3 },
    { title: 'Target Gym Dubai Gym and Spa', img: Card2 },
    { title: 'Wet Deck Dubai Resort', img: Card1 },
    { title: 'Wet Deck Dubai Resort', img: Card1 },
    { title: 'Target Gym Dubai Gym and Spa', img: Card2 },
    { title: 'Orange Feels Bar and Shisha', img: Card5 },
    { title: 'Wet Deck Dubai Resort', img: Card6 },
    { title: 'Risen Cafe and Artisanal Bakery', img: Card4 },
    { title: 'Lounge Cafè Italiano', img: Card3 },
    { title: 'Target Gym Dubai Gym and Spa', img: Card2 },
    { title: 'Wet Deck Dubai Resort', img: Card1 },
] )

</script>

<style lang="scss" scoped></style>