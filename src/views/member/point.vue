<template>
  <div class="memberPoint">
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
      >
      </v-data-table>
    </div>
  </div>
</template>

<script>
import TableDateSearch from '@/components/tableDateSearch.vue'

export default {
  components:{
    TableDateSearch,
  },
  data(){
    return{
      header:[
        {text:'구분',sortable:true,align:'left',value:'cate'},
        {text:'날짜',sortable:true,align:'left',value:'date'},
        {text:'회원',sortable:true,align:'left',value:'member'},
        {text:'충전/차감액',sortable:true,align:'left',value:'price'},
        {text:'충전/차감사유',sortable:true,align:'left',value:'excuse'},
      ],
      items:[
        {
          cate:'충전',
          date:'2020-10-19 12:34:12',
          member:'010-8525-4561',
          price:5000,
          excuse:'기기 오류로 인한 오작동 재충전'
        }
      ],
    }
  },
}
</script>