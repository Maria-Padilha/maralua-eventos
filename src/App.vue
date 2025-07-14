<template>
  <v-app :theme="darkMode.darkMode ? 'dark' : ''">
    <app-bar />
    <router-view />
    <footer-bar />
  </v-app>
</template>

<script setup>
import AppBar from "@/components/default/AppBar.vue";
import {useDarkModeStore} from "@/stores/themes/darkmode";
import FooterBar from "@/components/default/FooterBar.vue";

const darkMode = useDarkModeStore();
</script>