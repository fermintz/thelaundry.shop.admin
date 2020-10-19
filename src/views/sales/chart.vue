<template>
  <div class="chart">

  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {

  extends:[Line],
  mounted(){
    this.renderChart(this.data, this.options)
  },

  data(){
    return{
      data:[
        {x:10, y:20},
        {x:30, y:15},
      ],
      options:{
        scales: {
          yAxes: [{
              stacked: true
          }]
        }
      },
    }
  }
}
</script>