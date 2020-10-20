<template>
  <v-app>
    <div class="header">
      <div class="logo">
        <img src="../assets/img/logo.png" />
        <h2>무인매장관리시스템</h2>
      </div>
      <div class="gnb">
        <v-btn text @click="()=>$refs.passwordChange.show(true)">비밀번호 변경</v-btn>
        <v-btn text @click="()=>$refs.confirm.show(true)">로그아웃</v-btn>
      </div>
    </div>

    <div class="main fill-height">
      <div class="nav">
        <div class="time-box">
          <span class="time">
            18:05:40
          </span>
          <span class="date">
            2020.10.13 (화요일)
          </span>
        </div>
        <div class="menu">
          <dl v-for="(items, rootIndex) in navigation" :key="rootIndex">
            <dt>{{ items.label }}</dt>
            <dd>
              <span
                v-for="(item, childIndex) in items.childern"
                :key="childIndex"
                @click="pageMove(item.path)"
              >
                {{ item.label }}
              </span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="contents">
        <div class="article fill-height">
          <div class="pageTitle">
            <h3>{{ this.$route.meta.title }}</h3>
            <p>{{ this.$route.meta.description }}</p>
          </div>
          <div class="inner">
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <PasswordChange ref="passwordChange"/>
    <Confirm
      ref="confirm"
      description="로그아웃 하시겠습니까?"
    />
  </v-app>
</template>

<script>
import PasswordChange from '@/components/modal/passwordChange.vue';
import Confirm from '@/components/modal/confirm.vue';

export default {
  components:{
    PasswordChange, Confirm
  },
  data() {
    return {
      navigation: [
        {
          label: "매출관리",
          childern: [
            {
              name: "calendar",
              label: "매출캘린더",
              path: "/",
            },
            {
              name: "sales",
              label: "매출내역",
              path: "/sales",
            },
            {
              name: "chart",
              label: "기간별매출그래프",
              path: "/salse/chart-sales",
            },
            {
              name: "machine-sales",
              label: "장비별 매출통계",
              path: "/salse/machine",
            },
          ],
        },
        {
          label: "장비관리",
          childern: [
            {
              name: "product",
              label: "장비별 상품관리",
              path: "/machine/product",
            },
            {
              name: "remote",
              label: "장비원격제어",
              path: "/machine/remote",
            },
            {
              name: "remote-view",
              label: "장비원격제어 내역",
              path: "/machine/remote-view",
            },
            {
              name: "remote-control",
              label: "키오스크 제어",
              path: "/machine/kiosk-control",
            },
          ],
        },
        {
          label: "고객관리",
          childern: [
            {
              name: "member",
              label: "키오스크 회원관리",
              path: "/member",
            },
            {
              name: "point",
              label: "포인트 관리내역",
              path: "/member/point",
            },
            {
              name: "sms",
              label: "문자발송 및 내역",
              path: "/member/sms",
            },
          ],
        },
      ],
    };
  },

  methods: {
    pageMove(value) {
      this.$router.push(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px;
  border-bottom: 2px solid #00a0e9;
  background-color: #fff;

  .logo {
    display: flex;
    align-items: center;
    img {
      height: 26px;
    }
    h2 {
      margin-left: 10px;
      font-size: 18px;
    }
  }
}

.main {
  display: flex;

  .nav {
    min-width: 220px;
    max-width: 220px;
    border-right: 1px solid #e2e2e2;

    .time-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 120px;
      background: #00afff;
      color: #fff;

      .time {
        font-size: 36px;
        font-family: "Roboto";
        font-weight: 400;
        letter-spacing: 0;
        line-height: 36px;
      }

      .date {
        display: flex;
        align-items: center;
        font-size: 14px;
        letter-spacing: 0;
        background: rgba(0, 0, 0, 0.15);
        padding: 0 20px;
        height: 26px;
        border-radius: 13px;
        margin-top: 10px;
      }
    }

    .menu {
      padding: 15px;

      dl {
        margin-bottom: 25px;
        padding-bottom: 25px;
        border-bottom: 1px solid #e2e2e2;

        dt {
          font-weight: 500;
        }
        dd {
          margin-top: 6px;
          span {
            padding: 3px 0;
            display: block;
            font-family: "gulim", "NotoSansKR";
            font-size: 12px;
            font-weight: 300;
            color: #797979;
            cursor: pointer;
          }
          span:hover {
            color: #00a0e9;
          }
          span.active {
            color: #00a0e9;
          }
        }
      }

      dl:last-child {
        border-bottom: 0px;
      }
    }
  }

  .contents {
    flex: 1;
    background: #f8f8f8;
    padding: 15px;

    .article {
      display: flex;
      flex-direction: column;
      border: 1px solid #e2e2e2;
      background: #fff;

      .pageTitle {
        display: flex;
        height: 50px;
        align-items: center;
        padding: 0 15px;
        border-bottom: 1px solid #e2e2e2;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

        h3 {
          font-size: 18px;
          font-weight: 500;
        }
        p {
          margin: 0;
          color: #595959;
          font-size: 14px;
          margin-left: 10px;
          font-weight: 300;
        }
      }

      .inner {
        flex: 1;
        padding: 20px;
      }
    }
  }
}
</style>
