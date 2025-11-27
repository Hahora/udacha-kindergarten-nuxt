<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Занятия
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
        <p class="text-gray-800 font-bold mt-4 max-w-2xl mx-auto text-lg">
          Комплексные программы развития, адаптированные для каждого возраста
        </p>
      </div>

      <!-- Аккордеон с возрастными группами -->
      <div class="space-y-4">
        <!-- Младшая группа -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.1s"
        >
          <button
            @click="toggleGroup('junior')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <!-- Заменено на kid1.svg -->
                <img
                  src="/images/kid1.svg"
                  alt="Малыш"
                  class="w-10 h-10 text-white"
                  width="24"
                  height="24"
                />
              </div>
              <div>
                <h3 class="text-xl font-black text-gray-900">Младшая группа</h3>
                <p class="text-pink-600 font-bold text-sm">1,3 - 3 года</p>
              </div>
            </div>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openGroup === 'junior' }"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div v-show="openGroup === 'junior'" class="px-6 pb-6">
            <div
              class="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100"
            >
              <!-- ... existing code ... -->
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Развитие речи</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Окружающий мир</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Ознакомление с художественной литературой
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Лепка</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Аппликация</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Рисование</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Формирование элементарных математических представлений
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Пальчиковая артикуляционная гимнастика
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Сенсорное развитие
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Средняя группа -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          <button
            @click="toggleGroup('middle')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/images/kid2.svg"
                  alt="Ребенок средней группы"
                  class="w-10 h-10 text-white"
                  width="24"
                  height="24"
                />
              </div>
              <div>
                <h3 class="text-xl font-black text-gray-900">Средняя группа</h3>
                <p class="text-green-600 font-bold text-sm">3 - 5 лет</p>
              </div>
            </div>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openGroup === 'middle' }"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div v-show="openGroup === 'middle'" class="px-6 pb-6">
            <div
              class="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100"
            >
              <!-- ... existing code ... -->
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Развитие речи</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Окружающий мир</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Ознакомление с художественной литературой
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Лепка</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Аппликация</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Рисование</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Формирование элементарных математических представлений
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Безопасность жизнедеятельности
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Основы ПДД</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Подготовка руки к письму
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Старшая группа -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.3s"
        >
          <button
            @click="toggleGroup('senior')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <!-- Заменено на kid3.svg -->
                <img
                  src="/images/kid3.svg"
                  alt="Ребенок старшей группы"
                  class="w-10 h-10 text-white"
                  width="24"
                  height="24"
                />
              </div>
              <div>
                <h3 class="text-xl font-black text-gray-900">Старшая группа</h3>
                <p class="text-cyan-600 font-bold text-sm">5 - 7 лет</p>
              </div>
            </div>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openGroup === 'senior' }"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div v-show="openGroup === 'senior'" class="px-6 pb-6">
            <div
              class="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100"
            >
              <!-- ... existing code ... -->
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Развитие речи</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Окружающий мир</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Ознакомление с художественной литературой
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Лепка</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Аппликация</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Рисование</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Математика</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">
                  Безопасность жизнедеятельности
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Основы ПДД</p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg
                    class="w-3 h-3 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <p class="text-gray-800 font-bold text-sm">Грамота</p>
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
          Узнать подробнее о занятиях
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Получае�� предоставленную функцию открытия модального окна
const openCallbackModal = inject("openCallbackModal");

const openGroup = ref(null);

const toggleGroup = (group) => {
  openGroup.value = openGroup.value === group ? null : group;
};

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
