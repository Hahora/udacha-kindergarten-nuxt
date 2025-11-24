// Composable для отслеживания аналитики
export const useTracking = () => {
  const { $analytics } = useNuxtApp();

  // Безопасная функция отслеживания просмотра страницы
  const trackPageView = (url?: string) => {
    try {
      if ($analytics?.trackPageView) {
        $analytics.trackPageView(url);
      }
    } catch (error) {
      console.warn("Ошибка при отслеживании просмотра страницы:", error);
    }
  };

  // Безопасная функция отслеживания событий
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    try {
      if ($analytics?.trackEvent) {
        $analytics.trackEvent(eventName, parameters);
      }
    } catch (error) {
      console.warn("Ошибка при отслеживании события:", error);
    }
  };

  // Предустановленные события
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent("button_click", {
      button_name: buttonName,
      location: location || "unknown",
    });
  };

  const trackFormSubmit = (formName: string, success: boolean = true) => {
    trackEvent("form_submit", {
      form_name: formName,
      success: success,
    });
  };

  const trackPhoneCall = (source?: string) => {
    trackEvent("phone_call", {
      source: source || "unknown",
    });
  };

  const trackEmailClick = (source?: string) => {
    trackEvent("email_click", {
      source: source || "unknown",
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackPhoneCall,
    trackEmailClick,
  };
};
