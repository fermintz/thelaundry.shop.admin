<template>
  <v-dialog
    v-model="visible"
    width="900"
  >
    <v-card class="card">
      <div class="card-head">
        <h4><strong>010-8525-4561</strong> 님의 이용내역</h4>
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
          text:'구분',
          sortable:true,
          align:'center',
          value:'cate',
          width:80
        },
        {
          text:'사용일시',
          sortable:true,
          align:'left',
          value:'date',
        },
        {
          text:'내용',
          sortable:false,
          align:'left',
          value:'content',
        },
        {
          text:'금액',
          sortable:false,
          align:'left',
          value:'price',
        },
        {
          text:'포인트',
          sortable:false,
          align:'left',
          value:'point',
        }
      ],
      items:[
        {
          cate:'충전',
          date:'2020-10-16 13:45:12',
          content:'현금으로 포인트를 구매',
          price:1000 + '원',
          point: '적립 ' + 1000 + 'P'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.card{
  .card-head{
    h4{
      color:#888;
      strong{
        color:#292929;
        font-size:16px;
        font-weight:500
      }
    }
  }
}

</style>