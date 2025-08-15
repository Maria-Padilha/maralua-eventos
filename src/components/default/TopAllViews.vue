<template>
  <v-main :class="darkMode.darkMode ? 'bg-dark-primary' : 'bg-light-primary'">

    <main class="mt-10 w-[100%]">

      <div class="fab-stack">
        <v-fab
            color="pink"
            @click="openInsta = true"
            icon
        >
          <v-icon size="25px" icon="mdi-instagram"/>
        </v-fab>

        <v-fab
            color="green"
            @click="openWpp = true"
            icon
            class="mt-2"
        >
          <v-icon size="25px" icon="mdi-whatsapp"/>
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

  <v-dialog max-width="350" v-model="dialogOpen">
    <v-card :color="darkMode.darkMode ? '#282828' : ''">
      <div class="flex flex-col items-center my-5 px-3">
        <v-icon icon="mdi-alert-circle-outline" size="60px" :color="openWpp ? 'green' : 'pink'"></v-icon>
        <p class="mt-3 text-xl">Deseja sair do Site?</p>
        <p class="mt-3 text-center">Ao confirmar, você será redirecionado para o {{openWpp ? 'WhatsApp' : 'Instagram'}}</p>

        <div class="flex items-center justify-center gap-2 my-5 flex-wrap">
          <v-btn
              class="text-none" variant="tonal"
              :color="darkMode.darkMode ? '#ffa378' : '#ff4d00'"
              @click="openWpp ? openWpp = false : openInsta = false"
          >
            Cancelar
          </v-btn>

          <v-btn
              v-if="openWpp" class="text-none" variant="flat" color="green"
              @click="openWhatsApp"
          >
            Confirmar
          </v-btn>

          <v-btn
              v-if="openInsta" class="text-none" variant="flat" color="pink"
              @click="openInstagram"
          >
            Confirmar
          </v-btn>

        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";
import FooterBar from "@/components/default/FooterBar.vue";
import {ref, computed} from 'vue';

const darkMode = useDarkModeStore();

const openWpp = ref(false);
const openInsta = ref(false);

const dialogOpen = computed({
  get: () => openWpp.value || openInsta.value,
  set: (val) => {
    if (!val) {
      openWpp.value = false;
      openInsta.value = false;
    }
  }
});

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
  right: 25px;
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