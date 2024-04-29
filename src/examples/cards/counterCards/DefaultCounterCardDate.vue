<script setup>
import CountTo from "vue-count-to/src";

defineProps({
  year: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  suffix: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  color: {
    validator(value) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ].includes(value);
    },
  },
  divider: {
    validator(value) {
      return ["vertical", "horizontal"].includes(value);
    },
  },
});
</script>
<template>
  <div class="text-center">
    <h1 :class="`text-gradient text-${color ?? 'success'}`">
      <CountTo :start-val="0" :end-val="day" :duration="duration" /> de
      {{ month }} de
      <CountTo :start-val="0" :end-val="year" :duration="duration" separator="" />
    </h1>
    <div v-if="title && description">
      <h5 class="mt-3">{{ title }}</h5>
      <p class="text-sm font-weight-normal">
        {{ description }}
      </p>
    </div>
  </div>
  <hr :class="`${divider ? divider : ''} dark`" />
</template>
