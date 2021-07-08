<template>
  <div class="problem-container">
    <div class="search-box">
      <i class="search-icon"></i>
      <input class="input" placeholder="输入些什么吧....">
    </div>
    <div class="problem-list">
      <div class="header-wrap">
        <div class="col ids"><span>题目ID</span></div>
        <div class="col title"><span>题目名称</span></div>
        <div class="col tags"><span>标签</span></div>
        <div class="col difficulty"><span>难度</span></div>
        <div class="col pass-ratio"><span>通过率</span></div>
      </div>
      <div class="list" v-for="(ele,i) in queryRes" :key="i" ref="lists">
        <div class='col ids'><span>{{ ele.problemId }}</span></div>
        <div class='col title'>
          <router-link target="_blank" :to="goDetail(ele.problemId)" tag="span">{{ ele.title }}</router-link>
        </div>
        <div class='col tags'>
          <problem-tag v-for="(res, id) in ele.tags" :key="id" :value="res.tagName" :color="res.tagColor"></problem-tag>
        </div>
        <div class='col difficulty'>
          <difficulty-icon :difficulty="ele.difficulty"></difficulty-icon>
        </div>
        <div class='col pass-ratio'>
          <progress-bar :percent="ele.passRatio"></progress-bar>
        </div>
      </div>
    </div>
    <PageTurn></PageTurn>
  </div>
</template>

<script>
import ProgressBar from "@/components/ui/progressBar/ProgressBar";
import DifficultyIcon from "@/components/ui/difficultyIcon/DifficultyIcon";
import ProblemTag from "@/components/ui/problemTag/ProblemTag";
import PageTurn from "@/components/common/pageTurn/PageTurn";

export default {
  name: "ProblemSetNew",
  components: {PageTurn, ProgressBar, DifficultyIcon, ProblemTag},
  data() {
    return {
      queryRes: [
        {
          problemId: '1001',
          title: '问题1',
          difficulty: 10,
          passRatio: 0.06,
          tags: [{
            tagName: 'Oh~',
            tagColor: '#e61a8d'
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
    }
  },
  methods: {
    goDetail(problemId) {
      return {
        path: `/problem/${problemId}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.problem-container {
  width: 1090px;
  height: auto;
  margin: 50px auto;
  position: relative;

  .problem-list {
    display: flex;
    flex-direction: column;

    .header-wrap {
      display: flex;
      width: 100%;
      justify-content: center;

      .col {
        border-bottom: 2px solid var(--border-grey) !important;
      }
    }

    .col {
      display: flex;
      width: 1%;
      flex-grow: 1;
      flex-wrap: wrap;
      align-content: center;
      padding-top: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-grey-50);
    }

    .ids {
      max-width: 6%;

      span {
        width: 100%;
        text-align: center;
      }
    }

    .tags {
      display: flex;
      row-gap: 2px;
      max-width: 25%;
    }

    .difficulty {
      max-width: 8%;
    }

    .pass-ratio {
      max-width: 10%;
    }

    .list {
      display: flex;

      .ids {
        font-family: "Fira Code Medium", serif;
        font-weight: bold;
      }

      .title {
        cursor: pointer;

        a {
          text-decoration: none;
          color: black;
        }

        a:hover {
          color: var(--btn-blue);
        }
      }
    }
  }

  .search-box {
    position: relative;
    height: auto;
    overflow: hidden;

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
  }
}

</style>