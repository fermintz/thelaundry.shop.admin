<template>
  <div class="errorPage fill-height">
    <h2>404</h2>
    <h4>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</h4>
    <p>존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경, <br>삭제되어 찾을 수 없습니다</p>
    <div class="btns">
      <v-btn text @click="()=> this.$router.push('/')">메인으로</v-btn>
      <v-btn text @click="()=> this.$router.go(-1)">이전페이지</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.errorPage{
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  text-align:center;

  h2{
    font-size:140px;
    line-height:140px;
    color:#fff;
    background:#e2e2e2;
    border-radius:30px 10px 30px 10px;
    padding:40px;
  }
  h4{
    font-size:24px;
    margin-top:40px;
    font-family:'NotoSansKR';
    font-weight:500;
  }
  p{
    margin-top:10px;
  }

  .btns{
    margin-top:40px;

    .v-btn{
      border:1px solid #c2c2c2;
      margin:0 5px;
    }
  }
}
</style>