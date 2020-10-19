<template>
  <div class="product">
    <v-row>
      <v-col xl="2" lg="2">
        <dl class="section machine-list">
          <dt>
            <h4>장비목록</h4>
            <a v-if="draggingCheck">
              순서변경저장
            </a>
          </dt>
          <dd>
            <Draggable
              :list="machineList"
              :disabled="!enabled"
              v-bind="dragOptions"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <transition-group type="transition">
                <div
                  class="list-item"
                  :class="{ active: index === activeIndex }"
                  v-for="(item, index) in machineList"
                  :key="index"
                  v-ripple
                  @click="listActive(index)"
                >
                  <strong>{{ index }}</strong>
                  <div class="inner">
                    <label>
                      {{ item.name }}
                    </label>
                    <v-icon>mdi-chevron-right</v-icon>
                  </div>
                </div>
              </transition-group>
            </Draggable>
          </dd>
        </dl>
      </v-col>
      <v-col xl="10" lg="10">
        <dl class="section machine-detail">
          <dt>
            <h4>장비 상품관리</h4>
          </dt>
          <dd>
            <v-row>
              <v-col xl="8">
                <div class="product-list-head">
                  <h4>상품목록</h4>
                  <div class="btns">
                    <v-btn text @click="newRow">
                      <v-icon size="18" class="mr-1">mdi-plus</v-icon>
                      <span>상품추가</span>
                    </v-btn>
                    <v-btn 
                      text 
                      class="complete"
                      @click="()=>$refs.confirm.show(true)"
                    > 
                      <v-icon size="18" class="mr-1">mdi-check</v-icon>
                      <span>일괄수정완료</span>
                    </v-btn>
                  </div>
                </div>
                <Draggable
                  :list="productList"
                  class="product-list"
                  :disabled="!enabled"
                  v-bind="dragOptions2"
                  @start="dragging2 = true"
                  @end="dragging2 = false"
                >
                  <transition-group type="transition">
                    <div
                      class="list-item"
                      v-for="(item, index) in getProductList"
                      :key="index"
                      @click="element.fixed = !element.fixed"
                    >
                      <strong class="number">{{ index }}</strong>
                      <div class="form">
                        <span class="product-name">
                          <v-text-field
                            :value="item.name"
                            label="상품명"
                            class="textInput"
                          />
                        </span>
                        <span class="product-time">
                          <v-text-field
                            :value="item.time"
                            label="상품시간"
                            class="numberInput"
                            type="number"
                          >
                          </v-text-field>
                        </span>
                        <span class="product-price">
                          <v-text-field
                            :value="item.price"
                            label="상품가격"
                            class="numberInput"
                          ></v-text-field>
                        </span>
                      </div>
                      <div class="btns">
                        <v-btn text @click="copyRow(item)">복제</v-btn>
                        <v-btn text @click="removeRow(index)">삭제</v-btn>
                      </div>
                    </div>
                  </transition-group>
                </Draggable>
              </v-col>
              <v-col xl="4">
                <v-card class="card">
                  <v-card-title class="card-title">
                    다른장비에서 상품 불러오기
                  </v-card-title>
                  <v-card-text>
                    <v-from>
                      <v-menu
                        v-model="select"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="selected"
                            dense
                            outlined
                            placeholder="불러올 장비 선택"
                            readonly
                            v-on="on"
                            v-bind="attrs"
                          />
                        </template>
                        <v-list v-model="selected">
                          <v-list-item-group>
                            <v-list-item
                              v-for="item in machineList"
                              :key="item"
                              @click="() => (selected = item.name)"
                            >
                              {{ item.name }}
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-menu>
                    </v-from>
                    <div class="btns">
                      <v-btn text>불러오기</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
                <v-card class="card manchine-info">
                  <v-card-text>
                    <h4>장비정보</h4>
                    <span>
                      <label>장비명</label>
                      <strong>프라이머스 대형세탁기</strong>
                    </span>
                    <span>
                      <label>유형</label>
                      <strong>세탁기</strong>
                    </span>
                    <span>
                      <label>용량</label>
                      <strong>19Kg</strong>
                    </span>
                    <span>
                      <label>등록일</label>
                      <strong>2018-12-05</strong>
                    </span>
                    <span>
                      <label>MAC</label>
                      <strong>B4:E6:2D:25:7D:EE</strong>
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </dd>
        </dl>
      </v-col>
    </v-row>

    <Confirm 
      ref="confirm"
      title="상품정보 변경"
      description="변경된 내용을 저장하시겠습니까?"
    />
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import Confirm from "@/components/modal/confirm.vue"

export default {
  components: {
    Draggable, Confirm
  },
  data() {
    return {
      select: false,
      selected: "",
      enabled: true,
      dragging: false,
      draggingCheck: false,
      dragging2: false,
      checkMoveIndex: null,
      activeIndex: 0,
      machineList: [
        {
          id: 0,
          name: "A유닛 세탁기",
        },
        {
          id: 1,
          name: "B유닛 대형세탁기입니다만요 하하하하gk",
        },
        {
          id: 2,
          name: "C유닛 대형세탁기",
        },
        {
          id: 3,
          name: "A유닛 건조기",
        },
        {
          id: 4,
          name: "B유닛 대형건조기",
        },
        {
          id: 5,
          name: "C유닛 대형건조기",
        },
      ],
      productList: [
        {
          name: "표준 세탁",
          time: 45,
          price: 4500,
          id: 0,
        },
        {
          name: "초강력 세탁",
          time: 60,
          price: 6000,
          id: 1,
        },
        {
          name: "표준 건조",
          time: 45,
          price: 4500,
          id: 1,
        },
        {
          name: "초강력 건조",
          time: 60,
          price: 6000,
          id: 1,
        },
      ],
    };
  },
  watch: {
    checkMoveIndex(e) {
      this.draggingCheck = e;
      console.log(e);
    },
  },

  computed: {
    getProductList() {
      return this.productList.length === 0
        ? [{ name: "", time: 0, price: 0 }]
        : this.productList;
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
      };
    },
    dragOptions2() {
      return {
        animation: 200,
        group: "description2",
      };
    },
  },
  methods: {
    copyRow(item) {
      this.productList.push(item);
    },
    newRow(){
      this.productList.push([{name:"",time:null,price:null}])
    },
    removeRow(index) {
      this.productList.splice(index, 1);
    },
    listActive(value) {
      this.activeIndex = value;
    },
    checkMove(e) {
      this.checkMoveIndex = e.draggedContext.futureIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.machine-list {
  dt {
    a {
      color: #00afff;
    }
  }
  dd {
    .list-item {
      width: 100%;
      position: relative;
      padding: 15px 10px;
      border: 1px solid #c2c2c2;
      margin-bottom: 10px;
      padding-left: 30px;

      strong {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background: #595959;
        color: #fff;
      }

      .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
          width: 100%;
          font-family: "NotoSansKR";
          font-weight: 400;
          font-size: 13px;
          color: #292929;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .v-icon {
          font-size: 18px;
        }
      }
    }

    .list-item.active {
      border-color: #00afff;
      strong {
        background: #00afff;
      }
    }

    .list-item:hover {
      cursor: pointer;
    }
  }
}

.machine-detail {
  dd {
    border: 1px solid #e2e2e2;
    padding: 10px;
    background: #f8f8f8;

    .product-list-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      h4 {
        font-size: 14px;
        font-weight: 400;
      }
      .btns {
        .v-btn {
          height: 26px;
          background: #292929;
          color: #fff;
          margin-left: 5px;
        }

        .v-btn.complete {
          background: #00afff;
        }
      }
    }

    .product-list {
      .list-item {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #e2e2e2;
        background: #fff;
        margin-bottom: 15px;
        padding: 10px;
        padding-left: 50px;

        strong.number {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          background: #999;
          color: #fff;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
        }

        .form {
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
          .textInput {
            min-width: 280px;
          }
          .numberInput {
            width: 100px;
          }
        }

        .btns {
          .v-btn {
            background: #f2f2f2;
            min-width: 60px;
            height: 28px;
            margin-left: 5px;
          }
        }
      }
      .list-item:hover {
        cursor: pointer;
        background: #f8f8f8;
      }
    }

    .card {
      border-radius: 0px;
      margin-bottom: 15px;

      .card-title {
        font-size: 14px;
        font-weight: 400;
      }

      .btns {
        text-align: right;
        .v-btn {
          background: #292929;
          height: 30px;
          color: #fff;
        }
      }
    }

    .manchine-info{
      h4{
        font-weight:400;
        color:#292929;
        margin-bottom:15px;
      }
      span{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:10px;

        label{font-size:13px;color:#888}
        strong{color:#292929;}
      }
      span:last-child{margin-bottom:0px;}
    }
  }
}

.product-add {
  dd {
    border: 1px solid #e2e2e2;
    padding: 20px;
  }
}
</style>
