<template>
  <div class="problem-detail">
    <div class="blackboard">
      <div class="problem-status">
        <div class="border-sharp">
          <div class="v-status">Compile error</div>
        </div>
      </div>
      <div class="blackboard-container">
        <div class="blackboard-content left">
          <p class="problem problem-id">P 1001</p>
          <p class="problem problem-title">👴的书包掉了</p>
          <div class="problem problem-tags">
            这里是标签
          </div>
        </div>
        <div class="blackboard-content right">
          <div class="info">
            <div class="problem problem-info problem-time">
              <div><i class="tiny-icon" id="time"></i></div>
              <div>
                <p>时间</p>
                <p>1s</p>
              </div>
            </div>
            <div class="problem problem-info problem-memory">
              <div><i class="tiny-icon" id="memory"></i></div>
              <div>
                <p>内存限制</p>
                <p>512MB</p>
              </div>
            </div>
            <div class="problem problem-info problem-type">
              <div><i class="tiny-icon" id="type"></i></div>
              <div>
                <div>
                  <p>评测类型</p>
                  <p>普通评测</p>
                </div>
                <div class="type-info">
                  <el-popover placement="right" width="50" trigger="hover">
                    <div class="type-detail">
                      <p class="type-detail_title">普通评测</p>
                      <p class="type-detail_content">普通评测是指评测机对提交的代码进行实时评测后进行分数反馈</p>
                    </div>
                    <div slot="reference">
                      <i class="type-popover-icon"></i>
                    </div>
                  </el-popover>
                </div>
              </div>
            </div>
            <div class="problem problem-info problem-pass">
              <div><i class="tiny-icon" id="pass"></i></div>
              <div>
                <p>通过次数</p>
                <p>100</p>
              </div>
            </div>
            <div class="problem problem-info problem-submit">
              <div><i class="tiny-icon" id="submit"></i></div>
              <div>
                <p>提交次数</p>
                <p>1000</p>
              </div>
            </div>
            <div class="problem problem-info problem-author">
              <div><i class="tiny-icon" id="author"></i></div>
              <div>
                <p>题目作者</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="problem-content">
      <div class="content-left" v-if="isAtDetailPage">
        <template v-for="ele in options">
          <div class="mk-header" :key="ele.title">{{ ele.title }}</div>
          <div class="mkdown" v-html="mk(ele.value)" :key="ele.title+'_1'" v-if="ele.title!=='样例'"></div>
          <div class="samples" :key="ele.title+'_2'" v-else>
            <ClipBoard title="输入样例" :value="ele.inputVal"></ClipBoard>
            <ClipBoard title="输出样例" :value="ele.inputVal"></ClipBoard>
          </div>
        </template>
      </div>
      <div class="content-left" v-else>
        <template>
          <CodeEditor lang="C"></CodeEditor>
        </template>
      </div>
      <div class="content-submit" v-if="isAtDetailPage">
        <div class="btn-component">
          <button class="btn submit-btn" @click="toSubmitPage()">
            提交
          </button>
          <button class="btn solution-btn">
            题解
          </button>
        </div>
      </div>
      <div class="content-submit" v-else>
        <div class="btn-component">
          <button class="btn send-btn" @click="switchLang()">
            提交代码
          </button>
          <button class="btn return-btn" @click="toDetailPage()">
            返回
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import _mk from '@/api/mk.ts'
import {langSwitch} from "@/api/editor";
import ClipBoard from "@/components/common/clipboard/ClipBoard";
import CodeEditor from "@/components/common/codeEditor/CodeEditor";

export default {
  name: "ProblemDetailNew",
  components: {CodeEditor, ClipBoard},
  data() {
    return {
      isAtDetailPage: true,
      options: [{
        title: '题目描述',
        value: '输入$a$,$b$，得到$a+b$的结果.'
      },
        {
          title: '输入格式',
          value: '计算\n$$f(x)=\\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2 \\pi i \\xi x} d \\xi$$\n```cpp\n#include<bits/stdc++.h>\n```'
        },
        {
          title: '输出格式',
          value: 'Oh....\n> NMD WSM\n I don\'t know!\n$$\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^m\\sum\\limits_{d|gcd(i,j)}\\mu(d)\\\\=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^m\\sum\\limits_{d|i,d|j}\\mu(d)$$'
        },
        {
          title: '样例',
          inputVal: 'Asshole\nabab\nkksk'
        }]
    }
  },
  methods: {
    mk(str) {
      return _mk.render(str);
    },
    toSubmitPage() {
      this.isAtDetailPage = false;
    },
    toDetailPage() {
      this.isAtDetailPage = true;
    },
    switchLang() {
      console.log("laile ")
      langSwitch('C++');
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css');
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
@import url("//unpkg.com/@highlightjs/cdn-assets@10.7.2/styles/default.min.css");

p {
  margin: 0;
}

.blackboard {
  position: relative;
  background-color: var(--blackboard);

  .problem-status {
    width: auto;

    .border-sharp {
      display: inline-block;
      position: absolute;
      top: 5px;
      border-top: 30px solid #FE9C00;
      border-right: 25px solid transparent;
      width: auto;
      padding-left: 10px;
      padding-right: 10px;

      .v-status {
        transform: translateY(-25.5px); // to-do: find a way to align with border-top property in class border-sharp
        font-size: 18px;
        font-family: "Fira Code Medium";
        color: white;
      }
    }
  }
}

.blackboard-container {
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  .blackboard-content {
    height: 80%;
    margin: auto;
    padding-top: 62px;
    padding-bottom: 62px;
  }

  .left, .right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .left {
    .problem-id {
      font-family: "Cascadia Code", serif;
    }

    .problem-title {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      font-family: "Fira Code Medium", "方正准雅宋_GBK", serif;
    }

    .problem-tags {
      margin-top: 50px;
    }
  }

  .right {
    padding-left: 20px;
    flex-wrap: wrap;

    .info {
      display: inline-flex;
      flex-wrap: wrap;
      row-gap: 50px;

      .problem-type {
        div:nth-child(2) {
          flex-direction: row !important;

          div:nth-child(1) {
            width: auto !important;
          }

          .type-info {
            width: 20px;
            align-items: center;

            .type-popover-icon {
              display: inline-block;
              width: 20px;
              height: 20px;
              background-size: cover !important;
              background: url("~@/assets/info.png");
            }
          }
        }
      }

      .problem-info {
        display: flex;
        flex-direction: row;
        width: 33%;

        div {
          display: flex;
          flex-direction: column;
        }

        div:nth-child(1) {
          width: 20%;
          margin-right: 10px;
        }

        div:nth-child(2) {
          display: flex;
          flex-direction: column;
          width: 80%;
        }

        p {
          font-size: 15px;
          word-break: break-all;
          overflow: hidden;
        }

        .tiny-icon {
          display: block;
          width: 23px;
          height: 23px;
          margin: auto;
          background-size: cover !important;
        }

      }

      #time {
        background: url('~@/assets/time.png');
      }

      #memory {
        background: url('~@/assets/memory.png');
      }

      #type {
        background: url('~@/assets/type.png');
      }

      #pass {
        background: url('~@/assets/AC.png');
      }

      #submit {
        background: url('~@/assets/submit.png');
      }

      #author {
        background: url('~@/assets/author.png');
      }
    }
  }

  .problem {
    color: white;
  }
}

.problem-content {
  display: grid;
  grid-template-areas: 'left . submit'
                       '. . tag'
                       '. . .';
  grid-template-columns: 800px auto 250px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
}

.content-left {
  grid-area: left;

  .samples {
    display: flex;
    column-gap: 5px;

    .clipboard {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
}

.content-submit {
  grid-area: submit;
  padding-top: 15px;

  .btn-component {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;

    .btn {
      width: 80%;
      height: 30px;
      border-radius: 15px;
      font-weight: bold;
      //:hover {
      //  background: var(--btn-green)!important;
      //  opacity: 50%;
      //}
    }

    .submit-btn {
      border: 1px solid var(--btn-green);
      color: var(--btn-green);
    }

    .solution-btn {
      border: 1px solid var(--btn-blue);
      color: var(--btn-blue);
    }

    .send-btn {
      border: 1px solid var(--btn-blue);
      color: var(--btn-blue);
    }

    .return-btn {
      border: 1px solid var(--btn-red);
      color: var(--btn-red);
    }
  }
}

.problem-tag {
  grid-area: tag;
  display: flex;
  flex-wrap: wrap;
  column-gap: 3px;
  row-gap: 3px;

  .tag {
    height: 20px;
    padding: 0 2px 0 2px;
    background: red;
    border-radius: 999px;
    text-align: center;
  }
}

.mk-header {
  font-family: '方正准雅宋_GBK', serif;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
}

</style>