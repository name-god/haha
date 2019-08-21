<template>
  <div class="page subpage">
    <app-header :title="dataList"></app-header>
    <div class="content">
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-leibie"></i>
        <span class="two">类别设置</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-huancun"></i>
        <span class="two">清除缓存</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-yaoqing"></i>
        <span class="two">邀请好友</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-yijianfankui"></i>
        <span class="two">意见反馈</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-about"></i>
        <span class="two">关于</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
      <div class="item border-top border-bottom">
        <i class="iconfont one icon-tuichu"></i>
        <span class="two">退出登录</span>
        <i class="iconfont three icon-iconfontyoujiantou"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import AppHeader from "../../../components/App-header";

export default {
  data() {
    return {
      dataList: "设置"
    };
  },
  computed: {},
  components: {
    [AppHeader.name]: AppHeader
  },
  created() {
    Axios({
      url: "http://api.jk1601.xyz/categories",
      method: "get"
    }).then(res => {
      if (res.status == 200 && res.data.code == 0) {
        console.log(res);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #f4f4f4;
  .content {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    .item:nth-child(1) {
      margin-top: 10px;
    }
    .item {
      height: 54px;
      line-height: 54px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      .one {
        padding-left: 25px;
      }
      .three {
        padding-right: 25px;
      }
    }
  }
}
</style>
