<template>
  <div class="progress-bar">
    <div :style="'width:'+percent*100+'%'"></div>
  </div>
</template>

<script>
export default {
  name: 'Progressbar',
  props: {
    percent: Number
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>

.progress-bar {
  width: 100px;
  height: 13px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 5px;
  vertical-align: center;
}

.progress-bar > div {
  height: 100%;
  background-color: rgb(10, 178, 245);
  border-radius: 5px;
}

</style>