<template>
  <top-all-views>
    <template #section>
      <div class="contato-page mb-10">
        <v-container>
          <!-- Cabeçalho -->
          <div class="text-center mb-12">
            <text-orange-color font-size="3">
              <template v-slot:title>Entre em</template>
              <template v-slot:span>Contato</template>
            </text-orange-color>

            <p :class="darkMode.darkMode ? 'text-grey-lighten-1' : 'text-grey-darken-1'" class="text-lg mt-4">
              Preencha o formulário abaixo e entraremos em contato via WhatsApp
            </p>
          </div>

          <!-- Formulário -->
          <v-row data-aos="zoom-in" data-aos-duration="1200" justify="center">
            <v-col cols="12" md="8" lg="7">
              <v-card
                  class="pa-8 elevation-8 background-card"
                  elevation="0" rounded="lg"
              >
                <v-form @submit.prevent="enviarWhatsApp" ref="formRef">
                  <v-row>
                    <!-- Nome -->
                    <v-col cols="12">
                      <v-text-field
                          v-model="form.nome"
                          label="Nome *"
                          placeholder="Seu nome completo"
                          variant="outlined"
                          :rules="[rules.required]"
                          color="orange"
                          hide-details="auto"
                          clearable
                          prepend-inner-icon="mdi-account"
                      ></v-text-field>
                    </v-col>

                    <!-- Data do Evento -->
                    <v-col cols="12" md="6">
                      <v-text-field
                          v-model="form.dataEvento"
                          label="Data do Evento"
                          type="date"
                          variant="outlined"
                          color="orange"
                          hide-details="auto"
                          clearable
                          prepend-inner-icon="mdi-calendar"
                      ></v-text-field>
                    </v-col>

                    <!-- Tipo de Evento -->
                    <v-col cols="12" md="6">
                      <v-select
                          v-model="form.tipoEvento"
                          label="Tipo de Evento"
                          :items="tiposEvento"
                          variant="outlined"
                          color="orange"
                          hide-details="auto"
                          clearable
                          prepend-inner-icon="mdi-party-popper"
                      ></v-select>
                    </v-col>

                    <!-- Produto -->
                    <v-col cols="12" md="6">
                      <v-select
                          v-model="form.produto"
                          label="Produto de Interesse"
                          :items="produtos"
                          variant="outlined"
                          color="orange"
                          hide-details="auto"
                          clearable
                          prepend-inner-icon="mdi-camera"
                          @update:model-value="form.plano = ''"
                      ></v-select>
                    </v-col>

                    <!-- Plano -->
                    <v-col cols="12" md="6">
                      <v-select
                          v-model="form.plano"
                          label="Plano Desejado"
                          :items="planosDisponiveis"
                          variant="outlined"
                          color="orange"
                          prepend-inner-icon="mdi-clipboard-list"
                          :disabled="!form.produto"
                          item-title="label"
                          item-value="value"
                          clearable
                          hide-details="auto"
                      ></v-select>
                    </v-col>

                    <!-- Observações -->
                    <v-col cols="12">
                      <v-textarea
                          v-model="form.observacoes"
                          label="Observações"
                          placeholder="Conte-nos mais sobre seu evento..."
                          variant="outlined"
                          color="orange"
                          rows="4"
                          prepend-inner-icon="mdi-message-text"
                          no-resize
                          clearable
                          hide-details="auto"
                      ></v-textarea>
                    </v-col>

                    <!-- Botão Enviar -->
                    <v-col cols="12" class="text-center">
                      <v-btn
                          type="submit"
                          color="var(--color-orange-medium)"
                          size="large"
                          class="px-8 text-none"
                          elevation="0"
                          prepend-icon="mdi-whatsapp"
                      >
                        Enviar via WhatsApp
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
  </top-all-views>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDarkModeStore } from "@/stores/themes/darkmode";
import TextOrangeColor from "@/components/TextOrangeColor.vue";
import TopAllViews from "@/components/default/TopAllViews.vue";

const darkMode = useDarkModeStore();
const formRef = ref(null);

const form = ref({
  nome: '',
  dataEvento: '',
  produto: '',
  plano: '',
  tipoEvento: '',
  observacoes: ''
});

const rules = {
  required: value => !!value || 'Campo obrigatório'
};

const produtos = [
  'Plataforma 360',
  'Espelho Mágico',
  'Cabine Fotográfica',
  'Totem Fotográfico',
  'Expia a Foto',
];

const tiposEvento = [
  'Casamento',
  'Aniversário',
  'Formatura',
  'Evento Corporativo',
  'Festa de 15 Anos',
  'Confraternização',
  'Outro'
];

const planosDisponiveis = computed(() => {
  const planos = {
    'Plataforma 360': [
      { value: 'Plano Essencial - 1h', label: 'Plano Básico (1 hora)' },
      { value: 'Plano Celebração - 2h', label: 'Plano Intermediário (2 horas)' },
      { value: 'Plano Premium - 3h', label: 'Plano Premium (3 horas)' }
    ],
    'Espelho Mágico': [
      { value: 'Plano Essencial - 1h', label: 'Plano Básico (1 hora)' },
      { value: 'Plano Celebração - 2h', label: 'Plano Intermediário (2 horas)' },
      { value: 'Plano Premium - 3h', label: 'Plano Premium (3 horas)' }
    ],
    'Cabine Fotográfica': [
      { value: 'Plano Essencial - 1h', label: 'Plano Básico (1 hora)' },
      { value: 'Plano Celebração - 2h', label: 'Plano Intermediário (2 horas)' },
      { value: 'Plano Premium - 3h', label: 'Plano Premium (3 horas)' }
    ],
    'Totem Fotográfico': [
      { value: 'Plano Essencial - 1h', label: 'Plano Básico (1 hora)' },
      { value: 'Plano Celebração - 2h', label: 'Plano Intermediário (2 horas)' },
      { value: 'Plano Premium - 3h', label: 'Plano Premium (3 horas)' }
    ],
    'Expia a Foto': [
      { value: 'Plano Essencial - 1h', label: 'Plano Básico (1 hora)' },
      { value: 'Plano Celebração - 2h', label: 'Plano Intermediário (2 horas)' },
      { value: 'Plano Premium - 3h', label: 'Plano Premium (3 horas)' }
    ],
  };

  return planos[form.value.produto] || [];
});

const enviarWhatsApp = async () => {
  const { valid } = await formRef.value.validate();

  if (!valid) {
    return;
  }

  const numeroWhatsApp = '5565984475078';
  let mensagem = '';

  // Verifica se pelo menos um campo foi preenchido (exceto nome e telefone que são obrigatórios)
  const camposPreenchidos = form.value.dataEvento || form.value.produto || form.value.plano || form.value.tipoEvento || form.value.observacoes;

  if (!camposPreenchidos) {
    mensagem = 'Olá! Vim através do site da Maralua. Gostaria de mais informações.';
    mensagem += `\n👤 *Meu nome é:* ${form.value.nome}\n`;
    mensagem += `\nAguardo retorno! 😊`;

  } else {
    mensagem = `Olá! Vim através do site da Maralua. Seguem minhas informações:\n\n`;
    mensagem += `\n👤 *Meu nome é:* ${form.value.nome}\n`;

    if (form.value.dataEvento) {
      const dataFormatada = new Date(form.value.dataEvento).toLocaleDateString('pt-BR');
      mensagem += `📅 *Data do Evento:* ${dataFormatada}\n`;
    }

    if (form.value.tipoEvento) {
      mensagem += `🎉 *Tipo de Evento:* ${form.value.tipoEvento}\n`;
    }

    if (form.value.produto) {
      mensagem += `📸 *Produto de Interesse:* ${form.value.produto}\n`;
    }

    if (form.value.plano) {
      mensagem += `📋 *Plano Desejado:* ${form.value.plano}\n`;
    }

    if (form.value.observacoes) {
      mensagem += `💬 *Observações:* ${form.value.observacoes}\n`;
    }

    mensagem += `\nAguardo retorno! 😊`;
  }

  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  window.open(urlWhatsApp, '_blank');
};
</script>

<style scoped>
.contato-page {
  min-height: 100vh;
}
</style>