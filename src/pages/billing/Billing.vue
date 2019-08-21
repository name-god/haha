<template>
  <div>
    <router-view></router-view>
    <div class="moneyDetail">
      <div class="moneyDetail-header">
        <div class="header-title">
          <h5>一个账本</h5>
        </div>
        <div class="counts">
          <div class="counts-left">
            <span class="moneyDetail-span">{{this.val}}</span>
            <div class="counts-month" @click="onCountMonth">
              <h4 class="moneyDetail-h4">{{this.set}}</h4>
              <span class="moneyDetail-spanTwo">月</span>
              <i></i>
            </div>
          </div>
          <div class="counts-center">
            <span class="moneyDetail-span">收入</span>
            <div class="counts-income">
              <h4 class="moneyDetail-h4">5000</h4>
              <span class="moneyDetail-spanTwo">.00</span>
            </div>
          </div>
          <div class="counts-right">
            <span class="moneyDetail-span">支出</span>
            <div class="counts-expend">
              <h4 class="moneyDetail-h4">30</h4>
              <span class="moneyDetail-spanTwo">.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="moneyDetail-main">
        <div class="money-list">
          <div class="add-list">
            <div class="list-month">
              <div class="month-one">07月23日</div>
              <div class="month-two">星期二</div>
            </div>
            <div class="mian-money">
              <div class="main-expend">支出:10</div>
              <div class="main-income">收入:5000</div>
            </div>
          </div>
          <router-link class="money-content border-top" to="/billing/billingDetails" tag="div">
            <div class="money-content-add">工资</div>
            <div class="money-expend-income">5000</div>
          </router-link>
          <router-link class="money-content border-top" to="/billing/billingDetails" tag="div">
            <div class="money-content-add">工资</div>
            <div class="money-expend-income">5000</div>
          </router-link>
        </div>
      </div>
      <AppTime v-on:onConFirmValue="onBillingValue" ref="TimeVal" />
    </div>
  </div>
</template>

<script>
import AppTime from "./children/time/time";
import { create } from "domain";
export default {
  name: "App-moneyDetail",
  components: {
    AppTime
  },
  data() {
    return {
      val: "2019",
      set: "7",
      visible: false
    };
  },
  methods: {
    onBillingValue(val, set) {
      this.val = val.val;
      this.set = val.set;
    },
    onCountMonth() {
      this.visible = true;
      this.$refs.TimeVal.parentMsg(this.visible);
    }
  },
  mounted() {
    this.$refs.TimeVal.parentMsg(this.visible);
  }
};
</script>

<style>
.moneyDetail {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.moneyDetail-header {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 6.5rem;
  background-color: rgba(255, 215, 99, 1);
  box-shadow: 0px 0px 0px 0px rgba(149, 149, 149, 1);
}
.moneyDetail .header-title {
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  font-size: 20px;
  margin-bottom: 6px;
}
.counts {
  height: 4rem;
  display: flex;
  justify-content: space-around;
}
.moneyDetail .moneyDetail-span {
  display: block;
  font-size: 12px;
  color: rgba(43, 43, 43, 0.8);
  margin-bottom: 10px;
}
.moneyDetail-spanTwo {
  font-size: 16px;
  font-weight: 500;
}
.counts-month,
.counts-income,
.counts-expend {
  display: flex;
  align-items: flex-end;
}
.moneyDetail-h4 {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
.moneyDetail-main {
  width: 100%;
  position: absolute;
  top: 6.5rem;
  left: 0;
  padding-bottom: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}
.money-list {
  display: flex;
  flex-direction: column;
}
.add-list {
  height: 1.5rem;
  width: 100%;
  position: relative;
  border-bottom: 2px solid #cccccc;
}
.month-one {
  margin-right: 20px;
}
.main-income {
  margin-left: 20px;
}
.list-month {
  position: absolute;
  left: 25px;
  top: 0;
  height: 1.5rem;
  line-height: 1.5rem;
}
.mian-money {
  position: absolute;
  right: 25px;
  top: 0;
  height: 1.5rem;
  line-height: 1.5rem;
}
.list-month,
.mian-money {
  display: flex;
  font-size: 12px;
  color: rgba(111, 111, 111, 1);
}
.money-content {
  height: 3rem;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
