<template>
  <div class="auth_input_field_input">
    <div class="auth_input_field_label">{{ props.label }}</div>
    <v-text-field
      :model-value="inputValue"
      variant="plain"
      :placeholder="props.placeholder"
      :error-messages="errorMsg"
      @update:model-value="updateValue"
    ></v-text-field>
  </div>
</template>
<script setup>
import {ref, watch} from "vue";

const emit = defineEmits(["update"]);
const props = defineProps({
  label: String,
  placeholder: String,
  errMsg: String,
});
const inputValue = ref("");
const errorMsg = ref(props.errMsg);

watch(props, props => {
  errorMsg.value = props.errMsg;
});


function updateValue(val) {
  inputValue.value = val;
  emit('update', val);
}
</script>
<style scoped>
.auth_input_field_input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  gap: 8px;
}

.auth_input_field_input:deep(.v-input--density-default) {
  --v-input-control-height: 48px;
  --v-input-padding-top: 0px;
}
.auth_input_field_input:deep(.v-field) {
  height: 48px;
  border: 1px solid var(--background-alternative);
  border-radius: 10px;
}
.auth_input_field_input:deep(.v-field--focused) {
  border: 1px solid var(--label-normal);
}
.auth_input_field_input:deep(.v-field__input) {
  height: 48px;
  padding: 12px;
}

.auth_input_field_label {
  color: var(--label-assistive);
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px
}

.auth_input_field_input {
  margin-bottom: 16px;
}

.auth_input_field_link a {
  color: #1A95CD;
}
</style>