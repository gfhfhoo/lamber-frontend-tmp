<template>
  <div class="problem-container">
    <div class="search-box">
      <i class="search-icon"></i>
      <input class="input" placeholder="输入些什么吧...." @keyup.enter="search()" v-model="queryVal">
    </div>
    <loading v-if="isQueryingProblems" width="1090" :height="this.$refs.problemList.offsetHeight"></loading>
    <div class="problem-list" ref="problemList">
      <div class="header-warp">
        <div class='header-col col ids'><span>题目ID</span></div>
        <div class='header-col col name'><span>题目名称</span></div>
        <div class='header-col col tags--'><span>标签</span></div>
        <div class='header-col col difficulty'><span>难度</span></div>
        <div class='header-col col pass-ratio'><span>通过率</span></div>
      </div>
      <div class="row" v-for="(ele,i) in queryRes" :key="i" ref="lists">
        <div class='problem-col col ids'><span>{{ ele.problemId }}</span></div>
        <div class='problem-col col name'><span>{{ ele.title }}</span></div>
        <div class='problem-col col tags'>
          <problem-tag v-for="(res, id) in ele.tags" :key="id" :value="res.tagName" :color="res.tagColor"></problem-tag>
        </div>
        <div class='problem-col col difficulty'>
          <difficulty-icon :difficulty="ele.difficulty"></difficulty-icon>
        </div>
        <div class='problem-col col pass-ratio'>
          <progress-bar :percent="ele.passRatio"></progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from '@/api/api'
import Loading from "@/components/common/loading/Loading";
import ProgressBar from "@/components/ui/progressBar/ProgressBar";
import ProblemTag from "@/components/ui/problemTag/ProblemTag";
import DifficultyIcon from "@/components/ui/difficultyIcon/DifficultyIcon";

export default {
  components: {Loading, ProgressBar, DifficultyIcon, ProblemTag},
  name: "ProblemSet",
  data() {
    return {
      queryVal: '',
      queryRes: [
        {
          problemId: '1001',
          title: '问题1',
          difficulty: 10,
          passRatio: 0.06,
          tags: [{
            tagName: 'Oh~',
            tagColor: '#e61a8d'
          },
            {
              tagName: 'test',
              tagColor: '#2185d0'
            },
            {
              tagName: 'test123333',
              tagColor: '#2185d0'
            },
            {
              tagName: 'test121212122112',
              tagColor: '#2185d0'
            }]
        },
        {
          problemId: '2',
          title: '问题2',
          difficulty: 5,
          passRatio: 0.42,
          tags: [{
            tagName: 'Oh~',
            tagColor: '#e61a8d'
          }]
        },
        {
          problemId: '3',
          title: '问题3',
          difficulty: 2,
          passRatio: 0.81
        },
        {
          problemId: '4',
          title: '问题4',
          difficulty: 0,
          passRatio: 1.0
        }
      ],
      isQueryingProblems: false
    }
  },
  methods: {
    search() {
      if (this.queryVal !== '') {
        this.isQureyingProblems = true
        this.$refs.lists.forEach((item) => {
          item.style.filter = 'blur(2px)';
        });
        axios.searchProblem({queryVal: this.queryVal}).then(res => {
          this.queryRes = res;
          this.isQureyingProblems = false
          this.$refs.lists.forEach((item) => {
            item.style.filter = '';
          });
        });
        let interval = setInterval(() => {
          if (this.isQureyingProblems !== true) {
            clearInterval(interval);
          }
        }, 500);
      }
    },
    process(i, percent) {
      if (percent <= 0.5) {
        if (i === 1) return 'transform: rotate(-' + percent * 360 + 'deg); background-color: rgba(138, 139, 139, 0.5)';
        if (i === 2) return 'transform: rotate(-' + percent * 360 + 'deg)';
      } else {
        if (percent > 0.5) {
          if (i === 2) return ''
          if (i === 1) return 'transform: rotate(' + percent * 360 + 'deg)';
        }
      }
    }
  }
}
</script>

<style scoped>
.problem-container {
  width: 1090px;
  height: auto;
  margin: 50px auto;
  position: relative;
}

.search-box {
  position: relative;
  height: auto;
  overflow: hidden;
}

.search-icon {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 15px;
  top: 50%;
  margin: 0 auto;
  background: url("~@/assets/search.png");
  background-size: cover;
  transform: translate(-50%, -50%);
}

.input {
  display: block;
  width: 0;
  padding: 5px 20px 5px 30px;
  border-radius: 20px;
  border: 2px solid #c4c7ce;
  transition: width 0.5s ease-in-out;
}

.input:hover {
  width: 20%;
}

.input:focus {
  width: 20%;
  border-color: #4e6ef2;
  outline: none;
}


.problem-list {
  display: table;
  width: 100%;
  height: auto;
  margin-top: 25px;
  z-index: 1;
  border-collapse: collapse;
  border-spacing: 0;
}

.header-warp {
  display: table-header-group;
  font-weight: bold;
}

.header-col span {
  font-size: 16px;
}

.row {
  display: table-row;
  border-top: 1px solid rgba(143, 142, 142, 0.4);
}

.col {
  display: table-cell;
  padding: 7px;
}

.ids {
  width: 65px;
  text-align: center;
  font-weight: bold;
}


.difficulty, .pass-ratio {
  text-align: center;
  width: 50px;
}

.tags {
  text-align: right;
  width: 50px;
}

.col * {
  margin: auto;
}

.problem-col span {
  font-size: 15px;
  text-align: center;
}

</style>