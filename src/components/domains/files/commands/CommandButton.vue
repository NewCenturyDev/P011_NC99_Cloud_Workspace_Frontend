<template>
  <div class="command_button_container">
    <v-btn
        :min-width="10"
        :width="props.width"
        :variant="props.variant"
        density="default"
    >
      <slot></slot>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({ label: String, width: Number, variant: String})
</script>

<style scoped>
</style>
