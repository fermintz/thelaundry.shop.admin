<template>
  <div class="login fill-height">
    <div class="login-card">
      <div class="card-head">
        <img src="../assets/img/logo_w.png">
        <span>더런드리 무인매장 관리시스템</span>
      </div>
      <div class="card-body">
        <v-form>
          <v-text-field label="아이디" outlined dense hide-details class="textInput"/>
          <v-text-field 
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="비밀번호"
            outlined 
            dense
            @click:append="show = !show"
          />
          <v-btn text @click="this.$router.push('/')">
            로그인
          </v-btn>
        </v-form>
      </div>

      <div class="card-footer">
        <v-btn 
          text 
          @click="()=> this.$refs.findPassword.show(true)"
        >
          비밀번호 찾기
        </v-btn>
      </div>
    </div>

    <FindPassword ref="findPassword"/>
  </div>
</template>

<script>
import FindPassword from '@/components/modal/findPassword.vue';

export default {
  components:{
    FindPassword,
  },
  data(){
    return{
      password:'',
      show:false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    display:flex;
    justify-content: center;
    align-items: center;
    background:url('../assets/img/login-bg.jpg') center;
  }

  .login-card{
    min-width:360px;
    background:#fff;
    box-shadow:5px 5px 15px rgba(0,0,0,0.15);
    border-radius:4px;
    overflow: hidden;

    .card-head{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background:#292929;
      height:100px;

      span{
        margin-top:5px;
        color:rgba(255,255,255,0.5);
        font-size:14px;
        font-family:'NotoSansKR';
        font-weight: 200;
      }
    }

    .card-body{
      padding:30px;

      form{
        .textInput{
          margin-bottom:15px;
          font-size:13px;
        }

        .v-btn{
          width:100%;
          height:40px;
          background:#00a0e9;
          color:#fff;
        }
      }
    }

    .card-footer{
      background:#f2f2f2;
      padding:10px;
      text-align: right;

      .v-btn{
        min-width:0;
        width:90px;
        height:24px;
        font-size:12px;
      }
    }
  }
</style>

