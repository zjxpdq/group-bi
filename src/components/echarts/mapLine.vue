<template>
  <div id="mapLine" :style="lineStyle"></div>
</template>

<script>
  import echarts from 'echarts'
  import {debounce} from '@/utils'

  export default {
    name: 'mapLine',
    data () {
      return {
        chart: null
      }
    },
    props: {
      lineStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      colors: {
        type: Array,
        default () {
          return []
        }
      },
      lineData: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    mounted () {
      this.initChart(this.lineData)
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    },
    watch: {
      lineData: {
        deep: true,
        handler (val) {
          this.initChart(val)
        }
      }
    },
    methods: {
      initChart (v) {
        this.chart = echarts.init(document.getElementById('mapLine'))
        this.chart.setOption(this.mapLine(v))
      },
      mapLine (data) {
        return {
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [{
            data: data.xAxis
          }],
          yAxis: [{
            splitLine: {show: false}
          }],
          series: data.series
        }
      }
    },
    beforeDestroy () {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    }
  }
</script>

<style scoped lang="scss">
  #mapLine {
  }
</style>
