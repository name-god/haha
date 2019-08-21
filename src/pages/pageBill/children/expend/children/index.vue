<template>
  <div class="number_page">
    <div class="number_page_top">
      <div class="number_page_top_left">
        <div></div>
        <div>备注:</div>
        <input type="text" placeholder="点击写备注..." class="num_page_input" />
      </div>
      <div class="one_number">0.00</div>
    </div>
    <ul class="number_page_ul">
      <li v-for="(item,index) in 9" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "number"
};
</script>

<style lang="scss">
.number_page {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(77, 77, 77, 0.1);
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
}
</style>
