<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Заголовок -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Возрастные группы
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
        <p
          class="text-xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed"
        >
          Мы создали специальные программы для каждого возраста, чтобы развитие
          вашего ребёнка было гармоничным и радостным
        </p>
      </div>

      <!-- Карточки возрастных групп -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <!-- Младшая группа -->
        <div
          class="group animate-fade-in-up relative"
          style="animation-delay: 0.1s"
        >
          <!-- Декоративная бабочка для младшей группы -->
          <div class="absolute -top-4 -right-4 animate-float z-10">
            <svg class="w-12 h-9" viewBox="0 0 45 35">
              <ellipse
                cx="14"
                cy="12"
                rx="9"
                ry="7"
                fill="#F472B6"
                opacity="0.8"
              />
              <ellipse
                cx="31"
                cy="12"
                rx="9"
                ry="7"
                fill="#F472B6"
                opacity="0.8"
              />
              <ellipse
                cx="16"
                cy="22"
                rx="6"
                ry="5"
                fill="#EC4899"
                opacity="0.8"
              />
              <ellipse
                cx="29"
                cy="22"
                rx="6"
                ry="5"
                fill="#EC4899"
                opacity="0.8"
              />
              <circle cx="14" cy="10" r="2" fill="#FDE047" />
              <circle cx="31" cy="10" r="2" fill="#FDE047" />
              <ellipse cx="22.5" cy="17" rx="1.2" ry="9" fill="#374151" />
              <path
                d="M21.5 9 Q19 6, 17 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <path
                d="M23.5 9 Q26 6, 28 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <circle cx="17" cy="4" r="0.8" fill="#F59E0B" />
              <circle cx="28" cy="4" r="0.8" fill="#F59E0B" />
            </svg>
          </div>

          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col"
          >
            <div class="text-center mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <!-- Заменено на kid1.svg -->
                <NuxtImg
                  src="/images/kid1.svg"
                  alt="Малыш"
                  class="w-20 h-20 text-white"
                  width="40"
                  height="40"
                />
              </div>
              <h3 class="text-2xl font-black text-gray-900 mb-3">
                Младшая группа
              </h3>
              <p class="text-pink-600 font-black text-lg">1,3 - 3 года</p>
            </div>

            <div class="space-y-5 flex-grow">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Развитие моторики и сенсорики через игру
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Первые шаги в общении со сверстниками
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Творческие занятия и музыкальное развитие
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Средняя группа -->
        <div
          class="group animate-fade-in-up relative"
          style="animation-delay: 0.2s"
        >
          <!-- Декоративная бабочка для средней группы -->
          <div class="absolute -top-4 -right-4 animate-float-delayed z-10">
            <svg class="w-12 h-9" viewBox="0 0 45 35">
              <ellipse
                cx="14"
                cy="12"
                rx="9"
                ry="7"
                fill="#22C55E"
                opacity="0.8"
              />
              <ellipse
                cx="31"
                cy="12"
                rx="9"
                ry="7"
                fill="#22C55E"
                opacity="0.8"
              />
              <ellipse
                cx="16"
                cy="22"
                rx="6"
                ry="5"
                fill="#16A34A"
                opacity="0.8"
              />
              <ellipse
                cx="29"
                cy="22"
                rx="6"
                ry="5"
                fill="#16A34A"
                opacity="0.8"
              />
              <circle cx="14" cy="10" r="2" fill="#FDE047" />
              <circle cx="31" cy="10" r="2" fill="#FDE047" />
              <ellipse cx="22.5" cy="17" rx="1.2" ry="9" fill="#374151" />
              <path
                d="M21.5 9 Q19 6, 17 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <path
                d="M23.5 9 Q26 6, 28 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <circle cx="17" cy="4" r="0.8" fill="#F59E0B" />
              <circle cx="28" cy="4" r="0.8" fill="#F59E0B" />
            </svg>
          </div>

          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col"
          >
            <div class="text-center mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <!-- Заменено на kid2.svg -->
                <NuxtImg
                  src="/images/kid2.svg"
                  alt="Ребенок средней группы"
                  class="w-20 h-20 text-white"
                  width="250"
                  height="250"
                />
              </div>
              <h3 class="text-2xl font-black text-gray-900 mb-3">
                Средняя группа
              </h3>
              <p class="text-green-600 font-black text-lg">3 - 5 лет</p>
            </div>

            <div class="space-y-5 flex-grow">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Развитие речи и логического мышления
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Основы математики и окружающего мира
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Социальные навыки и командные игры
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Старшая группа -->
        <div
          class="group animate-fade-in-up relative"
          style="animation-delay: 0.3s"
        >
          <!-- Декоративная бабочка для старшей группы -->
          <div class="absolute -top-4 -right-4 animate-float-reverse z-10">
            <svg class="w-12 h-9" viewBox="0 0 45 35">
              <ellipse
                cx="14"
                cy="12"
                rx="9"
                ry="7"
                fill="#06B6D4"
                opacity="0.8"
              />
              <ellipse
                cx="31"
                cy="12"
                rx="9"
                ry="7"
                fill="#06B6D4"
                opacity="0.8"
              />
              <ellipse
                cx="16"
                cy="22"
                rx="6"
                ry="5"
                fill="#0891B2"
                opacity="0.8"
              />
              <ellipse
                cx="29"
                cy="22"
                rx="6"
                ry="5"
                fill="#0891B2"
                opacity="0.8"
              />
              <circle cx="14" cy="10" r="2" fill="#FDE047" />
              <circle cx="31" cy="10" r="2" fill="#FDE047" />
              <ellipse cx="22.5" cy="17" rx="1.2" ry="9" fill="#374151" />
              <path
                d="M21.5 9 Q19 6, 17 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <path
                d="M23.5 9 Q26 6, 28 4"
                stroke="#374151"
                stroke-width="0.8"
                fill="none"
              />
              <circle cx="17" cy="4" r="0.8" fill="#F59E0B" />
              <circle cx="28" cy="4" r="0.8" fill="#F59E0B" />
            </svg>
          </div>

          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col"
          >
            <div class="text-center mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <!-- Заменено на kid3.svg -->
                <NuxtImg
                  src="/images/kid3.svg"
                  alt="Ребенок старшей группы"
                  class="w-20 h-20 text-white"
                  width="250"
                  height="250"
                />
              </div>
              <h3 class="text-2xl font-black text-gray-900 mb-3">
                Старшая группа
              </h3>
              <p class="text-cyan-600 font-black text-lg">5 - 7 лет</p>
            </div>

            <div class="space-y-5 flex-grow">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Полная подготовка к школе
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Чтение, письмо, основы английского
                </p>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-4 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold leading-relaxed">
                  Развитие критического мышления
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div
        class="text-center mt-16 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <button
          @click="handleBooking"
          class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Выбрать группу для ребенка
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Получаем предоставленную функцию открытия модального окна
const openCallbackModal = inject("openCallbackModal");

// Обработчик кнопки
const handleBooking = () => {
  if (openCallbackModal) {
    openCallbackModal();
  } else {
    console.warn("openCallbackModal не предоставлен");
  }
};
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite 1.5s;
}

.animate-float-reverse {
  animation: floatReverse 4s ease-in-out infinite 0.5s;
}

.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: floatSlow 25s ease-in-out infinite 5s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-6px) rotate(2deg);
  }
  50% {
    transform: translateY(-4px) rotate(-1deg);
  }
  75% {
    transform: translateY(-8px) rotate(1deg);
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(-1deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
  75% {
    transform: translateY(-3px) rotate(-0.5deg);
  }
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(8px) translateY(-4px);
  }
  50% {
    transform: translateX(-4px) translateY(-8px);
  }
  75% {
    transform: translateX(-8px) translateY(-2px);
  }
}
</style>
