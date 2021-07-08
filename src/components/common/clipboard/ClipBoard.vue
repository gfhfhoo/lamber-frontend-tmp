<template>
  <div class="clipboard">
    <div class="clip-header">
      <span>{{ title }}</span>
      <i class="clip-button" @click="copy"></i>
    </div>
    <div class="sample-data" ref="text" v-html="mk(value)"></div>
  </div>
</template>

<script>
import _mk from '@/api/mk.ts'

export default {
  name: 'ClipBoard',
  props: {
    title: String,
    value: String
  },
  methods: {
    mk(str) {
      return _mk.render('```\n' + str + '\n```')
    },
    copy() {
      this.$copyText(this.$refs.text.childNodes[0].childNodes[0].innerHTML)
    }
  }
}
</script>

<style>

.clipboard span {
  display: inline-block;
  font-weight: bold;
}

.clip-button {
  display: inline-block;
  background: url('~@/assets/copy.png');
  background-size: cover !important;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.clip-button:hover {
  background: url('~@/assets/copy_focus.png');
}


.sample-data {
  max-height: 100px;
  margin-top: 7px;
  background-color: #F8F8F8;
  border: 1px solid grey;
  padding: 0 5px 0 5px;
  border-radius: 10px;
}

.sample-data > pre {
  margin: 2px;
}

</style>