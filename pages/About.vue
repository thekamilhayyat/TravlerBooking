<template>
    <section class="pt-12 pb-24">
        <div class="container mx-auto">
            <p class="font-medium text-4xl text-d-black mb-12">About</p>
            <div class="shadow-lg p-12">
                <CommonCollapsAble title="1. Who We Are">
                    <p class="text-lg text-l-gray">By accessing the website and application at https://traer.app or using
                        our application “Traer,” you are agreeing to be bound by these terms of service, all applicable
                        laws, and regulations, and agree that you are responsible for compliance with any applicable local
                        laws. If you do not agree with any of these terms, you are prohibited from using or accessing this
                        site. The materials contained in this website and application are protected by applicable copyright
                        and trademark law.</p>
                </CommonCollapsAble>
                <CommonCollapsAble title="2. What We Do">
                    <p class="text-lg text-l-gray">1. Permission is granted to temporarily download one copy of the
                        materials (information or software) on Traer App website and application for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                        under this license, you may not:</p>
                    <div class="text-lg text-l-gray">
                        <ul v-if="contentList && contentList.length > 0" class="list-none m-0 p-0">
                            <li v-for="(item, index) in contentList" :key="index" class="flex items-center space-x-2 mt-5">
                                <svg class="h-6 w-6 text-[#FDB515]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{{ item.text }}</span>
                            </li>
                        </ul>
                    </div>
                    <br> 
                    <p class="text-lg text-l-gray">2. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Traer LTD. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                </CommonCollapsAble>
                <CommonCollapsAble title="3. How it Works">
                    <p class="text-lg text-l-gray">1. The materials on Traer App website and application and application are provided on an ‘as is’ basis. Traer LTD. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.<br> <br>   2. Further, Traer LTD. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website and application or otherwise relating to such materials or on any sites linked to this site.</p>
                </CommonCollapsAble>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const contentList = ref([
  'Modify or copy the materials;',
  'Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);',
  'Attempt to decompile or reverse engineer any software contained on Traer App website and application or application;',
  'Remove any copyright or other proprietary notations from the materials; or',
  'Transfer the materials to another person or “mirror” the materials on any other server.'
]).value.map(item => ({ text: item }));
</script>
