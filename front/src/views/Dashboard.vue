<template>
    <div class="flex flex-col space-y-10">
        <Input @enterClicked="(value) => push(value)"/>
        <List :list="list"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Input from '../components/Input.vue';
import List from '../components/List.vue';

const list = ref([])

const push = (value) => {
    list.value = value
}

const link = 'http://localhost:3000/api'

onMounted(() => {
    fetch(`${link}/list`)
        .then(res => res.json())
        .then(data => list.value = data)
})
</script>