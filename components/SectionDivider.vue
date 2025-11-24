<template>
  <div class="relative w-full overflow-hidden">
    <!-- Волнообразный разделитель с градиентом -->
    <div v-if="type === 'wave'" class="relative h-16 lg:h-24">
      <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
            <stop offset="50%" style="stop-color: #f9fafb; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #dbeafe; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>

    <!-- Диагональный разделитель -->
    <div v-else-if="type === 'diagonal'" class="relative h-12 lg:h-20">
      <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="diagonalGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #dbeafe; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <polygon
          points="0,0 1440,0 1440,120 0,60"
          fill="url(#diagonalGradient)"
        />
      </svg>
    </div>

    <!-- Плавные волны -->
    <div v-else-if="type === 'smooth'" class="relative h-20 lg:h-32">
      <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="smoothGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
            <stop offset="25%" style="stop-color: #f8fafc; stop-opacity: 1" />
            <stop offset="75%" style="stop-color: #e0f2fe; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #dbeafe; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="url(#smoothGradient)"
        />
      </svg>
    </div>

    <!-- Геометрический разделитель -->
    <div v-else-if="type === 'geometric'" class="relative h-16 lg:h-24">
      <div
        class="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-blue-50"
      >
        <svg
          class="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="geometricGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style="stop-color: #ffffff; stop-opacity: 0.9"
              />
              <stop
                offset="50%"
                style="stop-color: #f1f5f9; stop-opacity: 0.7"
              />
              <stop
                offset="100%"
                style="stop-color: #dbeafe; stop-opacity: 0.9"
              />
            </linearGradient>
          </defs>
          <polygon
            points="0,0 360,60 720,20 1080,80 1440,40 1440,120 0,120"
            fill="url(#geometricGradient)"
          />
        </svg>
      </div>
    </div>

    <!-- Двойные волны -->
    <div v-else-if="type === 'double'" class="relative h-24 lg:h-36">
      <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="doubleGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #f1f5f9; stop-opacity: 1" />
          </linearGradient>
          <linearGradient
            id="doubleGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style="stop-color: #f1f5f9; stop-opacity: 0.8" />
            <stop offset="100%" style="stop-color: #dbeafe; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <!-- Первая волна -->
        <path
          d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,120 L0,120 Z"
          fill="url(#doubleGradient1)"
        />
        <!-- Вторая волна -->
        <path
          d="M0,40 C240,80 480,20 720,40 C960,60 1200,20 1440,40 L1440,120 L0,120 Z"
          fill="url(#doubleGradient2)"
        />
      </svg>
    </div>

    <!-- Простой градиентный блок (по умолчанию) -->
    <div
      v-else
      class="h-8 lg:h-12 bg-gradient-to-r from-white via-gray-50 to-blue-50"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "wave",
    validator: (value) =>
      ["wave", "diagonal", "smooth", "geometric", "double", "simple"].includes(
        value
      ),
  },
});
</script>
