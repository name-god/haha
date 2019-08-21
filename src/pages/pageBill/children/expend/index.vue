<template>
  <div class="expend">
    <!-- <AppScroll> -->
    <ul class="expend_ul">
      <li v-for="item in data" class="expend_li" :key="item.id">
        <div @click="isShow = true">
          <img src="~@/assets/icon/category_e_catering_normal.png" alt />
        </div>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <!-- </AppScroll> -->
    <numberKey v-if="isShow" />
  </div>
</template>

<script>
//import axios from "axios";
// import AppScroll from "@/components/app-Scroll";
import numberKey from "@/components/numberKey";
export default {
  name: "expend",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "餐饮",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 2,
          name: "购物",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 3,
          name: "日用",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 4,
          name: "交通",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 5,
          name: "蔬菜",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 6,
          name: "水果",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 7,
          name: "零食",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 9,
          name: "运动",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 10,
          name: "娱乐",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 11,
          name: "通讯",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 12,
          name: "服饰",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 13,
          name: "美容",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 14,
          name: "住房",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 15,
          name: "居家",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 16,
          name: "孩子",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 17,
          name: "长辈",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 18,
          name: "社交",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 19,
          name: "社交",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 20,
          name: "社交",
          path: "~@/assets/icon/category_e_catering_normal.png"
        }
      ],
      isShow: false
    };
  },
  // created() {
  //   axios({
  //     url: "api/categories/",
  //     method: "GET"
  //   }).then(res => {
  //     //console.log(res);
  //     // if (res.status === 200 && res.data.code === 0) {
  //     this.data = res.data;
  //     console.log(this.data);
  //     // }
  //   });
  // },
  components: {
    // AppScroll,
    numberKey
  },
  methods: {
    // halder() {
    //   this.isShow = true;
    // }
  }
};
</script>

<style lang="scss">
.expend {
  &_ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;

    .expend_li {
      width: 20%;
      margin-top: 10px;
      text-align: center;
      div {
        text-align: center;
      }
      img {
        //text-align: center;
        width: 45px;
        height: 45px;
      }
      span {
        font-size: 14px;
        color: rgba(111, 111, 111, 1);
      }
    }
  }
}
</style>
