<template>
  <v-dialog
    v-model="visible"
    max-width="400"
  >
    <v-card class="card">
      <div class="card-head">
        <h4>1번세탁기 금액투입</h4>
      </div>
      <div class="card-body">
        <v-text-field 
          label="금액"
          type="number"
          dense
          outlined
        />
        <v-textarea 
          label="사유입력"
          dense
          outlined
          clearable
          counter="50"
        />
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="cancle" @click="show(false)">취소</v-btn>
        <v-btn text class="done" @click="show(false)" color="#00afff">확인</v-btn>
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
}
</script>

<style lang="scss" scoped>

</style>