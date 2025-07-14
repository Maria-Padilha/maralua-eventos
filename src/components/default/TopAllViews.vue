<template>
  <v-main :class="darkMode.darkMode ? 'bg-dark-primary' : 'bg-light-primary'">
    <main class="mt-10 w-[100%]">
      <slot name="init" />
      <section class="w-[80%] mx-auto flex flex-col items-center justify-center">
        <slot name="section" />
      </section>
      <slot name="meio"></slot>
      <section class="w-[80%] mx-auto flex flex-col items-center justify-center">
        <slot name="section-2" />
      </section>
      <slot name="end"></slot>
    </main>
  </v-main>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";

const darkMode = useDarkModeStore();
</script>
