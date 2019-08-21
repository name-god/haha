<template>
  <div class="pageBill page subpage">
    <van-tabs v-model="active">
      <span class="goBack" @click="goback">取消</span>
      <van-tab title="支出" :class="{'active': active===0}">
        <expend />
      </van-tab>
      <van-tab title="收入">
        <income />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import expend from "./children/expend/index";
import income from "./children/income/index";
// import api from "../../request/api";
// import { get } from "../../request/index";
export default {
  name: "pageBill",
  components: {
    expend,
    income
  },
  data() {
    return {
      active: 0
    };
  },
  // created() {
  //   get("PAGE_BILL_URL")
  // },
  methods: {
    goback() {
      //console.log(1);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.pageBill {
  height: 100%;
  .van-tabs {
    .goBack {
      position: absolute;
      font-size: 22px;
      right: 10px;
      top: 8px;
    }
    .van-tabs__nav {
      height: 44px;
      display: flex;
      overflow: hidden;
      line-height: 44px;
      background-color: #ffd763;
      flex-direction: center;
      justify-content: center;
      text-align: center;
      .van-tab--active {
        text-align: center;
      }
      .van-ellipsis {
        box-sizing: border-box;
        color: rgba(43, 43, 43, 1);
        font-size: 1.38rem;
        font-family: PingFangSC-regular;
        padding: 0 15px;
      }
      .van-tabs__line {
        width: 44px;
        transform: translateX(146px) translateX(-50%);
        transition-duration: 0.3s;
        position: absolute;
        top: 41px;
        left: 0;
        height: 2px;
        background-color: #000;
      }
    }
  }
}
</style>
