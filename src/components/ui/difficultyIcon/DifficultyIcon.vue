<template>
  <div class="difficulty-icon" :style="'background-color: ' + colors+';'">
    <i></i>
    <span>难度 {{ difficulty }}</span>
  </div>
</template>

<script>
export default {
  name: 'DifficultyIcon',
  props: {
    difficulty: Number
  },
  mounted() {
    this.cal();
  },
  data() {
    return {
      colors: '',
      colorMap: {
        easy: '#8FC31F',
        medium: '#006D9E',
        hard: '#F64C31'
      }
    }
  },
  methods: {
    cal() {
      let d = this.difficulty
      if (d >= 0 && d < 4) this.colors = this.colorMap.easy;
      else if (d >= 4 && d < 7) this.colors = this.colorMap.medium;
      else this.colors = this.colorMap.hard;
    }
  }
}
</script>

<style>
.difficulty-icon {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 80px;
  height: 25px;
  border-radius: 10px;
}

.difficulty-icon > i {
  display: inline-block;
  width: 12px;
  height: 15px;
  background: url("~@/assets/thunder.png");
  background-size: cover;
  transform: translateX(10px);
}

.difficulty-icon > span {
  font-size: 12px;
  font-weight: bold;
  color: white;
  transform: translateX(15px);
}

</style>