<template>
  <ul class="flex flex-col space-y-3">
    <li
      v-for="(value, index) in list"
      :key="index"
      class="text-xl bg-blue-700 px-4 h-16 rounded-xl flex justify-between items-center cursor-pointer"
      @click="clickRow(index, $event)"
    >
      <Checkbox
        :id="value.id"
        :label="value.item"
        :checked="checks[index]" 
      />

      <div
        class="bg-red-700 text-gray-100 py-2 px-4 rounded-lg cursor-pointer hover:ring-2 hover:ring-red-700 transition duration-100 ease-in"
        @click="del(value.id, index, $event)"
      >
        Delete
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "./Checkbox.vue";

const emits = defineEmits(["delete"]);

const checks = ref(Array(props.length).fill(false));

const clickRow = (index) => {
  checks.value[index] = !checks.value[index];
};

const del = (id, index, e) => {
  e.stopPropagation()
  e.preventDefault()
  fetch(`http://localhost:3000/api/delete/${id}`, {
    method: 'delete'
  })
    .then(res => res.json())
    .then((data) => emits("delete", data))
    .then(checks.value.splice(index, 1))
}

const props = defineProps({
  list: {
    type: Object,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
