<template>
  <div>
    <div id="disbures" class="disbures">
      <div class="home_expend">
        <p>支出排行</p>
        <div class="home_repast" v-for="(itme,index) in 10" :key="index">
          <img src="" alt="">
          <div class="home_repast_a">
            <ul v-for="(itme,index) in num" :key="index">
              <li>{{ itme.text }} {{ itme.pre }}</li>
              <li>{{ itme.shu }}</li>
            </ul>
            <div class="home_xian"></div>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'disburse',
  data() {
    return {
      num:[
        { text:'餐饮',pre:'66.7%',shu:"20" }
      ] 
    }
  }
} 
</script>

<style lang="scss">
.disbures{
  .home_expend{
    font-size: 18px;
    margin:10px;
    .home_repast{
      font-size: 16px;
      margin-top:10px;
      display: flex;
      img{
        border-radius: 50%;
        width: 40px;
        margin-left:15px;
        margin-right: 15px;
        background: #999;
      }
      .home_repast_a{
        border-bottom: 1px solid #ccc;
        width: 80%;
        ul{
          display: flex;
          justify-content: space-between;
        }
        .home_xian{
          height:8px;
          width: 66%;
          background: #999;
          border-radius: 5px;
          margin-top:5px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
