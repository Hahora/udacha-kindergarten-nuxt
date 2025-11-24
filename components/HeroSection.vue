<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
  >
    <!-- Декоративные облака на фоне -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Облака -->
      <div class="absolute top-10 left-10 animate-float-slow">
        <svg
          class="w-32 h-20 text-white/80"
          viewBox="0 0 120 60"
          fill="currentColor"
        >
          <ellipse cx="25" cy="35" rx="20" ry="15" />
          <ellipse cx="45" cy="30" rx="25" ry="18" />
          <ellipse cx="70" cy="35" rx="22" ry="16" />
          <ellipse cx="90" cy="40" rx="18" ry="12" />
        </svg>
      </div>

      <div class="absolute top-20 right-20 animate-float-slower">
        <svg
          class="w-40 h-24 text-white/70"
          viewBox="0 0 140 70"
          fill="currentColor"
        >
          <ellipse cx="30" cy="40" rx="25" ry="18" />
          <ellipse cx="60" cy="35" rx="30" ry="22" />
          <ellipse cx="90" cy="40" rx="28" ry="20" />
          <ellipse cx="115" cy="45" rx="20" ry="15" />
        </svg>
      </div>

      <div class="absolute bottom-32 left-1/4 animate-float-slow">
        <svg
          class="w-28 h-18 text-white/60"
          viewBox="0 0 100 50"
          fill="currentColor"
        >
          <ellipse cx="20" cy="30" rx="18" ry="12" />
          <ellipse cx="40" cy="25" rx="22" ry="15" />
          <ellipse cx="65" cy="30" rx="20" ry="14" />
          <ellipse cx="80" cy="35" rx="15" ry="10" />
        </svg>
      </div>

      <div class="absolute top-1/3 right-10 animate-float-slower">
        <svg
          class="w-36 h-22 text-white/50"
          viewBox="0 0 130 65"
          fill="currentColor"
        >
          <ellipse cx="25" cy="35" rx="22" ry="16" />
          <ellipse cx="50" cy="30" rx="28" ry="20" />
          <ellipse cx="80" cy="35" rx="25" ry="18" />
          <ellipse cx="105" cy="40" rx="18" ry="13" />
        </svg>
      </div>

      <!-- Большие круги -->
      <div
        class="absolute -left-32 -top-32 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -right-32 -bottom-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
      ></div>

      <!-- Маленькие декоративные элементы -->
      <div
        class="absolute left-1/4 top-1/4 w-8 h-8 bg-purple-200/30 rounded-full blur-sm"
      ></div>
      <div
        class="absolute right-1/3 top-1/3 w-6 h-6 bg-pink-200/30 rounded-full blur-sm"
      ></div>
      <div
        class="absolute left-1/3 bottom-1/4 w-10 h-10 bg-blue-200/30 rounded-full blur-sm"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Адреса вверху -->
      <div class="text-center mb-8 animate-fade-in-down">
        <div
          class="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-700"
        >
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>ул. Темерницкая, 65</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>ул. Стабильная, 21</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>ул. 2-я Краснодарская, 135 "А"</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Большие бабочки слева -->
        <div
          class="hidden lg:block lg:col-span-2 animate-fade-in-left relative"
        >
          <!-- Первая большая бабочка -->
          <div class="absolute top-0 left-0 animate-float">
            <svg class="w-32 h-24" viewBox="0 0 120 90">
              <!-- Верхние крылья -->
              <ellipse
                cx="35"
                cy="30"
                rx="25"
                ry="20"
                fill="#8B5CF6"
                opacity="0.9"
              />
              <ellipse
                cx="85"
                cy="30"
                rx="25"
                ry="20"
                fill="#8B5CF6"
                opacity="0.9"
              />

              <!-- Нижние крылья -->
              <ellipse
                cx="40"
                cy="55"
                rx="18"
                ry="15"
                fill="#EC4899"
                opacity="0.9"
              />
              <ellipse
                cx="80"
                cy="55"
                rx="18"
                ry="15"
                fill="#EC4899"
                opacity="0.9"
              />

              <!-- Узоры на крыльях -->
              <circle cx="35" cy="25" r="5" fill="#FDE047" />
              <circle cx="85" cy="25" r="5" fill="#FDE047" />
              <circle cx="40" cy="50" r="3" fill="#3B82F6" />
              <circle cx="80" cy="50" r="3" fill="#3B82F6" />
              <ellipse cx="30" cy="35" rx="3" ry="6" fill="#F97316" />
              <ellipse cx="90" cy="35" rx="3" ry="6" fill="#F97316" />

              <!-- Тело бабочки -->
              <ellipse cx="60" cy="42" rx="3" ry="25" fill="#374151" />

              <!-- Усики -->
              <path
                d="M57 20 Q52 12, 48 8"
                stroke="#374151"
                stroke-width="2"
                fill="none"
              />
              <path
                d="M63 20 Q68 12, 72 8"
                stroke="#374151"
                stroke-width="2"
                fill="none"
              />
              <circle cx="48" cy="8" r="2" fill="#F59E0B" />
              <circle cx="72" cy="8" r="2" fill="#F59E0B" />
            </svg>
          </div>

          <!-- Вторая большая бабочка -->
          <div class="absolute top-20 left-16 animate-float-delayed">
            <svg class="w-28 h-20" viewBox="0 0 100 75">
              <!-- Верхние крылья -->
              <ellipse
                cx="28"
                cy="25"
                rx="20"
                ry="16"
                fill="#F472B6"
                opacity="0.9"
              />
              <ellipse
                cx="72"
                cy="25"
                rx="20"
                ry="16"
                fill="#F472B6"
                opacity="0.9"
              />

              <!-- Нижние крылья -->
              <ellipse
                cx="32"
                cy="45"
                rx="14"
                ry="12"
                fill="#A855F7"
                opacity="0.9"
              />
              <ellipse
                cx="68"
                cy="45"
                rx="14"
                ry="12"
                fill="#A855F7"
                opacity="0.9"
              />

              <!-- Узоры на крыльях -->
              <circle cx="28" cy="22" r="4" fill="#FDE047" />
              <circle cx="72" cy="22" r="4" fill="#FDE047" />
              <circle cx="32" cy="42" r="2.5" fill="#06B6D4" />
              <circle cx="68" cy="42" r="2.5" fill="#06B6D4" />
              <ellipse cx="24" cy="30" rx="2.5" ry="5" fill="#F97316" />
              <ellipse cx="76" cy="30" rx="2.5" ry="5" fill="#F97316" />

              <!-- Тело бабочки -->
              <ellipse cx="50" cy="35" rx="2.5" ry="20" fill="#374151" />

              <!-- Усики -->
              <path
                d="M48 18 Q44 12, 41 9"
                stroke="#374151"
                stroke-width="1.5"
                fill="none"
              />
              <path
                d="M52 18 Q56 12, 59 9"
                stroke="#374151"
                stroke-width="1.5"
                fill="none"
              />
              <circle cx="41" cy="9" r="1.5" fill="#F59E0B" />
              <circle cx="59" cy="9" r="1.5" fill="#F59E0B" />
            </svg>
          </div>
        </div>

        <!-- Основной контент -->
        <div class="lg:col-span-8 text-center animate-fade-in-up">
          <!-- Заголовок -->
          <div class="mb-8">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight hero-title"
            >
              <span
                class="block text-amber-500 font-black [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
                >Удача</span
              >
              <span
                class="text-blue-900 text-3xl sm:text-4xl lg:text-5xl font-black"
                >Частный детский сад</span
              >
            </h1>

            <p
              class="text-xl sm:text-2xl text-gray-700 font-bold max-w-3xl mx-auto leading-relaxed"
            >
              Место, где каждый ребёнок раскрывает свои таланты в атмосфере
              заботы и любви
            </p>
          </div>

          <!-- Кнопка -->
          <div class="mb-12">
            <button
              @click="handleBooking"
              class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Записаться на бесплатную консультацию
            </button>
          </div>

          <!-- Преимущества -->
          <div
            class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <!-- Преимущество 1 -->
            <div
              class="flex items-start gap-4 text-left animate-fade-in-up"
              style="animation-delay: 0.1s"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5C15.8 11.5 16.5 12.2 16.5 13S15.8 14.5 15 14.5 13.5 13.8 13.5 13 14.2 11.5 15 11.5M9 13.5C9.8 13.5 10.5 14.2 10.5 15S9.8 16.5 9 16.5 7.5 15.8 7.5 15 8.2 13.5 9 13.5M12 7.5C12.8 7.5 13.5 8.2 13.5 9S12.8 10.5 12 10.5 10.5 9.8 10.5 9 11.2 7.5 12 7.5Z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-gray-800 font-bold">
                  Индивидуальный подход к развитию каждого ребенка
                </p>
              </div>
            </div>

            <!-- Преимущество 2 -->
            <div
              class="flex items-start gap-4 text-left animate-fade-in-up"
              style="animation-delay: 0.2s"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 3L1 9L12 15L21 12V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-gray-800 font-bold">
                  Лицензированное образование с принятием материнского капитала
                </p>
              </div>
            </div>

            <!-- Преимущество 3 -->
            <div
              class="flex items-start gap-4 text-left animate-fade-in-up sm:col-span-2 lg:col-span-1"
              style="animation-delay: 0.3s"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-gray-800 font-bold">
                  Атмосфера заботы, любви и творческого развития
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Большие бабочки справа -->
        <div
          class="hidden lg:block lg:col-span-2 animate-fade-in-right relative"
        >
          <!-- Третья большая бабочка -->
          <div class="absolute top-10 right-0 animate-float-reverse">
            <svg class="w-30 h-22" viewBox="0 0 110 80">
              <!-- Верхние крылья -->
              <ellipse
                cx="30"
                cy="28"
                rx="22"
                ry="18"
                fill="#06B6D4"
                opacity="0.9"
              />
              <ellipse
                cx="80"
                cy="28"
                rx="22"
                ry="18"
                fill="#06B6D4"
                opacity="0.9"
              />

              <!-- Нижние крылья -->
              <ellipse
                cx="35"
                cy="50"
                rx="16"
                ry="13"
                fill="#F59E0B"
                opacity="0.9"
              />
              <ellipse
                cx="75"
                cy="50"
                rx="16"
                ry="13"
                fill="#F59E0B"
                opacity="0.9"
              />

              <!-- Узоры на крыльях -->
              <circle cx="30" cy="24" r="4.5" fill="#FDE047" />
              <circle cx="80" cy="24" r="4.5" fill="#FDE047" />
              <circle cx="35" cy="47" r="3" fill="#EC4899" />
              <circle cx="75" cy="47" r="3" fill="#EC4899" />
              <ellipse cx="26" cy="33" rx="3" ry="5.5" fill="#8B5CF6" />
              <ellipse cx="84" cy="33" rx="3" ry="5.5" fill="#8B5CF6" />

              <!-- Тело бабочки -->
              <ellipse cx="55" cy="39" rx="2.8" ry="22" fill="#374151" />

              <!-- Усики -->
              <path
                d="M52 19 Q48 13, 45 10"
                stroke="#374151"
                stroke-width="1.8"
                fill="none"
              />
              <path
                d="M58 19 Q62 13, 65 10"
                stroke="#374151"
                stroke-width="1.8"
                fill="none"
              />
              <circle cx="45" cy="10" r="1.8" fill="#F59E0B" />
              <circle cx="65" cy="10" r="1.8" fill="#F59E0B" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Дополнительная информация внизу -->
      <div
        class="text-center mt-16 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <div
          class="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-600"
        >
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Возраст от 1,3 до 7 лет</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>3 филиала в городе</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>пн-пт 07:00–20:00</span>
          </div>
        </div>
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
.hero-title {
  font-family: "315Karusel", cursive;
  font-weight: 900 !important;
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out both;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out 0.2s both;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.3s both;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite 2s;
}

.animate-float-reverse {
  animation: floatReverse 5s ease-in-out infinite 1s;
}

.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: floatSlow 25s ease-in-out infinite 5s;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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
    transform: translateY(-12px) rotate(3deg);
  }
  50% {
    transform: translateY(-8px) rotate(-2deg);
  }
  75% {
    transform: translateY(-15px) rotate(2deg);
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-2deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
  75% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(-5px) translateY(-10px);
  }
  75% {
    transform: translateX(-10px) translateY(-3px);
  }
}

/* Адаптивность */
@media (max-width: 640px) {
  .sm\:col-span-2 {
    grid-column: span 1;
  }
}
</style>
