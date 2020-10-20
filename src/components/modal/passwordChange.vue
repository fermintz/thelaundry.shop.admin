<template>
  <v-dialog
    v-model="visible"
    max-width="400"
  >
    <v-card class="card">
      <div class="card-head">
        <h4>비밀번호 변경</h4>
      </div>
      <div class="card-body">
        <v-text-field 
          v-model="password"
          label="현재 비밀번호"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="passwordShow ? 'text' : 'password'"
          dense
          outlined
          @click:append="passwordShow = !passwordShow"
        />
        <v-text-field 
          v-model="newPassword"
          label="새 비밀번호"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="newPasswordShow ? 'text' : 'password'"
          dense
          outlined
          @click:append="newPasswordShow = !newPasswordShow"
        />
        <v-text-field 
          label="새 비밀번호 확인"
          type="password"
          dense
          outlined
        />
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="cancle" @click="show(false)">취소</v-btn>
        <v-btn text class="done" @click="show(false)" color="#00afff">변경하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js';
export default {
  mixins:[
    ModalMixin,
  ],
  data(){
    return{
      password:'',
      passwordShow:false,
      newPassword:'',
      newPasswordShow:false,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>