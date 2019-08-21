<template>
  <div class="rigster page subpage">
    <div class="rigster_header">
      <div @click="goback">返回</div>
      <div>注册</div>
    </div>
    <div class="all_verify">
      <div class="verify_phone">
        <span>手机号</span>
        <input type="text" />
      </div>
      <div class="verify_num">
        <span>验证码</span>
        <input type="password" placeholder="请输入验证码" />
        <div>获取验证码</div>
      </div>
      <div class="btn">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rigster",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.rigster {
  .rigster_header {
    height: 44px;
    line-height: 44px;
    width: 100%;
    background-color: #ffd763;
    div:nth-of-type(1) {
      position: absolute;
      top: 0;
      left: 10px;
    }
    div:nth-of-type(2) {
      color: #000;
      text-align: center;
    }
  }
  .all_verify {
    position: absolute;
    top: 80px;
    // left: 20px;
    width: 90%;
    margin: 0 20px;
    .verify_phone {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      input {
        border: none;
        margin-left: 10px;
      }
    }
    .verify_num {
      display: flex;
      border-bottom: 1px solid #ccc;
      height: 40px;
      line-height: 40px;
      input {
        border: none;
        font-size: 14px;
        margin-left: 14px;
      }
      div {
        border-left: 1px solid #000;
        padding: 0 10px;
        line-height: 30px;
        margin: 5px 0;
      }
    }
    .btn {
      background-color: rgba(111, 111, 111, 0.2);
      margin-top: 40px;
      width: 100%;
      border-radius: 6px;
      height: 45px;
      text-align: center;
      line-height: 45px;
    }
  }
}
</style>
