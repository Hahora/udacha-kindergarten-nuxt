<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 lg:pt-32"
  >
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-white/50"
      >
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <h1
            class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
            style="font-family: &quot;315Karusel&quot;, cursive"
          >
            Лицензия на образовательную деятельность
          </h1>
          <div class="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p class="text-lg text-gray-700 font-bold max-w-2xl mx-auto">
            Официальные документы детского сада "Удача"
          </p>
        </div>

        <!-- Фотографии лицензий -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Фото 1 -->
          <div class="group">
            <button
              @click="
                openImage(
                  '/images/license/license1.webp',
                  'Лицензия №6835 - страница 1'
                )
              "
              class="bg-white/90 backdrop-blur-sm rounded-xl p-4 w-full h-80 flex items-center justify-center mb-4 hover:bg-white transition-all duration-300 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-xl border border-gray-200/50"
            >
              <NuxtImg
                src="/images/license/license1.webp"
                alt="Лицензия детского сада Удача - страница 1"
                class="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                placeholder
              />
              <!-- Иконка увеличения -->
              <div
                class="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </button>
            <p class="text-sm text-gray-700 text-center font-bold">
              Лицензия №6835 - страница 1
            </p>
          </div>

          <!-- Фото 2 -->
          <div class="group">
            <button
              @click="
                openImage(
                  '/images/license/license2.webp',
                  'Лицензия №6835 - страница 2'
                )
              "
              class="bg-white/90 backdrop-blur-sm rounded-xl p-4 w-full h-80 flex items-center justify-center mb-4 hover:bg-white transition-all duration-300 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-xl border border-gray-200/50"
            >
              <NuxtImg
                src="/images/license/license2.webp"
                alt="Лицензия детского сада Удача - страница 2"
                class="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                placeholder
              />
              <!-- Иконка увеличения -->
              <div
                class="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </button>
            <p class="text-sm text-gray-700 text-center font-bold">
              Лицензия №6835 - страница 2
            </p>
          </div>

          <!-- Фото 3 -->
          <div class="group md:col-span-3 lg:col-span-1">
            <button
              @click="
                openImage(
                  '/images/license/license3.webp',
                  'Приложение к лицензии'
                )
              "
              class="bg-white/90 backdrop-blur-sm rounded-xl p-4 w-full h-80 flex items-center justify-center mb-4 hover:bg-white transition-all duration-300 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-xl border border-gray-200/50"
            >
              <NuxtImg
                src="/images/license/license3.webp"
                alt="Лицензия детского сада Удача - страница 3"
                class="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                placeholder
              />
              <!-- Иконка увеличения -->
              <div
                class="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </button>
            <p class="text-sm text-gray-700 text-center font-bold">
              Приложение к лицензии
            </p>
          </div>
        </div>

        <!-- Кнопка возврата -->
        <div class="text-center">
          <NuxtLink
            to="/"
            class="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-4 rounded-xl text-lg font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Вернуться на главную
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Компактное модальное окно -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-6"
        @click="closeImage"
      >
        <!-- Компактный контейнер -->
        <div class="relative w-full max-w-3xl" @click.stop>
          <!-- Кнопка закрытия -->
          <button
            @click="closeImage"
            class="absolute -top-10 right-0 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Закрыть"
          >
            <svg
              class="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Изображение -->
          <div class="relative bg-white rounded-lg overflow-hidden shadow-2xl">
            <!-- Индикатор загрузки -->
            <div
              v-if="!imageLoaded"
              class="absolute inset-0 flex items-center justify-center bg-gray-100 h-96"
            >
              <div class="flex flex-col items-center space-y-3">
                <svg
                  class="w-6 h-6 text-gray-400 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    class="opacity-25"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <p class="text-gray-600 font-bold text-sm">Загрузка...</p>
              </div>
            </div>

            <!-- Изображение с ограниченной высотой -->
            <img
              :src="selectedImage"
              :alt="selectedImageTitle"
              class="w-full h-auto max-h-[70vh] object-contain transition-opacity duration-300"
              :class="imageLoaded ? 'opacity-100' : 'opacity-0'"
              @load="onImageLoad"
              @error="onImageError"
            />

            <!-- Сообщение об ошибке -->
            <div
              v-if="imageError"
              class="absolute inset-0 flex items-center justify-center bg-gray-100 h-96"
            >
              <div class="text-center text-gray-600">
                <svg
                  class="w-8 h-8 mx-auto mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <p class="font-bold text-sm">Ошибка загрузки</p>
              </div>
            </div>
          </div>

          <!-- Компактный заголовок -->
          <div
            v-if="selectedImageTitle && imageLoaded && !imageError"
            class="mt-3 text-center"
          >
            <div class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <h3 class="text-white font-bold text-sm">
                {{ selectedImageTitle }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
// Реактивные данные
const selectedImage = ref(null);
const selectedImageTitle = ref("");
const imageLoaded = ref(false);
const imageError = ref(false);

// Функции для открытия/закрытия изображений
const openImage = (imageSrc, title = "") => {
  selectedImage.value = imageSrc;
  selectedImageTitle.value = title;
  imageLoaded.value = false;
  imageError.value = false;
  document.body.style.overflow = "hidden";
};

const closeImage = () => {
  selectedImage.value = null;
  selectedImageTitle.value = "";
  imageLoaded.value = false;
  imageError.value = false;
  document.body.style.overflow = "auto";
};

// Обработчики загрузки изображения
const onImageLoad = () => {
  imageLoaded.value = true;
  imageError.value = false;
};

const onImageError = () => {
  imageLoaded.value = true;
  imageError.value = true;
};

// Закрытие по ESC
const handleEscape = (event) => {
  if (event.key === "Escape") {
    closeImage();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "auto";
});

// SEO мета-теги
useHead({
  title: 'Лицензия - Детский сад "Удача"',
  meta: [
    {
      name: "description",
      content:
        "Официальная лицензия детского сада Удача в Ростове-на-Дону. Лицензия №6835 на образовательную деятельность.",
    },
  ],
});
</script>

<style scoped>
/* Плавные переходы */
img {
  transition: transform 0.3s ease;
}
</style>
