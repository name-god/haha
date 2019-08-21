<template>
  <nav class="tab-bar border-top">
    <template v-for="tabItem in tabData">
      <router-link class="tab-item" :key="tabItem.id" :to="tabItem.path">
        <span class="iconfont" :class="tabItem.icon"></span>
        <span class="name">{{tabItem.name}}</span>
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      tabData: [
        { id: 1, name: "图表", icon: "icon-tubiao", path: "/home" },
        { id: 2, name: "明细", icon: "icon-mingxi", path: "/billing" },
        { id: 3, name: "我的", icon: "icon-wode2", path: "/mine" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.tab-bar {
  width: 100%;
  height: 49px;
  position: fixed;
  z-index: 120;
  left: 0;
  bottom: 0;
  display: flex;
  background: #fff;

  .router-link-active {
    color: red;
  }
  .tab-item {
    flex: 1;
    display: flex;

    flex-direction: column;
    text-align: center;
    .iconfont {
      font-size: 20px;
      margin-top: 8px;
    }
    .name {
      font-size: 16px;
    }
  }
}
</style>
