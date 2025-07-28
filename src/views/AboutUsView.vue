<template>
  <top-all-views>
    <template v-slot:section>
      <section data-aos="zoom-in" data-aos-duration="1200" class="w-[100%] grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-3 mb-5">
        <v-sheet class="col-span-1 h-[700px] bg-transparent">
          <v-img
              width="100%" height="100%" contain alt="foto dos donos da Maralua - Fernanda e Wyccthor"
              :src="require('@/assets/img/equipamentos/donos.jpg')"
          ></v-img>
        </v-sheet>

        <div class="col-span-1 d-flex items-start justify-center flex-col text-justify">
          <h1 class="text-3xl font-semibold">
            Sobre
            <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">Nós</span>
          </h1>
          <p class="mt-5">
            Somos Fernanda Padilha e Wyccthor Santiago, um casal apaixonado pela vida, pela fotografia e
            por transformar momentos especiais em memórias inesquecíveis. Em 2022, nasceu a Maralua, fruto da nossa união,
            do nosso sonho e da vontade de oferecer experiências únicas em eventos.
          </p>

          <p class="mt-5">
            Começamos com uma cabine fotográfica simples, cheia de vontade de fazer diferente. A recepção foi tão positiva que,
            em pouco tempo, investimos na plataforma 360, trazendo mais movimento e diversão para festas e celebrações. Hoje, nosso
            portfólio cresceu: contamos também com o charmoso espelho retrô e com o moderno totem fotográfico, garantindo soluções
            completas para quem quer eternizar momentos com estilo, qualidade e tecnologia.
          </p>

          <p class="mt-5">
            Desde o início da nossa jornada, tivemos o privilégio de atender diversas marcas, casais, famílias e empresas, criando
            conexões verdadeiras e colecionando sorrisos. Cada evento é único — e tratamos cada cliente como se fosse o primeiro.
          </p>

          <p class="mt-5">
            Mais do que fotos, entregamos experiências. Mais do que equipamentos, oferecemos cuidado, carinho e presença. Nosso compromisso
            é fazer parte da sua história, registrando com leveza e alegria cada instante especial.
          </p>

          <p class="mt-5">
            Seja bem-vindo à Maralua. Vamos celebrar juntos?
          </p>

          <v-btn
              class="mt-5 text-none" variant="flat" rounded
              :color="darkMode.darkMode ? '#ffa366' : '#fd8839'"
              to="/contact"
          >
            Entre em contato
          </v-btn>
        </div>
      </section>
    </template>

    <template v-slot:end>
      <section>
        <div
            :class="darkMode.darkMode ? 'bg-dark-orange text-black' : 'bg-light-orange text-white'"
            class="w-[100%] h-[200px] flex items-center justify-center flex-col gap-3 text-center">
          <h2 class="text-2xl font-bold">Eternizando Momentos</h2>
          <p class="opacity-70">Sua festa merece ser inesquecível com Plataforma 360 • Cabine Fotográfica • Espelho Retrô</p>
        </div>

        <v-card
            data-aos="zoom-in" data-aos-duration="1200"
            :color="darkMode.darkMode ? '#2A2A2A' : '#fff'" elevation="2"
            class="rounded-md w-[80%] mx-auto px-2 absolute z-10 top-[-50px] py-2 border-card">
          <div class="gap-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div
                v-for="(card, index) in cards" :key="index"
                class="col-span-1 h-[120px] flex items-center justify-center text-center flex-col gap-1"
                :class="darkMode.darkMode ? 'bg-neutral-700/60 backdrop-blur-md' : ' bg-[#E7E5E4]'"
            >
              <p :class="darkMode.darkMode ? 'text-white' : 'text-gray-900'" class="text-2xl font-bold">{{ card.number }}</p>
              <p :class="darkMode.darkMode ? 'text-gray-300' : 'text-gray-700'">{{ card.text }}</p>
            </div>
          </div>
        </v-card>
      </section>
    </template>
  </top-all-views>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";
import TopAllViews from "@/components/default/TopAllViews.vue";
import {ref} from 'vue';

const darkMode = useDarkModeStore();

const cards = ref([
  { number: '+500', text: 'Eventos Realizados' },
  { number: '03', text: 'Anos de História' },
  { number: '+10', text: 'Marcas Atendidas' },
  { number: '100%', text: 'Satisfação dos Clientes' },
])
</script>

<style scoped>
.border-card{
  border-bottom: 2px solid rgba(255,255,255,0.1);
}
</style>