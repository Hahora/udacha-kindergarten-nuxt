<template>
  <footer
    class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
  >
    <!-- Градиентные круги -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-32 -top-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -right-32 -bottom-32 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <!-- Основной контент футера -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- О компании -->
        <div class="animate-fade-in-up">
          <div class="flex items-center space-x-3 mb-6">
            <div class="relative">
              <NuxtImg
                src="/images/logo.webp"
                alt="Логотип детского сада Удача"
                width="60"
                height="40"
                class="object-contain max-h-10"
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-xl font-black text-white">Детский сад "Удача"</h3>
              <p class="text-gray-300 text-sm font-bold">Ростов-на-Дону</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6 font-bold leading-relaxed text-sm">
            Частные детские сады с лицензией на образовательную деятельность.
            Принимаем материнский капитал.
          </p>

          <!-- Социальные сети -->
          <div class="flex space-x-3">
            <a
              href="https://wa.me/79085019627"
              class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </svg>
            </a>
            <a
              href="https://t.me/udacharnd"
              class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
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
              class="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="VKontakte"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.302.58-1.494c.588-.188 1.342 1.26 2.142 1.818.604.42 1.062.328 1.062.328l2.124-.03s1.112-.07.584-.95c-.043-.072-.308-.652-1.588-1.844-1.34-1.246-1.16-.044.454-1.34.984-1.788 1.378-2.882 1.254-3.35-.118-.446-.848-.328-.848-.328l-2.392.015s-.178-.024-.31.055c-.126.075-.206.25-.206.25s-.372.99-.868 1.834c-1.048 1.784-1.466 1.878-1.638 1.766-.4-.26-.3-1.044-.3-1.602 0-1.742.264-2.468-.514-2.654-.258-.062-.448-.103-1.106-.11-.844-.009-1.558.003-1.962.201-.268.132-.476.426-.35.443.156.021.51.096.698.352.242.33.234.072.234 1.178 0 0 .14 2.054-.326 2.31-.32.175-.758-.182-1.698-1.81-.482-.824-.846-1.734-.846-1.734s-.07-.172-.195-.264c-.151-.111-.363-.146-.363-.146l-2.274.015s-.341.01-.466.158c-.111.131-.009.402-.009.402s1.748 4.104 3.728 6.17c1.816 1.89 3.876 1.768 3.876 1.768z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div class="animate-fade-in-up" style="animation-delay: 0.1s">
          <h4 class="text-lg font-black text-white mb-6 flex items-center">
            <div
              class="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full mr-3"
            ></div>
            Навигация
          </h4>
          <ul class="space-y-3">
            <li v-for="link in navigationLinks" :key="link.href">
              <a
                :href="link.href"
                @click.prevent="scrollToSection(link.section)"
                class="text-gray-300 hover:text-amber-400 transition-colors font-bold text-sm flex items-center group cursor-pointer"
              >
                <svg
                  class="w-4 h-4 mr-2 text-amber-400/60 group-hover:text-amber-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <h4 class="text-lg font-black text-white mb-6 flex items-center">
            <div
              class="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full mr-3"
            ></div>
            Контакты
          </h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="w-8 h-8 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              >
                <svg
                  class="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </div>
              <div>
                <a
                  href="tel:+79085019627"
                  class="text-white font-black hover:text-amber-400 transition-colors text-lg"
                >
                  +7 (908) 501-96-27
                </a>
                <p class="text-gray-400 text-sm font-bold mt-1">
                  ПН-ПТ 9:00-21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Адреса -->
        <div class="animate-fade-in-up" style="animation-delay: 0.3s">
          <h4 class="text-lg font-black text-white mb-6 flex items-center">
            <div
              class="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full mr-3"
            ></div>
            Наши филиалы
          </h4>
          <div class="space-y-4">
            <div
              v-for="(location, index) in locations"
              :key="index"
              class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              @click="scrollToSection('contacts')"
            >
              <div class="flex items-start space-x-3">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-black"
                  :class="location.color"
                >
                  {{ index + 1 }}
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-white font-black text-sm leading-tight">
                    {{ location.name }}
                  </p>
                  <p class="text-gray-300 text-xs font-bold mt-1 leading-tight">
                    {{ location.address }}
                  </p>
                  <p class="text-amber-400 text-xs font-bold mt-1">
                    {{ location.district }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Разделитель -->
      <div class="border-t border-white/10 pt-8">
        <div
          class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          <!-- Копирайт и лицензия -->
          <div class="text-center lg:text-left">
            <p class="text-white font-black text-sm mb-2">
              © 2011-2025 Детский сад "Удача"
            </p>
            <NuxtLink
              to="/license"
              class="text-gray-400 text-xs font-bold hover:text-amber-400 transition-colors cursor-pointer"
            >
              Лицензия №6835 от 25.09.2018
            </NuxtLink>
          </div>

          <!-- Ссылки на документы -->
          <div class="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <NuxtLink
              to="/privacy-policy"
              class="text-gray-300 hover:text-amber-400 transition-colors font-bold flex items-center group text-xs"
            >
              <svg
                class="w-3 h-3 mr-2 text-amber-400/60 group-hover:text-amber-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Политика конфиденциальности
            </NuxtLink>
            <a
              href="https://disk.yandex.ru/d/vrPfahlc2lceEA"
              class="text-gray-300 hover:text-amber-400 transition-colors font-bold flex items-center group text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-3 h-3 mr-2 text-amber-400/60 group-hover:text-amber-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-1a1 1 0 00-1-1H9a1 1 0 00-1 1v1a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
              Образовательная программа
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// Функция для плавного скролла к секциям
const scrollToSection = (sectionId) => {
  // Если мы уже на главной странице
  if (route.path === "/") {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  } else {
    // Если на другой странице, переходим на главную с якорем
    router.push(`/#${sectionId}`);
  }
};

// Улучшенная функция для обработки навигации
const handleNavigation = (sectionId) => {
  if (route.path === "/") {
    // Если уже на главной, скроллим к секции
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Обновляем URL с якорем
      window.history.replaceState(null, null, `/#${sectionId}`);
    }
  } else {
    // Если на другой странице, переходим на главную с якорем
    router.push(`/#${sectionId}`);
  }
};

// Навигационные ссылки
const navigationLinks = [
  { href: "/#about", text: "О нас", section: "about" },
  { href: "/#age-groups", text: "Группы", section: "age-groups" },
  { href: "/#lessons", text: "Занятия", section: "lessons" },
  { href: "/#programs", text: "Программы", section: "programs" },
  { href: "/#gallery", text: "Фотогаллерея", section: "gallery" },
  { href: "/#pricing", text: "Цены", section: "pricing" },
  { href: "/#faq", text: "Вопросы", section: "faq" },
  { href: "/#testimonials", text: "Отзывы", section: "testimonials" },
  { href: "/#contacts", text: "Контакты", section: "contacts" },
];

// Адреса филиалов
const locations = [
  {
    name: "Центральный филиал",
    address: "ул. Темерницкая, 65",
    district: "Центр города",
    color: "bg-blue-500",
  },
  {
    name: "Западный филиал",
    address: "ул. Стабильная, 21",
    district: "Западный район",
    color: "bg-green-500",
  },
  {
    name: "Западный филиал",
    address: 'ул. 2-я Краснодарская, 135 "А"',
    district: "Западный район",
    color: "bg-orange-500",
  },
];
</script>
