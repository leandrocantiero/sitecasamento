<script setup>
defineProps({
  variant: {
    type: String,
    validator(variant) {
      return ["contained", "gradient", "outline"].includes(variant);
    },
    default: "contained",
  },
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "error",
        "light",
        "white",
        "dark",
        "none",
      ].includes(color);
    },
    default: "",
  },
  size: {
    validator(size) {
      return ["sm", "md", "lg"].includes(size);
    },
    default: "md",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
function getClasses(variant, color, size, fullWidth, disabled, loading) {
  let colorValue, sizeValue, fullWidthValue, activeValue;

  // Setting the button variant and color
  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === "outline") {
    colorValue = `btn-outline-${color}`;
  } else {
    colorValue = `btn-${color}`;
  }

  sizeValue = size && `btn-${size}`;

  fullWidthValue = fullWidth && `w-100`;

  activeValue = (disabled || loading) && `disabled`;

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
}
</script>
<template>
  <button
    class="btn"
    :class="getClasses(variant, color, size, fullWidth, disabled, loading)"
  >
    <slot v-if="!loading" />
    <i v-else class="material-icons spinner md-48">refresh</i>
  </button>
</template>

<style>
.spinner {
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
</style>
