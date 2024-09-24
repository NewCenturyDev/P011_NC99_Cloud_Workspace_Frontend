<template>
  <div class="command_bar_container">
    <command-button :is-upload="true" :width="75" variant="flat" class="upload_btn">
      <v-icon icon="mdi-upload"></v-icon>
      올리기
    </command-button>
    <command-button :width="65" variant="outlined" @click="createDirModalControl.launch">
      새 폴더
    </command-button>
    <command-button v-if="fileStore.selectedIndexes.length" :width="75" variant="outlined">
      내려받기
    </command-button>
    <command-button v-if="fileStore.selectedIndexes.length" :width="45" variant="outlined">
      공유
    </command-button>
    <command-button v-if="fileStore.selectedIndexes.length" :width="45" variant="outlined">
      삭제
    </command-button>
    <command-extra-menu v-if="fileStore.selectedIndexes.length"></command-extra-menu>
    <v-spacer></v-spacer>
    <command-button :width="40" variant="flat">
      <v-icon icon="mdi-information-outline">

      </v-icon>
    </command-button>
  </div>
  <create-dir-modal
      :open="createDirModalControl.getIsOpen()"
      :target="fileStore.currentPath"
      @input="createDirModalControl.setIsOpen"
  ></create-dir-modal>
</template>

<script setup>
import {useModalControl} from "@/components/commons/modals/composables/ModalControl.js";
import {useFileStore} from "@/stores/fileStore.js";
import CommandButton from "@/components/domains/files/commands/CommandButton.vue";
import NameChangeModal from "@/components/domains/files/modals/NameChangeModal.vue";
import CreateDirModal from "@/components/domains/files/modals/CreateDirModal.vue";
import CommandExtraMenu from "@/components/domains/files/commands/CommandExtraMenu.vue";


const fileStore = useFileStore();
const nameChangeModalControl = useModalControl();
const createDirModalControl = useModalControl();
</script>

<style scoped>
.command_bar_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
