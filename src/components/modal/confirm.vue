<template>
  <v-dialog
    v-model="visible"
    width="320"
    max-width="500"
  >
    <v-card class="card">
      <v-card-title>
        <h4>{{this.title}}</h4>
      </v-card-title>
      <v-card-text>
        <p>{{this.description}}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="cancle" @click="show(false)">취소</v-btn>
        <v-btn text class="done" @click="show(false)">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js'

export default {
  props:[
    'title','description'
  ],
  mixins:[ModalMixin],
}
</script>

<style lang="scss" scoped>

.card{
  h4{font-size:18px;font-weight:500}
  p{font-size:16px;font-weight:400}

  .done{color:#01addd}
}


</style>