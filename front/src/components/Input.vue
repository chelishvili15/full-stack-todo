<template>
  <div :class="isMobile ? 'flex flex-col space-y-2' : 'flex space-x-5'">
    <input
      ref="input"
      type="text"
      class="bg-white border-2 border-blue-500 outline-none hover:ring-1 focus:ring-1 focus:ring-blue-800 w-full py-4 px-6 rounded-lg text-xl text-gray-700"
      v-model="value"
      @keydown.enter="clicked()"
    />
    <div
      class="bg-blue-700 text-white flex items-center justify-center px-12 rounded-lg cursor-pointer border-2 border-blue-500 tracking-wide hover:ring-1 ring-blue-800 whitespace-nowrap"
      :class="isMobile && 'py-4'"
      @click="clicked()"
    >
      Add to list
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useIsMobile } from "../composable/useIsMobile";

const { isMobile } = useIsMobile();
const emits = defineEmits(["enterClicked"]);
const value = ref("");

const link = 'https://my-todo-api.netlify.app/.netlify/functions/api'

const clicked = () => {
  fetch(`${link}/list/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      { 
        id: Date.now(),
        item: value.value
      }),
  })
    .then((res) => res.json())
    .then((data) => emits("enterClicked", data))
    .then((value.value = ""));
};
</script>

<style lang="scss" scoped></style>
