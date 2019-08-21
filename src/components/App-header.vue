<template>
  <div class="app-header">
    <div class="state"></div>
    <div class="title">
      <span class="back" @click="btnAction">
        <i class="iconfont icon-zuojiantou"></i>返回
      </span>
      <h2>{{title}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-header",

  props: {
    title: String
  },
  data() {
    return {};
  },
  methods: {
    btnAction() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  .state {
    height: 20px;
    background: #ffd763;
  }
  .title {
    height: 42px;
    background: #ffd763;
    .back {
      font-size: 16px;
      margin-left: 10px;
      .icon-zuojiantou {
        font-size: 18px;
      }
    }
    h2 {
      margin-left: 100px;
      display: inline-block;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
