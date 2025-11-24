<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Оздоровительная программа
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
      </div>

      <!-- Основной контент -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Левая часть - фото -->
        <div class="relative animate-fade-in-left">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <NuxtImg
              provider="ipx"
              src="/images/program.webp"
              alt="Дети на оздоровительных процедурах"
              width="500"
              height="400"
              class="w-full h-auto object-cover"
              sizes="sm:100vw md:50vw lg:40vw"
              quality="85"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Правая часть - список -->
        <div class="animate-fade-in-right">
          <div class="space-y-6 text-gray-700">
            <!-- Рециркуляторы -->
            <div class="flex items-start space-x-4">
              <div>
                <p class="font-black text-gray-900 text-lg">
                  Рециркуляторы очищающие воздух от бактерий
                </p>
                <p class="text-sm text-gray-700 font-bold mt-1">
                  Современные бактерицидные рециркуляторы для безопасной среды
                </p>
              </div>
            </div>

            <!-- Дыхательная гимнастика -->
            <div class="flex items-start space-x-4">
              <div>
                <p class="font-black text-gray-900 text-lg">
                  Дыхательная гимнастика по системе Стрельниковой
                </p>
                <p class="text-sm text-gray-700 font-bold mt-1">
                  Укрепление дыхательной системы и иммунитета
                </p>
              </div>
            </div>

            <!-- Кислородные коктейли -->
            <div class="flex items-start space-x-4">
              <div>
                <p class="font-black text-gray-900 text-lg">
                  Кислородные коктейли
                </p>
                <p class="text-sm text-gray-700 font-bold mt-1">
                  Насыщение организма кислородом, улучшение обмена веществ
                </p>
              </div>
            </div>

            <!-- Соляная пещера -->
            <div class="flex items-start space-x-4">
              <div>
                <p class="font-black text-gray-900 text-lg">Соляная пещера</p>
                <p class="text-sm text-gray-700 font-bold mt-1">
                  Спелеотерапия для укрепления иммунной системы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div
        class="text-center mt-12 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <button
          @click="handleBooking"
          class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Узнать больше о программе
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
  animation: fadeInUp 0.6s ease-out both;
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
    transform: translateY(-6px) rotate(2deg);
  }
  50% {
    transform: translateY(-4px) rotate(-1deg);
  }
  75% {
    transform: translateY(-8px) rotate(1deg);
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
