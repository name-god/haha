<template>
  <div class="login page subpage">
    <router-link class="weixinlogin" to="/home">微信登录</router-link>
    <div class="loginOpion" @click="hadleShow">更多登录方式</div>
    <SelectAction :info="info" v-show="isshow" @goback="hadleShowProp" :isshow="isshow" />
  </div>
</template>
<script>
import SelectAction from "./children/index";
export default {
  name: "login",
  components: {
    SelectAction
  },
  data() {
    return {
      isshow: false,
      info: [{ name: "注册" }, { name: "手机登录" }]
    };
  },
  methods: {
    hadleShow() {
      this.isshow = true;
    },
    hadleShowProp() {
      this.isshow = false;
    }
  }
};
</script>
<style lang="scss">
.login {
  background-color: #ffebb0;
  z-index: 110;
  .weixinlogin {
    width: 91%;

    margin: 0 19px;

    text-align: center;
    height: 48px;
    line-height: 48px;

    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    bottom: 103px;
  }
  .loginOpion {
    position: absolute;
    left: 37%;
    bottom: 20px;
  }
}
</style>
