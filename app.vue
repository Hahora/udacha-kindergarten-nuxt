<template>
  <div>
    <!-- Хедер -->
    <AppHeader />

    <!-- Контент поверх фона -->
    <div class="relative z-10">
      <main>
        <NuxtPage />
      </main>

      <ScrollToTop />

      <AppFooter />
    </div>

    <WhatsAppButton
      phone-number="79085019627"
      message="Здравствуйте! Хочу узнать подробнее о детском саде 'Удача'"
    />

    <CookieConsent />

    <!-- Глобальные модальные окна -->
    <CallbackModal :is-open="isCallbackModalOpen" @close="closeCallbackModal" />
  </div>
</template>

<script setup>
import CallbackModal from "~/components/CallbackModal.vue";

const { isConsentGiven, consent } = useAnalytics();
const { $analytics } = useNuxtApp();
const router = useRouter();

// Глобальное состояние модальных окон
const isCallbackModalOpen = ref(false);

// Методы для управления модальным окном обратного звонка
const openCallbackModal = () => {
  isCallbackModalOpen.value = true;
};

const closeCallbackModal = () => {
  isCallbackModalOpen.value = false;
};

onMounted(() => {
  // Инициализируем отслеживание первой страницы после монтирования
  nextTick(() => {
    setTimeout(() => {
      if (
        isConsentGiven.value &&
        consent.value?.analytics &&
        $analytics?.trackPageView
      ) {
        $analytics.trackPageView();
      }
    }, 2000);
  });
});

router.afterEach((to) => {
  nextTick(() => {
    setTimeout(() => {
      if (
        isConsentGiven.value &&
        consent.value?.analytics &&
        $analytics?.trackPageView
      ) {
        $analytics.trackPageView(to.fullPath);
      }
    }, 100);
  });
});

watch(
  () => isConsentGiven.value && consent.value?.analytics,
  (hasConsent) => {
    if (hasConsent && $analytics?.trackPageView) {
      // Отслеживаем текущую страницу при получении согласия
      nextTick(() => {
        setTimeout(() => {
          $analytics.trackPageView();
        }, 500);
      });
    }
  }
);

// Предоставляем функции всем дочерним компонентам
provide("openCallbackModal", openCallbackModal);
</script>

<style>
/* Гарантируем, что фон покрывает всю высоту */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Глобальные анимации для фона */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite 2s;
}

.animate-float-reverse {
  animation: floatReverse 5s ease-in-out infinite 1s;
}

.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: floatSlow 25s ease-in-out infinite 5s;
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

@keyframes floatSlow {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(-5px) translateY(-10px);
  }
  75% {
    transform: translateX(-10px) translateY(-3px);
  }
}
</style>
