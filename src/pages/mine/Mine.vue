<template>
  <div class="mine">
    <header>
      <div class="state"></div>
      <div>
        <div class="wrap">
          <router-link class="left" to="/mine/inform">
            <i class="iconfont icon-lingdang"></i>
          </router-link>
          <router-link class="right" to="/mine/setting">
            <i class="iconfont icon-shezhi"></i>
          </router-link>
        </div>
        <router-view></router-view>

        <div class="info">
          <router-link class="edit" to="/mine/info">
            <img
              src="data:image/jpeg;base64,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"
              alt
            />
            <span>个人信息</span>
          </router-link>
        </div>
      </div>
    </header>
    <div class="bill">
      <router-link class="box" to="/mine/bill">
        <span>账单</span>
        <i class="iconfont icon-iconfontyoujiantou"></i>
      </router-link>
    </div>

    <edit></edit>
    <Bill />
  </div>
</template>
<script>
import edit from "./children/Edit";
import Bill from "../../components/Bill";
export default {
  components: {
    [edit.name]: edit,
     Bill
  },
  data() {
    return {
      show: true
    };
  },

  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f4f4f4;
  header {
    left: 0px;
    top: 0px;
    width: 375px;
    height: 129px;
    background: #ffd763;
    .state {
      height: 20px;
      background: #ffd763;
    }
    .wrap {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      .left {
        margin-left: 15px;
      }
      .right {
        margin-right: 15px;
      }
    }

    .info {
      width: 100%;
      height: 95px;
      text-align: center;

      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .bill {
    width: 355px;
    height: 80px;
    background: #fff;
    margin: 10px 10px;
    .box {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      span {
        padding-left: 5px;
        font-size: 14px;
      }
      .icon-iconfontyoujiantou {
        padding-right: 5px;
      }
    }
  }
  .budget {
    width: 355px;
    height: 150px;
    background: #fff;
    margin: 10px 10px;
  }
  .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
  }
}
</style>
