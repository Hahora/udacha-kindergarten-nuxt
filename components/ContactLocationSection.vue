<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <!-- Декоративный фон -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50"
    ></div>

    <!-- Декоративные элементы -->
    <div
      class="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-float"
    ></div>
    <div
      class="absolute bottom-32 right-16 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float-delayed"
    ></div>
    <div
      class="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200/25 rounded-full blur-lg animate-float-reverse"
    ></div>

    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Заголовок -->
      <div class="text-center mb-12 lg:mb-16 animate-fade-in-up">
        <h2
          class="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
          style="font-family: &quot;315Karusel&quot;, cursive"
        >
          Наши адреса в Ростове-на-Дону
        </h2>
        <div class="w-16 h-0.5 bg-amber-400 mx-auto"></div>
      </div>

      <!-- Основной контент -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
        <!-- Карта - теперь первая на мобильных -->
        <div class="lg:col-span-3 order-1">
          <div
            class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <!-- Заголовок карты для мобильных -->
            <div class="p-4 border-b border-gray-100 lg:hidden">
              <h3 class="font-black text-gray-900 text-center text-lg">
                {{ locations[selectedLocation].name }}
              </h3>
              <p class="text-sm text-gray-600 text-center font-bold mt-1">
                {{ locations[selectedLocation].address }}
              </p>
            </div>

            <div
              class="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px]"
            >
              <!-- Заглушка пока карта загружается -->
              <div
                v-if="!mapLoaded"
                class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <div class="text-center">
                  <div
                    class="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                  ></div>
                  <p class="text-gray-600 font-bold">Загрузка карты...</p>
                </div>
              </div>

              <!-- Сообщение об ошибке -->
              <div
                v-if="mapError"
                class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <div class="text-center p-6">
                  <svg
                    class="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                  <p class="text-gray-600 font-bold mb-2">
                    Карта временно недоступна
                  </p>
                  <button
                    @click="openInMaps"
                    class="px-4 py-2 bg-amber-400 text-white rounded-lg font-bold hover:bg-amber-500 transition-colors"
                  >
                    Открыть в Яндекс.Картах
                  </button>
                </div>
              </div>

              <div id="yandex-map" class="w-full h-full rounded-xl"></div>
            </div>
          </div>
        </div>

        <!-- Список адресов -->
        <div class="lg:col-span-2 space-y-4 order-2">
          <div
            v-for="(location, index) in locations"
            :key="index"
            @click="selectLocation(index)"
            class="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/50 cursor-pointer transition-all duration-300 hover:shadow-xl animate-fade-in-up"
            :class="[
              selectedLocation === index
                ? 'ring-2 ring-amber-400 bg-amber-50/50'
                : 'hover:bg-amber-50/30',
            ]"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-start gap-3 sm:gap-4">
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm flex-shrink-0"
                :class="location.color"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-black text-gray-900 mb-1 text-sm sm:text-base">
                  {{ location.name }}
                </h3>
                <p class="text-gray-700 text-xs sm:text-sm mb-2 font-bold">
                  {{ location.address }}
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <svg
                    class="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    />
                  </svg>
                  <span class="font-bold">{{ location.district }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Контактная информация -->
      <div
        class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <!-- Телефон -->
            <div class="text-center sm:text-left">
              <div
                class="flex items-center justify-center sm:justify-start gap-3 mb-3"
              >
                <div
                  class="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"
                    />
                  </svg>
                </div>
                <h3 class="font-black text-lg">Телефон</h3>
              </div>
              <a
                href="tel:+79897026332"
                class="text-amber-300 hover:text-amber-200 transition-colors font-bold text-lg"
              >
                +7 (989) 702-63-32
              </a>
            </div>

            <!-- Время работы -->
            <div class="text-center sm:text-left">
              <div
                class="flex items-center justify-center sm:justify-start gap-3 mb-3"
              >
                <div
                  class="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                    />
                  </svg>
                </div>
                <h3 class="font-black text-lg">Режим работы</h3>
              </div>
              <div class="text-amber-300">
                <div class="font-bold text-lg">9:00-21:00</div>
                <div class="text-sm text-gray-300 font-bold">
                  Понедельник-пятница
                </div>
              </div>
            </div>

            <!-- Социальные сети -->
            <div class="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div
                class="flex items-center justify-center sm:justify-start gap-3 mb-3"
              >
                <div
                  class="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 9h-2.05a15.78 15.78 0 0 0-1.234-4.502A8.01 8.01 0 0 1 17 11zm-3.307 0H10.31a13.78 13.78 0 0 1 1.35-4.83A13.78 13.78 0 0 1 13.693 11zM9.05 11H7a8.01 8.01 0 0 1 3.284-4.502A15.78 15.78 0 0 0 9.05 11zm0 2a15.78 15.78 0 0 0 1.234 4.502A8.01 8.01 0 0 1 7 13h2.05zm1.26 0h3.384a13.78 13.78 0 0 1-1.35 4.83A13.78 13.78 0 0 1 10.31 13zm4.383 0H17a8.01 8.01 0 0 1-3.284 4.502A15.78 15.78 0 0 0 14.693 13z"
                    />
                  </svg>
                </div>
                <h3 class="font-black text-lg">Мы в соцсетях</h3>
              </div>
              <div class="flex justify-center sm:justify-start gap-3">
                <a
                  href="https://t.me/udacharnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  aria-label="Telegram"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388 4.332-3.912c.192-.168-.036-.264-.3-.096l-5.364 3.372-2.304-.72c-.504-.156-.516-.504.108-.744l8.988-3.456c.42-.156.792.096.636.744z"
                    />
                  </svg>
                </a>
                <a
                  href="https://vk.com/public211187234"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="VKontakte"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.302.58-1.494c.588-.188 1.342 1.26 2.142 1.818.604.42 1.062.328 1.062.328l2.124-.03s1.112-.07.584-.95c-.043-.072-.308-.652-1.588-1.844-1.34-1.246-1.16-.044.454-1.34.984-1.788 1.378-2.882 1.254-3.35-.118-.446-.848-.328-.848-.328l-2.392.015s-.178-.024-.31.055c-.126.075-.206.25-.206.25s-.372.99-.868 1.834c-1.048 1.784-1.466 1.878-1.638 1.766-.4-.26-.3-1.044-.3-1.602 0-1.742.264-2.468-.514-2.654-.258-.062-.448-.103-1.106-.11-.844-.009-1.558.003-1.962.201-.268.132-.476.426-.35.443.156.021.51.096.698.352.242.33.234.072.234 1.178 0 0 .14 2.054-.326 2.31-.32.175-.758-.182-1.698-1.81-.482-.824-.846-1.734-.846-1.734s-.07-.172-.195-.264c-.151-.111-.363-.146-.363-.146l-2.274.015s-.341.01-.466.158c-.111.131-.009.402-.009.402s1.748 4.104 3.728 6.17c1.816 1.89 3.876 1.768 3.876 1.768z"
                    />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=79085019627&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C+%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5+%D0%BE+%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC+%D1%81%D0%B0%D0%B4%D0%B5+%27%D0%A3%D0%B4%D0%B0%D1%87%D0%B0%27&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Данные о локациях
const locations = ref([
  {
    name: "Центральный филиал",
    address: "ул. Темерницкая, 65",
    district: "Центр города",
    color: "bg-blue-500",
    coords: [47.219061, 39.713261],
  },
  {
    name: "Западный филиал",
    address: "ул. Стабильная, 21",
    district: "Западный район",
    color: "bg-green-500",
    coords: [47.216392, 39.616863],
  },
  {
    name: "Западный филиал",
    address: 'ул. 2-я Краснодарская, 135 "А"',
    district: "Западный район",
    color: "bg-orange-500",
    coords: [47.203299, 39.633527],
  },
]);

const selectedLocation = ref(0);
const mapLoaded = ref(false);
const mapError = ref(false);
let yandexMap = null;
let placemarks = [];

// Достаём ключ из runtimeConfig
const config = useRuntimeConfig();
const apiKey = config.public.yandexMapsApiKey;

const selectLocation = (index) => {
  selectedLocation.value = index;
  if (yandexMap && placemarks[index]) {
    try {
      yandexMap.setCenter(locations.value[index].coords, 15);

      placemarks.forEach((placemark, i) => {
        if (placemark && placemark.balloon) {
          try {
            if (i === index) {
              placemark.balloon.open();
            } else {
              placemark.balloon.close();
            }
          } catch (error) {
            console.warn("Ошибка управления балуном:", error);
          }
        }
      });
    } catch (error) {
      console.warn("Ошибка при выборе локации:", error);
    }
  }
};

const openInMaps = () => {
  const location = locations.value[selectedLocation.value];
  const address = `Ростов-на-Дону, ${location.address}`;
  const encodedAddress = encodeURIComponent(address);
  window.open(`https://yandex.ru/maps/?text=${encodedAddress}`, "_blank");
};

onMounted(() => {
  // Проверяем наличие API ключа
  if (!apiKey) {
    console.error("Yandex Maps API ключ не найден");
    mapError.value = true;
    return;
  }

  // Проверяем, загружена ли уже API Яндекс Карт
  if (typeof ymaps === "undefined") {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.type = "text/javascript";

    script.onload = initYandexMap;
    script.onerror = () => {
      console.error("Ошибка загрузки Yandex Maps API");
      mapError.value = true;
      mapLoaded.value = false;
    };

    document.head.appendChild(script);
  } else {
    initYandexMap();
  }
});

const initYandexMap = () => {
  if (!apiKey) {
    mapError.value = true;
    return;
  }

  try {
    ymaps.ready(() => {
      const mapElement = document.getElementById("yandex-map");
      if (!mapElement) {
        console.error("Элемент карты не найден");
        mapError.value = true;
        return;
      }

      try {
        yandexMap = new ymaps.Map("yandex-map", {
          center: locations.value[selectedLocation.value].coords,
          zoom: 13,
          controls: ["zoomControl", "fullscreenControl"],
        });

        mapLoaded.value = true;
        mapError.value = false;

        locations.value.forEach((location, index) => {
          try {
            const placemark = new ymaps.Placemark(
              location.coords,
              {
                balloonContentHeader: location.name,
                balloonContentBody: `<strong>Адрес:</strong> ${location.address}<br>
                                    <strong>Район:</strong> ${location.district}`,
                hintContent: location.name,
              },
              {
                preset: "islands#icon",
                iconColor: getIconColor(location.color),
              }
            );

            placemark.events.add("click", () => {
              selectLocation(index);
            });

            yandexMap.geoObjects.add(placemark);
            placemarks.push(placemark);
          } catch (error) {
            console.warn(`Ошибка создания метки для ${location.name}:`, error);
          }
        });

        // Открываем балун для выбранной локации
        if (
          placemarks[selectedLocation.value] &&
          placemarks[selectedLocation.value].balloon
        ) {
          try {
            placemarks[selectedLocation.value].balloon.open();
          } catch (error) {
            console.warn("Ошибка открытия балуна:", error);
          }
        }
      } catch (error) {
        console.error("Ошибка создания карты:", error);
        mapError.value = true;
        mapLoaded.value = false;
      }
    });
  } catch (error) {
    console.error("Ошибка инициализации ymaps:", error);
    mapError.value = true;
    mapLoaded.value = false;
  }
};

const getIconColor = (tailwindColor) => {
  const colorMap = {
    "bg-blue-500": "#3b82f6",
    "bg-green-500": "#10b981",
    "bg-orange-500": "#f97316",
  };
  return colorMap[tailwindColor] || "#3b82f6";
};

onUnmounted(() => {
  try {
    // Закрываем все балуны перед уничтожением
    if (placemarks && placemarks.length > 0) {
      placemarks.forEach((placemark) => {
        if (placemark && placemark.balloon) {
          try {
            placemark.balloon.close();
          } catch (error) {
            // Игнорируем ошибки закрытия балунов
          }
        }
      });
    }

    // Очищаем карту
    if (yandexMap) {
      try {
        if (yandexMap.geoObjects) {
          yandexMap.geoObjects.removeAll();
        }
        if (yandexMap.destroy) {
          yandexMap.destroy();
        }
      } catch (error) {
        console.warn("Ошибка при уничтожении карты:", error);
      }
      yandexMap = null;
    }

    // Очищаем массив меток
    placemarks = [];
  } catch (error) {
    console.warn("Ошибка при очистке компонента:", error);
  }
});
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
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

/* Анимации для декоративных элементов */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite 2s;
}

.animate-float-reverse {
  animation: floatReverse 5s ease-in-out infinite 1s;
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

/* Эффекты для карты */
#yandex-map {
  filter: grayscale(0.1) contrast(1.05);
  transition: filter 0.3s ease;
}

#yandex-map:hover {
  filter: grayscale(0) contrast(1.1);
}

/* Адаптивность для мобильных устройств */
@media (max-width: 1024px) {
  .h-\[400px\] {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .h-\[400px\] {
    height: 400px;
  }

  .mb-16 {
    margin-bottom: 3rem;
  }

  .mb-12 {
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .h-\[400px\] {
    height: 350px;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Уменьшаем отступы для мобильных */
  .space-y-4 > * + * {
    margin-top: 0.75rem;
  }
}

@media (max-width: 480px) {
  .h-\[400px\] {
    height: 300px;
  }

  .p-6 {
    padding: 1rem;
  }

  .gap-6 {
    gap: 1rem;
  }

  .text-3xl {
    font-size: 1.75rem;
  }
}

/* Стили для состояний загрузки и ошибок */
.loading-spinner {
  border-color: #f59e0b;
  border-top-color: transparent;
}

/* Плавные переходы для интерактивных элементов */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Улучшенные тени для карточек */
.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Стили для кнопок */
button:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Улучшенная доступность */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-float,
  .animate-float-delayed,
  .animate-float-reverse {
    animation: none;
  }

  .transition-all {
    transition: none;
  }
}
</style>
