<template>
  <div class="chart">
    <v-tabs 
      v-model="tabIndex"
      class="tabs"
    >
      <v-tab 
        v-for="item in tabs" :key="item"
      >
        {{item}}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabIndex">
      <v-tab-item 
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        <v-row>
          <v-col cols="9">
            <div class="dateSelect">
              <v-menu
                v-model="datePicker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="280px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    class="textInput"
                    hide-details
                    dense
                    prepend-icon="mdi-calendar-blank"
                    v-on="on"
                    v-bindd="attrs"
                    outlined
                  />
                </template>
                <v-date-picker 
                  v-model="date"
                  type="month"
                  lang="kr"
                  @input="datePicker = false"
                  :month-format="convertMonth"
                  no-title
                />
              </v-menu>
            </div>
            <div class="chartBox">
              <LineChart
                :chartData="day.chartdata"
                :options="day.options"
              />
            </div>
          </v-col>
          <v-col cols="3">
            <v-card class="card">
              <v-card-title>주요요약</v-card-title>
              <div class="card-body">
                <dl>
                  <dt>
                    최고 매출
                  </dt>
                  <dd>
                    <div>24일 (금요일)</div>
                    <div style="font-weight:500">326,000 원</div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    최소 매출
                  </dt>
                  <dd>
                    <div>13일 (수요일)</div>
                    <div style="font-weight:500">134,000 원</div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    일 평균매출
                  </dt>
                  <dd>78,500 원</dd>
                </dl>
              </div>
            </v-card>
          </v-col>
        </v-row>
        
      </v-tab-item>
      <v-tab-item
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        <v-row>
          <v-col cols="9">
            <div class="dateSelect">
              <v-menu
                v-model="yearPicker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="240px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="year"
                    class="textInput"
                    hide-details
                    dense
                    prepend-icon="mdi-calendar-blank"
                    v-on="on"
                    v-bindd="attrs"
                    outlined
                  />
                </template>
                <v-list-item-group style="background:#fff">
                  <v-list-item 
                    v-for="item in ['2020','2019','2018']" 
                    :key="item"
                    @click="()=> {yearPicker = false, year = item}"
                    
                  >
                    {{item}}
                  </v-list-item>
                </v-list-item-group>
                <!-- <v-date-picker 
                  v-model="year"
                  no-title
                  type="year"
                  min="2017"
                  max="2020"
                  @click:year="yearSelected"
                /> -->
              </v-menu>
            </div>
            <div class="chartBox">
              <LineChart
                :chartData="month.chartdata"
                :options="month.options"
              />
            </div>
          </v-col>
          <v-col cols="3">
            <v-card class="card">
              <v-card-title>주요요약</v-card-title>
              <div class="card-body">
                <dl>
                  <dt>
                    최고매출
                  </dt>
                  <dd>
                    <div>11월</div>
                    <div style="font-weight:500">3,140,500원</div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    최소매출
                  </dt>
                  <dd>
                    <div>2월</div>
                    <div style="font-weight:500">2,420,700원</div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    월 평균매출
                  </dt>
                  <dd>2,878,500 원</dd>
                </dl>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue";


export default {
  components: {
    LineChart
  },
  data() {
    return {
      day:{
        chartdata: {
          labels: ["1일",'2일','3일','4일','5일','6일','7일','8일','9일'],
          datasets: [
            {
              label: "A장비",
              backgroundColor: "rgba(1,175,255,0.05)",
              borderWidth:2,
              borderColor:"#00afff",
              barPercentage:0.1,
              data: [40,20,30,40,60,10,20,30,100],
            },
            {
              label: "B장비",
              backgroundColor: "rgba(0,0,0,0.05)",
              borderWidth:2,
              borderColor:"#000",
              barPercentage:0.1,
              data: [80,70,10,90,120,30,40,60,50],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio:2,
          weight:0,
          layout:{
            padding:0,
          },
          scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }],
          },
        },
      },

      month:{
        chartdata: {
          labels: ["1월",'2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
          datasets: [
            {
              label: "A장비",
              backgroundColor: "rgba(1,175,255,0.05)",
              borderWidth:2,
              borderColor:"#00afff",
              barPercentage:0.1,
              data: [40,20,30,40,20,10,20,30,100,10,30,40],
            },
            {
              label: "B장비",
              backgroundColor: "rgba(0,0,0,0.05)",
              borderWidth:2,
              borderColor:"#000",
              barPercentage:0.1,
              data: [80,70,10,90,80,30,40,60,50,10,30,40],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio:2,
          weight:0,
          layout:{
            padding:0,
          },
          scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }],
          },
        },
      },

      tabs:['일간매출','월간매출'],
      tabIndex:null,
      date: new Date().toISOString().substr(0, 7),
      year: new Date().toISOString().substr(0, 4),
      searchDate: "",
      datePicker:false,
      yearPicker:false,
    };
  },

  methods:{
    convertMonth(value){
      return value.substring(5,7) + '월'
    },
    yearSelected(){
      this.yearPicker = false;
    }
    
  }
};
</script>

<style lang="scss" scoped>

.tabs{
  border-bottom:1px solid #e2e2e2;
  margin-bottom:30px;
}

.textInput{
  width:200px;
}

.chartBox{
  overflow: hidden;

  .dateSelect{
    margin-bottom:10px;   
  }
}

.card{
  margin-bottom:20px;
  dl{
    align-items: flex-start;
  }
}

</style>