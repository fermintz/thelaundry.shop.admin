<template>
  <div class="realtime-sell">
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
        <template v-slot:item.options>
          <div class="itemBtns">
            <v-btn text>포인트 사용내역</v-btn>
            <v-btn text>포인트충전/차감</v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import TableDateSearch from '@/components/tableDateSearch.vue';

export default {
  components:{
    TableDateSearch
  },
  data(){
    return{
      search:'',
      header:[
        {text:'결제일시',sortable:true,align:'left',value:'date'},
        {text:'상품정보',sortable:true,align:'left',value:'info'},
        {text:'결제금액',sortable:true,align:'left',value:'price'},
        {text:'결제수단',sortable:true,align:'left',value:'credit'},
        {text:'지급포인트',sortable:true,align:'left',value:'point'},
      ],
      items:[
        {
          date:'2020-10-14 10:34:34',
          info:'키오스크 포인트 충전',
          price:343000,
          credit:'현금',
          point:6100,
        },
        {
          date:'2020-10-13 11:34:53',
          info:'키오스크 포인트 충전',
          price:164000,
          credit:'현금',
          point:5300,
        },
      ],
      
    }
  },

}
</script>