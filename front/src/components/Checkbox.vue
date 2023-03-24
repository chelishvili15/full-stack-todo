<template>
  <div v-bind="$attrs">
    <input
      type="checkbox"
      :id="$attrs.id"
      class="hidden"
      :checked="$attrs.checked"
    />
    <label
      :for="$attrs.id"
      class="cursor-pointer text-2xl text-gray-700 flex items-center"
    >
      <div
        class="w-8 h-8 bg-white border rounded-lg border-blue-500 mr-3 flex items-center justify-center"
        :class="$attrs.checked && 'bg-opacity-80'"
      >
        <Check v-if="$attrs.checked" />
      </div>

      <span
        class="text-gray-100"
        :class="$attrs.checked && 'line-through text-opacity-60'"
        >{{ label }}</span
      >
    </label>
  </div>
</template>

<script setup>
import Check from "../assets/Check.vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>
