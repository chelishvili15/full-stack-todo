<template>
    <ul class="flex flex-col space-y-3">
        <li 
            v-for="(value, index) in list" 
            :key="index"
            class="text-xl bg-blue-700 px-4 py-3 rounded-xl"
        >
            <Checkbox
                :id="index"
                :label="value"
                :checked="checks[index]"
                @click="clicked(index)" 
            />
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const checks = ref(Array(props.length).fill(false))

const clicked = (index) => {
    checks.value[index] = !checks.value[index]
 }

const props = defineProps({
    list: {
        type: Object,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>

</style>