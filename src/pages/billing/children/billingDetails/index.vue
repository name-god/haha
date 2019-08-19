<template>
    <div class="billingDetails">
        <div class="billingDetails-header">
            <div class="billingDetails-return" @click="onGoBack"><span>返回</span></div>
            <div class="billingDetails-title">工资</div>
        </div>
        <ul class="billingDetails-content">
            <li class="border-bottom"><span class="billingDetails-span">类型</span><p class="billingDetails-p">收入</p></li>
            <li class="border-bottom"><span class="billingDetails-span">金额</span><p class="billingDetails-p">5000</p></li>
            <li class="border-bottom"><span class="billingDetails-span">日期</span><p class="billingDetails-p">2019年07月23日 星期二</p></li>
            <li class="border-bottom"><span class="billingDetails-span">备注</span><p class="billingDetails-p">工资</p></li>
        </ul>
        <div class="billingDetails-bottom">
            <div class="billingDetails-left">编辑</div>
            <div class="billingDetails-center"></div>
            <div class="billingDetails-right">删除</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"App-billingDetails",
    methods:{
        onGoBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.billingDetails{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    background: #ffffff
}
.billingDetails-header{
    height: 3rem;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.billingDetails-return{
    position: absolute;
    left: 25px;
    top: 0;
    height: 3rem;
    line-height: 3rem;
    font-size: 14px;
    font-weight: 500;
    display: flex;
}
.billingDetails-title{
    font-weight: 500;
    font-size: 24px;
}
.billingDetails-content{
padding:0 15px;
}
.billingDetails-content>li{
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
}
.billingDetails-span{
    color: rgba(187,187,187,1);
    margin-right: 25px;
}
.billingDetails-bottom{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3rem;
    display: flex;
    text-align: center;
}
.billingDetails-left,.billingDetails-right{
    width:49.5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.billingDetails-center{
    width: 1%;
    height: 2.5rem;
    background: #dddddd;
    margin-top: .25rem;
}
</style>