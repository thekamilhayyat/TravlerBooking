<template>
    <div
        class=" bg-no-repeat bg-cover  bg-[url('@/assets/images/BgSection.png')] h-[800px] flex justify-start items-center">
        
        <div class="container mx-auto">
        <div class="w-2/4">
            <p class="text-6xl font-medium leading-snug text-white ">It Just got Hotter <br> On the Palm</p>
            <p class="pt-4 text-xl  text-white ">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.standard dummy text.</p>
            <div class="flex justify-start items-start pt-8">
                <div class="w-full py-4 px-8 rounded-3xl bg-white h-12 flex justify-start items-center">
                    <img class="" src="@/assets/images/Search.svg" />
                    <input class="focus:outline-none pl-4 bg-white h-8 w-full" placeholder="Search here.." />
                </div>
                <UButton
                    class="ml-6 h-12 bg-paris-daisy text-l-black w-[190px] flex justify-center items-center text-lg font-medium"
                    :ui="{ rounded: 'rounded-full' }">Search</UButton>
            </div>
        </div>
    </div>
    </div>
    <section class="py-14">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Categories</p>
            <div class="flex justify-between items-center">
                <div v-for="i in items" :key="i" class="flex justify-center items-center flex-col w-1/12">
                    <img class="h-24 w-24 rounded-full" :src="i.img" alt="" />
                    <p class="pt-5 font-medium text-lg text-d-black">{{ i.title }}</p>
                </div>
            </div>
        </div>
    </section>
    <!-- nearby -->
    <section class="py-14 pb-10">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Nearby</p>
            <div v-if="cardDummy.length > 0" class="flex overflow-x-auto space-x-4 p-4  ">     
                <template v-for="(item , index) in cardDummy" :key="index">
                    <CardComponent
                    class="min-w-[260px] mb-3"
                        :title="item.title"
                        rating="5.0"
                        reviewCount="300+"
                        location="Palm Jumeirah, Dubai"
                        :cardImage="item.img"
                    />
                </template>           
            </div>
        </div>
    </section>
    <!-- newest -->
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Newest</p>
            <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7">                
                <CardComponent
                v-if="cardDummy.length > 0"
                    v-for="(item , index) in cardDummy" :key="index"
                    :title="item.title"
                    rating="5.0"
                    reviewCount="300+"
                    location="Palm Jumeirah, Dubai"
                    :cardImage="item.img"
                />
            </div>
        </div>
    </section>
    <appSection />
    <reviewCrousal />
</template>

<script setup>
import CafeImg from  '@/assets/images/Cafe.png'
import GymImg from  '@/assets/images/Gyms.png'
import FashionImg from  '@/assets/images/Fashion.png'
import RetailImg from  '@/assets/images/Retail.png'
import LeisureImg from  '@/assets/images/Leisure.png'
import Card1 from  '@/assets/images/Card-1.png'
import Card2 from  '@/assets/images/Card-2.png'
import Card3 from  '@/assets/images/Card-3.png'
import Card4 from  '@/assets/images/Card-4.png'
import Card5 from  '@/assets/images/Card-5.png'
import Card6 from  '@/assets/images/Card-6.png'
const items = ref([
  { title: 'Cafe', img: CafeImg },
  { title: 'Gyms`s', img: GymImg },
  { title: 'Fashion', img: FashionImg },
  { title: 'Retail', img: RetailImg },
  { title: 'Leisure', img: LeisureImg },
  { title: 'Cafe', img: CafeImg },
  { title: 'Fashion', img: FashionImg },
  { title: 'Gyms`s', img: GymImg },
  { title: 'Leisure', img: LeisureImg },
  { title: 'Retail', img: RetailImg },
])
const cardDummy = ref([
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
])
</script>

<style lang="scss" scoped></style>
