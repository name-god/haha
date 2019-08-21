<template>
  <div class="page subpage inform">
    <app-header :title="dataList"></app-header>
    <div class="content">
      <div>
        <img src="../../../../public/images/xinxi.png" alt />
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "../../../components/App-header";
export default {
  data() {
    return {
      dataList: "消息通知"
    };
  },

  components: {
    [AppHeader.name]: AppHeader
  }
};
</script>
<style lang="scss">
.inform {
  overflow: hidden;
  .content {
    width: 100%;
    height: 100%;
    div {
      position: relative;
      top: 220px;
      left: 150px;
      img {
        width: 69px;
        height: 69px;
      }
      p {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
