<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Стоимость
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
      </div>

      <!-- Баннер с материнским капиталом -->
      <div
        class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl mb-12 animate-fade-in-up"
      >
        <div class="text-center">
          <h3 class="text-2xl lg:text-3xl font-black mb-4">
            Оплата материнским капиталом
          </h3>
          <p class="text-blue-100 text-xl font-bold">
            Полная стоимость пребывания - 100% покрытие
          </p>
        </div>
      </div>

      <!-- Основные тарифы -->
      <div class="space-y-6 mb-12">
        <!-- Полный день -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="text-2xl font-black text-gray-900 mb-2">
                Полный день
              </h3>
              <p class="text-gray-700 font-bold">
                7:00 - 20:00 • 5-ти разовое питание
              </p>
            </div>
            <div class="text-right">
              <div class="text-3xl lg:text-4xl font-black text-gray-900">
                20 000 ₽
              </div>
              <div class="text-gray-600 font-bold">в месяц</div>
            </div>
          </div>
        </div>

        <!-- Двое детей -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
          style="animation-delay: 0.1s"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="text-2xl font-black text-gray-900 mb-2">Двое детей</h3>
              <p class="text-gray-700 font-bold">
                7:00 - 20:00 • 5-ти разовое питание
              </p>
            </div>
            <div class="text-right">
              <div class="text-3xl lg:text-4xl font-black text-gray-900">
                35 000 ₽
              </div>
              <div class="text-gray-600 font-bold">в месяц</div>
            </div>
          </div>
        </div>

        <!-- Утреннее пребывание -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
          style="animation-delay: 0.2s"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="text-2xl font-black text-gray-900 mb-2">
                Утреннее пребывание
              </h3>
              <p class="text-gray-700 font-bold">
                7:00 - 12:30 • 3-х разовое питание
              </p>
            </div>
            <div class="text-right">
              <div class="text-3xl lg:text-4xl font-black text-gray-900">
                13 000 ₽
              </div>
              <div class="text-gray-600 font-bold">в месяц</div>
            </div>
          </div>
        </div>

        <!-- Вечернее пребывание -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
          style="animation-delay: 0.3s"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="text-2xl font-black text-gray-900 mb-2">
                Вечернее пребывание
              </h3>
              <p class="text-gray-700 font-bold">
                15:00 - 20:00 • 2-х разовое питание
              </p>
            </div>
            <div class="text-right">
              <div class="text-3xl lg:text-4xl font-black text-gray-900">
                11 000 ₽
              </div>
              <div class="text-gray-600 font-bold">в месяц</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Разовые посещения -->
      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 mb-12 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <h3 class="text-2xl font-black text-gray-900 mb-6 text-center">
          Разовые посещения
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="text-center p-6 bg-blue-50 rounded-xl border border-blue-200"
          >
            <div class="text-3xl font-black text-gray-900 mb-2">1 400 ₽</div>
            <div class="text-gray-700 font-bold">Полный день</div>
          </div>
          <div
            class="text-center p-6 bg-green-50 rounded-xl border border-green-200"
          >
            <div class="text-3xl font-black text-gray-900 mb-2">700 ₽</div>
            <div class="text-gray-700 font-bold">Полдня</div>
          </div>
        </div>
      </div>

      <!-- Скидки -->
      <div
        class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-xl animate-fade-in-up"
        style="animation-delay: 0.5s"
      >
        <h3 class="text-2xl font-black text-white mb-6 text-center">
          Специальные условия
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="p-4 bg-white/10 rounded-xl">
            <div class="text-lg font-black mb-2">Матери-одиночки</div>
            <div class="text-yellow-400 text-sm font-bold">
              Индивидуальные скидки
            </div>
          </div>
          <div class="p-4 bg-white/10 rounded-xl">
            <div class="text-lg font-black mb-2">Семьи военных</div>
            <div class="text-yellow-400 text-sm font-bold">
              Специальные тарифы
            </div>
          </div>
          <div class="p-4 bg-white/10 rounded-xl">
            <div class="text-lg font-black mb-2">Малоимущие семьи</div>
            <div class="text-yellow-400 text-sm font-bold">
              Льготные условия
            </div>
          </div>
        </div>
        <div class="text-center mt-6">
          <button
            @click="handleBooking"
            class="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-8 py-3 rounded-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Узнать о скидках
          </button>
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
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
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
</style>
