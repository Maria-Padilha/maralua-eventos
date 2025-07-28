<template>
  <v-app-bar class=" px-4 mb-20" :elevation="0" :color="darkMode.darkMode ? '#282828' : '#E9E9E9'">
    <div class="w-[100%] flex items-center justify-between">
      <v-sheet class="md:w-[250px] w-[230px] bg-transparent">
        <v-img height="auto" class="w-[100%]" cover alt="logo maraluaFotocabine" :src="require('@/assets/img/logos/Png/Maralua_Horizontal-1.png')" />
      </v-sheet>

      <div v-if="!rail" class="flex items-center lg:text-base text-sm gap-5">
        <router-link v-for="link in links" :key="link.id" active-class="px-4 py-1 rounded-sm bg-orange text-sm" :to="link.route">
          {{ link.text }}
        </router-link>
      </div>

      <div class="flex items-center gap-2 md:mx-8 mx-4">
        <v-btn
            v-if="rail" aria-label="abrir menu"
            variant="text" size="large"
            :icon="openMenu ? 'mdi-close' : 'mdi-menu'"
            :color="darkMode.darkMode ? 'white' : 'black'"
            @click="openMenu = !openMenu"
        />

        <v-switch
            inset
            color="var(--color-light-orange-medium)"
            hide-details false-icon="mdi-weather-night"
            true-icon="mdi-white-balance-sunny"
            v-model="darkMode.darkMode"
        />
      </div>
    </div>
  </v-app-bar>

  <v-scroll-y-reverse-transition>
    <section
        v-if="openMenu" :class="darkMode.darkMode ? 'bg-dark' : 'bg-light'"
        class="cor fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-6 text-lg z-[100] p-10 overflow-hidden"
    >
      <router-link
          @click="openMenu = false" v-for="link in links" :key="link.id" :to="link.route"
          active-class="px-5 py-2 rounded-sm bg-orange"
      >
        {{ link.text }}
      </router-link>
    </section>
  </v-scroll-y-reverse-transition>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";
import {onBeforeUnmount, onMounted, ref} from "vue";

const darkMode = useDarkModeStore();

const rail = ref(false);
const openMenu = ref(false);

const links = ref([
  { id: 1, route: '/', text: 'Home' },
  { id: 2, route: '/about', text: 'Sobre Nós' },
  { id: 3, route: '/plataforma', text: 'Plataforma' },
  { id: 4, route: '/espelho', text: 'Espelho' },
  { id: 5, route: '/cabine', text: 'Cabine' },
  { id: 6, route: '/totem', text: 'Totem' },
  { id: 7, route: '/contact', text: 'Contato' },
])

const onResize = () => {
  rail.value = window.innerWidth <= 837;
  openMenu.value = false;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.bg-dark{
  background-color: #121212 !important;
}

.bg-light{
  background-color: #F1F1F1 !important;
}
</style>