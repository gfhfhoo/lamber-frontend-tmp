<template>
  <div class='editor-container' ref="editor"></div>
</template>

<script>
import {parser, langSwitch, getCodes} from '@/api/editor'

export default {
  name: 'CodeEditor',
  props: {
    lang: String
  },
  mounted() {
    parser(this.$refs.editor, this.lang, '')
  },
  methods: {
    getCodeValues() {
      return getCodes();
    }
  },
  watch: {
    lang(val) {
      langSwitch(val);
    }
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css');

.editor-container {
  width: 100%;
  height: 600px;
  border: 1px solid rgba(164, 164, 164, 0.5);
}

.editor-container .view-line {
    font-family: 'Cascadia Code', monospace;
}

.line-numbers {
  font-family: 'Cascadia Code', monospace;
}

</style>