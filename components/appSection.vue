 <template>
<section class="flex justify-between items-center bg-no-repeat bg-cover  bg-[url('@/assets/images/AppSection.Png')] h-[800px]">
    <div class="flex container mx-auto items-center ">
        <div class="w-1/2 text-white">
            <p class="text-6xl font-medium leading-snug text-white">Join and Find Local <br> Businesses <br> Download the app</p>
            <div class="flex items-center justify-star mt-12">
                <img src="@/assets/images/GooglePlayNew.png" />
                <img src="@/assets/images/GooglePlayNewDark.svg" class="ml-8" />
            </div>
        </div>
        <div class="w-1/2 flex justify-center">
            <img src="@/assets/images/Mobile.png" />
        </div>
    </div>
</section>
    <!-- <CommonField v-model="test"  /> -->
</template>

<script setup>
import { ref, watch, computed, nextTick } from 'vue';
const test = ref('')
</script>

<style lang="scss" scoped>

</style> 

  