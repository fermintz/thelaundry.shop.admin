<template>
  <div class="kiosk-control">
    <v-row>
      <v-col xl="3" lg="4" md="6" v-for="item in kioskControls" :key="item">
        <v-card class="card">
          <div class="card-head">
            <div class="card-title">
              <v-icon>mdi-{{item.icon}}</v-icon>
              <h4>{{item.name}}</h4>
            </div>
          </div>
          <div class="card-body">
            {{item.text}}
          </div>
          <v-card-actions>
            <v-spacer/>
            <v-btn text>실행</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kioskControls:[
        {
          icon:'autorenew',
          name:'프로그램 재실행',
          text:'키오스크 프로그램을 다시 시작합니다.'
        },
        {
          icon:'power',
          name:'키오스크 전원 종료 후 재시작',
          text:'키오스크 장비의 전원을 종료 후 다시 시작합니다'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  .v-icon{margin-right:5px;color:#292929}
  .v-btn{background:#00afff;color:#fff;}
}
</style>