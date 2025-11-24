<template>
  <section class="relative py-16 lg:py-20">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Отзывы родителей
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
        <p class="text-gray-800 font-bold mt-4 max-w-2xl mx-auto text-lg">
          Что говорят родители о нашем детском саде
        </p>
      </div>

      <!-- Карусель отзывов -->
      <div class="relative animate-fade-in-up">
        <!-- Основной контейнер -->
        <div class="relative overflow-hidden rounded-2xl">
          <!-- Слайды -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Отзыв -->
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <div
                class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/50"
              >
                <!-- Звезды -->
                <div class="flex justify-center mb-4">
                  <div class="flex space-x-1">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-6 h-6 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Текст отзыва -->
                <div class="text-center mb-6">
                  <p
                    class="text-gray-800 text-lg leading-relaxed italic font-bold"
                  >
                    "{{ review.text }}"
                  </p>
                </div>

                <!-- Автор -->
                <div class="flex items-center justify-center space-x-4">
                  <div
                    class="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg"
                  >
                    <NuxtImg
                      :src="review.photo"
                      :alt="review.name"
                      class="w-full h-full object-cover"
                      width="64"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div class="text-left">
                    <p class="font-black text-gray-900">{{ review.name }}</p>
                    <p class="text-gray-600 text-sm font-bold">
                      {{ review.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопки навигации -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-amber-50 transition-all duration-200 border border-white/50"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
          :disabled="currentSlide === 0"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-amber-50 transition-all duration-200 border border-white/50"
          :class="{
            'opacity-50 cursor-not-allowed':
              currentSlide === reviews.length - 1,
          }"
          :disabled="currentSlide === reviews.length - 1"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Индикаторы -->
      <div class="flex justify-center space-x-2 mt-8 animate-fade-in-up">
        <button
          v-for="(_, index) in reviews"
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-all duration-200"
          :class="currentSlide === index ? 'bg-amber-500' : 'bg-gray-300'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Реактивное состояние для текущего слайда
const currentSlide = ref(0);

// Данные отзывов
const reviews = [
  {
    name: "Поля М.",
    photo: "/images/otz/islands-retina-middle.png",
    text: "Ребенок ходит в сад с апреля. Напишу свое мнение: она научилась ходить на горшок( у меня не получалось приучить), принесла много новых слов, танцевальных движений, выходит и заходит с удовольствием. Воспитатели очень приветливые, если нужна помощь какая-то определенная с ребенком- все сделают. Меня не смущает то, что все дети вместе, это как одна большая семья, такой формат сада. То, что можно привести с «остаточными» признаками, когда ребенок уже не заразный- абсолютно нормально, дети должны обменяться всеми бактериями, что бы сформировать иммунитет. Всем не угодишь видимо💁🏼‍♀️ В общем, у моей дочки много умелок, за что благодарю коллектив на Темерницкой 65 🥰",
    date: "08.11.2025",
  },
  {
    name: "Алёна Гречко",
    photo: "/images/otz/islands-retina-middle-2.png",
    text: "Сын ходит туда уже 6 месяцев. Адаптировался быстро благодаря Кате) Замечательный коллектив, вежливые и внимательные воспитатели! Территория небольшая, но всегда чистая, есть игрушки, горки, беседка, домик. Дети на улице не скучают. Внутри тоже следят за чистотой. Часто устраивают интересные праздники. Группы небольшие, всем детям уделяют внимание. Когда ребенок тоскует по мне его утешают и поддерживают! Я очень благодарна за хорошее отношение и поддержку!",
    date: "22.10.2025",
  },
  {
    name: "Виктория К.",
    photo: "/images/otz/islands-middle-3.png",
    text: "Чудесный садик, уютный, аккуратный! Площадка продумана и вся в тени, готовят кушать вкусно, ребенку нравится👍оформляют официально, имеют лицензию👌рекомендую!",
    date: "01.11.2025",
  },
];

// Функции навигации
const nextSlide = () => {
  if (currentSlide.value < reviews.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

// Автопрокрутка (опционально)
onMounted(() => {
  setInterval(() => {
    if (currentSlide.value < reviews.length - 1) {
      currentSlide.value++;
    } else {
      currentSlide.value = 0;
    }
  }, 5000); // Смена каждые 5 секунд
});
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
