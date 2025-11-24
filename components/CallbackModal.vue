<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      @click="closeModal"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <!-- Modal -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div
          v-if="isOpen"
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto z-[100000]"
          @click.stop
        >
          <!-- Header -->
          <div
            class="p-6 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-blue-50 rounded-t-2xl"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl flex items-center justify-center"
                >
                  <!-- ИКОНКА ИЗ ПЕРВОГО СКРИПТА -->
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-black text-gray-900">
                    Обратный звонок
                  </h3>
                  <!-- текст "Мы перезвоним..." убран -->
                </div>
              </div>
              <button
                @click="closeModal"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-black text-gray-900 mb-2"
                >
                  Ваше имя *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 font-bold"
                  placeholder="Введите ваше имя"
                />
              </div>

              <!-- Phone Field -->
              <div>
                <label
                  for="phone"
                  class="block text-sm font-black text-gray-900 mb-2"
                >
                  Номер телефона *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  inputmode="tel"
                  @input="onPhoneInput"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 font-bold"
                  placeholder="7XXXXXXXXXX"
                />

                <p
                  v-if="phoneError"
                  class="mt-1 text-xs text-red-600 font-bold"
                >
                  {{ phoneError }}
                </p>
              </div>

              <!-- Branch Field (необязательное) -->
              <div>
                <label
                  for="branch"
                  class="block text-sm font-black text-gray-900 mb-2"
                >
                  Выберите филиал
                </label>
                <select
                  id="branch"
                  v-model="form.branch"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 font-bold"
                >
                  <option value="">Не выбрано</option>
                  <option value="temernitskaya">ул. Темерницкая, 65</option>
                  <option value="stabilnaya">ул. Стабильная, 21</option>
                  <option value="krasnodarskaya">
                    ул. 2-я Краснодарская, 135 "А"
                  </option>
                </select>
              </div>

              <!-- Comment Field (необязательное) -->
              <div>
                <label
                  for="comment"
                  class="block text-sm font-black text-gray-900 mb-2"
                >
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  v-model="form.comment"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 font-bold resize-none"
                  placeholder="Дополнительная информация..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting || !isPhoneValid || !form.name"
                class="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-4 rounded-xl font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting">Заказать звонок</span>
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938л3-2.647z"
                    ></path>
                  </svg>
                  Отправляем...
                </span>
              </button>
            </form>

            <!-- Privacy Notice -->
            <div class="mt-6 p-4 bg-gray-50 rounded-xl">
              <p class="text-xs text-gray-600 font-bold text-center">
                Нажимая кнопку "Заказать звонок" я подтверждаю своё согласие с
                <NuxtLink
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-amber-600 hover:text-amber-700"
                >
                  политикой обработки персональных данных
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

// Конфигурация API из env переменных
const config = useRuntimeConfig();
const API_BASE_URL = config.public.apiBaseUrl || "http://localhost:3000";
const API_ENDPOINT = config.public.apiCallbackEndpoint || "/callback";

// Данные формы
const form = ref({
  name: "",
  phone: "",
  branch: "",
  comment: "",
});

const isSubmitting = ref(false);
const phoneError = ref("");

// Валидация телефона: 11 цифр, первая — 7
const isPhoneValid = computed(() => {
  const digits = form.value.phone.replace(/\D/g, "");
  return digits.length === 11 && digits[0] === "7";
});

// Маппинг филиалов на адреса
const branchAddresses = {
  temernitskaya: "ул. Темерницкая, 65",
  stabilnaya: "ул. Стабильная, 21",
  krasnodarskaya: 'ул. 2-я Краснодарская, 135 "А"',
};

// Ввод телефона (оставляем как было)
const onPhoneInput = (event) => {
  let raw = event.target.value || "";
  raw = raw.replace(/[A-Za-zА-Яа-яЁё]/g, "");
  const hasPlus = raw.trim().startsWith("+");
  let digits = raw.replace(/\D/g, "");

  if (digits.length > 0 && digits[0] !== "7") {
    digits = "7" + digits.slice(1);
  }

  form.value.phone = (hasPlus ? "+" : "") + digits;

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

// Закрытие модалки
const closeModal = () => {
  emit("close");
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
    console.log("Исходный номер:", form.value.phone);
    console.log("Нормализованный номер:", normalizedPhone);
    console.log("Данные:", requestData);

    // Отправка на сервер
    await sendCallbackRequest(requestData);

    // Успешная отправка
    console.log("Заявка отправлена успешно!");

    // Показываем уведомление об успехе
    showSuccessNotification();

    // Сброс формы
    form.value = {
      name: "",
      phone: "",
      branch: "",
      comment: "",
    };
    phoneError.value = "";

    // Закрытие модалки
    closeModal();
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);

    // Показываем уведомление об ошибке
    showErrorNotification();
  } finally {
    isSubmitting.value = false;
  }
};

// Уведомление об успехе
const showSuccessNotification = () => {
  if (process.client) {
    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
  }
};

// Уведомление об ошибке
const showErrorNotification = () => {
  if (process.client) {
    alert(
      "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону."
    );
  }
};

// Закрытие по Escape
onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape" && props.isOpen) {
      closeModal();
    }
  };

  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

// Блокируем скролл body, когда модалка открыта
watch(
  () => props.isOpen,
  (isOpen) => {
    if (process.client) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }
);
</script>
