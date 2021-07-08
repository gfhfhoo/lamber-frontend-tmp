<template>
  <div id="markdown-editor">
    <mavon-editor :toolbars="markdownOption" :fontSize="fontSize"></mavon-editor>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import "mavon-editor/dist/css/index.css";

export default {
  name: "MarkdownEditor",
  components: {mavonEditor},
  props: {},
  data() {
    return {
      fontSize: "16px",
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  },
  created() {
  }
}
</script>

<style scoped>
#markdown-editor {
  margin: auto;
  width: 80%;
  height: 580px;
}

</style>