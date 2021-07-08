<template>
  <div class="queue-charts">
    <canvas id="mychart"></canvas>
  </div>
</template>

<script>

import Chart from "chart.js/auto"

export default {
  name: "QueueCharts",
  data() {
    return {
      charts: null,
      chartsData: {
        labels: [],
        datasets: [{
          tension: 0.4,
          borderColor: 'rgb(255, 99, 132)',
          data: []
        }]
      },
      config: {
        type: "line",
        data: {
          labels: [],
          datasets: []
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
        }
      }
    }
  },
  mounted() {
    this.init()
    this.dynamicChange()
  },
  methods: {
    init() {
      const ctx = document.getElementById('mychart')
      this.charts = new Chart(ctx, this.config)
    },
    dynamicChange() {
      setInterval(() => {
        let len = this.chartsData.labels.length;
        if (len > 10) {
          this.chartsData.labels.shift()
          this.chartsData.datasets[0].data.shift()
        }
        let nowDate = new Date().getSeconds().toString()
        this.chartsData.labels.push(nowDate);
        this.chartsData.datasets[0].data.push(Math.random() * 15)
        this.charts.data.labels = this.chartsData.labels;
        this.charts.data.datasets = this.chartsData.datasets;
        this.charts.update()
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.queue-charts {
  max-width: 700px;
  margin-left: 80px;
}

</style>