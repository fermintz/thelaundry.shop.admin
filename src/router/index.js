import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "../layout/default";
import Login from "../views/login.vue";
import Error404 from "../views/404.vue";
import Calendar from '../views/sales/calendar.vue';
import Sales from '../views/sales/sales.vue';
import ChartSales from '../views/sales/chart.vue';
import MachineSales from '../views/sales/machine.vue';
import Product from '../views/machine/product.vue';
import Remote from '../views/machine/remote.vue';
import RemoteView from '../views/machine/remoteView.vue';
import KioskControl from '../views/machine/kioskControl.vue';
import Sms from '../views/member/sms.vue';
import Point from '../views/member/point.vue';
import Member from '../views/member/member.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: "default",
    path:"/",
    component:DefaultLayout,
    children:[
      {
        path: "/",
        name: "calendar",
        component: Calendar,
        meta:{
          title:'매출캘린더',
          description:'달력으로 매출을 확인 할 수 있습니다.'
        }
      },
      {
        path: "/sales",
        name: "sales",
        component: Sales,
        meta:{
          title:'실시간 매출',
          description:'실시간으로 결제되는 매출을 확인할 수 있습니다.'
        }
      },
      {
        path: "/salse/machine",
        name: "machine-sales",
        component: MachineSales,
        meta:{
          title:'장비별 매출',
          description:'장비별 매출내역을 확인할 수 있습니다.'
        }
      },
      {
        path: "/salse/chart-sales",
        name: "chart-sales",
        component: ChartSales,
        meta:{
          title:'기간별 매출그래프',
          description:'매출을 그래프로 확인할 수 있습니다.'
        }
      },
      {
        path: "/machine/product",
        name: "product",
        component: Product,
        meta:{
          title:'장비별 상품관리',
          description:'장비의 상품을 등록 및 수정 할 수 있습니다.'
        }
      },
      {
        path: "/machine/remote",
        name: "remote",
        component: Remote,
        meta:{
          title:'장비원격제어',
          description:'장비를 원격으로 제어합니다.'
        }
      },
      {
        path: "/machine/remote-view",
        name: "remote-view",
        component: RemoteView,
        meta:{
          title:'원격제어내역',
          description:'장비를 원격제어한 날짜 및 내용을 알 수 있습니다.'
        }
      },
      {
        path: "/machine/kiosk-control",
        name: "kiosk-control",
        component: KioskControl,
        meta:{
          title:'키오스크 제어',
          description:'키오스크를 원격으로 제어할 수 있습니다.'
        }
      },
      {
        path: "/member",
        name: "member",
        component: Member,
        meta:{
          title:'회원목록',
          description:'회원들의 정보를 확인 할 수 있습니다.'
        }
      },
      {
        path: "/member/point",
        name: "point",
        component: Point,
        meta:{
          title:'회원포인트 관리내역',
          description:'회원들의 포인트 관리내역을 확인 할 수 있습니다.'
        }
      },
      {
        path: "/member/sms",
        name: "sms",
        component: Sms,
        meta:{
          title:'문자발송 및 내역',
          description:'회원들에게 문자를 발송 할 수 있습니다.'
        }
      },
    ],
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'*',
    name:'404',
    component:Error404
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
