<template>
  <product-page-template
      :product-info="productInfo"
      :plans="planos"
      :plans-section="plansSection"
      :steps="steps"
      :how-it-works-section="howItWorksSection"
      :assembly-info="montagemInfo"
      :faqs="perguntasFrequentes"
  >
    <template #media-content>
        <v-sheet width="300px" class="bg-transparent">
          <v-img
              :src="photos[selectedPhoto].src"
              :alt="photos[selectedPhoto].alt"
              class="rounded-sm w-[100%] shadow-lg"
              cover
          />
        </v-sheet>

        <div class="miniaturas">
          <div
              v-for="(photo, index) in photos"
              :key="photo.id"
              v-show="index !== selectedPhoto"
              @click="selectedPhoto = index"
              class="cursor-pointer transition-all hover:scale-105 border-2 rounded-lg overflow-hidden mb-2"
              :class="darkMode.darkMode ? 'border-gray-600 hover:border-orange-400' : 'border-gray-300 hover:border-orange-500'"
          >
            <v-img
                :src="photo.src"
                :alt="photo.alt"
                class="w-20 h-14 object-cover"
                cover
            />
          </div>
        </div>
    </template>
  </product-page-template>
</template>

<script setup>
import ProductPageTemplate from "@/components/ProductPageTemplate.vue";
import { useDarkModeStore } from "@/stores/themes/darkmode";
import { ref } from "vue";

const darkMode = useDarkModeStore();

const selectedPhoto = ref(0);

const photos = ref([
  { id: 0, src: require('@/assets/img/equipamentos/espelho/clientes-6.jpg'), alt: '' },
  { id: 1, src: require('@/assets/img/equipamentos/espelho/clientes-5.jpg'), alt: '' },
  { id: 2, src: require('@/assets/img/equipamentos/espelho/clientes-1.jpg'), alt: '' },
  { id: 3, src: require('@/assets/img/equipamentos/espelho/clientes-8.jpg'), alt: '' },
]);

const productInfo = ref({
  title: 'Espelho',
  titleSpan: 'Mágico',
  descriptions: [
    'O Espelho Mágico é uma experiência interativa única que combina tecnologia e diversão. Com comando de voz e tela touchscreen, seus convidados podem tirar fotos incríveis com efeitos especiais e filtros personalizados.',
    'Transforme seu evento em algo inesquecível! O Espelho Mágico oferece uma experiência completa com animações, jogos interativos e impressão instantânea. Seus convidados vão se divertir enquanto criam memórias únicas para compartilhar.'
  ]
});

const plansSection = ref({
  title: 'Nossos Planos',
  subtitle: 'Escolha o plano ideal para seu evento'
});

const howItWorksSection = ref({
  title: 'Como',
  titleSpan: 'Funciona?',
  subtitle: 'Processo simples e rápido em 4 etapas'
});

const planos = ref([
  {
    id: 1,
    duration: '2h',
    name: 'Plano Essencial',
    description: 'Perfeito para eventos íntimos e familiares',
    popular: false,
    features: [
      '2 hora de espelho mágico',
      'Impressão ilimitada de fotos',
      'Filtros e molduras personalizadas',
      'Operador especializado'
    ]
  },
  {
    id: 2,
    duration: '3h',
    name: 'Plano Celebração',
    description: 'Ideal para festas e comemorações',
    popular: true,
    features: [
      '3 horas de espelho mágico',
      'Impressão ilimitada de fotos',
      'Filtros e molduras personalizadas',
      'Galeria digital online',
      'Operador especializado'
    ]
  },
  {
    id: 3,
    duration: '4h',
    name: 'Plano Premium',
    description: 'Para eventos grandes e especiais',
    popular: false,
    features: [
      '4 horas de espelho mágico',
      'Impressão ilimitada de fotos',
      'Filtros e molduras personalizadas',
      'Galeria digital premium',
      'Operador + assistente técnico'
    ]
  }
]);

const steps = ref([
  {
    id: 1,
    title: 'Ative o Espelho',
    description: 'Toque na tela ou use comando de voz para despertar o espelho mágico e iniciar a experiência interativa'
  },
  {
    id: 2,
    title: 'Escolha seu Estilo',
    description: 'Selecione entre diversas molduras personalizadas para seu evento'
  },
  {
    id: 3,
    title: 'Pose e Sorria',
    description: 'O espelho guia você com instruções de voz e conta regressiva para capturar o momento perfeito'
  },
  {
    id: 4,
    title: 'Imprima e Compartilhe',
    description: 'Receba sua foto impressa instantaneamente e compartilhe nas redes sociais via QR Code'
  }
]);

const montagemInfo = ref({
  titlePart1: 'Montagem e',
  titlePart2: 'Desmontagem',
  image: require('@/assets/img/equipamentos/espelho/espelho.jpg'), // Substitua pela imagem do espelho
  imageAlt: 'Equipe realizando montagem do Espelho Mágico',
  listTitle: 'O que incluímos:',
  paragraphs: [
    'Nossa equipe especializada cuida de toda a instalação do Espelho Mágico. Realizamos a montagem completa com todos os acessórios necessários, incluindo sistema de som, impressora e decoração personalizada.',
    'Durante todo o evento, nosso operador especializado permanece no local para auxiliar os convidados, garantir o funcionamento perfeito do equipamento e criar uma experiência única e divertida.',
    'Ao final do evento, cuidamos de toda a desmontagem e limpeza, deixando o local impecável. Você também recebe todas as fotos digitais em alta resolução para guardar as memórias do seu evento.'
  ],
  listItems: [
    'Montagem completa do espelho mágico',
    'Operador presente durante todo evento',
    'Sistema de som e iluminação',
    'Acessórios Personalizados',
    'Galeria digital com todas as fotos',
    'Desmontagem ao final do evento'
  ]
});

const perguntasFrequentes = ref([
  {
    question: 'O que é o Espelho Mágico?',
    answer: 'É uma cabine fotográfica interativa que combina tecnologia de ponta com diversão, permitindo que os convidados tirem fotos com efeitos especiais e filtros personalizados.'
  },
  {
    question: 'Como funciona a impressão das fotos?',
    answer: 'As fotos são impressas instantaneamente após serem tiradas, com opções de personalização como molduras e filtros.'
  },
  {
    question: 'Como posso personalizar as fotos?',
    answer: 'Você pode escolher entre uma variedade de filtros, molduras e efeitos especiais para personalizar suas fotos.'
  },
  {
    question: 'A equipe cuida da montagem e desmontagem?',
    answer: 'Sim! Nossa equipe especializada realiza toda a montagem e desmontagem do equipamento, garantindo uma experiência tranquila para você.'
  }
]);
</script>

<style scoped>
.miniaturas {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media screen and (max-width: 768px) {
  .miniaturas {
    flex-direction: row;
  }
}
</style>