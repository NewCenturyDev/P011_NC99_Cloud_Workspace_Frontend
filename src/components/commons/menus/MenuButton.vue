<template>
  <v-btn
    :class="props.isPrimary ? 'menu_btn menu_btn_primary' : 'menu_btn menu_btn_normal'"
    @click="emit('click')"
    variant="flat"
  >
    <v-icon :icon="props.icon" :color="props.isPrimary ? '#FFFFFF' : '#37383C9C'"></v-icon>
    <span>{{ props.label }}</span>
  </v-btn>
</template>

<script setup>
const emit = defineEmits(["click"]);
const props = defineProps({icon: String, label: String, isPrimary: Boolean});
</script>

<style scoped>
.menu_btn {
  display: flex;
  flex-direction: row;
  height: 42px;
  padding: 0 16px;
  border-radius: 21px;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
}
.menu_btn:deep(.v-btn__content) {
  gap: 8px;
}
.menu_btn_normal {
  background-color: #FFFFFF;
  color: var(--label-assistive);
  border: 1px solid var(--line-normal);
}
.menu_btn_primary {
  background-color: var(--primary-navy);
  color: #FFFFFF;
}
</style>
