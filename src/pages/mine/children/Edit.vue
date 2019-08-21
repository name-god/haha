<template>
  <div class="edit">
    <div class="budget">
      <span>07月总预算</span>
      <van-button class="btn" @touchstart.stop="show = true">
        编辑预算
        <i class="iconfont icon-iconfontyoujiantou"></i>
      </van-button>
    </div>
    <div class="cover" v-show="show"></div>
    <div class="box" v-show="show">
      <h2>每月总预算</h2>
      <van-field
        @click="btnAction"
        class="input"
        readonly
        clickable
        :value="value"
        @touchstart.native.stop="show = true"
      />

      <div class="choice">
        <span>取消</span>
        <span>确定</span>
      </div>
    </div>

    <van-number-keyboard v-model="value" :show="show" :maxlength="12" @blur="show = false" />
  </div>
</template>


<script>
export default {
  name: "edit",
  data() {
    return {
      show: false,
      value: "请输入预算金额"
    };
  },

  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    },
    btnAction() {
      this.value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.edit {
  .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
  }
  .box {
    left: 53px;
    top: 235px;
    width: 270px;
    height: 130px;
    line-height: 20px;
    border-radius: 6px;
    background: #fff;
    text-align: center;
    position: relative;
    top: -200px;
    h2 {
      padding-top: 15px;
      font-size: 18px;
      font-weight: normal;
    }
    .input {
      border: 1px solid #666;
      font-size: 14px;
    }
    .spent {
      margin-top: 15px;
      width: 80%;
      font-size: 16px;
    }
    .choice {
      height: 30px;
      width: 100%;
      margin-top: 15px;
      border-top: 1px solid #666;
      line-height: 30px;
      display: flex;
      span:nth-child(1) {
        flex: 1;
        border-right: 1px solid #999;
        height: 100%;
        color: #0076ff;
        height: 33px;
        text-align: center;
      }
      span:nth-child(2) {
        flex: 1;
        color: #0076ff;
        height: 30px;
        height: 100%;
        text-align: center;
      }
    }
  }
  .budget {
    width: 355px;
    height: 150px;
    background: #fff;
    margin: 10px 10px;
    display: flex;
    justify-content: space-between;
    .btn {
      font-size: 14px;
      border: none;
    }
    span:nth-child(1) {
      padding-left: 10px;
      padding-top: 13px;
      font-size: 14px;
    }
  }
}
</style>
