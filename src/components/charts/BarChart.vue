<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
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
