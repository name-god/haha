<template>
  <div>
    <div id="home" class="home">
      <div class="home_head">
        <div class="home_head_a">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="home_head_data">
          <ul>
            <li>周</li>
            <li>月</li>
            <li>年</li>
          </ul>
        </div>
      </div>
      <div class="home_day">
        <ul>
          <li>上周</li>
          <li>本周</li>
        </ul>
      </div>
      <div class="home_grapb">
        <p>总支出：30.00</p>
        <p>平均值：15.00</p>
        <graph></graph>
      </div>

      <disburse></disburse>
    </div>
  </div>
</template>



<script>
import Disburse from "./disburse/Disburse";
import graph from "../../components/graph";

export default {
  name: "home",

  components: {
    [Disburse.name]: Disburse,
    [graph.name]: graph
  },
  data() {
    return {
      value1: 1,
      option1: [
        { text: "支出", value: 0 },
        { text: "支出", value: 1 },
        { text: "收入", value: 2 }
      ],

      currentRate: 0
    };
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
#home {
  .home_head {
    height: 86px;
    width: 100%;
    line-height: 44px;
    text-align: center;
    background: rgb(255, 215, 99);
    .home_head_a {
      width: 100%;
      select {
        outline: medium;
        background: transparent;
        border: none;
        width: 100%;
        padding-left: 45%;
        height: 50px;
        display: flex;
        text-align: center;
        font-size: 16px;
        option {
          width: 100%;
          padding: 10px;
          border: none;
        }
      }
    }
    .home_head_b {
      background: #fff;
    }
    .home_head_data {
      height: 42px;
      width: 100%;
      background: rgb(255, 215, 99);
      position: absolute;
      top: 44px;
      padding: 0 10px;
      box-sizing: border-box;
      ul {
        height: 34px;
        width: 100%;
        display: flex;
        line-height: 32px;
        font-size: 14px;
        li:nth-child(1) {
          flex: 1;
          height: 32px;
          border: 1px solid #000;
          border-radius: 10px 0px 0px 10px;
          color: rgb(255, 215, 99);
          background: #000;
        }
        li:nth-child(2) {
          flex: 1;
          height: 32px;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
        }
        li:nth-child(3) {
          flex: 1;
          height: 32px;
          border: 1px solid #000;
          border-radius: 0px 10px 10px 0px;
        }
      }
    }
  }

  .home_day {
    height: 44px;
    border-bottom: 1px solid #ccc;
    ul {
      display: flex;
      line-height: 43px;
      li {
        margin-left: 20px;
      }
      li:nth-child(2) {
        border-bottom: 2px solid #000;
      }
    }
  }

  .home_grapb {
    height: 220px;
    background: #ccc;
    border-bottom: 1px solid #000;
  }
}

.van-ellipsis {
  color: #000;
}
</style>
