<template>
  <v-main :class="darkMode.darkMode ? 'bg-dark-primary' : 'bg-light-primary'">
    <main class="mt-10 w-[100%] h-[700px]">
      <section class="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <v-card width="250px" class="bg-transparent" elevation="0">
            <v-img
                height="130" :src="require('@/assets/img/logos/Png/Maralua_Ícone-13.png')"
                alt="logo-ícone maralua" cover
            ></v-img>
          </v-card>
        <p class="text-5xl mt-3 font-bold text-[#fd8839]">404</p>

        <p class="text-2xl mt-7 text-center" :class="darkMode.darkMode ? ' text-[#ffa366]' : 'text-[#fd8839] font-bold'">
          OPPS! Essa página não foi encontrada!
        </p>
        <p class="mt-4 md:text-lg text-center">
          Volte para a página inicial e descubra como a
          <span class="font-bold" :class="darkMode.darkMode ? ' text-[#ffa366]' : 'text-[#fd9836]'">maralua</span>
          pode <br> eternizar o seu momento.
        </p>
        <v-btn to="/" class="mt-7 w-[130px]" variant="tonal">Voltar</v-btn>
      </section>
    </main>
  </v-main>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";

const darkMode = useDarkModeStore();
</script>
