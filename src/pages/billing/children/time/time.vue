<template>
    <div class="App-time" v-if="offShow">
        <div class="time-title">
            <span @click="onTome()">取消</span>
            <span>选择月份</span>
            <span @click="onConFirm">确定</span>
            </div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>

<script>
export default {
    name:"App-time",
    methods: {
    onValuesChange(picker, values) {
        this.val = picker.values[0],
        this.set = picker.values[1]
    },
     onTome(){
          this.offShow = false;
      },
      onConFirm(){
         let sets = this.set.slice(1,2);
         this.$emit("onConFirmValue",{val:this.val,set:sets});
         this.offShow = false
      },
      parentMsg: function (visible) {
         this.offShow = visible;
   }
  },
  data() {
    return {
       offShow:true,
       val:"",
       set:"",
      slots: [
        {
          flex: 1,
          values: ['2000年', '2001年', '2002年', '2003年', '2004年', '2005年',"2006年","2007年","2008年","2009年","2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年"],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"],
          className: 'slot1',
          textAlign: 'left'
        }
      ]
    };
  },
}

</script>

<style>
.App-time{
    background-color: #f1f1f1;
    text-align: center;
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    z-index: 10;

}
  .picker-items{
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: right;
    font-size: 24px;
    position: relative;
  }  
  .picker-slot.picker-slot-right {
    text-align: right;
}

element.style {
    flex: 1 1 0%;
    -webkit-box-flex: 1;
}
.picker-slot {
    font-size: 18px;
    overflow: hidden;
    position: relative;
    max-height: 100%;
}
.picker-slot.picker-slot-divider {
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.picker-center-highlight{
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}
.picker-slot.picker-slot-center {
    text-align: center;
    width: 5rem;
}
.picker-slot.picker-slot-center  div{
    margin-left: 2rem;
}
* {
    box-sizing: border-box;
}
.picker-slot.picker-slot-left {
    text-align: left;
}
.picker-center-highlight {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none;
}
.time-title{
    display: flex;
    justify-content: space-between;
    height: 2rem;
    border-bottom: 1px solid #cccccc;
    padding: 0 25px;
    align-items: center;
}

</style>