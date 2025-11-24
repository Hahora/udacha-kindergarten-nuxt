<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Заголовок -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          О нашем детском саде
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
        <p
          class="text-xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed"
        >
          Мы создаем пространство, где дети растут счастливыми, уверенными в
          себе и готовыми к новым открытиям
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Левая колонка - текст -->
        <div class="animate-fade-in-left">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-black text-gray-900 mb-4 text-amber-600">
                Наша миссия
              </h3>
              <p class="text-gray-800 font-bold leading-relaxed">
                Мы верим, что каждый ребенок уникален и обладает огромным
                потенциалом. Наша задача — создать условия для гармоничного
                развития личности, где малыши могут безопасно исследовать мир и
                раскрывать свои таланты.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-black text-gray-900 mb-4 text-blue-600">
                Наш подход
              </h3>
              <p class="text-gray-800 font-bold leading-relaxed">
                Мы используем современные методики раннего развития, сочетая
                игровые формы обучения с индивидуальным подходом к каждому
                ребенку. Наши педагоги — это профессионалы с большим опытом и
                искренней любовью к детям.
              </p>
            </div>

            <!-- Декоративная бабочка -->
            <div
              class="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2"
            >
              <div class="animate-float">
                <svg class="w-16 h-12" viewBox="0 0 60 45">
                  <!-- Верхние крылья -->
                  <ellipse
                    cx="18"
                    cy="15"
                    rx="12"
                    ry="10"
                    fill="#F59E0B"
                    opacity="0.8"
                  />
                  <ellipse
                    cx="42"
                    cy="15"
                    rx="12"
                    ry="10"
                    fill="#F59E0B"
                    opacity="0.8"
                  />

                  <!-- Нижние крылья -->
                  <ellipse
                    cx="20"
                    cy="28"
                    rx="8"
                    ry="7"
                    fill="#EC4899"
                    opacity="0.8"
                  />
                  <ellipse
                    cx="40"
                    cy="28"
                    rx="8"
                    ry="7"
                    fill="#EC4899"
                    opacity="0.8"
                  />

                  <!-- Узоры -->
                  <circle cx="18" cy="13" r="2.5" fill="#FDE047" />
                  <circle cx="42" cy="13" r="2.5" fill="#FDE047" />

                  <!-- Тело -->
                  <ellipse cx="30" cy="21" rx="1.5" ry="12" fill="#374151" />

                  <!-- Усики -->
                  <path
                    d="M29 12 Q26 8, 24 6"
                    stroke="#374151"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M31 12 Q34 8, 36 6"
                    stroke="#374151"
                    stroke-width="1"
                    fill="none"
                  />
                  <circle cx="24" cy="6" r="1" fill="#F59E0B" />
                  <circle cx="36" cy="6" r="1" fill="#F59E0B" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка - статистика -->
        <div class="animate-fade-in-right">
          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50"
          >
            <h3 class="text-2xl font-black text-gray-900 mb-8 text-center">
              Наши достижения
            </h3>

            <div class="grid grid-cols-2 gap-6">
              <!-- Статистика 1 -->
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="text-2xl font-black text-white">15+</span>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  лет успешной работы
                </p>
              </div>

              <!-- Статистика 2 -->
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="text-2xl font-black text-white">200+</span>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  счастливых выпускников
                </p>
              </div>

              <!-- Статистика 3 -->
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="text-2xl font-black text-white">12</span>
                </div>
                <p class="text-gray-800 font-bold text-sm">опытных педагогов</p>
              </div>

              <!-- Статистика 4 -->
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="text-2xl font-black text-white">3</span>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  современных филиала
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Информация о директоре -->
      <div
        class="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 lg:p-12 animate-fade-in-up"
      >
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-4 gap-8 items-center">
            <!-- Фото директора -->
            <div class="lg:col-span-1 text-center">
              <div
                class="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl"
              >
                <svg
                  class="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </div>
            </div>

            <!-- Цитата и подпись -->
            <div class="lg:col-span-3">
              <div class="mb-6">
                <h3
                  class="text-2xl font-black text-gray-900 mb-4 italic text-amber-600"
                >
                  "Уже более 15 лет мы помогаем малышам развивать личность и
                  навыки общения. Работа с детьми — это наше призвание. Мы
                  постоянно что-то улучшаем в работе наших детских садов, чтобы
                  детям нравилось у нас, а родители чувствовали реальную
                  поддержку в воспитании ребенка"
                </h3>
                <div class="w-12 h-0.5 bg-amber-400"></div>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <p class="font-black text-gray-900 text-lg">
                    Разумовская Татьяна Валерьевна
                  </p>
                  <p class="text-gray-700 font-bold">
                    Директор детских садов «Удача»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div
        class="text-center mt-12 animate-fade-in-up"
        style="animation-delay: 0.2s"
      >
        <button
          @click="handleBooking"
          class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Познакомиться с нами лично
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
.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out 0.1s both;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: floatSlow 25s ease-in-out infinite 5s;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
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
    transform: translateY(-8px) rotate(2deg);
  }
  50% {
    transform: translateY(-5px) rotate(-1deg);
  }
  75% {
    transform: translateY(-10px) rotate(1deg);
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
