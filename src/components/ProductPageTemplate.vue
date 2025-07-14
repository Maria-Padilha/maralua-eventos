<template>
  <top-all-views>
    <template v-slot:section>
      <section class="w-[100%] grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-5 mt">
        <div class="col-span-1 flex flex-col justify-center items-start text-justify">
          <text-orange-color font-size="3">
            <template v-slot:title>{{ productInfo.title }}</template>
            <template v-slot:span>{{ productInfo.titleSpan }}</template>
          </text-orange-color>

          <p
            v-for="paragraph in productInfo.descriptions"
            :key="paragraph"
            :class="darkMode.darkMode ? 'text-gray-300' : ''"
            class=" mt-3"
          >
            {{ paragraph }}
          </p>

          <button-contact />
        </div>

        <div
          class="col-span-1 border-radius px-4 py-4 flex flex-col md:flex-row gap-5 items-center justify-center h-auto"
          :class="darkMode.darkMode ? 'border-dark' : 'border-light'"
        >
          <!-- Slot para conteúdo customizado (vídeos, imagens, etc.) -->
          <slot name="media-content"></slot>
        </div>
      </section>
    </template>

    <template #meio>
      <section class="w-[100%] mt-32 mb-10 px-10 py-5" :class="darkMode.darkMode ? 'bg-dark-orange text-black' : 'bg-light-orange text-white'">
        <div class="text-center mb-12">
          <text-orange-color font-size="3">
            <template v-slot:title>{{ plansSection.title }}</template>
          </text-orange-color>

          <p class="text-lg mt-4 text-black opacity-70">
            {{ plansSection.subtitle }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div
            v-for="plano in plans"
            :key="plano.id"
            class="plan-card border-radius px-6 py-8 text-center transition-all hover:scale-105 relative"
            :class="darkMode.darkMode ? 'border-dark bg-[#282828]' : 'border-light bg-white'"
          >
            <div
              v-if="plano.popular"
              class="popular-badge absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold"
            >
              Mais Popular
            </div>

            <div class="plan-icon mb-4">
              <div class="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
                <span class="text-2xl font-bold text-orange-500">{{ plano.duration }}</span>
              </div>
            </div>

            <h3 class="text-2xl font-bold mb-4" :class="darkMode.darkMode ? 'text-white' : 'text-gray-800'">
              {{ plano.name }}
            </h3>
            <p :class="darkMode.darkMode ? 'text-gray-300' : 'text-gray-600'" class="mb-6">
              {{ plano.description }}
            </p>

            <ul class="text-left mb-6 space-y-2">
              <li
                v-for="feature in plano.features"
                :key="feature"
                class="flex items-center"
                :class="darkMode.darkMode ? 'text-gray-300' : 'text-gray-600'"
              >
                <span class="text-orange-500 mr-2">✓</span>
                {{ feature }}
              </li>
            </ul>
            <button-contact />
          </div>
        </div>
      </section>
    </template>

    <template #section-2>
      <section class="w-[100%] mt-20 mb-10">
        <div class="text-center mb-12">
          <text-orange-color font-size="3">
            <template v-slot:title>{{ howItWorksSection.title }}</template>
            <template v-slot:span>{{ howItWorksSection.titleSpan }}</template>
          </text-orange-color>
          <p :class="darkMode.darkMode ? 'text-gray-300' : ''" class="text-lg mt-4">
            {{ howItWorksSection.subtitle }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
          <div
            v-for="step in steps"
            :key="step.id"
            class="step-card text-center"
          >
            <div class="step-number mb-4">
              <div class="w-16 h-16 mx-auto rounded-full bg-orange-500 flex items-center justify-center">
                <span class="text-2xl font-bold text-white">{{ step.id }}</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-3" :class="darkMode.darkMode ? 'text-white' : 'text-gray-800'">
              {{ step.title }}
            </h3>
            <p :class="darkMode.darkMode ? 'text-gray-300' : 'text-gray-600'" class="text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>

        <div class="hidden lg:block mt-8">
          <div class="flex justify-center items-center">
            <div class="process-line" :class="darkMode.darkMode ? 'bg-gray-600' : 'bg-gray-300'"></div>
          </div>
        </div>
      </section>

      <section class="w-[100%] grid md:grid-cols-2 grid-cols-1 gap-10 mt-32 mb-10">
        <div class="col-span-1 flex justify-center items-center">
          <v-sheet width="320px" class="image-container bg-transparent">
            <v-img
              :src="assemblyInfo.image"
              :alt="assemblyInfo.imageAlt"
              cover
              class="rounded-sm w-[100%] shadow-lg"
            />
          </v-sheet>
        </div>

        <div class="col-span-1 flex flex-col justify-center items-start text-justify">
          <text-orange-color font-size="">
            <template v-slot:title>{{ assemblyInfo.titlePart1 }}</template>
            <template v-slot:span>{{ assemblyInfo.titlePart2 }}</template>
          </text-orange-color>

          <p
            v-for="paragraph in assemblyInfo.paragraphs"
            :key="paragraph"
            :class="darkMode.darkMode ? 'text-gray-300' : ''"
            class="text-sm mt-4"
          >
            {{ paragraph }}
          </p>

          <div class="mt-6">
            <h4 class="font-bold text-lg mb-3" :class="darkMode.darkMode ? 'text-white' : 'text-gray-800'">
              {{ assemblyInfo.listTitle }}
            </h4>
            <ul class="space-y-2">
              <li
                v-for="item in assemblyInfo.listItems"
                :key="item"
                class="flex items-center text-sm"
                :class="darkMode.darkMode ? 'text-gray-300' : 'text-gray-600'"
              >
                <span class="text-orange-500 mr-3">✓</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </template>
  </top-all-views>
</template>

<script setup>
import TopAllViews from "@/components/default/TopAllViews.vue";
import TextOrangeColor from "@/components/TextOrangeColor.vue";
import ButtonContact from "@/components/ButtonContact.vue";
import { useDarkModeStore } from "@/stores/themes/darkmode";
import {defineProps} from "vue";

const darkMode = useDarkModeStore();

defineProps({
  productInfo: {
    type: Object,
    required: true
  },
  plans: {
    type: Array,
    required: true
  },
  plansSection: {
    type: Object,
    required: true
  },
  steps: {
    type: Array,
    required: true
  },
  howItWorksSection: {
    type: Object,
    required: true
  },
  assemblyInfo: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.mt {
  margin-top: 30px;
}

.border-light {
  border: 2px solid #fd8839;
}

.border-dark {
  border: 2px solid #ffa366;
}

.border-radius {
  box-shadow: 0 0 20px rgba(255, 136, 0, 0.2);
  border-radius: 12px;
}

.hidden {
  display: none;
}

.mt-32 {
  margin-top: 52px;
}

.image-container {
  transition: all 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}

.image-container img {
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 136, 0, 0.2);
}

.image-container:hover img {
  box-shadow: 0 15px 40px rgba(255, 136, 0, 0.3);
}

@media screen and (max-width: 768px) {
  .image-container {
    order: 2;
  }

  .col-span-1:last-child {
    order: 1;
  }
}
</style>