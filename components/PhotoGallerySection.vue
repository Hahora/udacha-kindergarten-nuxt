<template>
  <section class="relative py-16 lg:py-20">
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Фотогалерея
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
      </div>

      <!-- Выбор филиала на мобильных -->
      <div class="lg:hidden mb-8 animate-fade-in-up">
        <select
          v-model="selectedAddress"
          @change="currentPhotoIndex = 0"
          class="w-full p-3 bg-white rounded-xl border border-gray-200 shadow-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none font-bold text-gray-800"
        >
          <option
            v-for="(address, index) in addresses"
            :key="index"
            :value="index"
          >
            {{ address.title }} - {{ address.address }}
          </option>
        </select>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Левая часть - выбор адреса (только на десктопе) -->
        <div class="hidden lg:block lg:col-span-1 animate-fade-in-left">
          <div
            class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/50"
          >
            <h3 class="text-lg font-black text-gray-900 mb-4">
              Выберите филиал
            </h3>

            <div class="space-y-3">
              <button
                v-for="(address, index) in addresses"
                :key="index"
                @click="selectAddress(index)"
                class="w-full text-left p-4 rounded-lg border transition-all duration-200"
                :class="[
                  selectedAddress === index
                    ? 'border-amber-400 bg-amber-50 shadow-md'
                    : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50',
                ]"
              >
                <p class="font-bold text-gray-900">{{ address.title }}</p>
                <p class="text-gray-700 mt-1 text-sm font-bold">
                  {{ address.address }}
                </p>
              </button>
            </div>
          </div>
        </div>

        <!-- Правая часть - фото галерея -->
        <div class="lg:col-span-3 animate-fade-in-right">
          <div
            class="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl border border-white/50"
          >
            <!-- Заголовок галереи -->
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-black text-gray-900">
                {{ addresses[selectedAddress].title }}
              </h3>
              <div class="text-sm text-gray-600 font-bold">
                {{ currentPhotoIndex + 1 }} /
                {{ addresses[selectedAddress].photos.length }}
              </div>
            </div>

            <!-- Основное фото -->
            <div
              class="relative rounded-xl overflow-hidden bg-gray-100 mb-6 cursor-pointer min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
              @click="openModal"
            >
              <!-- Заглушка пока изображение загружается -->
              <div
                v-if="!imageLoaded.main"
                class="absolute inset-0 flex items-center justify-center bg-gray-200"
              >
                <div class="text-gray-500">
                  <svg
                    class="w-12 h-12 animate-spin"
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
                </div>
              </div>

              <!-- Осно��ное изображение -->
              <img
                v-if="addresses[selectedAddress].photos[currentPhotoIndex]"
                ref="mainImage"
                :src="
                  getImageUrl(
                    addresses[selectedAddress].photos[currentPhotoIndex]
                  )
                "
                :alt="`${addresses[selectedAddress].title} - фото ${currentPhotoIndex + 1}`"
                class="w-full h-full object-cover transition-opacity duration-300"
                :class="imageLoaded.main ? 'opacity-100' : 'opacity-0'"
                @load="onMainImageLoad"
                @error="onMainImageError"
              />

              <!-- SVG заглушка если фото нет -->
              <div
                v-else
                class="flex flex-col items-center justify-center text-gray-400 p-8"
              >
                <svg
                  class="w-24 h-24 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                  />
                </svg>
                <p class="text-lg font-bold text-gray-500">Нет фото</p>
              </div>

              <!-- Иконка увеличения -->
              <div
                v-if="addresses[selectedAddress].photos[currentPhotoIndex]"
                class="absolute top-3 right-3 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
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

              <!-- Кнопки навигации -->
              <button
                v-if="addresses[selectedAddress].photos.length > 1"
                @click.stop="prevPhoto"
                class="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <svg
                  class="w-4 h-4 lg:w-5 lg:h-5 text-gray-700"
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
                v-if="addresses[selectedAddress].photos.length > 1"
                @click.stop="nextPhoto"
                class="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <svg
                  class="w-4 h-4 lg:w-5 lg:h-5 text-gray-700"
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

            <!-- Миниатюры для скролла -->
            <div
              v-if="addresses[selectedAddress].photos.length > 1"
              class="mt-6 flex space-x-3 overflow-x-auto pb-4 scrollbar-thin"
              style="min-height: 80px"
            >
              <button
                v-for="(photo, index) in addresses[selectedAddress].photos"
                :key="`${selectedAddress}-${index}`"
                @click="currentPhotoIndex = index"
                class="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-gray-200 relative"
                :class="
                  currentPhotoIndex === index
                    ? 'border-amber-400 shadow-md'
                    : 'border-gray-200 hover:border-amber-300'
                "
              >
                <!-- Заглушка для миниатюры -->
                <div
                  v-if="!getThumbnailLoadState(index) && photo"
                  class="absolute inset-0 flex items-center justify-center bg-gray-300"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 animate-spin"
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
                </div>

                <!-- Миниатюра фото -->
                <img
                  v-if="photo"
                  :ref="(el) => setThumbnailRef(el, index)"
                  :src="getImageUrl(photo)"
                  :alt="`Миниатюра ${index + 1}`"
                  class="w-full h-full object-cover transition-opacity duration-300"
                  :class="
                    getThumbnailLoadState(index) ? 'opacity-100' : 'opacity-0'
                  "
                  @load="onThumbnailLoad(index)"
                  @error="onThumbnailError(index)"
                />

                <!-- SVG заглушка для миниатюры если фото нет -->
                <div
                  v-else
                  class="absolute inset-0 flex items-center justify-center bg-gray-300"
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
                      stroke-width="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Компактное модальное окно для полноэкранного просмотра -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isModalOpen && addresses[selectedAddress].photos[modalPhotoIndex]"
        class="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
        @click="closeModal"
      >
        <div class="relative w-full max-w-4xl" @click.stop>
          <!-- Кнопка закрытия -->
          <button
            @click="closeModal"
            class="absolute -top-10 right-0 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 z-10"
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

          <!-- Контейнер изображения -->
          <div class="relative bg-white rounded-lg overflow-hidden shadow-2xl">
            <!-- Заглушка для модального окна -->
            <div
              v-if="!imageLoaded.modal"
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
              ref="modalImage"
              :src="
                getImageUrl(addresses[selectedAddress].photos[modalPhotoIndex])
              "
              :alt="`${addresses[selectedAddress].title} - фото ${modalPhotoIndex + 1}`"
              class="w-full h-auto max-h-[70vh] object-contain transition-opacity duration-300"
              :class="imageLoaded.modal ? 'opacity-100' : 'opacity-0'"
              @load="onModalImageLoad"
              @error="onModalImageError"
            />
          </div>

          <!-- Навигация и счетчик -->
          <div
            v-if="addresses[selectedAddress].photos.length > 1"
            class="flex items-center justify-between mt-4"
          >
            <button
              @click="prevModalPhoto"
              class="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div class="text-white font-bold">
              {{ modalPhotoIndex + 1 }} /
              {{ addresses[selectedAddress].photos.length }}
            </div>

            <button
              @click="nextModalPhoto"
              class="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
// Реактивные данные
const selectedAddress = ref(0);
const currentPhotoIndex = ref(0);
const isModalOpen = ref(false);
const modalPhotoIndex = ref(0);

// Состояние загрузки изображений
const imageLoaded = reactive({
  main: false,
  modal: false,
  thumbnails: {},
});

// Refs для изображений
const mainImage = ref(null);
const modalImage = ref(null);
const thumbnailRefs = ref({});

// Данные филиалов с путями к изображениям в public
const addresses = [
  {
    title: "Центральный филиал",
    address: "ул. Темерницкая, 65",
    photos: [
      "/images/photo-temern/0002YKA.jpg.webp",
      "/images/photo-temern/0003YKA.jpg.webp",
      "/images/photo-temern/0007YKA.jpg.webp",
      "/images/photo-temern/0011YKA.jpg.webp",
      "/images/photo-temern/0022YKA.jpg.webp",
      "/images/photo-temern/0023YKA.jpg.webp",
      "/images/photo-temern/0031YKA.jpg.webp",
      "/images/photo-temern/0043YKA.jpg.webp",
      "/images/photo-temern/0048YKA.jpg.webp",
      "/images/photo-temern/0057YKA.jpg.webp",
      "/images/photo-temern/0076YKA.jpg.webp",
      "/images/photo-temern/0079YKA.jpg.webp",
    ],
  },
  {
    title: "Западный филиал",
    address: "ул. Стабильная, 21",
    photos: ["/images/gallery/west-1.jpg"],
  },
  {
    title: "Западный филиал",
    address: 'ул. 2-я Краснодарская, 135 "А"',
    photos: ["/images/gallery/west2-1.jpg"],
  },
];

// Функция для получения корректного URL изображения
const getImageUrl = (path) => {
  return path;
};

// Функция проверки готовности изображения
const checkImageReady = (imgElement) => {
  return imgElement && imgElement.complete && imgElement.naturalHeight !== 0;
};

// Функции для работы с ref миниатюр
const setThumbnailRef = (el, index) => {
  if (el) {
    const key = `${selectedAddress.value}-${index}`;
    thumbnailRefs.value[key] = el;

    // Проверяем, не загружено ли изображение уже
    if (checkImageReady(el)) {
      imageLoaded.thumbnails[key] = true;
    }
  }
};

const getThumbnailLoadState = (index) => {
  const key = `${selectedAddress.value}-${index}`;
  return imageLoaded.thumbnails[key] || false;
};

// Обработчики загрузки основного изображения
const onMainImageLoad = () => {
  imageLoaded.main = true;
};

const onMainImageError = (event) => {
  console.error("Ошибка загрузки основного изображения:", event.target.src);
  imageLoaded.main = true;
};

// Обработчики загрузки миниатюр
const onThumbnailLoad = (index) => {
  const key = `${selectedAddress.value}-${index}`;
  imageLoaded.thumbnails[key] = true;
};

const onThumbnailError = (index) => {
  console.error("Ошибка загрузки миниатюры:", index);
  const key = `${selectedAddress.value}-${index}`;
  imageLoaded.thumbnails[key] = true;
};

// Обработчики загрузки модального изображения
const onModalImageLoad = () => {
  imageLoaded.modal = true;
};

const onModalImageError = (event) => {
  console.error("Ошибка загрузки модального изображения:", event.target.src);
  imageLoaded.modal = true;
};

// Функция проверки состояния изображений после обновления DOM
const checkImagesState = () => {
  nextTick(() => {
    // Проверяем основное изображение
    if (mainImage.value && checkImageReady(mainImage.value)) {
      imageLoaded.main = true;
    }

    // Проверяем модальное изображение
    if (modalImage.value && checkImageReady(modalImage.value)) {
      imageLoaded.modal = true;
    }

    // Проверяем миниатюры
    Object.entries(thumbnailRefs.value).forEach(([key, element]) => {
      if (checkImageReady(element)) {
        imageLoaded.thumbnails[key] = true;
      }
    });
  });
};

// Функция инициализации состояния мини��тюр для текущего адреса
const initializeThumbnailsState = () => {
  const currentPhotos = addresses[selectedAddress.value].photos;
  currentPhotos.forEach((_, index) => {
    const key = `${selectedAddress.value}-${index}`;
    if (!(key in imageLoaded.thumbnails)) {
      imageLoaded.thumbnails[key] = false;
    }
  });
};

// Сброс состояния загрузки при смене фото с проверкой готовности
watch([selectedAddress, currentPhotoIndex], () => {
  imageLoaded.main = false;
  imageLoaded.modal = false;

  // Инициализируем состояние миниатюр для нового адреса
  initializeThumbnailsState();

  // Проверяем состояние после смены
  checkImagesState();
});

// Сброс состояния загрузки при открытии модального окна
watch(isModalOpen, (newVal) => {
  if (newVal) {
    imageLoaded.modal = false;
    // Проверяем состояние модального изображения
    nextTick(() => {
      if (modalImage.value && checkImageReady(modalImage.value)) {
        imageLoaded.modal = true;
      }
    });
  }
});

// Функция выбора адреса
const selectAddress = (index) => {
  selectedAddress.value = index;
  currentPhotoIndex.value = 0;

  // Очищаем старые ref миниатюр
  thumbnailRefs.value = {};

  // Инициализируем состояние для нового адреса
  initializeThumbnailsState();

  // Проверяем состояние после смены адреса
  checkImagesState();
};

const nextPhoto = () => {
  const totalPhotos = addresses[selectedAddress.value].photos.length;
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % totalPhotos;
  imageLoaded.main = false;

  // Проверяем состояние нового изображения
  checkImagesState();
};

const prevPhoto = () => {
  const totalPhotos = addresses[selectedAddress.value].photos.length;
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + totalPhotos) % totalPhotos;
  imageLoaded.main = false;

  // Проверяем состояние нового изображения
  checkImagesState();
};

const openModal = () => {
  if (!addresses[selectedAddress.value].photos[currentPhotoIndex.value]) return;
  modalPhotoIndex.value = currentPhotoIndex.value;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "auto";
};

const nextModalPhoto = () => {
  const totalPhotos = addresses[selectedAddress.value].photos.length;
  modalPhotoIndex.value = (modalPhotoIndex.value + 1) % totalPhotos;
  imageLoaded.modal = false;

  // Проверяем состояние нового модального изображения
  nextTick(() => {
    if (modalImage.value && checkImageReady(modalImage.value)) {
      imageLoaded.modal = true;
    }
  });
};

const prevModalPhoto = () => {
  const totalPhotos = addresses[selectedAddress.value].photos.length;
  modalPhotoIndex.value =
    (modalPhotoIndex.value - 1 + totalPhotos) % totalPhotos;
  imageLoaded.modal = false;

  // Проверяем состояние нового модального изображения
  nextTick(() => {
    if (modalImage.value && checkImageReady(modalImage.value)) {
      imageLoaded.modal = true;
    }
  });
};

// Закрытие модального окна по ESC
onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape" && isModalOpen.value) {
      closeModal();
    }
  };
  document.addEventListener("keydown", handleEscape);

  // Инициализируем состояние миниатюр при монтировании
  initializeThumbnailsState();

  // Проверяем состояние изображений при монтировании
  checkImagesState();

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>

<style scoped>
.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out 0.1s both;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f7fafc;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
