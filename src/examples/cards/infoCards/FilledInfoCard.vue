<script setup>
defineProps({
  color: {
    text: String,
    background: {
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
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "",
        background: "bg-gray-100",
      };
    },
  },
  icon: {
    type: Object,
    required: true,
    component: String,
    color: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  descriptionClass: {
    type: String,
  },
  action: {
    type: Object,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <div
    class="info-horizontal border-radius-xl d-block d-md-flex"
    :class="`${color.background ?? ''}`"
  >
    <i class="material-icons" :class="`text-${icon.color}`">{{
      icon.component
    }}</i>
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 v-if="title" :class="`text-${color.text ?? ''}`">{{ title }}</h5>
      <p :class="`text-${color.text ?? ''} ${descriptionClass}`">
        {{ description }}
      </p>
      <div v-if="action">
        <a
            :href="action.route"
            class="icon-move-right"
            :class="`text-${action.label.color ?? 'success'}`"
        >
          {{ action.label.text }}
          <i class="fas fa-arrow-right text-sm ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>
