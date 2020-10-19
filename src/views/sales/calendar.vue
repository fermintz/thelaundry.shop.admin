<template>
  <div class="calendar-cell">
    <v-row>
      <v-col xl="9" lg="9" md="12">
        <div class="calendar-wrap">
          <div class="calendar-control">
            <v-btn @click="prev" icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <h4>
              {{ month | moment('YYYY'+'년'+' '+'MM'+'월') }}
            </h4>
            <v-btn @click="next" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
          <div class="week-label">
            <span v-for="item in ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']" :key="item">
              {{item}}
            </span>
          </div>
          <v-calendar
            v-model="month"
            :now="month"
            :day-format="convertDay"
            ref="calendar"
            type="month"
            hide-header
            class="calendar"
            locale="kr"
          >
            <template v-slot:day="{date}">
              <div class="dayBox" v-show="tracked[date]">
                <span class="item" v-for="(item, i) in tracked[date]" :key="i" :class="{total:item.total}">
                  <label>{{item.name}}</label>
                  <strong>{{item.price | amount }}</strong>
                </span>
              </div>             
            </template>
          </v-calendar>
        </div>
      </v-col>
      <v-col xl="3" lg="3" md="12">
        <v-card class="card" >
          <v-card-title class="card-title">
            해당 월 주요현황
          </v-card-title>
          <v-card-text>
            <dl>
              <dt>결제건수</dt>
              <dd>2건</dd>
            </dl>
            <dl>
              <dt>총 매출</dt>
              <dd>12,000원</dd>
            </dl>
            <dl>
              <dt>최대매출일</dt>
              <dd>17일</dd>
            </dl>
            <dl>
              <dt>최소매출일</dt>
              <dd>-</dd>
            </dl>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data(){
    return{
      month: new Date(),
      tracked:{
        '2020-10-01':[
          {
            name:'장비현금',
            price:20000
          },
          {
            name:'Kiosk(현금)',
            price:15000
          },
          {
            name:'Kiosk(카드)',
            price:15000
          },
          {
            total:true,
            name:'합계',
            price:50000
          }
        ],
        '2020-10-07':[
          {
            name:'장비현금',
            price:20000
          },
          {
            name:'Kiosk(현금)',
            price:15000
          },
          {
            name:'Kiosk(카드)',
            price:15000
          },
          {
            total:true,
            name:'합계',
            price:50000
          }
        ],
        '2020-10-09':[
          {
            name:'장비현금',
            price:20000
          },
          {
            name:'Kiosk(현금)',
            price:15000
          },
          {
            name:'Kiosk(카드)',
            price:15000
          },
          {
            total:true,
            name:'합계',
            price:50000
          }
        ]
      }
    }
  },

  methods:{
    prev(){
      this.$refs.calendar.prev();
    },
    next(){
      this.$refs.calendar.next();
    },
    convertDay(date) {
      return date.day;
    }
  },
}
</script>

<style lang="scss">
.calendar-cell{height:100%;}
.row{margin:0px;height:100%;}

.week-label{
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom:10px;
  height:40px;
  background:#393939;

  span{
    color:#fff;
  }
}

.calendar-wrap{
  display:flex;
  flex-direction: column;

  .calendar-control{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;

    h4{font-size:22px;}
  }

  .calendar{
    min-height:720px;

    .dayBox{
      padding:10px;
      span{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin:5px 0;

        label{font-size:12px;color:#797979;}
        strong{font-size:13px;font-family:'Roboto';font-weight:500;color:#292929}
      }

      span.total{
        border-top:1px solid #e2e2e2;
        padding-top:10px;
        margin-top:10px;
        strong{color:#ff0037;}
      }
    }
  }
}


</style>