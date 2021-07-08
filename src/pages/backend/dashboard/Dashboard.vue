<template>
  <div class="dashboard">
    <div class="dashboard-top">
      <Statistic></Statistic>
    </div>
    <div class="dashboard-right">
      <ServerStatus></ServerStatus>
    </div>
    <div class="dashboard-down">
      <QueueCharts></QueueCharts>
    </div>
  </div>
</template>

<script>
import Statistic from "@/components/common/backend/statistic/Statistic";
import ServerStatus from "@/components/common/backend/serverStatus/ServerStatus";
import QueueCharts from "@/components/ui/charts/queueCharts/QueueCharts";
export default {
  name: "Dashboard",
  components: {QueueCharts, ServerStatus, Statistic}
}
</script>

<style lang="scss" scoped>

.dashboard{
  display: grid;
  grid-template-areas: 'top-left . top-right'
                        'down-left . .';
  width: 90%;
  height: 100vh;
  background: var(--layout-light-white);
}

.dashboard-top{
  grid-area: top-left;
  margin: 45px 0 0 80px;
}

.dashboard-right {
  grid-area: top-right;
  margin: 45px 0 0 80px;
}

.dashboard-down {
  grid-area: down-left;
}

</style>