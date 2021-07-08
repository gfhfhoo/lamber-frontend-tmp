<template>
  <div class='problem-detail'>
    <div class='detail-header'>
      <div class="header-left">
        <div class="header-title"><span>0001: Mission</span></div>
        <div class="header-tag"></div>
      </div>
      <div class="limits">
        <div v-for="(ele, i) in limits" :key="i" :id="ele.type">
          <i :class="ele.i_type"></i>
          <span>{{ ele.value }}</span>
        </div>
      </div>
    </div>
    <div class="detail-container">
      <div class="detail-left" v-if="!isAtSubmitPage">
        <template v-for="ele in options">
          <div class="clip-header" :key="ele.title">{{ ele.title }}</div>
          <div class="mkdown" v-html="mk(ele.value)" :key="ele.title+'_1'" v-if="ele.title!='样例'"></div>
          <div class="samples" v-else :key="ele.title+'_2'">
            <Clipboard title="输入样例" :value="ele.inputVal"></Clipboard>
            <Clipboard title="输出样例" :value="ele.inputVal"></Clipboard>
          </div>
        </template>
      </div>
      <div class="detail-left" v-else>
        <div class="editor">
          <CodeEditor :lang="defaultLang" ref="editor"></CodeEditor>
        </div>
      </div>
      <div class="detail-right">
        <div class="stat-content">
          <div class="passed-num">
            <div class="stat-pass-icon"></div>
            <div class='stat-value'>{{ passedNum }}</div>
          </div>
          <div class="submitted-num">
            <div class="stat-submit-icon"></div>
            <span class='stat-value'>{{ submitNum }}</span>
          </div>
        </div>
        <div class="main-container" v-if="!isAtSubmitPage">
          <a id="submit" @click="toSubmitPage"><i></i>commit</a>
          <a>Solving way</a>
        </div>
        <div class="main-container preupload-tools" v-else>
          <a id="back" @click="toSubmitPage">Back</a>
          <div class="selectors lang-selector">
            <span class="selector-tip">代码提交语言</span>
            <list-box :tips="defaultLang" :options="langOptions" v-on:selectedItem="updateEditorLang"></list-box>
          </div>

          <list-box :options="langOptions"></list-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CodeEditor from "@/components/common/codeEditor/CodeEditor";
import ListBox from "@/components/ui/listBox/ListBox";
import Clipboard from "@/components/common/clipboard/ClipBoard";
import langOptions from "@/global/lang";
import _mk from "@/api/mk";

export default {
  name: 'ProblemDetail',
  components: {Clipboard, CodeEditor, ListBox},
  props: {
    problemId: Number
  },
  data() {
    return {
      isAtSubmitPage: false,
      limits: [{
        type: 'limit-time',
        i_type: 'i-time',
        value: this.ms_to_s(1000)
      },
        {
          type: 'limit-memory',
          i_type: 'i-memory',
          value: '128MB'
        },
        {
          type: 'limit-type',
          i_type: 'i-type',
          value: '普通评测'
        }],
      passedNum: 123,
      submitNum: '4.3k',
      options: [{
        title: '题目描述',
        value: '输入$a$,$b$，得到$a+b$的结果.'
      },
        {
          title: '输入格式',
          value: '计算\n$$f(x)=\\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2 \\pi i \\xi x} d \\xi$$'
        },
        {
          title: '输出格式',
          value: 'Oh....\n$$\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^m\\sum\\limits_{d|gcd(i,j)}\\mu(d)\\\\=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^m\\sum\\limits_{d|i,d|j}\\mu(d)$$'
        },
        {
          title: '样例',
          inputVal: 'Asshole\nabab\nkksk'
        }],
      defaultLang: langOptions[0],
      langOptions: langOptions
    }
  },
  methods: {
    mk(str) {
      return _mk.render(str)
    },
    toSubmitPage() {
      this.isAtSubmitPage = !this.isAtSubmitPage;
    },
    ms_to_s(ms) {
      if (ms < 1000) return ms + 'ms';
      else return (ms / 1000.0).toPrecision(3) + 's';
    },
    updateEditorLang(e) {
      this.defaultLang = e;
    },
    setCodeInCookies() {
      localStorage.setItem('code', this.$refs.editor.getCodeValues())
      console.log(localStorage.getItem('code'))
    }
  }
}
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css');

.problem-detail {
  width: 1100px;
  margin: 50px auto 0;

  i {
    background-size: cover;
  }

  .detail-header {
    border-bottom: 1px solid rgba(164, 164, 164, 0.5);
    overflow: hidden;

    .header-left {
      float: left;
      width: 600px;

      .header-title > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}


.stat-content {
  margin-bottom: 5px;
}

.passed-num {
  margin-right: 60px;
}

.passed-num, .submitted-num {
  display: inline-flex;
  flex-direction: column;
}

.passed-num .stat-pass-icon, .submitted-num .stat-submit-icon {
  width: 20px;
  height: 20px;
  margin: auto;
  background-size: cover;
}

.stat-value {
  font-size: 20px;
}

.stat-pass-icon {
  background: url('~@/assets/AC.png');
}

.stat-submit-icon {
  background: url('~@/assets/submit.png');
}

.detail-header .header-title span {
  font-size: 30px;
}

.limits {
  float: right;
  height: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.limits > * {
  margin-top: 10px;
}

.limits span {
  font-weight: bold;
}

.limits i {
  float: left;
  margin-right: 40px;
  width: 20px;
  height: 20px;
}

.i-time {
  background: url('~@/assets/time.png');
}

.i-memory {
  background: url('~@/assets/memory.png');
}

.i-type {
  background: url('~@/assets/type.png');
}

.detail-container {
  margin-top: 30px;
}

.detail-left {
  display: inline-block;
  width: 78%;
}

.clip-header {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
}

.mkdown {
  margin-bottom: 15px;
}

.mkdown p {
  font-size: 15px;
}

.mkdown .katex {
  font-size: 18px;
}

.detail-right {
  float: right;
  width: 20%;
  text-align: center;
}

.main-container a {
  display: block;
  margin-bottom: 2px;
  padding: 4px 0 4px 0;
  color: #C3004A;
  transition: background .3s ease-in-out;
}

.main-container a:hover {
  background: #C3004A;
  color: #F9F9F9;
}

.main-container * {
  vertical-align: middle;
  text-align: center;
  margin: auto;
}

.main-container i {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: cover !important;
}

#submit i {
  background: url('~@/assets/buttons/submit.svg');
}

#submit:hover i {
  background: url('~@/assets/buttons/submit_visited.svg');
}

.preupload-tools .selectors {
  margin-bottom: 4.5rem;
}

.selector-tip {
  font-size: 16px;
  font-weight: bold;
}

</style>