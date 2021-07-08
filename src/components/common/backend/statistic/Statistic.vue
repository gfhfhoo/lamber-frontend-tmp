<template>
  <div class="statistic">
    <p>DashBoard</p>
    <div class="stats">
      <StatBox :img-src="require('@/assets/backend/status.png')" val="正常" title="评测🐔状态"></StatBox>
      <StatBox :img-src="require('@/assets/backend/judge.png')" val="9k+" title="评测次数"></StatBox>
      <StatBox :img-src="require('@/assets/backend/user.png')" val="114514" title="用户数"></StatBox>
    </div>
  </div>
</template>

<script>
import StatBox from "@/components/ui/statBox/StatBox";
export default {
  name: "Statistic",
  components: {StatBox}
}
</script>

<style lang="scss" scoped>
.statistic {
  min-width: 60%;
  p {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: "Cascadia Code";
    font-weight: bolder;
    font-size: 40px;
  }
}

.stats{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>