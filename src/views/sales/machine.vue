<template>
  <div class="machine-sales">
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
    TableDateSearch
  },
  data(){
    return{
      header:[
        {
          text:'장비명',
          sortable:true,
          align:'left',
          value:'name',
        },
        {
          text:'유형',
          sortable:true,
          align:'left',
          value:'cate',
        },
        {
          text:'일 평균매출',
          sortable:true,
          align:'left',
          value:'avg',
        },
        {
          text:'누적매출',
          sortable:true,
          align:'left',
          value:'totalPrice',
        },
      ],

      items:[
        {
          name:'A유닛 장비명',
          cate:'세탁기',
          avg:'10000',
          totalPrice:'50000',
        },
        {
          name:'B유닛 장비명',
          cate:'세탁기',
          avg:'5000',
          totalPrice:'99000',
        },
      ],
    }
  },
}
</script>