<template>
  <div class="loginAction">
    <div class="title" v-for="(item,index) in info" :key="index" @click="rigster(index)">
      <p>{{item.name}}</p>
    </div>
    <div class="title_two">
      <div class="goback" @click="goback" :isshow="isshow">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginAction",
  props: {
    info: Array,
    isshow: {
      type: Boolean
    }
  },
  methods: {
    rigster(index) {
      //console.log(index);
      if (index === 0) {
        this.$router.push("/torigster");
      } else {
        this.$router.push("/tologin");
      }
    },
    goback() {
      this.$emit(goback);
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/mixins.scss";
.loginAction {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 10px;
  opacity: 0.9;
  //background-color: #ccc;
  div:nth-of-type(1) {
    @include border-none;
  }
  .title {
    @include border-top;
    margin: 0 10px;
    text-align: center;
    height: 48px;
    line-height: 48px;

    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    p {
      color: #0076ff;
    }
  }
  .title_two {
    margin: 0 10px;
    text-align: center;
    height: 48px;
    line-height: 48px;

    background-color: rgb(255, 255, 255);
    margin-top: 10px;
    .goback {
      color: #0076ff;
    }
  }
}
</style>
