<template>
  <h1 :class="`text-${size}xl`" class="font-semibold">
    <slot name="title"></slot>
    <span class="font-bold ml-2" :class="darkMode.darkMode ? ' text-dark-orange' : 'text-light-orange'">
      <slot name="span"></slot>
    </span>
  </h1>
</template>

<script setup>
import {useDarkModeStore} from "@/stores/themes/darkmode";
import {toRefs, defineProps, computed} from "vue";

const darkMode = useDarkModeStore();

const props = defineProps({
  fontSize: {type: String, default: '3'}
});

const {fontSize} = toRefs(props);
const size = computed(() => fontSize.value)
</script>