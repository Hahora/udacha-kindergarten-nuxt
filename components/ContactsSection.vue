<template>
  <section class="relative py-16 lg:py-20 overflow-hidden">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/1.svg"
        alt="Дети в детском саду"
        class="w-full h-full object-cover"
        sizes="100vw"
        quality="80"
        loading="lazy"
      />
      <!-- Градиентный оверлей -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Левая часть - текст -->
        <div class="text-white animate-fade-in-left">
          <h2 class="text-2xl lg:text-3xl font-bold mb-4">
            Консультируем по телефону<br />
            <span class="text-amber-400">и приглашаем в гости</span>
          </h2>

          <p class="text-lg leading-relaxed mb-6 text-blue-100">
            Прежде чем записать ребенка в группу, вы можете пообщаться с
            заведующей и педагогами
          </p>

          <!-- Преимущества -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center space-x-3">
              <div
                class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span class="text-white text-xs">✓</span>
              </div>
              <span class="text-white text-sm"
                >Личная встреча с заведующей</span
              >
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span class="text-white text-xs">✓</span>
              </div>
              <span class="text-white text-sm">Экскурсия по садику</span>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span class="text-white text-xs">✓</span>
              </div>
              <span class="text-white text-sm">Ответы на все вопросы</span>
            </div>
          </div>

          <!-- Контактная информация -->
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <p class="text-amber-400 font-semibold text-sm mb-1">
              Звоните прямо сейчас
            </p>
            <a
              href="tel:+79897026332"
              class="text-white font-bold text-lg hover:text-amber-400 transition-colors duration-200 block"
            >
              +7 989 702 63 32
            </a>
            <p class="text-blue-100 text-xs mt-1">Ежедневно с 9:00 до 21:00</p>
          </div>
        </div>

        <!-- Правая часть - форма -->
        <div class="animate-fade-in-right">
          <div
            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/50"
          >
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Записаться на консультацию
            </h3>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Имя -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200 text-sm"
                  placeholder="Например, Анна"
                />
              </div>

              <!-- Телефон -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Номер телефона *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  inputmode="tel"
                  @input="onPhoneInput"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200 text-sm"
                  placeholder="7XXXXXXXXXX"
                />
                <p v-if="phoneError" class="mt-1 text-xs text-red-600">
                  {{ phoneError }}
                </p>
              </div>

              <!-- Комментарий -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  v-model="form.comment"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200 text-sm resize-none"
                  placeholder="Ваш вопрос или пожелание..."
                ></textarea>
              </div>

              <!-- Выбор филиала -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Выберите филиал
                </label>
                <select
                  v-model="form.branch"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200 text-sm"
                >
                  <option value="">Не выбрано</option>
                  <option value="temernitskaya">ул. Темерницкая, 65</option>
                  <option value="stabilnaya">ул. Стабильная, 21</option>
                  <option value="krasnodarskaya">
                    ул. 2-я Краснодарская, 135 "А"
                  </option>
                </select>
              </div>

              <!-- Кнопка отправки -->
              <button
                type="submit"
                :disabled="isSubmitting || !isPhoneValid || !form.name"
                class="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                <span v-if="!isSubmitting">Отправить заявку</span>
                <span v-else class="flex items-center justify-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Отправляем...
                </span>
              </button>

              <!-- Соглашение -->
              <p class="text-xs text-gray-500 text-center">
                Нажимая кнопку «Отправить заявку», я подтверждаю своё согласие с
                <NuxtLink
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-amber-600 hover:text-amber-700 underline"
                >
                  политикой обработки персональных данных
                </NuxtLink>
              </p>
            </form>

            <!-- Успешная отправка -->
            <div
              v-if="isSubmitted"
              class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-in"
            >
              <div
                class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <span class="text-green-600 text-sm">✓</span>
              </div>
              <p class="font-semibold text-green-800 text-sm mb-1">
                Заявка отправлена!
              </p>
              <p class="text-green-600 text-xs">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Конфигурация API из env переменных
const config = useRuntimeConfig();
const API_BASE_URL = config.public.apiBaseUrl || "http://localhost:3000";
const API_ENDPOINT = config.public.apiCallbackEndpoint || "/callback";

// Реактивные данные формы
const form = ref({
  name: "",
  phone: "",
  comment: "",
  branch: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const phoneError = ref("");

// Маппинг филиалов на адреса
const branchAddresses = {
  temernitskaya: "ул. Темерницкая, 65",
  stabilnaya: "ул. Стабильная, 21",
  krasnodarskaya: 'ул. 2-я Краснодарская, 135 "А"',
};

// Валидация телефона: 11 цифр, первая — 7
const isPhoneValid = computed(() => {
  const digits = form.value.phone.replace(/\D/g, "");
  return digits.length === 11 && digits[0] === "7";
});

// Обработка ввода телефона
const onPhoneInput = (event) => {
  let raw = event.target.value || "";

  // Убираем буквы (латиница + кириллица)
  raw = raw.replace(/[A-Za-zА-Яа-яЁё]/g, "");

  // Плюс только в начале
  const hasPlus = raw.trim().startsWith("+");

  // Оставляем только цифры
  let digits = raw.replace(/\D/g, "");

  // Если есть цифры и первая не 7 — принудительно делаем 7
  if (digits.length > 0 && digits[0] !== "7") {
    digits = "7" + digits.slice(1);
  }

  // Отображаемое значение
  form.value.phone = (hasPlus ? "+" : "") + digits;

  // Валидация
  if (!digits) {
    phoneError.value = "";
    return;
  }

  if (digits.length !== 11 || digits[0] !== "7") {
    phoneError.value = "Введите номер в формате 7XXXXXXXXXX (11 цифр)";
  } else {
    phoneError.value = "";
  }
};

// Функция для нормализации номера телефона перед отправкой
const normalizePhoneNumber = (phone) => {
  // Оставляем только цифры
  const digits = phone.replace(/\D/g, "");

  // Если номер валидный (11 цифр, начинается с 7), добавляем + в начало
  if (digits.length === 11 && digits[0] === "7") {
    return "+" + digits;
  }

  // Если номер не валидный, возвращаем как есть (валидация поймает это раньше)
  return phone;
};

// Отправка данных на сервер
const sendCallbackRequest = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);
    throw error;
  }
};

// Обработка отправки формы
const handleSubmit = async () => {
  const digits = form.value.phone.replace(/\D/g, "");

  if (digits.length !== 11 || digits[0] !== "7") {
    phoneError.value = "Введите номер в формате 7XXXXXXXXXX (11 цифр)";
    const phoneInput = document.getElementById("phone");
    if (phoneInput) phoneInput.focus();
    return;
  }

  isSubmitting.value = true;

  try {
    // Нормализуем номер телефона перед отправкой
    const normalizedPhone = normalizePhoneNumber(form.value.phone);

    // Подготовка данных для отправки
    const requestData = {
      name: form.value.name.trim(),
      phone_number: normalizedPhone, // Отправляем нормализованный номер с +
      address: form.value.branch
        ? branchAddresses[form.value.branch] || ""
        : "",
      text: form.value.comment ? form.value.comment.trim() : "",
    };

    console.log("Отправка данных на:", `${API_BASE_URL}${API_ENDPOINT}`);
    console.log("Данные:", requestData);

    // Отправка на сервер
    await sendCallbackRequest(requestData);

    // Успешная отправка
    console.log("Заявка отправлена успешно!");

    // Показываем сообщение об успехе
    isSubmitted.value = true;

    // Сбрасываем форму через 5 секунд
    setTimeout(() => {
      isSubmitted.value = false;
      form.value = {
        name: "",
        phone: "",
        comment: "",
        branch: "",
      };
      phoneError.value = "";
    }, 5000);
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);

    // Можно добавить уведомление об ошибке
    if (process.client) {
      alert(
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз."
      );
    }
  } finally {
    isSubmitting.value = false;
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

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
