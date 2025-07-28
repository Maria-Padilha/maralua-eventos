<template>
  <v-footer  class="py-3 d-flex items-center justify-between flex-wrap text-sm" :color="darkMode.darkMode ? '#282828' : '#fff'">
    <p class="text-gray-400 opacity-70">Maralua Fotocabine | 2025</p>
    <p class="text-gray-400 opacity-70">&copy; Todos os direitos reservados</p>
  </v-footer>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";

const darkMode = useDarkModeStore();
</script>