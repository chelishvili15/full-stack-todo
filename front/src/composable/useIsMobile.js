import { ref, onMounted, onUnmounted } from "vue";

export function useIsMobile() {
    const isMobile = ref(window.innerWidth <= 769);
    function handleResize() {
        isMobile.value = window.innerWidth <= 769;
    }
    onMounted(() => window.addEventListener("resize", handleResize));
    onUnmounted(() => window.removeEventListener("resize", handleResize));

    return { isMobile };
}