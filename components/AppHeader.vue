<template>
  <!-- Под-хедер с контактами -->
  <div
    class="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 hidden lg:block"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-2">
        <!-- Контакты слева -->
        <div class="flex items-center space-x-6">
          <a
            href="tel:+79897026332"
            class="text-sm font-bold text-gray-700 hover:text-amber-600 transition-colors"
          >
            +7 (989) 702-63-32
          </a>
          <NuxtLink
            to="/license"
            class="text-xs text-gray-500 font-bold hover:text-amber-600 transition-colors"
          >
            Лицензия №6835 выдана Региональной службой по надзору и контролю в
            сфере образования Ростовской Области
          </NuxtLink>
        </div>

        <!-- Социальные сети справа -->
        <div class="flex items-center">
          <a
            href="https://wa.me/79085019627"
            class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
          </a>
          <a
            href="https://t.me/udacharnd"
            class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors ml-2"
            aria-label="Telegram"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388 4.332-3.912c.192-.168-.036-.264-.3-.096l-5.364 3.372-2.304-.72c-.504-.156-.516-.504.108-.744l8.988-3.456c.42-.156.792.096.636.744z"
              />
            </svg>
          </a>
          <a
            href="https://vk.com/public211187234"
            class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors ml-2"
            aria-label="VKontakte"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.302.58-1.494c.588-.188 1.342 1.26 2.142 1.818.604.42 1.062.328 1.062.328l2.124-.03s1.112-.07.584-.95c-.043-.072-.308-.652-1.588-1.844-1.34-1.246-1.16-.044.454-1.34.984-1.788 1.378-2.882 1.254-3.35-.118-.446-.848-.328-.848-.328l-2.392.015s-.178-.024-.31.055c-.126.075-.206.25-.206.25s-.372.99-.868 1.834c-1.048 1.784-1.466 1.878-1.638 1.766-.4-.26-.3-1.044-.3-1.602 0-1.742.264-2.468-.514-2.654-.258-.062-.448-.103-1.106-.11-.844-.009-1.558.003-1.962.201-.268.132-.476.426-.35.443.156.021.51.096.698.352.242.33.234.072.234 1.178 0 0 .14 2.054-.326 2.31-.32.175-.758-.182-1.698-1.81-.482-.824-.846-1.734-.846-1.734s-.07-.172-.195-.264c-.151-.111-.363-.146-.363-.146l-2.274.015s-.341.01-.466.158c-.111.131-.009.402-.009.402s1.748 4.104 3.728 6.17c1.816 1.89 3.876 1.768 3.876 1.768z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Основной хедер -->
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
      subHeaderHeight,
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-3">
        <!-- Логотип -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div class="relative">
            <NuxtImg
              src="/images/logo.webp"
              alt="Логотип детского сада Удача"
              width="70"
              height="50"
              class="object-contain max-h-10"
              loading="eager"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h2
              class="text-sm sm:text-base font-black text-gray-900 leading-tight truncate"
            >
              Детский сад "Удача"
            </h2>
            <p class="text-xs text-gray-600 font-bold truncate">
              Ростов-на-Дону
            </p>
          </div>
        </NuxtLink>

        <!-- Центральная навигация (только на больших экранах) -->
        <nav class="hidden xl:flex items-center space-x-6">
          <a
            @click.prevent="handleNavigation('about')"
            href="/#about"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            О нас
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('age-groups')"
            href="/#age-groups"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Группы
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('lessons')"
            href="/#lessons"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Занятия
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('programs')"
            href="/#programs"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Программы
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('gallery')"
            href="/#gallery"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Фотогаллерея
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('pricing')"
            href="/#pricing"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Цены
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('faq')"
            href="/#faq"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Вопросы
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('testimonials')"
            href="/#testimonials"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Отзывы
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            @click.prevent="handleNavigation('contacts')"
            href="/#contacts"
            class="text-gray-700 hover:text-amber-500 transition-colors font-bold text-sm relative group cursor-pointer"
          >
            Контакты
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </nav>

        <!-- Правая часть -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- Кнопка обратного звонка -->
          <button
            @click="handleCallbackClick"
            class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span class="hidden sm:inline">Обратный звонок</span>
            <span class="sm:hidden">Звонок</span>
          </button>

          <!-- Бургер меню (только на мобильных) -->
          <button
            @click="toggleMobileMenu"
            class="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex flex-col space-y-1"
            aria-label="Открыть меню"
          >
            <span
              class="w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
            ></span>
            <span
              class="w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"
              :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-200"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Боковое меню - улучшенные анимации -->
  <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[9999]">
    <!-- Overlay с блюром -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Боковая панель -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-200 ease-in"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[10000] flex flex-col"
        @click.stop
      >
        <!-- Заголовок меню -->
        <div class="p-4 border-b border-gray-200 bg-white flex-shrink-0">
          <div class="flex items-center justify-between">
            <NuxtLink
              to="/"
              class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              @click="closeMobileMenu"
            >
              <NuxtImg
                src="/images/logo.webp"
                alt="Логотип детского сада Удача"
                width="70"
                height="50"
                class="object-contain max-h-10"
                loading="eager"
              />
              <div>
                <h3 class="font-black text-gray-900 text-sm">
                  Детский сад "Удача"
                </h3>
                <p class="text-xs text-gray-600 font-bold">Ростов-на-Дону</p>
              </div>
            </NuxtLink>
            <button
              @click="closeMobileMenu"
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

        <!-- Прокручиваемый контент -->
        <div class="flex-1 overflow-y-auto">
          <!-- Навигация -->
          <nav class="p-4">
            <div class="space-y-1">
              <a
                v-for="(link, index) in navigationLinks"
                :key="link.href"
                @click.prevent="
                  handleNavigation(link.section);
                  closeMobileMenu();
                "
                :href="link.href"
                class="menu-item flex items-center space-x-3 text-gray-700 hover:text-amber-500 transition-all duration-200 font-bold py-2 px-3 rounded-lg hover:bg-amber-50 text-sm cursor-pointer"
                :style="{ animationDelay: `${index * 50}ms` }"
              >
                <span>{{ link.text }}</span>
              </a>
            </div>
          </nav>

          <!-- Адреса филиалов - компактно -->
          <div class="px-4 py-3 border-t border-gray-100">
            <h4 class="text-sm font-black text-gray-900 mb-3">Наши адреса:</h4>
            <div class="space-y-2">
              <div
                v-for="(location, index) in locations"
                :key="index"
                class="menu-item flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                :style="{
                  animationDelay: `${(navigationLinks.length + index) * 50}ms`,
                }"
              >
                <div
                  class="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  :class="location.color"
                >
                  {{ index + 1 }}
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-black text-gray-900 truncate">
                    {{ location.name }}
                  </p>
                  <p class="text-xs text-gray-600 font-bold truncate">
                    {{ location.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Контакты -->
          <div class="px-4 py-3 border-t border-gray-100">
            <div class="space-y-3">
              <!-- Телефон -->
              <div
                class="menu-item"
                :style="{
                  animationDelay: `${(navigationLinks.length + locations.length) * 50}ms`,
                }"
              >
                <a
                  href="tel:+79897026332"
                  class="text-base font-black text-gray-900 hover:text-amber-600 transition-colors block"
                >
                  +7 (989) 702-63-32
                </a>
                <NuxtLink
                  to="/license"
                  class="text-xs text-gray-600 font-bold hover:text-amber-600 transition-colors"
                  @click="closeMobileMenu"
                >
                  Лицензия №6835 от 25 сентября 2018 года
                </NuxtLink>
              </div>

              <!-- Социальные сети -->
              <div
                class="menu-item"
                :style="{
                  animationDelay: `${(navigationLinks.length + locations.length + 1) * 50}ms`,
                }"
              >
                <p class="text-sm font-bold text-gray-700 mb-2">
                  Мы в соцсетях:
                </p>
                <div class="flex space-x-2">
                  <a
                    href="https://wa.me/79085019627"
                    class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/udacharnd"
                    class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    aria-label="Telegram"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388 4.332-3.912c.192-.168-.036-.264-.3-.096l-5.364 3.372-2.304-.72c-.504-.156-.516-.504.108-.744l8.988-3.456c.42-.156.792.096.636.744z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/public211187234"
                    class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="VKontakte"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.426.132-.426s-.02-1.302.58-1.494c.588-.188 1.342 1.26 2.142 1.818.604.42 1.062.328 1.062.328l2.124-.03s1.112-.07.584-.95c-.043-.072-.308-.652-1.588-1.844-1.34-1.246-1.16-.044.454-1.34.984-1.788 1.378-2.882 1.254-3.35-.118-.446-.848-.328-.848-.328l-2.392.015s-.178-.024-.31.055c-.126.075-.206.25-.206.25s-.372.99-.868 1.834c-1.048 1.784-1.466 1.878-1.638 1.766-.4-.26-.3-1.044-.3-1.602 0-1.742.264-2.468-.514-2.654-.258-.062-.448-.103-1.106-.11-.844-.009-1.558.003-1.962.201-.268.132-.476.426-.35.443.156.021.51.096.698.352.242.33.234.072.234 1.178 0 0 .14 2.054-.326 2.31-.32.175-.758-.182-1.698-1.81-.482-.824-.846-1.734-.846-1.734s-.07-.172-.195-.264c-.151-.111-.363-.146-.363-.146l-2.274.015s-.341.01-.466.158c-.111.131-.009.402-.009.402s1.748 4.104 3.728 6.17c1.816 1.89 3.876 1.768 3.876 1.768z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопка обратного звонка - зафиксирована внизу -->
        <div class="p-4 border-t border-gray-200 bg-white flex-shrink-0">
          <button
            @click="handleCallbackClick"
            class="menu-item w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-3 rounded-xl text-sm font-black hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transformhover:scale-105"
            :style="{
              animationDelay: `${(navigationLinks.length + locations.length + 2) * 50}ms`,
            }"
          >
            Обратный звонок
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
// Получаем предоставленную функцию открытия модального окна
const openCallbackModal = inject("openCallbackModal");
const route = useRoute();
const router = useRouter();

// Реактивные данные
const isScrolled = ref(false);
const subHeaderHeight = ref("lg:top-8");
const isMobileMenuOpen = ref(false);

// Обработка скролла
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    // При скролле поднимаем основной хедер выше
    subHeaderHeight.value = window.scrollY > 50 ? "lg:top-0" : "lg:top-8";
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});

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

// Методы
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleCallbackClick = () => {
  if (openCallbackModal) {
    openCallbackModal();
  } else {
    console.warn("openCallbackModal не предоставлен");
  }
  closeMobileMenu();
};

// Навигационные ссылки - синхронизированы с десктопной версией
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

<style scoped>
/* Стили остаются без изменений */
.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out 0.1s both;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: floatSlow 25s ease-in-out infinite 5s;
}

.menu-item {
  opacity: 0;
  transform: translateX(20px);
  animation: slideInRight 0.3s ease-out forwards;
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
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(2deg);
  }
  50% {
    transform: translateY(-5px) rotate(-1deg);
  }
  75% {
    transform: translateY(-10px) rotate(1deg);
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

.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.7);
}
</style>
