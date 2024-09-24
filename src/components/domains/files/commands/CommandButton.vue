<template>
  <v-spacer v-if="!props.isUpload" class="command_button_spacer"></v-spacer>
  <div class="command_button_container">
    <v-btn
        :min-width="10"
        :width="props.width"
        :variant="props.variant"
        density="default"
        :color="props.isUpload ? '#4579FF' : undefined"
        @click="emit('click')"
    >
      <slot></slot>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({ isUpload: Boolean, label: String, width: Number, variant: String})
const emit = defineEmits([ "click" ]);
</script>

<style scoped>
.command_button_spacer {
  width: 10px;
  flex-grow: 0;
}
</style>
