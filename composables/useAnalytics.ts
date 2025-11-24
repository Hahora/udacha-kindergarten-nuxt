export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const useAnalytics = () => {
  const consent = useCookie<CookieConsent>("cookie-consent", {
    default: () => ({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: 0,
    }),
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  });

  const clientConsent = ref<CookieConsent | null>(null);
  const isClient = process.client;

  const isConsentGiven = computed(() => {
    const currentConsent = isClient
      ? clientConsent.value || consent.value
      : consent.value;

    if (!currentConsent || currentConsent.timestamp === 0) {
      return false;
    }

    const now = Date.now();
    const consentAge = now - currentConsent.timestamp;
    const maxAge = 365 * 24 * 60 * 60 * 1000;

    return consentAge < maxAge;
  });

  // Состояние инициализации аналитики
  const analyticsInitialized = ref(false);

  const loadConsentFromStorage = () => {
    if (!isClient) return;

    try {
      const stored = localStorage.getItem("cookie-consent-backup");
      if (stored) {
        const parsed = JSON.parse(stored) as CookieConsent;

        if (consent.value.timestamp === 0 && parsed.timestamp > 0) {
          consent.value = parsed;
          clientConsent.value = parsed;
        }
      }
    } catch (error) {
      console.warn("Ошибка при загрузке согласия из localStorage:", error);
      localStorage.removeItem("cookie-consent-backup");
    }
  };

  const saveConsentToStorage = (consentData: CookieConsent) => {
    if (!isClient) return;

    try {
      localStorage.setItem(
        "cookie-consent-backup",
        JSON.stringify(consentData)
      );
    } catch (error) {
      console.warn("Ошибка при сохранении согласия в localStorage:", error);
    }
  };

  // ✅ ИСПРАВЛЕНИЕ: Улучшенная инициализация Yandex Metrica
  const initYandexMetrica = () => {
    if (!isClient || !isConsentGiven.value) return;

    const id = useRuntimeConfig().public.yandexMetricaId;
    if (!id) return;

    // Проверяем, не инициализирована ли уже
    if (document.getElementById("ym-script") || window.ym) {
      analyticsInitialized.value = true;
      return;
    }

    try {
      const script = document.createElement("script");
      script.id = "ym-script";
      script.innerHTML = `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0];
            k.async=1,k.src=r;a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
          ym(${id}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:false,
            trackHash:true
          });
        `;
      document.head.appendChild(script);

      // Отмечаем как инициализированную после загрузки
      script.onload = () => {
        analyticsInitialized.value = true;
      };

      // Fallback на случай проблем �� загрузкой
      setTimeout(() => {
        analyticsInitialized.value = true;
      }, 3000);
    } catch (error) {
      console.error("Ошибка инициализации Яндекс Метрики:", error);
    }
  };

  // ✅ ИСПРАВЛЕНИЕ: Улучшенная инициализация Google Analytics
  const initGoogleAnalytics = () => {
    if (!isClient || !isConsentGiven.value) return;

    const id = useRuntimeConfig().public.googleAnalyticsId;
    if (!id) return;

    // Проверяем, не инициализирован ли уже
    if (document.getElementById("ga-script") || window.gtag) {
      analyticsInitialized.value = true;
      return;
    }

    try {
      // Инициализируем dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      const s1 = document.createElement("script");
      s1.id = "ga-script";
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(s1);

      const s2 = document.createElement("script");
      s2.innerHTML = `
          gtag('js', new Date());
          gtag('config', '${id}', { 
            anonymize_ip: true,
            send_page_view: false // Отключаем автоматическую отправку
          });
        `;
      document.head.appendChild(s2);

      // Отмечаем как инициализированную
      s1.onload = () => {
        analyticsInitialized.value = true;
      };

      // Fallback
      setTimeout(() => {
        analyticsInitialized.value = true;
      }, 3000);
    } catch (error) {
      console.error("Ошибка инициализации Google Analytics:", error);
    }
  };

  const giveConsent = (data: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...consent.value,
      ...data,
      timestamp: Date.now(),
    };

    consent.value = newConsent;

    if (isClient) {
      clientConsent.value = newConsent;
      saveConsentToStorage(newConsent);
    }

    // Инициализируем аналитику после согласия
    if (newConsent.analytics) {
      nextTick(() => {
        initYandexMetrica();
        initGoogleAnalytics();
      });
    }
  };

  const revokeConsent = () => {
    const revokedConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: 0,
    };

    consent.value = revokedConsent;
    analyticsInitialized.value = false;

    if (isClient) {
      clientConsent.value = revokedConsent;
      localStorage.removeItem("cookie-consent-backup");
    }
  };

  // Инициализация при загрузке (только на клиенте)
  if (isClient) {
    loadConsentFromStorage();

    nextTick(() => {
      if (isConsentGiven.value && consent.value.analytics) {
        initYandexMetrica();
        initGoogleAnalytics();
      }
    });
  }

  return {
    consent: readonly(consent),
    isConsentGiven,
    analyticsInitialized: readonly(analyticsInitialized),
    giveConsent,
    revokeConsent,
    initYandexMetrica,
    initGoogleAnalytics,
  };
};

declare global {
  interface Window {
    ym: (id: string, method: string, ...args: any[]) => void;
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
