<template>
  <div
    class="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
    id="home"
  >
    <!-- Главный баннер с передачей функции -->
    <HeroSection id="home" :openCallbackModal="openCallbackModal" />

    <SectionDivider type="wave" />

    <!-- О нас -->
    <AboutSection id="about" />

    <SectionDivider type="wave" />

    <!-- Возрастные группы -->
    <AgeGroupsSection id="age-groups" />

    <SectionDivider type="wave" />

    <LessonsSection id="lessons" />

    <SectionDivider type="wave" />

    <!-- Программы и занятия -->
    <ProgramsSection id="programs" />

    <SectionDivider type="wave" />

    <!-- Фотогалерея -->
    <PhotoGallerySection id="gallery" />

    <SectionDivider type="wave" />

    <!-- Цены -->
    <PricingSection id="pricing" />

    <SectionDivider type="wave" />

    <!-- Вопросы и ответы -->
    <QuestionsSection id="faq" />

    <SectionDivider type="wave" />

    <!-- Отзывы -->
    <TestimonialsSection id="testimonials" />

    <!-- Контакты -->
    <ContactsSection id="consultation" />

    <ContactLocationSection id="contacts" />

    <!-- Модальное окно обратного звонка -->
    <CallbackModal :is-open="isCallbackModalOpen" @close="closeCallbackModal" />
  </div>
</template>

<script setup>
// Состояние модального окна
const isCallbackModalOpen = ref(false);

// Функции для управления модальным окном
const openCallbackModal = () => {
  isCallbackModalOpen.value = true;
};

const closeCallbackModal = () => {
  isCallbackModalOpen.value = false;
};

//SEO оптимизация
useSeoMeta({
  // Основные мета-теги
  title:
    'Детский сад "Удача" в Ростове-на-Дону - Лицензированное дошкольное образование',
  description:
    'Частный детский сад "Удача" в Ростове-на-Дону ⭐ Лицензированное образование для детей 1,3-7 лет ⭐ 3 филиала ⭐ Принимаем материнский капитал ⭐ Работаем 7:00-20:00 ⭐ ☎️ +7 (908) 501-96-27',
  keywords:
    "детский сад Ростов-на-Дону, частный детский сад, дошкольное образование, материнский капитал, подготовка к школе, развивающие занятия, лицензия образование, детский сад Удача, ясли, группы кратковременного пребывания",

  // Автор и права
  author: 'Детский сад "Удача"',
  creator: 'Детский сад "Удача"',
  publisher: 'Детский сад "Удача"',

  // Языковые настройки
  language: "ru",
  locale: "ru_RU",

  // Роботы и индексация
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow, max-image-preview:large",

  // Географические данные
  "geo.region": "RU-ROS",
  "geo.placename": "Ростов-на-Дону",
  "geo.position": "47.219061;39.713261",
  ICBM: "47.219061, 39.713261",

  // Контактная информация
  "contact:phone_number": "+7 (908) 501-96-27",
  "contact:email": "xenova.v2@yandex.ru",
  "contact:address": "ул. Темерницкая, 65, Ростов-на-Дону, 344002",

  // Время работы
  "business:hours:monday": "07:00-20:00",
  "business:hours:tuesday": "07:00-20:00",
  "business:hours:wednesday": "07:00-20:00",
  "business:hours:thursday": "07:00-20:00",
  "business:hours:friday": "07:00-20:00",
  "business:hours:saturday": "closed",
  "business:hours:sunday": "closed",

  // Тематические теги
  "theme-color": "#F59E0B",
  "msapplication-TileColor": "#F59E0B",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "default",
  "format-detection": "telephone=yes",

  // Open Graph теги для социальных сетей
  ogType: "website",
  ogSiteName: 'Детский сад "Удача"',
  ogTitle:
    'Детский сад "Удача" в Ростове-на-Дону - Лучшее дошкольное образование',
  ogDescription:
    "🌟 Частный лицензированный детский сад с 15-летним опытом 🌟 Принимаем материнский капитал 🌟 3 филиала в Ростове-на-Дону 🌟 Группы от 1,3 до 7 лет 🌟 Подготовка к школе",
  ogImage: "/images/logo.webp",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt:
    'Детский сад "Удача" - счастливые дети в современном образовательном пространстве',
  ogUrl: "https://udacha-detsad.ru",
  ogLocale: "ru_RU",

  // Дополнительные Open Graph теги для бизнеса
  "og:phone_number": "+7 (908) 501-96-27",
  "og:email": "xenova.v2@yandex.ru",
  "og:latitude": "47.219061",
  "og:longitude": "39.713261",
  "og:street-address": "ул. Темерницкая, 65",
  "og:locality": "Ростов-на-Дону",
  "og:region": "Ростовская область",
  "og:postal-code": "344002",
  "og:country-name": "Россия",

  // Дополнительные мета-теги для поисковых систем
  "application-name": 'Детский сад "Удача"',
  "msapplication-tooltip": "Лучший частный детский сад в Ростове-на-Дону",
  "msapplication-starturl": "/",
  "msapplication-navbutton-color": "#F59E0B",

  // Мета-теги для мобильных устройств
  "mobile-web-app-capable": "yes",
  "mobile-web-app-status-bar-style": "default",
  "mobile-web-app-title": 'Детский сад "Удача"',

  // Дополнительные SEO теги
  rating: "general",
  referrer: "origin-when-cross-origin",

  // Теги для Яндекса
  "yandex-verification":
    useRuntimeConfig().public.yandexVerification ||
    "your-yandex-verification-code",

  // Теги для Google
  "google-site-verification":
    useRuntimeConfig().public.googleVerification ||
    "your-google-verification-code",

  // Дополнительная информация о бизнесе
  "business:contact_data:street_address": "ул. Темерницкая, 65",
  "business:contact_data:locality": "Ростов-на-Дону",
  "business:contact_data:region": "Ростовская область",
  "business:contact_data:postal_code": "344002",
  "business:contact_data:country_name": "Россия",
  "business:contact_data:email": "xenova.v2@yandex.ru",
  "business:contact_data:phone_number": "+7 (908) 501-96-27",
  "business:contact_data:website": "https://udacha-detsad.ru",
});

// Структурированные данные JSON-LD и дополнительные мета-теги
useHead({
  // Канонические URL и языки
  link: [
    {
      rel: "canonical",
      href: "https://udacha-detsad.ru",
    },
    {
      rel: "alternate",
      hreflang: "ru",
      href: "https://udacha-detsad.ru",
    },
    // Фавиконы
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],

  // Viewport и мобильные настройки
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=yes",
    },
  ],

  script: [
    // Основной EducationalOrganization Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Детский сад Удача",
        alternateName: ["Удача", 'Детский сад "Удача"', "ДС Удача"],
        description:
          "Частный лицензированный детский сад в Ростове-на-Дону для детей от 1,3 до 7 лет. Принимаем материнский капитал.",
        url: "https://udacha-detsad.ru",
        logo: {
          "@type": "ImageObject",
          url: "https://udacha-detsad.ru/images/logo.webp",
          width: "200",
          height: "200",
        },
        image: [
          "https://udacha-detsad.ru/images/logo.webp",
          "https://udacha-detsad.ru/images/photo-temern/0002YKA.jpg.webp",
          "https://udacha-detsad.ru/images/photo-temern/0003YKA.jpg.webp",
        ],
        telephone: ["+7-908-501-96-27", "+79085019627"],
        email: ["info@udacha-detsad.ru", "central@udacha-detsad.ru"],
        faxNumber: "+7-908-501-96-27",
        keywords:
          "детский сад Ростов-на-Дону, частный детский сад, дошкольное образование, материнский капитал, подготовка к школе, развивающие занятия, ясли, группы кратковременного пребывания",
        address: [
          {
            "@type": "PostalAddress",
            name: "Центральный филиал",
            streetAddress: "ул. Темерницкая, 65",
            addressLocality: "Ростов-на-Дону",
            addressRegion: "Ростовская область",
            postalCode: "344002",
            addressCountry: "RU",
          },
          {
            "@type": "PostalAddress",
            name: "Западный филиал",
            streetAddress: "ул. Стабильная, 21",
            addressLocality: "Ростов-на-Дону",
            addressRegion: "Ростовская область",
            postalCode: "344015",
            addressCountry: "RU",
          },
          {
            "@type": "PostalAddress",
            name: "Западный филиал",
            streetAddress: "ул. 2-я Краснодарская, 135 А",
            addressLocality: "Ростов-на-Дону",
            addressRegion: "Ростовская область",
            postalCode: "344058",
            addressCountry: "RU",
          },
        ],
        geo: [
          {
            "@type": "GeoCoordinates",
            latitude: "47.219061",
            longitude: "39.713261",
            name: "Центральный филиал",
          },
          {
            "@type": "GeoCoordinates",
            latitude: "47.216392",
            longitude: "39.616863",
            name: "Западный филиал",
          },
          {
            "@type": "GeoCoordinates",
            latitude: "47.203299",
            longitude: "39.633527",
            name: "Западный филиал",
          },
        ],
        openingHours: ["Mo-Fr 07:00-20:00"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "20:00",
          },
        ],
        priceRange: "13000-25000 RUB",
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Bank Transfer",
          "Материнский капитал",
        ],
        currenciesAccepted: "RUB",
        foundingDate: "2011-09-01",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "25",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Ростов-на-Дону",
          },
          {
            "@type": "State",
            name: "Ростовская область",
          },
        ],
        serviceType: [
          "Дошкольное образование",
          "Подготовка к школе",
          "Развивающие занятия",
          "Группы кратковременного пребывания",
          "Логопедические занятия",
          "Психологическая поддержка",
        ],
        educationalCredentialAwarded: "Справка об образовании",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Лицензия на образовательную деятельность",
          recognizedBy: {
            "@type": "Organization",
            name: "Министерство общего и профессионального образования Ростовской области",
          },
          validFrom: "2018-09-25",
          validIn: {
            "@type": "AdministrativeArea",
            name: "Ростовская область",
          },
        },
        hasAccreditation: {
          "@type": "EducationalOccupationalCredential",
          name: "Лицензия на образовательную деятельность",
          credentialCategory: "Лицензия",
          recognizedBy: {
            "@type": "Organization",
            name: "Министерство общего и профессионального образования Ростовской области",
          },
        },
        award: [
          "Лучший частный детский сад 2025",
          "Лицензия Министерства образования",
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Полный день",
            description:
              "Пребывание ребенка с 7:00 до 20:00, 5-разовое питание, все занятия включены",
            price: "20000",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            priceValidUntil: "2030-01-01",
          },
          {
            "@type": "Offer",
            name: "Утреннее пребывание",
            description:
              "Пребывание ребенка с 7:30 до 12:30, 3-разовое питание, основные занятия",
            price: "13000",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            priceValidUntil: "2030-01-01",
          },
          {
            "@type": "Offer",
            name: "Вечернее пребывание",
            description: "Пребывание ребенка с 15:00 до 20:00, полдник и ужин",
            price: "10000",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            priceValidUntil: "2030-01-01",
          },
          {
            "@type": "Offer",
            name: "Двое детей",
            description:
              "Пребывание детей с 7:00 до 20:00, 5-разовое питание, все занятия включены",
            price: "35000",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            priceValidUntil: "2030-01-01",
          },
        ],
        sameAs: [
          "https://vk.com/public211187234",
          "https://t.me/udacharnd",
          "https://wa.me/79085019627",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+7-908-501-96-27",
            contactType: "customer service",
            availableLanguage: ["Russian"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "07:00",
              closes: "20:00",
            },
          },
        ],
        department: [
          {
            "@type": "EducationalOrganization",
            name: "Младшая группа (1,3-3 года)",
            description: "Адаптационная группа для самых маленьких",
          },
          {
            "@type": "EducationalOrganization",
            name: "Средняя группа (3-5 лет)",
            description: "Развивающие занятия и подготовка к школе",
          },
          {
            "@type": "EducationalOrganization",
            name: "Старшая группа (5-7 лет)",
            description: "Интенсивная подготовка к школе",
          },
        ],
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Поля М",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Ребенок ходит в сад с апреля. Напишу свое мнение: она научилась ходить на горшок( у меня не получалось приучить), принесла много новых слов, танцевальных движений, выходит и заходит с удовольствием. Воспитатели очень приветливые, если нужна помощь какая-то определенная с ребенком- все сделают. Меня не смущает то, что все дети вместе, это как одна большая семья, такой формат сада. То, что можно привести с «остаточными» признаками, когда ребенок уже не заразный- абсолютно нормально, дети должны обменяться всеми бактериями, что бы сформировать иммунитет. Всем не угодишь видимо💁🏼‍♀️ В общем, у моей дочки много умелок, за что благодарю коллектив на Темерницкой 65 🥰",
          },
        ],
      }),
    },

    // LocalBusiness Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Детский сад Удача",
        description:
          "Частный лицензированный детский сад в Ростове-на-Дону для детей от 1,3 до 7 лет",
        url: "https://udacha-detsad.ru",
        telephone: "+7-908-501-96-27",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Темерницкая, 65",
          addressLocality: "Ростов-на-Дону",
          addressRegion: "Ростовская область",
          postalCode: "344002",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.219061",
          longitude: "39.713261",
        },
        openingHours: "Mo-Fr 07:00-20:00",
        priceRange: "₽₽",
        areaServed: {
          "@type": "City",
          name: "Ростов-на-Дону",
        },
        sameAs: ["https://vk.com/public211187234", "https://t.me/udacharnd"],
      }),
    },

    // Organization Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Детский сад Удача",
        alternateName: ["ДС Удача", "Частный детский сад Удача"],
        url: "https://udacha-detsad.ru",
        logo: "https://udacha-detsad.ru/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+7-908-501-96-27",
          contactType: "customer service",
          areaServed: "RU",
          availableLanguage: ["Russian"],
        },
        sameAs: ["https://vk.com/public211187234", "https://t.me/udacharnd"],
      }),
    },

    // WebSite Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Детский сад Удача",
        description:
          "Частный детский сад в Ростове-на-Дону - лицензированное дошкольное образование для детей от 1,3 до 7 лет",
        url: "https://udacha-detsad.ru",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://udacha-detsad.ru/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: "Детский сад Удача",
          logo: {
            "@type": "ImageObject",
            url: "https://udacha-detsad.ru/logo.png",
          },
        },
      }),
    },

    // Хлебные крошки
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://udacha-detsad.ru",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "О нас",
            item: "https://udacha-detsad.ru#about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Группы",
            item: "https://udacha-detsad.ru#age-groups",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Программы",
            item: "https://udacha-detsad.ru#programs",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Цены",
            item: "https://udacha-detsad.ru#pricing",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Контакты",
            item: "https://udacha-detsad.ru#contacts",
          },
        ],
      }),
    },

    // FAQ структурированные данные
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "С какого возраста принимаете детей?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Мы принимаем детей от 1,3 лет до 7 лет. У нас есть специальные адаптационные программы для самых маленьких.",
            },
          },
          {
            "@type": "Question",
            name: "Принимаете ли материнский капитал?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Да, мы принимаем материнский капитал для оплаты услуг дошкольного образования. У нас есть лицензия на образовательную деятельность.",
            },
          },
          {
            "@type": "Question",
            name: "Какой режим работы детского сада?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Мы работаем с понедельника по пятницу с 7:00 до 20:00. Также предлагаем гибкие варианты пребывания: полный день, утреннее или вечернее, детский вечернее пребывание.",
            },
          },
        ],
      }),
    },
  ],
});
</script>
