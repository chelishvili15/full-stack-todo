<template>
    <svg
        viewBox="0 0 8 6"
        fill="none"
        :class="[props.color, props.size]"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.33366 0.5L2.75033 5.08333L0.666992 3"
            stroke="currentColor"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script setup>
const props = defineProps({
    size: {
        type: String,
        default: "h-4 w-4",
    },
    color: {
        type: String,
        default: "text-blue-600",
    },
});
</script>