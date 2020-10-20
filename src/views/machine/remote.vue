<template>
  <div class="remote">
    <v-row>
      <v-col xl="3" lg="4" md="6" sm="12" v-for="item in 10" :key="item">
        <v-card class="card">
          <div class="card-head">
            <h4>{{item}}번 세탁기</h4>
            <p>타입: 세탁기 | 용량: 19Kg</p>
          </div>
          <div class="card-body">
            <v-btn 
              text
              @click="()=>$refs.coinRemote.show(true)"
            >
              <span>금액투입</span>
              <v-icon>mdi-chevron-right</v-icon>             
            </v-btn>
            <v-btn text @click="()=>$refs.remoteList.show(true)">
              <span>원격제어내역 보기</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <CoinRemote 
      ref="coinRemote"
    />
    <RemoteList
      ref="remoteList"
    />
  </div>
</template>

<script>
import CoinRemote from '@/components/modal/coinRemote.vue';
import RemoteList from '@/components/modal/remoteList.vue';

export default {
  components:{
    CoinRemote, RemoteList
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  .card-head{
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 15px;
    border-bottom:1px solid #e2e2e2;
    background:#f8f8f8;

    h4{
      font-weight:400;
      font-size:15px;
    }
    p{
      margin:0px;
      font-size:12px;
      color:#888;
    }
  }
  .card-body{
    display:flex;
    padding:15px;

    .v-btn{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      flex:1;
      margin:0 5px;
      background:#fff;
      border:1px solid #c2c2c2;
      color:#292929;
      padding:0 8px;
      overflow: hidden;

      .v-icon{color:#c2c2c2;}
    }
  }
}
</style>