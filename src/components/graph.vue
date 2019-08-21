<template>
    <div :class="classPrefix">
        <div ref = 'myEchart' :class="classPrefix+'_chart'"></div>
    </div>
</template>

<script type="text/babel">
import echarts from 'echarts'
export default {
  name:"graph",
    data() {
        return {
            classPrefix: "qst-tecs-src-teacher-dean-brokenLine_",
            xNum:['07-22', '今  天', '07-24', '07-25','07-26', '07-27', '07-28'],
            series:[
                {type:'line',data:[0, 50, 100, 0, 0, 0, 0]},
            ],   // 折线图数据
        }
    },
    methods: {
        // 图表初始化数据
        initChart(){
            let myChart = echarts.init(this.$refs.myEchart);
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: this.yNum,
                },
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '3%',
                    top:'12%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.xNum,
                    axisLabel: {  
                        interval:0,  
                        rotate:0 
                    }  
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                series: this.series,
            })
        }
    },
    mounted () {
        let obj = this.$refs.myEchart;
        if(obj){
            this.initChart();
        }
    }
}
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
.qst-tecs-src-teacher-dean-brokenLine_ {
    &_chart{
        height:180px;
        width:100%;
    }
}
</style>
