<template>
  <div class="member">
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

import TableDateSearch from "@/components/tableDateSearch.vue";

export default {
  components: {
    TableDateSearch,
  },
  data() {
    return {
      search:'',
      header: [
        {
          text: "회원 전화번호",
          sortable: true,
          align: "left",
          value: "memberPhone",
        },
        {
          text: "남은포인트",
          sortable: true,
          align: "left",
          value: "remainPoint",
        },
        { text: "가입일자", sortable: true, align: "left", value: "joinDate" },
        {
          text: "마지막 포인트사용 일시",
          sortable: true,
          align: "left",
          value: "LastPointUse",
        },
        {
          text: "옵션",
          sortable: false,
          align: "right",
          value: "options",
        },
      ],
      items: [
        {
          memberPhone: "010-8525-4561",
          remainPoint: 31000,
          joinDate: "2020-10-16",
          LastPointUse: "2020-10-16 21:35:12",
        },
        {
          memberPhone: "010-8525-4561",
          remainPoint: 27000,
          joinDate: "2020-10-16",
          LastPointUse: "2020-10-16 21:35:12",
        },
        {
          memberPhone: "010-8525-4561",
          remainPoint: 65000,
          joinDate: "2020-10-16",
          LastPointUse: "2020-10-16 21:35:12",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
