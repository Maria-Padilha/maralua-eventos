<template>
  <v-btn
      class="mt-5 text-none" variant="flat" rounded
      :color="darkMode.darkMode ? '#ffa366' : '#fd8839'"
      to="/contact"
  >
    Entre em contato
  </v-btn>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";

const darkMode = useDarkModeStore();
</script>