<template>
  <div class="race-show" v-if="races.length > 0">
    <span>近期的比赛</span>
    <div class="node" v-for="(ele, i) in races" :key="i">
      <a class="title" :href="ele.link">{{ ele.title }}</a>
      <span class="status" :style="update(i)">{{ stat[ele.status] }}</span>
    </div>
  </div>
  <div class="race-show no-race" v-else>
    <img src="@/assets/calender.png">
    <span>近期暂无比赛</span>
  </div>
</template>

<script>
export default {
  name: 'RaceShow',
  data() {
    return {
      stat: ['已结束', '进行中', '报名中'],
      // races:[]
      races: [{
        'title': '迎新年——神犇大赛',
        'status': 0,
        'link': '#'
      },
        {
          'title': '迎新年——神犇大赛',
          'status': 1,
          'link': '#'
        },
        {
          'title': '迎新年——神犇大赛',
          'status': 2,
          'link': '#'
        }]
    }
  },
  methods: {
    update(index) {
      if (this.races[index].status === 0) return "color: grey"
      else if (this.races[index].status === 1) return "color: red"
      else return "color: rgb(5, 189, 66)"
    }
  }
}
</script>

<style>
.race-show {
  float: right;
  width: 448px;
  height: 300px;
}

.race-show > span {
  display: block;
  margin-top: 10px;
  margin-left: 15px;
  color: rgb(23, 158, 248);
  font-family: Microsoft YaHei, serif;
  font-weight: bold;
  font-size: 20px;
}

.race-show .node {
  display: inline-block;
  height: 20px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.05);
}

.race-show .node .title {
  float: left;
  color: #3498db;
  font-weight: bold;
  line-height: 100%;
  text-decoration: none;
}

.race-show .node .title:hover {
  color: #14558f;
}

.race-show .node .status {
  float: right;
  margin-right: 5px;
  line-height: 100%;
  font-weight: bold;
}

.no-race {
  position: relative;
}

.no-race > img {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 35%;
  left: 45%;
}

.no-race > span {
  position: absolute;
  top: 50%;
  left: 37%;
  color: rgba(128, 128, 128, 0.5);
  font-size: 15px;
}

</style>