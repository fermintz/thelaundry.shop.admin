<template>
  <v-dialog
    v-model="visible"
    max-width="400"
  >
    <v-card class="card">
      <div class="card-head">
        <h4>포인트 충전/차감</h4>
      </div>
      <div class="card-body">
        <dl>
          <dt>선택된 회원</dt>
          <dd>010-8525-4561</dd>
        </dl>

        <div class="divider"></div>

        <v-radio-group :column="false" v-model="radioGroup">
          <v-radio v-for="item in ['포인트충전','포인트차감']" :key="item" class="mr-6">
            <template v-slot:label>
              <span class="radioLabel">{{item}}</span>
            </template>
          </v-radio>
        </v-radio-group>
        
        <v-text-field 
          label="충전/차감 금액입력"
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
        <v-btn text class="done" @click="show(false)" color="#00afff">실행</v-btn>
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
      radioGroup:1
    }
  }
}
</script>

<style lang="scss" scoped>

.card{
  dl{
    dd{color:#d22828}
  }
}

.radioLabel{
  font-size:14px;
  font-weight:400;
  color:#292929;
  margin-left:-5px;
}

.divider{
  height:1px;
  background:#e2e2e2;
  margin:15px 0;
}

</style>