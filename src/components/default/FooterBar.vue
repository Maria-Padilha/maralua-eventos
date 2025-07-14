<template>
  <v-footer  class="py-5 d-flex flex-col items-center justify-center" :color="darkMode.darkMode ? '#121212' : '#fff'">
    <div class="d-flex items-center justify-center gap-2">
      <a href="https://www.instagram.com/maralua_fotocabine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="w-[40px] h-[40px] border-sm d-flex items-center justify-center">
        <v-icon color="#666A72" icon="mdi-instagram" size="20px" />
      </a>

      <a href="https://wa.me/5565996327585?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20Maralua.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" class="w-[40px] h-[40px] border-sm d-flex items-center justify-center">
        <v-icon color="#666A72" icon="mdi-whatsapp" size="20px" />
      </a>
    </div>
    <p class="text-gray-400 opacity-70 mt-4">Maralua Fotocabine | 65 9 9632-7585</p>
    <p class="text-gray-400 opacity-70 text-sm">&copy; Todos os direitos reservados</p>
  </v-footer>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";

const darkMode = useDarkModeStore();
</script>