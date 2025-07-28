<template>
<!--  <v-virtual-scroll-->
<!--      direction="vertical"-->
<!--      height="80vh"-->
<!--      width="100%"-->
<!--      @load="load"-->
<!--      :items="[{ content: 'router-view' }]"-->
<!--      class="no-horizontal-scroll px-5"-->
<!--      :class="darkMode.darkMode ? 'bg-dark-primary' : 'bg-light-primary'"-->
<!--  >-->
    <v-main :class="darkMode.darkMode ? 'bg-dark-primary' : 'bg-light-primary'">

      <main class="mt-10 w-[100%]">

        <div class="fab-stack">
          <v-fab
              color="pink"
              @click="openInstagram"
              size="small"
              icon
          >
            <v-icon size="23px" icon="mdi-instagram"/>
          </v-fab>

          <v-fab
              color="green"
              @click="openWhatsApp"
              size="small"
              icon
              class="mt-2"
          >
            <v-icon size="23px" icon="mdi-whatsapp"/>
          </v-fab>
        </div>

        <slot name="init"/>

        <section class="w-[80%] mx-auto flex flex-col items-center justify-center">
          <slot name="section"/>
        </section>

        <slot name="meio"></slot>

        <section class="w-[80%] mx-auto flex flex-col items-center justify-center">
          <slot name="section-2"/>
        </section>

        <slot name="end"></slot>
      </main>
      <footer-bar/>
    </v-main>
<!--  </v-virtual-scroll>-->
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";
import FooterBar from "@/components/default/FooterBar.vue";

const darkMode = useDarkModeStore();

const openWhatsApp = () => {
  const phoneNumber = '5565996327585';
  const message = 'Olá, vim pelo site da Maralua! Gostaria de mais informações sobre os serviços.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const openInstagram = () => {
  const instagramUrl = 'https://www.instagram.com/maralua_fotocabine/';
  window.open(instagramUrl, '_blank');
};
</script>

<style scoped>
.fab-stack {
  position: fixed;
  right: 15px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
}

.no-horizontal-scroll {
  overflow-x: hidden !important;
  overflow-y: auto !important;
}

.v-virtual-scroll::-webkit-scrollbar {
  width: 7px;
}

.v-virtual-scroll::-webkit-scrollbar-track {
  background: var(--bg-primary);
  border-radius: 5px;
}

.v-virtual-scroll::-webkit-scrollbar-thumb {
  background: rgba(105, 105, 105, 0.44);
  border-radius: 5px;
  cursor: n-resize;
}

.v-virtual-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(105, 105, 105, 0.51);
}

/* Garante que o conteúdo não cause overflow horizontal */
.v-virtual-scroll >>> * {
  max-width: 100%;
  box-sizing: border-box;
}
</style>