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
  { id: 0, src: require('@/assets/img/equipamentos/cabine/cabine-pessoas-2.jpg'), alt: '' },
  { id: 1, src: require('@/assets/img/equipamentos/cabine/cabine-pessoas-3.jpg'), alt: '' },
  { id: 2, src: require('@/assets/img/equipamentos/cabine/cabine-pessoas-4.jpg'), alt: '' },
  { id: 3, src: require('@/assets/img/equipamentos/tirinhas/img-1.jpg'), alt: '' },
]);

const productInfo = ref({
  title: 'Cabine',
  titleSpan: 'Fotográfica',
  descriptions: [
    'A Cabine Fotográfica oferece uma experiência clássica e divertida para seus convidados. Com impressão instantânea, diversos adereços e fundos personalizados, seus convidados criarão memórias incríveis em um ambiente privativo e descontraído.',
    'Transforme seu evento com a diversão garantida da nossa Cabine Fotográfica! Equipada com iluminação profissional, câmera de alta resolução e impressora instantânea. Seus convidados vão se divertir sozinhos ou em grupo, criando lembranças únicas para levar para casa.'
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
      '2 hora de cabine fotográfica',
      'Impressão ilimitada de fotos',
      'Adereços e acessórios inclusos',
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
      '3 horas de cabine fotográfica',
      'Impressão ilimitada de fotos',
      'Adereços e fundos personalizados',
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
      '4 horas de cabine fotográfica',
      'Impressão ilimitada de fotos',
      'Adereços e fundos exclusivos',
      'Galeria digital premium',
      'Operador + assistente técnico'
    ]
  }
]);

const steps = ref([
  {
    id: 1,
    title: 'Entre na Cabine',
    description: 'Acesse a cabine fotográfica com seus amigos ou sozinho e escolha os adereços disponíveis'
  },
  {
    id: 2,
    title: 'Posicione-se',
    description: 'Ajuste a posição, utilize os adereços e prepare-se para as fotos com a ajuda das instruções na tela'
  },
  {
    id: 3,
    title: 'Sorria e Divirta-se',
    description: 'A cabine tirará uma sequência de fotos automaticamente com contagem regressiva e efeitos especiais'
  },
  {
    id: 4,
    title: 'Retire suas Fotos',
    description: 'Receba suas fotos impressas instantaneamente e acesse a galeria digital via QR Code'
  }
]);

const montagemInfo = ref({
  titlePart1: 'Montagem e',
  titlePart2: 'Desmontagem',
  image: require('@/assets/img/equipamentos/cabine/cabine.jpg'),
  imageAlt: 'Equipe realizando montagem da Cabine Fotográfica',
  listTitle: 'O que incluímos:',
  paragraphs: [
    'Nossa equipe especializada cuida de toda a instalação da Cabine Fotográfica. Realizamos a montagem completa com sistema de iluminação profissional, impressora de alta qualidade e todos os adereços necessários para a diversão.',
    'Durante todo o evento, nosso operador permanece no local para auxiliar os convidados, reabastecer papel fotográfico, organizar os adereços e garantir o funcionamento perfeito da cabine.',
    'Ao final do evento, realizamos a desmontagem completa e entregamos todas as fotos digitais em alta resolução. Você terá acesso a uma galeria online com todas as memórias criadas na cabine fotográfica.'
  ],
  listItems: [
    'Montagem completa da cabine fotográfica',
    'Operador presente durante todo evento',
    'Sistema de iluminação profissional',
    'Acessórios Personalizados',
    'Galeria digital com todas as fotos',
    'Desmontagem ao final do evento'
  ]
});

const perguntasFrequentes = ref([
  {
    question: 'Como funciona a cabine fotográfica?',
    answer: 'A cabine fotográfica é um espaço privativo onde os convidados podem tirar fotos divertidas com adereços. Basta entrar, escolher os adereços, posicionar-se e sorrir! As fotos são impressas instantaneamente.'
  },
  {
    question: 'Quantas pessoas cabem na cabine?',
    answer: 'A cabine fotográfica comporta confortavelmente até 6 pessoas por sessão, mas não há limite de quantas vezes cada pessoa pode entrar durante o evento.'
  },
  {
    question: 'As fotos são impressas na hora?',
    answer: 'Sim! Todas as fotos tiradas na cabine são impressas instantaneamente para que os convidados possam levar uma lembrança física do evento.'
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