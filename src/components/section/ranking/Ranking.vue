<template>
  <div class="ranking">
    <i class="ranking-cup"></i>
    <span>排行榜</span>
    <div class="tops" v-for="(ele, i) in ranking" :key="i">
      <span :id="calculate(i)">{{ i + 1 }}</span>
      <span class="username">{{ ele }}</span>
      <i class="winner" v-if="i===0"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
    return {
      ranking: ['TOP1', 'TOP2', 'TOP3', 'TOP4']
    }
  },
  methods: {
    calculate(index) {
      switch (index) {
        case 0:
          return 'top1';
        case 1:
          return 'top2';
        case 2:
          return 'top3';
        default:
          return 'normal';
      }
    }
  }
}
</script>

<style>
.ranking {
  float: right;
  width: 250px;
  height: auto;
}

.ranking-cup {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url("~@/assets/ranking.png");
  background-size: cover;
  vertical-align: middle;
}

.ranking > span {
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
}

.tops {
  margin-top: 5px;
}

.tops span {
  vertical-align: middle;
}

#top1 {
  color: #fe2d46;
}

#top2 {
  color: #f60;
}

#top3 {
  color: #faa90e;
}

#normal {
  color: #9195a3;
}

.tops .username {
  margin-left: 15px;
  line-height: 30px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}

.tops > .winner {
  display: inline-block;
  float: right;
  width: 25px;
  height: 25px;
  background: url("~@/assets/winner.png");
  background-size: cover;
}

</style>