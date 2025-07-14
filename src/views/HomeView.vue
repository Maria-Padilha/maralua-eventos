<template>
  <top-all-views>
    <template v-slot:init>
      <v-divider :thickness="2" class="w-[70%] mx-auto my-16 rounded-circle"/>
      <section v-for="card in cards" :key="card.id" class="w-[100%] flex items-center gap-1 mb-1 flex-col md:flex-row">
        <v-sheet v-for="photo in card.photos" :key="photo.id" class="w-[100%] h-[370px] md:h-[320px]"
                 :color="darkMode.darkMode ? '#282828' : '#E9E9E9'">
          <v-img height="100%" :src="photo.src" alt="foto de um evento" cover :lazy-src="photo.src">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate/>
              </div>
            </template>
          </v-img>
        </v-sheet>
      </section>
    </template>

    <template v-slot:section>
      <section class="mt-10 w-[100%] flex flex-col items-center justify-center">
        <p class="text-xl font-medium text-center">Do
          <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">mar</span> a
          <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">lua</span>
          eternizando suas memórias
        </p>

        <div class="w-[100%] flex items-start justify-between gap-5 my-10 flex-col md:flex-row">
          <v-sheet class="w-[100%] md:w-[300px]">
            <div
                @click="idchoice = work.id"
                v-for="work in works" :key="work.id"
                :class="idchoice === work.id ? (darkMode.darkMode ? 'bg-dark-orange-medium text-black' : 'bg-light-orange-medium') : ''"
                class="w-[100%] h-[70px] flex items-center justify-center cursor-pointer"
            >
              <p class="text-lg">{{ work.text }}</p>
            </div>
          </v-sheet>

          <v-card min-height="700px" class="w-[100%] md:flex-1 py-10 px-5" elevation="0">
            <div v-for="video in videos" :key="video.id"
                 class="flex gap-5 items-center justify-around flex-col lg:flex-row">
              <div v-if="idchoice === video.id" class="w-[100%] lg:w-[500px] mb-5">
                <div class="w-[100%] h-[100%]">
                  <p class="text-2xl uppercase font-semibold">{{ video.title }}</p>
                  <p class="text-justify mt-10">{{ video.text1 }}</p>
                  <p class="text-justify mt-10">{{ video.text2 }}</p>
                </div>
              </div>

              <v-card v-if="idchoice === video.id" min-height="100%"
                      class="w-[200px] md:w-[370px] md:h-[100%] border-xl rounded-xl d-flex flex-col items-center"
                      elevation="8">
                <v-sheet class="w-[100%] h-[30px] d-flex align-center justify-end px-3 gap-1"
                         :color="darkMode.darkMode ? '#282828' : '#E9E9E9'">
                  <v-icon class="opacity-30" icon="mdi-wifi-strength-3" size="15px"/>
                  <v-icon class="opacity-30" icon="mdi-network-strength-4" size="15px"/>
                  <v-icon class="opacity-30" icon="mdi-battery-40" size="15px"/>
                  <p class="text-sm mt-1 ml-1 opacity-30">{{ time }}</p>
                </v-sheet>

                <video v-if="idchoice === 1" width="99%" height="90%" controls>
                  <source :src="video.src" type="video/mp4">
                  <source :src="video.src" type="video/ogg">
                  Vídeo mostrando o evento.
                </video>

                <v-sheet v-if="idchoice !== 1 && idchoice === video.id" width="99%" height="90%">
                  <v-img width="100%" height="100%" cover :alt="`imagem da ${video.title}`" :src="video.src"
                         :lazy-src="video.src">
                    <template v-slot:placeholder>
                      <v-row align="center" class="fill-height ma-0" justify="center">
                        <v-progress-circular color="grey-lighten-5" indeterminate/>
                      </v-row>
                    </template>
                  </v-img>
                </v-sheet>
              </v-card>
            </div>
          </v-card>
        </div>
      </section>

      <section class="mt-10 w-[100%] flex flex-col items-center justify-center">
        <p class="text-xl font-medium text-center">Veja alguns
          <span class="font-bold" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">
            feedbacks
          </span>
        </p>

        <v-sheet width="100%" class="border-md bg-transparent my-5 py-7">
          <p class="mt-5 text-xl font-semibold text-center">Cabine de Fotos e Plataforma 360 - Maralua</p>
          <div class="w-[100%] flex items-center flex-wrap justify-center mt-5 gap-3">
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
          <p class="text-center md:ml-16">15 avaliações</p>

          <div class="mt-10 md:px-10 px-2">
            <div v-for="avaliacao in avaliacoes" :key="avaliacao.id">
              <div class="flex items-center gap-5">
                <v-sheet width="50px" height="50px" class="rounded-circle">
                  <v-img
                      width="100%" height="100%" cover alt="foto do avaliador" class="rounded-circle"
                      :src="avaliacao.photo"></v-img>
                </v-sheet>
                <div>
                  <p class="text-lg font-semibold">{{ avaliacao.name }}</p>
                  <v-rating
                      class="flex-wrap"
                      hover
                      readonly
                      :length="5"
                      :size="20"
                      :model-value="5"
                      active-color="orange"
                  />
                </div>
              </div>
              <p class="mt-3 md:text-lg">{{ avaliacao.text }}</p>
              <v-divider :thickness="2" class="w-[100%] mx-auto my-10"/>
            </div>
          </div>

          <div class="w-[100%] flex items-center justify-center mt-5 gap-3">
            <a target="_blank" class="text-center text-xl font-semibold"
               href="https://www.google.com/search?q=maralua+fotocabine&oq=maralua+fotocabine&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEIOTA1N2oxajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x939db1dcb00f5f69:0x68d87c09e07fe802,1,,,,">
              Veja mais Avaliações do Google
            </a>
          </div>
        </v-sheet>
      </section>
    </template>
  </top-all-views>
</template>

<script setup>
import TopAllViews from "@/components/default/TopAllViews.vue";
import {useDarkModeStore} from "@/stores/themes/darkmode";
import {onMounted, ref} from "vue";

const darkMode = useDarkModeStore();

const idchoice = ref(3);
const time = ref("");

const cards = ref([
  {
    id: 1,
    photos: [
      {id: 1, src: require('@/assets/img/home/clientes-7.jpg')},
      {id: 2, src: require('@/assets/img/home/clientes-1.jpg')},
      {id: 3, src: require('@/assets/img/home/clientes-2.jpg')},
      {id: 4, src: require('@/assets/img/home/clientes-3.jpg')},
    ]
  },
  {
    id: 2,
    photos: [
      {id: 1, src: require('@/assets/img/home/clientes-4.jpg')},
      {id: 2, src: require('@/assets/img/home/clientes-5.jpg')},
      {id: 3, src: require('@/assets/img/home/clientes-6.jpg')},
      {id: 4, src: require('@/assets/img/home/clientes-8.jpg')},
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
    text2: 'Ideal para festas modernas, premiações, casamentos e eventos de marca que querem oferecer uma atração premium e tecnológica. A estrutura da plataforma é robusta e segura, e o cenário conta com acessórios temáticos para elevar ainda mais o impacto visual. A Plataforma 360 é mais do que uma filmagem: é uma experiência divertida, glamourosa e inesquecível!',
    src: require('@/assets/videos/plataforma.mp4')
  },
  {
    id: 2, title: 'Cabine Fotográfica',
    text1: 'Diversão garantida com muita criatividade! A Cabine Fotográfica é uma das atrações mais queridas em qualquer tipo de evento. Ela oferece um espaço reservado e descontraído onde os convidados podem soltar a imaginação, usar adereços divertidos e posar sem vergonha. Cada clique vira uma lembrança física e instantânea, ideal para guardar ou colar no mural da festa.\n',
    text2: 'Com sistema de impressão rápida, as fotos saem em segundos com molduras personalizadas, logotipos e mensagens especiais. É possível configurar diferentes layouts, como tirinhas ou fotos únicas, sempre com qualidade profissional. A cabine também proporciona privacidade, incentivando momentos mais espontâneos e engraçados entre amigos e familiares.\n',
    src: require('@/assets/img/home/cabine-2.jpg')
  },
  {
    id: 3, title: 'Espelho Mágico',
    text1: 'Um toque vintage com tecnologia moderna! O Espelho Retrô é perfeito para quem quer unir elegância, interatividade e inovação em um só equipamento. Seu design sofisticado encanta os convidados logo de cara, criando um ponto de destaque na decoração do evento. Ele funciona como um espelho mágico que, ao toque, se transforma em uma tela interativa.',
    text2: 'Além disso, as fotos são reveladas instantaneamente em alta qualidade, prontas para levar como lembrança. O espelho pode ser totalmente personalizado com molduras, layouts, hashtags e identidade visual do evento, seja ele um casamento, festa corporativa ou aniversário. E o melhor: tudo isso com uma pitada de nostalgia charmosa que só o visual retrô pode proporcionar. O Espelho Retrô transforma fotos em momentos únicos e memoráveis!\n',
    src: require('@/assets/img/home/espelho.jpg')
  },
  {
    id: 4, title: 'Totem Fotográfico',
    text1: 'Moderno, prático e versátil, o Totem Fotográfico é a solução ideal para eventos dinâmicos e interativos. Ele oferece uma experiência intuitiva e rápida: basta tocar na tela, posar para a câmera e receber a foto impressa na hora. Com um visual clean e elegante, o Totem se adapta perfeitamente a qualquer ambiente, seja em festas sociais, eventos corporativos ou ativações de marca.',
    text2: 'Compacto e fácil de instalar, ele ocupa pouco espaço e pode ser posicionado estrategicamente para atrair o maior número de pessoas. Ideal para quem busca agilidade sem abrir mão da qualidade e da interação. O Totem Fotográfico é sucesso garantido em qualquer evento!\n',
    src: require('@/assets/img/home/totem.jpg')
  },
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


const avaliacoes = ref([
  {
    id: 1, name: 'Ricardo de P.L',
    photo: require('../assets/img/home/semFoto.jpg'),
    text: 'São profissionais assíduos, competentes e comprometidos no que fazem. Interagiram envolvendo todos nossos convidados. Os vídeos e as músicas ficaram bacana como lembrança do aniversário da Cauane15 anos.'
  },
  {
    id: 2, name: 'Karine Prado',
    photo: require('../assets/img/home/semFoto.jpg'),
    text: 'Otimo atendimento, fizeram toda a diferença na minha festa, fora atração. Super atenciosos e queridos, alem de muito atensiosos.'
  },
  {
    id: 3, name: 'Angelica Silva',
    photo: require('../assets/img/home/semFoto.jpg'),
    text: 'Tivemos uma ótima experiência, profissionais pontuais atenciosos e as fotos e vídeos de qualidade. Nossas crianças amaram!'
  },
  {
    id: 4, name: 'Arenil Almeida',
    photo: require('../assets/img/home/semFoto.jpg'),
    text: 'Atendimento excelente. Seu evento não pode ficar sem eles. Indico para todos e todas as idades'
  },
]);
</script>
