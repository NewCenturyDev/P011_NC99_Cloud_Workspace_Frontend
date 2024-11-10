<template>
  <v-navigation-drawer
      v-model="isOpen"
      :temporary="true"
      location="right"
      @update:modelValue="closeDrawer"
  >
    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          @click="item.action"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";
import router from "@/router";

const props = defineProps({ open: Boolean });
const emit = defineEmits([ "input" ]);
const isOpen = ref(false);
const items = []

watch(() => props.open, () => {
  isOpen.value = props.open;
});

function closeDrawer() {
  isOpen.value = false;
  emit("input", false);
}


function gotoPage(endpoint) {
  router.push(endpoint);
}

function openPopup(url) {
  window.open(url)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- suppress unused simple due to vuetify -->
<!--suppress CssUnusedSymbol -->
<style scoped>
.v-navigation-drawer__scrim {
  position: fixed;
}
</style>
