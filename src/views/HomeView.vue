<template>
  <top-all-views>
    <template v-slot:init>
      <v-divider :thickness="2" class="w-[70%] mx-auto my-16 rounded-circle"/>

      <section v-for="card in cards" :key="card.id" class="w-[100%] flex items-center gap-1 mb-1 flex-col md:flex-row">
        <v-sheet
            v-for="photo in card.photos" :key="photo.id" class="w-[100%] h-[370px] md:h-[320px]"
            :color="darkMode.darkMode ? '#282828' : '#E9E9E9'"
        >
          <v-img height="100%" :src="photo.src" alt="foto de um evento" cover :lazy-src="photo.src">
            <template v-slot:placeholder>
              <lazy-image/>
            </template>
          </v-img>
        </v-sheet>
      </section>
    </template>

    <template v-slot:section>
      <section class="mt-10 w-[100%] flex flex-col items-center justify-center">
        <p class="text-3xl font-bold text-center">Do
          <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">mar</span> a
          <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">lua</span>
          eternizando suas memórias
        </p>

        <div data-aos="zoom-in" data-aos-duration="1200"
             class="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 items-start">
          <div class="flex flex-col col-span-1">
            <v-btn
                v-for="work in works" :key="work.id"
                @click="idchoice = work.id"
                class="text-none rounded-0 w-[100%] flex text-truncate justify-start mb-5"
                :class="idchoice === work.id ? 'border-preta' : 'border-laranja'"
                size="x-large" :variant="idchoice === work.id ? 'flat' : 'tonal'"
                :color="idchoice === work.id ? 'var(--color-orange)' : ''"
            >
              <p class="text-blue-dark text-bold" :class="{activeText: idchoice === work.id}">{{ work.text }}</p>
            </v-btn>
          </div>

          <v-card min-height="700px" class="col-span-1 md:col-span-2 py-10 px-5" elevation="0">
            <div
                v-for="video in videos" :key="video.id"
                class="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div v-if="idchoice === video.id" class="mb-5">
                <div class="w-[100%] h-[100%]">
                  <p class="text-2xl uppercase font-semibold">{{ video.title }}</p>
                  <p class="text-justify mt-10">{{ video.text1 }}</p>
                  <p class="text-justify mt-10">{{ video.text2 }}</p>
                </div>
              </div>

              <v-card
                  v-if="idchoice === video.id" min-height="100%"
                  class="border-xl rounded-xl d-flex flex-col"
                  elevation="8"
              >
                <v-sheet
                    class="w-[100%] h-[40px] d-flex align-center justify-end px-3 gap-1"
                    :color="darkMode.darkMode ? '#282828' : '#E9E9E9'"
                >
                  <v-icon class="opacity-30" icon="mdi-wifi-strength-3" size="15px"/>
                  <v-icon class="opacity-30" icon="mdi-network-strength-4" size="15px"/>
                  <v-icon class="opacity-30" icon="mdi-battery-40" size="15px"/>
                  <p class="text-sm mt-1 ml-1 opacity-30">{{ time }}</p>
                </v-sheet>

                <video v-if="idchoice === 1" width="100%" height="100%" controls>
                  <source :src="video.src" type="video/mp4">
                  <source :src="video.src" type="video/ogg">
                  Vídeo mostrando o evento.
                </video>

                <v-sheet v-if="idchoice !== 1 && idchoice === video.id" width="100%" height="100%">
                  <v-img
                      width="100%" height="100%" cover :alt="`imagem da ${video.title}`"
                      :src="video.src" :lazy-src="video.src">
                    <template v-slot:placeholder>
                      <lazy-image/>
                    </template>
                  </v-img>
                </v-sheet>
              </v-card>
            </div>
          </v-card>
        </div>
      </section>
    </template>

    <!-- Seção de Funcionalidades -->
    <template #meio>
      <section class="mt-10 background-laranja py-5">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Novidades</h2>
          <p class="texto-color-primary max-w-2xl mx-auto texto-pequeno-15 opacity-70">
            Descubra as últimas inovações que trazemos para tornar seu evento ainda mais especial.
            Nosso novo serviço inclui a <span class="font-bold text-uppercase texto-secondary">Expia a Foto</span> - Fotos instantâneas e de alta qualidade,
            podendo ser tirada em qualquer lugar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10 items-center">
          <div data-aos="zoom-in-left" data-aos-duration="1400" class="boxShadow-2 pa-3 flex items-end">
            <v-sheet class="w-[100%] bg-transparent">
              <v-img height="100%" alt="foto dos acessórios" class="mx-auto w-[100%] md:w-[100%] rounded-sm"
                     :src="require('@/assets/img/equipamentos/expiaFoto/1.png')" :lazy-src="require('@/assets/img/equipamentos/expiaFoto/1.png')">
                <template v-slot:placeholder>
                  <lazy-image/>
                </template>
              </v-img>
            </v-sheet>

            <v-sheet class="w-[100%] bg-transparent">
              <v-img height="100%" alt="foto dos acessórios" class="mx-auto w-[100%] md:w-[100%] rounded-sm"
                     :src="require('@/assets/img/equipamentos/expiaFoto/2.png')" :lazy-src="require('@/assets/img/equipamentos/expiaFoto/2.png')">
                <template v-slot:placeholder>
                  <lazy-image/>
                </template>
              </v-img>
            </v-sheet>
          </div>

          <div data-aos="zoom-in-right" data-aos-duration="1400" class="flex flex-col gap-4 pl-8">
            <h3 class="text-xl font-bold texto-secondary">EXPIA A FOTO</h3>

            <ul class="space-y-3">
              <li v-for="(item, index) in itens" :key="index" class="flex items-start texto-secondary opacity-90 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="w-6 h-6 flex-shrink-0 mt-1"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>

            <v-btn to="/contact" class="text-none mt-3 w-fit" variant="outlined" color="var(--color-secondary)">
              Entrar em Contato
            </v-btn>
          </div>
        </div>
      </section>

      <section class="background-card py-5">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">
            Formato de <span class="texto-color-laranja">Fotos</span>
          </h2>
          <p class="texto-color-primary max-w-2xl mx-auto texto-pequeno-15">
            Escolha entre três modelos exclusivos de layout para suas fotos.
            Personalize as lembranças com estilos únicos, molduras criativas e detalhes que refletem a identidade da sua
            celebração.
          </p>
        </div>

        <div
            data-aos="zoom-in-right" data-aos-duration="1200"
            class="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10 items-center"
        >
          <div
              class="flex flex-col gap-4 px-4"
          >
            <h3 class="text-2xl font-bold texto-color-primary">Tirinhas</h3>
            <p class="texto-color-primary text-sm leading-relaxed">
              As tirinhas são perfeitas para capturar momentos divertidos e espontâneos.
              Com três fotos em sequência, elas criam uma narrativa visual que traz à tona a alegria do evento.
              Personalize com molduras e textos exclusivos para tornar cada tirinha única.
            </p>
            <v-btn class="text-none mt-3 w-fit" variant="outlined" color="orange">
              2 Cópias - 5x15cm
            </v-btn>
          </div>

          <v-sheet class="w-[100%] h-[400px] py-5 boxShadow">
            <v-img height="100%" alt="foto dos acessórios" class="mx-auto w-[60%] md:w-[40%]"
                   :src="require('@/assets/img/equipamentos/tirinhas/img-2.jpg')">
              <template v-slot:placeholder>
                <lazy-image/>
              </template>
            </v-img>
          </v-sheet>
        </div>

        <div
            data-aos="zoom-in-left" data-aos-duration="1400"
            class="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10 items-center"
        >
          <v-sheet class="w-[100%] h-[400px] py-5 boxShadow">
            <v-img height="100%" alt="foto dos acessórios" class="mx-auto w-[80%] md:w-[70%]"
                   :src="require('@/assets/img/equipamentos/tirinhas/ft-10x15.jpg')">
              <template v-slot:placeholder>
                <lazy-image/>
              </template>
            </v-img>
          </v-sheet>

          <div
              class="flex flex-col gap-4 px-4"
          >
            <h3 class="text-2xl font-bold texto-color-primary">Tradicional</h3>
            <p class="texto-color-primary text-sm leading-relaxed">
              O formato tradicional é ideal para quem busca simplicidade e elegância.
              Com uma única foto de alta qualidade, você pode capturar o momento exato com clareza e detalhe.
              Personalize com molduras clássicas e textos que eternizam a memória do evento.
            </p>
            <v-btn class="text-none mt-3 w-fit" variant="outlined" color="orange">
              1 cópia - 10x15cm
            </v-btn>
          </div>
        </div>

        <div
            data-aos="zoom-in-right" data-aos-duration="1200"
            class="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10 items-center">
          <div
              class="flex flex-col gap-4 px-4"
          >
            <h3 class="text-2xl font-bold texto-color-primary">Polaroid</h3>
            <p class="texto-color-primary text-sm leading-relaxed">
              O formato Polaroid traz um toque nostálgico e divertido às suas fotos.
              Com uma moldura característica, ele captura o momento de forma instantânea e única.
              Ideal para eventos que pedem um estilo mais descontraído e criativo, as fotos Polaroid são perfeitas para
              guardar ou compartilhar.
            </p>
            <v-btn class="text-none mt-3 w-fit" variant="outlined" color="orange">
              2 cópias - 10x7.5cm
            </v-btn>
          </div>

          <v-sheet class="w-[100%] h-[400px] py-5 boxShadow">
            <v-img height="100%" alt="foto dos acessórios" class="mx-auto w-[90%] md:w-[70%]"
                   :src="require('@/assets/img/equipamentos/tirinhas/img-3.jpg')">
              <template v-slot:placeholder>
                <lazy-image/>
              </template>
            </v-img>
          </v-sheet>
        </div>
      </section>
    </template>

    <template #section-2>
      <section class="mt-10 w-[100%] flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold mb-4">
          Marcas <span class="texto-color-laranja">Atendidas</span>
        </h2>
        <p class="text-center">
          Temos o orgulho de ter trabalhado com grandes marcas, oferecendo serviços em eventos corporativos, festas e
          celebrações especiais.
          Nossa experiência inclui colaborações com as empresas, garantindo qualidade e profissionalismo em cada
          projeto.
        </p>

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          <v-card
              v-for="(marca, index) in marcas"
              :key="index"
              class="h-[200px] bg-white card-hover-effect border border-gray-600"
              elevation="1" :class="darkMode.darkMode ? 'opacity-40' : ''"
              data-aos="fade-right" :data-aos-duration="index > 3 ? '1000' : '1250'"
          >
            <v-sheet class="w-[250px] h-[100%] flex items-center justify-center bg-transparent">
              <v-img
                  :alt="marca.alt"
                  class="w-[80%] h-100 mx-auto" :src="marca.src" :lazy-src="marca.src"
              >
                <template v-slot:placeholder>
                  <lazy-image/>
                </template>
              </v-img>
            </v-sheet>
          </v-card>
        </div>
      </section>

      <section class="mt-10 w-[100%] flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold mb-4 text-center">
          Veja Alguns <span class="texto-color-laranja">Feedbacks</span>
        </h2>

        <v-sheet data-aos="zoom-in" data-aos-duration="1200" width="100%" class="border-md bg-transparent my-5 py-5 px-10">
          <div>
            <p class="mt-5 text-xl font-semibold text-center" v-bind="props">Cabine de Fotos e Plataforma 360 - Maralua</p>

            <div class="w-[100%] flex items-center flex-wrap justify-center mt-7 gap-3">
              <p class="text-4xl font-bold">5.0</p>
              <v-rating
                  class="flex-wrap"
                  hover
                  readonly
                  :length="5"
                  :size="25"
                  :model-value="5"
                  active-color="orange"
              />
            </div>
            <p class="text-center md:ml-16">
              Exibindo {{avaliacoes.length}} avaliações -
              <a target="_blank" class="text-center text-decoration-underline texto-color-laranja"
                 href="https://www.google.com/search?q=maralua+fotocabine&oq=maralua+fotocabine&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEIOTA1N2oxajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x939db1dcb00f5f69:0x68d87c09e07fe802,1,,,,"
              >
                <span class="">Veja todas</span>
              </a>
            </p>
          </div>

          <v-window class="mt-3" v-model="model" show-arrows="hover">
            <template v-slot:prev="{ props }">
              <v-btn
                  @click="props.onClick"
                  icon="mdi-chevron-left" size="small"
                  variant="tonal"
              />
            </template>

            <template v-slot:next="{ props }">
              <v-btn
                  @click="props.onClick"
                  icon="mdi-chevron-right" size="small"
                  variant="tonal"
              />
            </template>

            <v-window-item v-for="avaliacao in avaliacoes" :key="avaliacao.id">
              <v-card
                  class="ma-4 pa-4 w-[100%] md:w-[85%] mx-auto" color="background-card"
                  elevation="0" @click="toggle"
              >
                <div class="flex items-center gap-5">
                  <v-sheet width="50px" height="50px" class="rounded-circle">
                    <v-img
                        width="100%" height="100%" cover alt="foto do avaliador"
                        class="rounded-circle" :src="avaliacao.photo"
                    />
                  </v-sheet>

                  <div>
                    <p class="text-lg font-semibold">{{ avaliacao.name }}</p>
                    <v-rating
                        class="flex-wrap" hover
                        readonly :length="5" :size="20"
                        :model-value="5" active-color="orange"
                    />
                  </div>
                </div>
                <p class="mt-3 md:text-lg">{{ avaliacao.text }}</p>
              </v-card>
            </v-window-item>
          </v-window>
        </v-sheet>
      </section>
    </template>
  </top-all-views>
</template>

<script setup>
import TopAllViews from "@/components/default/TopAllViews.vue";
import {useDarkModeStore} from "@/stores/themes/darkmode";
import {onMounted, ref} from "vue";
import LazyImage from "@/components/LazyImage.vue";

const darkMode = useDarkModeStore();

const idchoice = ref(3);
const time = ref("");
const model = ref(1);

// PRIMEIRA SECTION - CARDS DE FOTOS
const cards = ref([
  {
    id: 1,
    photos: [
      {id: 1, src: require('@/assets/img/equipamentos/espelho/clientes-7.jpg')},
      {id: 3, src: require('@/assets/img/equipamentos/espelho/clientes-2.jpg')},
      {id: 2, src: require('@/assets/img/equipamentos/espelho/clientes-1.jpg')},
      {id: 4, src: require('@/assets/img/equipamentos/cabine/cabine-pessoas-3.jpg')},
    ]
  },
  {
    id: 2,
    photos: [
      {id: 2, src: require('@/assets/img/equipamentos/cabine/cabine-pessoas-4.jpg')},
      {id: 1, src: require('@/assets/img/equipamentos/tirinhas/img-ferpa.jpg')},
      {id: 3, src: require('@/assets/img/equipamentos/espelho/clientes-6.jpg')},
      {id: 4, src: require('@/assets/img/equipamentos/espelho/clientes-8.jpg')},
    ]
  }
]);

const works = ref([
  {id: 3, text: 'Espelho Retrô'},
  {id: 1, text: 'Plataforma 360'},
  {id: 2, text: 'Cabine Fotográfica'},
  {id: 4, text: 'Totem Fotográfico'},
]);

const videos = ref([
  {
    id: 1, title: 'Plataforma 360',
    text1: 'Uma experiência cinematográfica que vai transformar seu evento! A Plataforma 360 é a sensação do momento e traz um nível de interatividade e sofisticação que impressiona todos os convidados. Com uma câmera que gira em alta velocidade ao redor da pessoa ou grupo, ela grava vídeos com efeitos dinâmicos e em câmera lenta, resultando em conteúdos prontos para viralizar nas redes sociais.\n',
    text2: 'A estrutura da plataforma é robusta e segura, e o cenário conta com acessórios temáticos para elevar ainda mais o impacto visual. A Plataforma 360 é mais do que uma filmagem: é uma experiência divertida, glamourosa e inesquecível!',
    src: require('@/assets/videos/plataforma.mp4')
  },
  {
    id: 2, title: 'Cabine Fotográfica',
    text1: 'Diversão garantida com muita criatividade! A Cabine Fotográfica é uma das atrações mais queridas em qualquer tipo de evento. Cada clique vira uma lembrança física e instantânea, ideal para guardar ou colar no mural da festa.\n',
    text2: 'Com sistema de impressão rápida, as fotos saem em segundos com molduras personalizadas, logotipos e mensagens especiais. É possível configurar diferentes layouts, como tirinhas ou fotos únicas, sempre com qualidade profissional. A cabine também proporciona privacidade, incentivando momentos mais espontâneos e engraçados entre amigos e familiares.\n',
    src: require('@/assets/img/equipamentos/cabine/cabine-2.jpg')
  },
  {
    id: 3, title: 'Espelho Mágico',
    text1: 'Um toque vintage com tecnologia moderna! O Espelho Retrô é perfeito para quem quer unir elegância, interatividade e inovação em um só equipamento. Seu design sofisticado encanta os convidados logo de cara, criando um ponto de destaque na decoração do evento. Ele funciona como um espelho mágico que, ao toque, se transforma em uma tela interativa.',
    text2: 'Além disso, as fotos são reveladas instantaneamente em alta qualidade, prontas para levar como lembrança. E o melhor: tudo isso com uma pitada de nostalgia charmosa que só o visual retrô pode proporcionar. O Espelho Retrô transforma fotos em momentos únicos e memoráveis!\n',
    src: require('@/assets/img/equipamentos/espelho/espelho.jpg')
  },
  {
    id: 4, title: 'Totem Fotográfico',
    text1: 'Moderno, prático e versátil, o Totem Fotográfico é a solução ideal para eventos dinâmicos e interativos. Ele oferece uma experiência intuitiva e rápida: basta tocar na tela, posar para a câmera e receber a foto impressa na hora. Com um visual clean e elegante, o Totem se adapta perfeitamente a qualquer ambiente, seja em festas sociais, eventos corporativos ou ativações de marca.',
    text2: 'Compacto e fácil de instalar, ele ocupa pouco espaço e pode ser posicionado estrategicamente para atrair o maior número de pessoas. Ideal para quem busca agilidade sem abrir mão da qualidade e da interação. O Totem Fotográfico é sucesso garantido em qualquer evento!\n',
    src: require('@/assets/img/equipamentos/totem/totem.jpg')
  },
]);

const avaliacoes = ref([
  {
    id: 1, name: 'Ricardo de P.L',
    photo: require('@/assets/img/equipamentos/semFoto.jpg'),
    text: 'São profissionais assíduos, competentes e comprometidos no que fazem. Interagiram envolvendo todos nossos convidados. Os vídeos e as músicas ficaram bacana como lembrança do aniversário da Cauane15 anos.'
  },
  {
    id: 2, name: 'Karine Prado',
    photo: require('@/assets/img/equipamentos/semFoto.jpg'),
    text: 'Otimo atendimento, fizeram toda a diferença na minha festa, fora atração. Super atenciosos e queridos, alem de muito atensiosos.'
  },
  {
    id: 3, name: 'Angelica Silva',
    photo: require('@/assets/img/equipamentos/semFoto.jpg'),
    text: 'Tivemos uma ótima experiência, profissionais pontuais atenciosos e as fotos e vídeos de qualidade. Nossas crianças amaram!'
  },
  {
    id: 4, name: 'Arenil Almeida',
    photo: require('@/assets/img/equipamentos/semFoto.jpg'),
    text: 'Atendimento excelente. Seu evento não pode ficar sem eles. Indico para todos e todas as idades'
  },
  {
    id: 5, name: 'Daniele Suelen Dani',
    photo: require('@/assets/img/equipamentos/semFoto.jpg'),
    text: 'Perfeito... Atendimento maravilhoso ...super indico ameiii'
  },
]);

const marcas = ref([
  {id: 1, src: require('@/assets/img/marcas/1.png'), alt: 'BlueFit'},
  {id: 2, src: require('@/assets/img/marcas/2.png'), alt: 'Cielo'},
  {id: 10, src: require('@/assets/img/marcas/10.png'), alt: 'Coco Bambu'},
  {id: 3, src: require('@/assets/img/marcas/3.png'), alt: 'Sicredi'},
  {id: 4, src: require('@/assets/img/marcas/4.png'), alt: 'Studio Z'},
  {id: 5, src: require('@/assets/img/marcas/5.png'), alt: 'Centro oeste - energia solar'},
  {id: 6, src: require('@/assets/img/marcas/6.png'), alt: 'Grupo Real'},
  {id: 7, src: require('@/assets/img/marcas/7.png'), alt: 'Ixpia dica'},
  {id: 8, src: require('@/assets/img/marcas/8.png'), alt: 'Track&Field'},
  {id: 9, src: require('@/assets/img/marcas/9.png'), alt: 'Colégio São Gonçalo'},
]);

const itens = ref([
  "Fotos instantâneas e de alta qualidade",
  "Entretenimento para todas as idades",
  "Impressões personalizadas na hora",
  "Lembrança única para os convidados levarem para casa",
  "Até 3 molduras personalizadas",
  "Acessórios como óculos, plumas e arcos inclusos"
]);

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  time.value = `${hours}:${minutes}`;
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 60000); // Atualiza a cada minuto
});
</script>

<style scoped>
.border-laranja {
  border-left: 2px solid var(--color-orange-medium);
}

.border-preta {
  border-left: 2px solid var(--text-primary);
}

.boxShadow {
  border-radius: 5px;
  box-shadow: 0 4px 6px var(--color-orange-medium), 0 1px 3px var(--color-orange);
}

.boxShadow-2 {
  border-radius: 5px;
  box-shadow: 0 4px 6px var(--color-secondary), 0 1px 3px var(--color-secondary);
}

</style>