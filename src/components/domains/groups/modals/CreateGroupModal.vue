<template>
  <common-modal
    :width="560"
    title="새 그룹 생성"
    :open="isOpen"
    @input="store.createGroupModalControl.setIsOpen"
  >
    <template v-slot:contents>
      <div class="modal_container">
        <div class="modal_title">새 공유 그룹 만들기</div>
        <v-text-field
          class="input_field"
          variant="outlined"
          density="compact"
          placeholder="새 공유 그룹 이름.."
          hint="새 공유 그룹 이름을 입력하세요"
          v-model="newGroupName"
          color="var(--primary-navy)"
          @keyup.enter="confirmCreate"
        ></v-text-field>
        <v-text-field
          class="input_field"
          variant="outlined"
          density="compact"
          placeholder="사용자 이메일.."
          hint="새 공유 그룹에 초대할 사용자 이메일을 입력하세요"
          v-model="newUserName"
          color="var(--primary-navy)"
          @keyup.enter="addUser"
        >
          <template v-slot:append>
            <v-btn @click="addUser" variant="flat" icon="mdi-plus" width="32" height="32"></v-btn>
          </template>
        </v-text-field>
        <div class="user_list" v-if="newUsers.length">
          <div class="user_column">참여 유저 목록: </div>
          <div class="user_element" v-for="(user, idx) in newUsers" :key="user">
            <div>
              <v-icon icon="mdi-person"></v-icon>
            </div>
            <div>{{ user }}</div>
            <div>
              <v-icon @click="removeUser(idx)" icon="mdi-close" color="red"></v-icon>
            </div>
          </div>
        </div>
        <div class="user_list empty_user_list" v-else>본인 외 참여 유저가 없습니다.</div>
      </div>
    </template>
    <template v-slot:buttons>
      <div class="modal_footer">
        <v-btn variant="text" color="var(--primary-navy)" @click="confirmCreate">생성</v-btn>
        <v-btn variant="text" color="var(--label-assistive)" @click="closeModal">취소</v-btn>
      </div>
    </template>
  </common-modal>
</template>

<script setup>
import CommonModal from "@/components/commons/modals/CommonModal.vue";
import {ref, watch} from "vue";
import {useGroupStore} from "@/stores/groupStore.js";

const store = useGroupStore();
const isOpen = ref(store.createGroupModalControl.isOpen);
const newGroupName = ref("");
const newUsers = ref([]);
const newUserName = ref("");

watch(() => store.createGroupModalControl.isOpen, (value) => {
  isOpen.value = value;
});

function addUser() {
  newUsers.value.push(newUserName.value);
  newUserName.value = "";
}

function removeUser(idx) {
  newUsers.value.splice(idx, 1);
}

// Resets the modal state and closes it
function closeModal() {
  store.createGroupModalControl.setIsOpen(false);
  newGroupName.value = "";
  newUsers.value = [];
  newUserName.value = "";
}

async function confirmCreate() {
  await store.reqCreateGroup(newGroupName.value, newUsers.value);
  closeModal();
}
</script>

<style scoped>
.modal_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal_title {
  width: 100%;
  height: 32px;
  font-size: 16px;
  color: var(--label-normal);
}

.user_list {
  display: flex;
  flex-direction: column;
  min-height: 100px;
}
.empty_user_list {
  justify-content: center;
  align-items: center;
  color: var(--label-assistive);
  font-size: 14px;
}
.user_column {
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: var(--label-assistive);
  font-size: 14px;
}
.user_element {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: var(--label-normal);
  font-size: 14px;
}
.user_element div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.user_element div:nth-child(2) {
  width: 448px;
  min-width: 200px;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user_element div:nth-child(4) {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
