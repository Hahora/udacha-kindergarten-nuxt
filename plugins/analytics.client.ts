export default defineNuxtPlugin((nuxtApp) => {
  // Получаем composable аналитики
  const { isConsentGiven, consent } = useAnalytics();
  const router = useRouter();

  // Функция отслеживания просмотра страницы
  const trackPageView = (url?: string) => {
    if (!process.client || !isConsentGiven.value || !consent.value?.analytics) {
      return;
    }

    const currentUrl = url || window.location.pathname + window.location.search;
    const config = useRuntimeConfig();

    // Yandex Metrica
    if (config.public.yandexMetricaId && window.ym) {
      try {
        window.ym(config.public.yandexMetricaId, "hit", currentUrl);
      } catch (error) {
        console.warn("Ошибка отправки данных в Yandex Metrica:", error);
      }
    }

    // Google Analytics
    if (config.public.googleAnalyticsId && window.gtag) {
      try {
        window.gtag("config", config.public.googleAnalyticsId, {
          page_path: currentUrl,
          anonymize_ip: true,
        });
      } catch (error) {
        console.warn("Ошибка отправки данных в Google Analytics:", error);
      }
    }
  };

  // Функция отслеживания событий
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!process.client || !isConsentGiven.value || !consent.value?.analytics) {
      return;
    }

    const config = useRuntimeConfig();

    // Yandex Metrica
    if (config.public.yandexMetricaId && window.ym) {
      try {
        window.ym(
          config.public.yandexMetricaId,
          "reachGoal",
          eventName,
          parameters
        );
      } catch (error) {
        console.warn("Ошибка отправки события в Yandex Metrica:", error);
      }
    }

    // Google Analytics
    if (config.public.googleAnalyticsId && window.gtag) {
      try {
        window.gtag("event", eventName, {
          ...parameters,
          anonymize_ip: true,
        });
      } catch (error) {
        console.warn("Ошибка отправки события в Google Analytics:", error);
      }
    }
  };

  // Отслеживание изменений маршрута
  router.afterEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        trackPageView(to.fullPath);
      }, 100);
    });
  });

  // ✅ ИСПРАВЛЕНИЕ: Используем хук app:mounted вместо onMounted
  nuxtApp.hook("app:mounted", () => {
    // Ждем инициализации аналитики после монтирования приложения
    setTimeout(() => {
      if (isConsentGiven.value && consent.value?.analytics) {
        trackPageView();
      }
    }, 2000);
  });

  // ✅ ДОПОЛНИТЕЛЬНО: Отслеживание при готовности DOM
  if (process.client) {
    // Если DOM уже готов
    if (document.readyState === "complete") {
      setTimeout(() => {
        if (isConsentGiven.value && consent.value?.analytics) {
          trackPageView();
        }
      }, 1000);
    } else {
      // Ждем готовности DOM
      window.addEventListener("load", () => {
        setTimeout(() => {
          if (isConsentGiven.value && consent.value?.analytics) {
            trackPageView();
          }
        }, 1000);
      });
    }
  }

  // Предоставляем функции глобально через provide
  return {
    provide: {
      analytics: {
        trackPageView,
        trackEvent,
      },
    },
  };
});

// Типы для глобальных объектов
declare global {
  interface Window {
    ym: (id: string, method: string, ...args: any[]) => void;
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
