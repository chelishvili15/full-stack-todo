<template>
  <div class="flex flex-col space-y-10">
    <Input @enterClicked="(value) => push(value)" />
    <List :list="list" @delete="(value) => push(value)"/>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import Input from "../components/Input.vue";
import List from "../components/List.vue";

const list = ref([]);

const push = (value) => {
  list.value = value;
};

onMounted(() => {
  fetch(`${inject("BASE_URL")}/list`)
    .then((res) => res.json())
    .then((data) => (list.value = data));
});
</script>
