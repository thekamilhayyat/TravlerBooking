<template>
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">Privacy Policy</p>
            <div class="shadow-lg p-12">
                <CommonCollapsAble title="1. Information we collect">
                    <p class="text-lg text-l-gray">When you visit our website and application, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
                </CommonCollapsAble>
                <CommonCollapsAble title="Device data">
                    <p class="text-lg text-l-gray">We may also collect data about the device you’re using to access our website and application. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data. What we collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.</p>
                </CommonCollapsAble>
                <CommonCollapsAble title="Personal information">
                    <div class="text-lg text-l-gray">
                        <ul v-if="contentList && contentList.length > 0" class="list-none m-0 p-0">
                            <li v-for="i in contentList" :key="i" class="flex items-center space-x-2 mt-5">
                                <svg class="h-6 w-6 text-[#FDB515]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{{ i.text }}</span>
                            </li>
                        </ul>
                    </div>
                    <br> 
                </CommonCollapsAble>
                <CommonCollapsAble :showCollapsable="false" title="Business data">
                    <p class="text-lg text-l-gray">The materials on Traer App website and application and application are provided on an ‘as is’ basis. Traer LTD. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </CommonCollapsAble>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const contentList = ref([
  'Name',
  'Email',
  'Social media profile',
  'Date of birth',
  'Phone/Mobile number',
  'Home/Mailing address',
  'Website and application',
  'Payment Information',
  'Driver `s license',
  'Passport number',
]).value.map(item => ({ text: item }));
</script>
