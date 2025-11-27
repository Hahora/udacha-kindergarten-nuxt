<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Часто задаваемые вопросы
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
        <p class="text-gray-800 font-bold mt-4 max-w-2xl mx-auto text-lg">
          Ответы на самые популярные вопросы родителей
        </p>
      </div>

      <!-- Аккордеон с вопросами -->
      <div class="space-y-4">
        <!-- Вопрос 1 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
        >
          <button
            @click="toggleQuestion('q1')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Как записаться в садик?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q1' }"
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

          <div v-show="openQuestion === 'q1'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Чтобы записать
                ребенка в сад, оставьте заявку на сайте или позвоните нам по
                этому номеру:
                <a
                  href="tel:+79085019627"
                  class="text-blue-600 hover:text-blue-800 font-black"
                >
                  +7 (908) 501-96-27</a
                >
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 2 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.1s"
        >
          <button
            @click="toggleQuestion('q2')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Сколько малышей в одной группе?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q2' }"
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

          <div v-show="openQuestion === 'q2'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> В среднем, в
                каждой группе 10−12 детей
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 3 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          <button
            @click="toggleQuestion('q3')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Учитываете ли вы особое питание для детей?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q3' }"
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

          <div v-show="openQuestion === 'q3'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Да, вам
                необходимо рассказать об особенностях питания вашего ребенка, и
                мы будем готовить еду отдельно.
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 4 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.3s"
        >
          <button
            @click="toggleQuestion('q4')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Можно ли детям приносить в детский сад свои игрушки?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q4' }"
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

          <div v-show="openQuestion === 'q4'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Да, вы можете
                приносить свои игрушки.
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 5 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          <button
            @click="toggleQuestion('q5')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Мой ребёнок плохо кушает. Докармливают ли воспитатели детей?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q5' }"
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

          <div v-show="openQuestion === 'q5'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Мы обучаем наших
                воспитателей как правильно без вреда для организма и психики
                ребенка «докармливать» детей, которые плохо едят. Это
                обязательно обсуждаются с родителями.
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 6 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.5s"
        >
          <button
            @click="toggleQuestion('q6')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Какие нужны документы для поступления ребенка в ваш сад?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q6' }"
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

          <div v-show="openQuestion === 'q6'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Анализ крови,
                мочи, анализ на яйцеглист, справка от педиатра.<br /><br />
                Обязательно позвоните нам по телефону
                <a
                  href="tel:+79085019627"
                  class="text-blue-600 hover:text-blue-800 font-black"
                >
                  +7 (908) 501-96-27</a
                >
                или напишите в Whatsapp перед тем как начать собирать справки,
                так как список документов иногда меняется.
              </p>
            </div>
          </div>
        </div>

        <!-- Вопрос 7 -->
        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up"
          style="animation-delay: 0.6s"
        >
          <button
            @click="toggleQuestion('q7')"
            class="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-amber-50/50 transition-colors duration-300"
          >
            <h3 class="text-lg font-black text-gray-900 pr-4">
              Как долго проходит адаптация?
            </h3>
            <div
              class="transform transition-transform duration-300"
              :class="{ 'rotate-180': openQuestion === 'q7' }"
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

          <div v-show="openQuestion === 'q7'" class="px-6 pb-6">
            <div class="pt-4 border-t border-gray-100">
              <p class="text-gray-800 font-bold leading-relaxed">
                <span class="text-amber-600">Заведующая:</span> Как правило
                период адаптации ребенка в нашем детском саду длится недолго —
                около недели
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div
        class="text-center mt-12 animate-fade-in-up"
        style="animation-delay: 0.7s"
      >
        <p class="text-gray-800 font-bold mb-6">
          Не нашли ответ на свой вопрос?
        </p>
        <button
          @click="handleBooking"
          class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Задать вопрос
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Получаем предоставленную функцию открытия модального окна
const openCallbackModal = inject("openCallbackModal");

const openQuestion = ref(null);

const toggleQuestion = (question) => {
  openQuestion.value = openQuestion.value === question ? null : question;
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
