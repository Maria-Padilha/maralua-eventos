<template>
  <product-page-template
    :product-info="productInfo"
    :plans="planos"
    :plans-section="plansSection"
    :steps="steps"
    :how-it-works-section="howItWorksSection"
    :assembly-info="montagemInfo"
  >
    <template #media-content>
      <div>
        <video
          controls
          class="rounded-sm max-w-[220px]"
          :key="videos[selectedVideo].id"
        >
          <source :src="videos[selectedVideo].src" type="video/mp4" />
          <source :src="videos[selectedVideo].src" type="video/ogg" />
          Vídeo mostrando o evento.
        </video>
      </div>

      <div class="miniaturas">
        <div
          v-for="(video, index) in videos"
          :key="video.id"
          v-show="index !== selectedVideo"
          @click="selectedVideo = index"
          class="cursor-pointer transition-all hover:scale-105 border-2 rounded-lg overflow-hidden mb-2"
          :class="darkMode.darkMode ? 'border-gray-600 hover:border-orange-400' : 'border-gray-300 hover:border-orange-500'"
        >
          <video
            class="w-20 h-14 object-cover"
            muted
            @mouseenter="$event.target.play()"
            @mouseleave="$event.target.pause()"
          >
            <source :src="video.src" type="video/mp4" />
            <source :src="video.src" type="video/ogg" />
          </video>
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

const selectedVideo = ref(0);

const videos = ref([
  { id: 0, src: require('@/assets/videos/video-3.mp4') },
  { id: 1, src: require('@/assets/videos/video-1.mp4') },
  { id: 2, src: require('@/assets/videos/video-3.mp4') },
  { id: 3, src: require('@/assets/videos/video-1.mp4') },
]);

const productInfo = ref({
  title: 'Plataforma',
  titleSpan: '360',
  descriptions: [
    'Software de edição instantânea. Vídeos disponibilizados em segundos através do QR CODE. Plataforma Equipada com IPHONE.',
    'Quer impressionar seus convidados? Deixe com agente. Temos a sensação do momento: PLATAFORMA 360, vídeos em alta resolução com edição instantânea deixando o vídeo em slow motion, prontos para serem baixados e compartilhados em suas redes sociais.'
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
    duration: '1h',
    name: 'Plano Essencial',
    description: 'Ideal para eventos rápidos e dinâmicos',
    popular: false,
    features: ['1 hora de evento', 'Edição instantânea', 'QR Code para download', 'Backup dos vídeos', 'Suporte técnico premium']
  },
  {
    id: 2,
    duration: '2h',
    name: 'Plano Celebração',
    description: 'Perfeito para festas e celebrações',
    popular: true,
    features: ['2 horas de evento', 'Edição instantânea', 'QR Code para download', 'Backup dos vídeos', 'Suporte técnico premium']
  },
  {
    id: 3,
    duration: '3h',
    name: 'Plano Premium',
    description: 'Para eventos grandes e especiais',
    popular: false,
    features: ['3 horas de evento', 'Edição instantânea', 'QR Code para download', 'Backup dos vídeos', 'Suporte técnico premium']
  }
]);

const steps = ref([
  {
    id: 1,
    title: 'Reserve seu Horário',
    description: 'Entre em contato conosco e agende o dia e horário do seu evento com a Plataforma 360'
  },
  {
    id: 2,
    title: 'Grave seu Vídeo',
    description: 'Suba na plataforma e grave seu vídeo 360°. Nossa equipe estará presente para auxiliar'
  },
  {
    id: 3,
    title: 'Edição Instantânea',
    description: 'Nosso software faz a edição automática em slow motion e aplica efeitos especiais'
  },
  {
    id: 4,
    title: 'Baixe via QR Code',
    description: 'Em segundos, escaneie o QR Code e baixe seu vídeo pronto para compartilhar nas redes sociais'
  }
]);

const montagemInfo = ref({
  titlePart1: 'Montagem e',
  titlePart2: 'Desmontagem',
  image: require('@/assets/img/home/cabine.jpg'),
  imageAlt: 'Equipe realizando montagem da Plataforma 360',
  listTitle: 'O que incluímos:',
  paragraphs: [
    'Nossa equipe especializada cuida de toda a logística do seu evento. Realizamos a montagem completa da Plataforma 360 antes do início do evento, garantindo que tudo esteja perfeito para o funcionamento.',
    'Durante todas as horas contratadas, nossa equipe permanece no local oferecendo suporte técnico completo, auxiliando os convidados e garantindo o melhor funcionamento da plataforma.',
    'Ao final do evento, realizamos a desmontagem de todo o equipamento, deixando o local como estava. Você não precisa se preocupar com nada, apenas aproveitar seu evento especial!'
  ],
  listItems: [
    'Montagem completa da plataforma',
    'Equipe presente durante todo o evento',
    'Suporte técnico especializado',
    'Desmontagem ao final do evento'
  ]
});
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