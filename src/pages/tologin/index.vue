<template>
  <div class="tologin page subpage">
    <div class="icon" @click="goback">x</div>
    <div class="all_verify">
      <div class="verify_phone">
        <span>手机号</span>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="verify_num">
        <span>验证码</span>
        <input type="password" placeholder="请输入验密码" />
      </div>
      <div class="btn">登录</div>
      <div class="findpass">
        <div>找回密码</div>
        <div>注册</div>
      </div>
    </div>
    <div class="other">
      其他方式登录
      <span class="line"></span>
    </div>
    <div class="weixinlogin">微信登录</div>
  </div>
</template>

<script>
export default {
  name: "tologin",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/mixins.scss";
.tologin {
  .icon {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  .all_verify {
    position: absolute;
    top: 80px;
    width: 90%;
    margin: 0 17px;
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
      border-bottom: 1px solid #ccc;
      height: 40px;
      line-height: 40px;
      input {
        border: none;
        font-size: 14px;
        margin-left: 14px;
      }
    }
    .btn {
      background-color: rgba(111, 111, 111, 0.2);
      margin-top: 50px;
      width: 100%;
      border-radius: 6px;
      height: 45px;
      text-align: center;
      line-height: 45px;
    }
    .findpass {
      display: flex;
      margin: 30px 0;
      font-size: 12px;
      justify-content: space-between;
    }
  }
  .other {
    @include line-left;
    position: absolute;
    bottom: 30%;
    left: 38%;
    font-size: 14px;
    .line {
      @include line-right;
    }
  }
  .weixinlogin {
    background-color: #ffd763;
    margin-top: 50px;
    margin: 0 17px;
    position: absolute;
    bottom: 71px;

    width: 90%;
    border-radius: 6px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
}
</style>
