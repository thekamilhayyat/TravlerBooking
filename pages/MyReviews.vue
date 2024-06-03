<template>
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">My Reviews</p>
            <div v-for="(review, index) in reviews" :key="review.id" class="flex justify-start items-start mb-8">
      <div class="mr-4 flex-shrink-0">
        <img class="inline-block h-16 w-16 rounded-full" :src="review.imageUrl" :alt="review.name" />
      </div>
      <div class="flex justify-between items-start w-full pb-8 border-b border-gray-300">
        <div class="flex justify-start items-center w-full">
          <div>
            <h4 class="text-2xl font-medium text-d-black">{{ review.name }}</h4>
            <p class="text-left text-base text-l-gray">{{ review.position }}</p>
            <div class="flex justify-start items-center pt-2">
              <div class="flex justify-start items-end">
                <img v-for="star in 5" :key="`${review.id}-${star}`" class="pl-1 w-4" src="@/assets/images/Star-lg.png" alt="star">
              </div>
              <p class="text-sm text-d-black font-medium pl-1">{{ review.time }}</p>
            </div>
            <p class="text-base text-l-gray pt-5">{{ review.reviewText }}</p>
          </div>
        </div>
        <!-- Example button (replaced UButton with a simple button for this example) -->
        <button class="text-sm text-gray-600 hover:text-gray-800">
          Edit
          <!-- <img class="inline-block ml-2" src="@/assets/images/Pen.svg" alt="Edit"> -->
        </button>
      </div>
    </div>
        </div>
    </section>
    <appSection />
    <reviewCrousal />
</template>

<script setup>
const reviews = [
  {
    id: 1,
    name: 'Jane Doe',
    position: 'Marketing Coordinator',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    time: '2 months ago',
    reviewText: 'This is a sample review text number 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'Sales Manager',
    imageUrl: 'https://randomuser.me/api/portraits/men/68.jpg',
    time: '3 months ago',
    reviewText: 'This is a sample review text number 2. Lorem Ipsum has been the industry\'s standard dummy text.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'Product Developer',
    imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '1 month ago',
    reviewText: 'This is a sample review text number 3. Ever since the 1500s, when an unknown printer.'
  },
  {
    id: 4,
    name: 'Michael Brown',
    position: 'Graphic Designer',
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    time: '5 months ago',
    reviewText: 'This is a sample review text number 4. It has survived not only five centuries, but also the leap into electronic typesetting.'
  },
  {
    id: 5,
    name: 'Linda Davis',
    position: 'HR Specialist',
    imageUrl: 'https://randomuser.me/api/portraits/women/64.jpg',
    time: '2 weeks ago',
    reviewText: 'This is a sample review text number 5. It was popularised in the 1960s with the release of Letraset sheets.'
  },
  // ... Add more review objects as needed to make 10
];

</script>

<style lang="scss" scoped></style>