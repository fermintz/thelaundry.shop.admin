<template>
  <div class="date_search">
    <span>
      <v-menu
        v-model="datePicker"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="datesJoin"
            class="textInput"
            hide-details
            dense
            prepend-icon="mdi-calendar-blank"
            placeholder="날짜선택"
            v-on="on"
            v-bindd="attrs"
          />
        </template>
        <v-date-picker v-model="dates" range>
          <v-spacer></v-spacer>
          <v-btn text>취소</v-btn>
          <v-btn text @click="datePicker = false">확인</v-btn>
        </v-date-picker>
      </v-menu>
    </span>
    <span>
      <v-btn-toggle v-model="toggle_none">
        <v-btn text>
          1일
        </v-btn>
        <v-btn text>
          3일
        </v-btn>
        <v-btn text>
          7일
        </v-btn>
        <v-btn text>
          15일
        </v-btn>
        <v-btn text>
          1개월
        </v-btn>
        <v-btn text>
          3개월
        </v-btn>
      </v-btn-toggle>
    </span>
    <span class="btns">
      <v-btn text class="reset">
        초기화
      </v-btn>
      <v-btn text class="search">
        검색
      </v-btn>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10),
      ],
      searchDate: "",
      datePicker: false,
    };
  },
  computed: {
    datesJoin() {
      return this.dates.join(" ~ ");
    },
  },
};
</script>

<style lang="scss" scoped>
.date_search {
  background: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 10px;
  margin-bottom: 20px;

  .textInput {
    width: 240px;
    border-radius: 4px;
    font-size: 13px;
  }

  span {
    margin-right: 20px;
    .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
      height: 28px;
    }
  }

  .btns {
    .v-btn {
      height: 28px;
      min-width: 80px;
    }
    .v-btn.reset {
      border: 1px solid #292929;
      margin-right: 5px;
    }
    .v-btn.search {
      background: #292929;
      color: #fff;
    }
  }
}
</style>