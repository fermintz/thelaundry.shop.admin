<template>
  <v-dialog
    v-model="visible"
    width="900"
  >
    <v-card class="card">
      <div class="card-head">
        <h4>1번세탁기 원격제어내역</h4>
      </div>
      <div class="card-body">
        <div class="dataTable">
          <TableDateSearch />

          <div class="tableTop">
            <div class="tableTitle">
              <h4>목록</h4>
              <span>({{this.items.length}})</span>
            </div>
            <v-text-field
              placeholder="검색" 
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              hide-details
              class="searchInput"
            />
          </div>
          
          <v-data-table
            :headers="this.header"
            :items="this.items"
            :search="search"
          >
          </v-data-table>
        </div>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="done" @click="show(false)">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixins/modal.js'
import TableDateSearch from '@/components/tableDateSearch.vue';

export default {
  components:{
    TableDateSearch
  },
  mixins:[ModalMixin],

  data(){
    return{
      search:'',
      header:[
        {
          text:'일시',
          sortable:true,
          align:'left',
          value:'date',
          width:180
        },
        {
          text:'원격제어 사유',
          sortable:true,
          align:'left',
          value:'content',
        },
      ],
      items:[
        {
          content:'현금지폐기 오류로 인한 투입',
          date:'2020-10-16 13:45:12',
        },
        {
          content:'장비오류로 인한 투입',
          date:'2020-10-16 13:45:12',
        },
        {
          content:'테스트를 위한 투입',
          date:'2020-10-16 13:45:12',
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>



</style>