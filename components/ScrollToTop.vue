<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Наверх"
    >
      <!-- Стрелка -->
      <svg
        class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
const isVisible = ref(false);

// Отслеживание прокрутки
const handleScroll = () => {
  // Показываем кнопку после прокрутки одного блока (~100vh)
  isVisible.value = window.scrollY > window.innerHeight;
};

// Плавная прокрутка наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Подключение обработчика прокрутки
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Проверяем начальное состояние
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(2deg);
  }
  50% {
    transform: translateY(-2px) rotate(-1deg);
  }
  75% {
    transform: translateY(-4px) rotate(1deg);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
