<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["chartData", "options"],
  mounted() {
    this.renderChart(this.chartData || {}, this.options);
  },
  watch: {
    chartData() {
      this.$data_chart.update();
    },
  },
};
</script>
