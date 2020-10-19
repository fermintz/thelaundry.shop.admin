<template>
  <div class="member">
    <v-row>
      <v-col xl="9" lg="9" md="12">
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
      </v-col>
      <v-col xl="3" lg="3" md="12">
        <v-card class="card">
          <v-card-title class="card-title">이번달 발송 요약</v-card-title>
          <v-card-text>
            <dl class="point">
              <dt>총 문자발송건수</dt>
              <dd>681 건</dd>
            </dl>
            <dl>
              <dt>시스템 문자발송건수</dt>
              <dd>248 건</dd>
            </dl>
            <dl>
              <dt>마케팅 문자발송건수</dt>
              <dd>15 건</dd>
            </dl>
          </v-card-text>
        </v-card>
        <v-card class="card smsGetForm">
          <v-card-title class="card-title">
            문자발송하기
          </v-card-title>

          <v-card-text>
            <dl>
              <dt>발송가능한 회원 수</dt>
              <dd>10명</dd>
            </dl>
            <v-textarea 
              outlined
              counter="50"
              placeholder="발송할 문자 내용을 입력해주세요"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>발송하기</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TableDateSearch from '@/components/tableDateSearch'

export default {
  components:{
    TableDateSearch
  },
  data(){
    return{
      header:[
        {text:'보낸일시',sortable:true,align:'left',value:'getDate'},
        {text:'문자전송내용',sortable:false,align:'left',value:'smsContent'},
        {text:'보낸건수',sortable:false,align:'center',value:'getNumber'},
      ],
      items:[
        {
          getDate:'2020-10-16 13:56:12',
          smsContent:'이벤트 문자를 발송합니다 개행문자 처리가 정상적으로 되는지 확인합니다 감사합니다',
          getNumber:94,
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  margin-bottom:15px;
  .point{
    dd{
      color:#d22828;
    }
  }
  .v-btn{background:#292929;color:#fff;}

}

.card.smsGetForm{
  dl{
    dd{font-size:18px;font-weight:400;color:#00a0e9} 
  }
}

</style>