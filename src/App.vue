<template>
  <v-app :theme="darkMode.darkMode ? 'dark' : ''">
    <app-bar />
    <router-view />
  </v-app>
</template>

<script setup>
import AppBar from "@/components/default/AppBar.vue";
import {useDarkModeStore} from "@/stores/themes/darkmode";
import {watch} from "vue";

const darkMode = useDarkModeStore();

watch(
    () => darkMode.darkMode,
    (isDark) => {
      const el = document.documentElement
      el.classList.toggle('dark', isDark)
      el.classList.toggle('light', !isDark)
    },
    { immediate: true }
)
</script>