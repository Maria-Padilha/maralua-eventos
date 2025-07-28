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
  { id: 2, src: require('@/assets/img/equipamentos/espelho/clientes-5.jpg'), alt: '' },
  { id: 3, src: require('@/assets/img/equipamentos/espelho/clientes-8.jpg'), alt: '' },
]);

const plansSection = ref({
  title: 'Nossos Planos',
  subtitle: 'Escolha o plano ideal para seu evento'
});

const howItWorksSection = ref({
  title: 'Como',
  titleSpan: 'Funciona?',
  subtitle: 'Processo simples e rápido em 4 etapas'
});

const productInfo = ref({
  title: 'Totem',
  titleSpan: 'Fotográfico',
  descriptions: [
    'O Totem Fotográfico é uma solução moderna e elegante para capturar momentos especiais. Com design sofisticado e tecnologia de ponta, oferece uma experiência fotográfica única com tela touchscreen, impressão instantânea e compartilhamento digital.',
    'Transforme seu evento com a praticidade e elegância do nosso Totem Fotográfico! Equipado com câmera profissional, iluminação LED e sistema de impressão rápida. Seus convidados terão uma experiência intuitiva e divertida, criando memórias de alta qualidade.'
  ]
});

const planos = ref([
  {
    id: 1,
    duration: '2h',
    name: 'Plano Essencial',
    description: 'Perfeito para eventos corporativos e pequenas celebrações',
    popular: false,
    features: [
      '2 hora de totem fotográfico',
      'Impressão ilimitada de fotos',
      'Interface touchscreen intuitiva',
      'Filtros e molduras básicas',
      'Operador especializado'
    ]
  },
  {
    id: 2,
    duration: '3h',
    name: 'Plano Celebração',
    description: 'Ideal para festas e eventos sociais',
    popular: true,
    features: [
      '3 horas de totem fotográfico',
      'Impressão ilimitada de fotos',
      'Filtros e molduras personalizadas',
      'Compartilhamento via QR Code',
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
      '4 horas de totem fotográfico',
      'Impressão ilimitada de fotos',
      'Personalização completa da interface',
      'Filtros e molduras exclusivas',
      'Galeria digital premium',
      'Sistema de backup avançado',
      'Operador + assistente técnico'
    ]
  }
]);

const steps = ref([
  {
    id: 1,
    title: 'Toque na Tela',
    description: 'Acesse o totem fotográfico através da tela touchscreen e inicie sua experiência fotográfica'
  },
  {
    id: 2,
    title: 'Personalize sua Foto',
    description: 'Escolha entre diversos filtros, molduras e efeitos disponíveis na interface intuitiva'
  },
  {
    id: 3,
    title: 'Capture o Momento',
    description: 'Posicione-se em frente ao totem e tire sua foto com a contagem regressiva automática'
  },
  {
    id: 4,
    title: 'Imprima e Compartilhe',
    description: 'Receba sua foto impressa em segundos e compartilhe digitalmente via QR Code'
  }
]);

const montagemInfo = ref({
  titlePart1: 'Montagem e',
  titlePart2: 'Desmontagem',
  image: require('@/assets/img/equipamentos/totem/totem.jpg'),
  imageAlt: 'Equipe realizando montagem do Totem Fotográfico',
  listTitle: 'O que incluímos:',
  paragraphs: [
    'Nossa equipe especializada cuida de toda a instalação do Totem Fotográfico. Realizamos a montagem completa com posicionamento estratégico, calibração da iluminação e configuração personalizada da interface.',
    'Durante todo o evento, nosso operador permanece disponível para suporte técnico, manutenção da impressora e auxílio aos convidados quando necessário, garantindo funcionamento contínuo.',
    'Ao final do evento, realizamos a desmontagem cuidadosa de todo o equipamento e disponibilizamos todas as fotos em galeria digital online para download ilimitado.'
  ],
  listItems: [
    'Montagem do totem',
    'Operador técnico durante o evento',
    'Sistema de iluminação LED profissional',
    'Acessórios Personalizados',
    'Galeria digital com todas as fotos',
    'Desmontagem ao final do evento'
  ]
});

const perguntasFrequentes = ref([
  {
    question: 'Como funciona o Totem Fotográfico?',
    answer: 'O Totem Fotográfico é um equipamento interativo que permite aos convidados tirar fotos, personalizá-las com filtros e molduras, e imprimi-las instantaneamente. É fácil de usar, basta tocar na tela para iniciar.'
  },
  {
    question: 'É possível personalizar as fotos?',
    answer: 'Sim! O Totem Fotográfico oferece diversas opções de personalização, incluindo filtros, molduras e efeitos especiais.'
  },
  {
    question: 'Como recebo as fotos do evento?',
    answer: 'Todas as fotos tiradas durante o evento são disponibilizadas em uma galeria digital online, onde você pode fazer download ilimitado.'
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