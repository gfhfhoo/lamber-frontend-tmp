<template>
  <div class="mkdown" v-html="mk_html"></div>
</template>

<script>
import _mk from '@/api/mk'

export default {
  name: 'Markdown',
  props: {
    text: String
  },
  data() {
    return {
      mk_html: ''
    }
  },
  created() {
    this.mk_html = _mk.render(this.text)
  }
}
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-light.min.css');

.mkdown p, h1, h2, h3, h4 {
  margin: 10px 0 10px 0;
}

.code-blocks {
  background-color: #F8F8F8;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  font-size: 15px;

  .line-id {
    font-size: 15px;
  }
}

</style>