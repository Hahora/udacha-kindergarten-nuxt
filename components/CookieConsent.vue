<template>
  <transition
    enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="opacity-0 translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-full"
  >
    <div
      v-if="showNotice"
      class="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-md"
      :class="isMobile ? 'pb-4' : 'pb-6'"
    >
      <div
        class="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mx-4"
        :class="
          isMobile
            ? 'flex flex-col items-center text-center gap-3'
            : 'flex items-center justify-between gap-4'
        "
      >
        <!-- Текст -->
        <div :class="isMobile ? 'w-full' : 'flex-1'">
          <p class="text-sm text-gray-700 font-medium leading-relaxed">
            Мы используем файлы cookie. Они помогают улучшить ваше
            взаимодействие с сайтом
          </p>
        </div>

        <!-- Кнопка закрытия -->
        <div class="flex-shrink-0">
          <button
            @click="closeNotice"
            class="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-lg font-bold text-sm hover:from-amber-500 hover:to-amber-600 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
          >
            Ок
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const showNotice = ref(false);
const isMobile = ref(false);
const isInitialized = ref(false);

const { giveConsent, isConsentGiven } = useAnalytics();

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const checkAndShowNotice = () => {
  // Дополнительная задержка для корректной гидратации
  setTimeout(() => {
    if (!isConsentGiven.value && !isInitialized.value) {
      showNotice.value = true;
      isInitialized.value = true;
    }
  }, 1500); // Увеличена задержка для надежности
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);

  // Проверяем согласие после полной загрузки
  nextTick(() => {
    checkAndShowNotice();
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const closeNotice = () => {
  showNotice.value = false;
  isInitialized.value = true;

  giveConsent({
    necessary: true,
    analytics: true,
    marketing: false,
  });
};
</script>
