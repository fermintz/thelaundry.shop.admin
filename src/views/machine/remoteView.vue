<template>
  <div class="remoteView">

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
import TableDateSearch from '@/components/tableDateSearch.vue';

export default {
  components:{
    TableDateSearch
  },

  data(){
    return{
      header:[
        {
          text:'원격투입일시',
          sortable:true,
          align:'left',
          value:'date',
        },
        {
          text:'장비정보',
          sortable:true,
          align:'left',
          value:'machine',
        },
        {
          text:'원격투입금액',
          sortable:true,
          align:'left',
          value:'price',
        },
        {
          text:'원격투입사유',
          sortable:true,
          align:'left',
          value:'excuse',
        },
      ],
      items:[
        {
          date:'2020-10-19 13:45:12',
          machine:'세탁기 1번',
          price:5000,
          excuse:'현금투입 인식 불량으로 인한 원격제어 투입'
        }
      ]
    }
  }
}
</script>