<template>
  <div class="number_page">
    <div class="number_page_top">
      <div class="number_page_top_left">
        <div></div>
        <div>备注:</div>
        <input type="text" placeholder="点击写备注..." class="num_page_input" />
      </div>
      <div class="one_number">{{value}}</div>
    </div>
    <div class="number_bottom">
      <ul class="number_page_ul_left">
        <li v-for="item in 9" :key="item" @click="changeAction(item)">{{item}}</li>
        <li @click="changeAction('.')">.</li>
        <li @click="changeAction(0)">0</li>
        <li @click="changeAction('0','del')">x</li>
      </ul>
      <ul class="number_page_ul_right">
        <li>今天</li>
        <li @click="changeAction('+')">+</li>
        <li @click="changeAction('-')">-</li>
        <li @click="finish">完成</li>
      </ul>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "number",
  data() {
    return {
      value: "0.00"
    };
  },

  methods: {
    changeAction(index, del) {
      if (del) {
        if (this.value.length == 1) {
          this.value = "0.00";
        } else {
          this.value = this.value.substring(0, this.value.length - 1);
        }
      } else {
        if (this.value == "0.00") {
          this.value = "";
        }
        this.value += index;
      }
    },
    finish() {
      eval(this.value).toString();
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.number_page {
  z-index: 101;
  position: absolute;
  left: 0;
  bottom: 0;
  // background-color: rgba(77, 77, 77, 0.1);
  background: #fff;
  width: 100%;
  .number_page_top {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    .number_page_top_left {
      display: flex;
      justify-content: space-around;
      .num_page_input {
        background-color: rgba(77, 77, 77, 0);
        width: 82px;
        height: 20px;
        font-size: 12px;
        color: rgba(43, 43, 43, 0.2);
        border: none;
      }
      div:nth-of-type(2) {
        margin-right: 2px;
      }
    }
    .one_number {
      //width: 58px;
      color: rgba(43, 43, 43, 1);
      font-size: 20px;
      text-align: center;
      font-family: PingFangSC-regular;
    }
  }
  .number_bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .number_page_ul_left {
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        width: 33.33%;
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
    }
    .number_page_ul_right {
      width: 22.22%;
      text-align: center;
      :last-child {
        background-color: rgba(255, 215, 99, 1);
      }
      li {
        height: 50px;
        line-height: 50px;
      }
    }
  }
}
</style>
