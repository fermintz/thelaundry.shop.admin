<template>
  <v-dialog
    v-model="visible"
    width="320"
    max-width="500"
    persistent
  >
    <v-card>
      <v-card-title>비밀번호 찾기</v-card-title>
      <v-card-text>
        <p>가맹시 기입했던 전화번호를 입력해주세요</p>
        <div class="row">
          <v-text-field 
            label="전화번호 입력"
            hint="'-'없이 입력해주세요"
          />
          <v-btn 
            text 
            @click="number = true">전송
          </v-btn>
        </div>
        <v-text-field 
          label="인증번호 입력"
          v-show="number"
        />
      </v-card-text>
      <v-card-actions >
        <v-spacer />
        <v-btn text @click="show(false), number = false">취소</v-btn>
        <v-btn 
          text 
          color="#00a0e9"
          v-show="number"
          @click="show(false),number = false"
        >인증완료</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js'

export default {
  mixins:[ModalMixin],
  data(){
    return{
      number:false
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  margin:0px;
  align-items: center;
  .v-btn{
    min-width:60px;
    height:28px;
    background:#292929;
    color:#fff;
    margin-left:15px;
  }
}
</style>