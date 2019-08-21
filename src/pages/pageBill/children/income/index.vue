<template>
  <div class="income">
    <ul class="income_ul">
      <li v-for="item in list" class="income_li" :key="item.id">
        <div @click="isShow = true">
          <img src="~@/assets/icon/category_e_catering_normal.png" alt />
        </div>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "income",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "工资",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 2,
          name: "兼职",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 3,
          name: "理财",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 4,
          name: "礼金",
          path: "~@/assets/icon/category_e_catering_normal.png"
        },
        {
          id: 5,
          name: "其他",
          path: "~@/assets/icon/category_e_catering_normal.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.income {
  &_ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;

    .income_li {
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
