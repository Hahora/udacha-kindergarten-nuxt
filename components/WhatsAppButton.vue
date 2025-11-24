<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 scale-75 -translate-x-4"
    enter-to-class="opacity-100 scale-100 translate-x-0"
    leave-from-class="opacity-100 scale-100 translate-x-0"
    leave-to-class="opacity-0 scale-75 -translate-x-4"
  >
    <a
      v-if="isVisible"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 items-center justify-center group hidden lg:flex"
      aria-label="Написать в WhatsApp"
    >
      <!-- Декоративная бабочка -->
      <div class="absolute -top-2 -left-2 animate-float opacity-80">
        <svg class="w-6 h-4" viewBox="0 0 24 16">
          <ellipse cx="7" cy="6" rx="5" ry="4" fill="#22C55E" opacity="0.9" />
          <ellipse cx="17" cy="6" rx="5" ry="4" fill="#22C55E" opacity="0.9" />
          <ellipse
            cx="8"
            cy="11"
            rx="3"
            ry="2.5"
            fill="#16A34A"
            opacity="0.9"
          />
          <ellipse
            cx="16"
            cy="11"
            rx="3"
            ry="2.5"
            fill="#16A34A"
            opacity="0.9"
          />
          <circle cx="7" cy="5" r="1" fill="#FDE047" />
          <circle cx="17" cy="5" r="1" fill="#FDE047" />
          <ellipse cx="12" cy="8.5" rx="0.6" ry="4" fill="#374151" />
          <path
            d="M11.5 4.5 Q10 3, 9 2"
            stroke="#374151"
            stroke-width="0.4"
            fill="none"
          />
          <path
            d="M12.5 4.5 Q14 3, 15 2"
            stroke="#374151"
            stroke-width="0.4"
            fill="none"
          />
          <circle cx="9" cy="2" r="0.4" fill="#F59E0B" />
          <circle cx="15" cy="2" r="0.4" fill="#F59E0B" />
        </svg>
      </div>

      <!-- WhatsApp иконка -->
      <svg
        class="w-7 h-7 transform group-hover:scale-110 transition-transform duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
        />
      </svg>

      <!-- Пульсирующий эффект -->
      <div
        class="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"
      ></div>

      <!-- Всплывающая подсказка -->
      <div
        class="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
      >
        Написать в WhatsApp
        <div
          class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"
        ></div>
      </div>
    </a>
  </Transition>
</template>

<script setup>
// Пропсы
const props = defineProps({
  phoneNumber: {
    type: String,
    default: "79085019627", // Номер телефона без + и пробелов
  },
  message: {
    type: String,
    default: 'Здравствуйте! Хочу узнать подробнее о детском саде "Удача"',
  },
});

const isVisible = ref(false);

// Вычисляемые свойства
const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(props.message);
  return `https://wa.me/${props.phoneNumber}?text=${encodedMessage}`;
});

// Показываем кнопку сразу на десктопе
onMounted(() => {
  // Показываем кнопку сразу при загрузке (только на десктопе благодаря CSS классу)
  isVisible.value = true;
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
