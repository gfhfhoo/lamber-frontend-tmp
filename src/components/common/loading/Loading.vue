<template>
  <div class="loading" :style="'width: '+width+'px;height: '+height+'px;'">
    <div class="load">
      <svg class="loading-gif">
        <circle cx="20" cy="20" r="20"/>
      </svg>
      <span>加载中</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    width: String,
    height: String
  }
}
</script>

<style>

@keyframes loading {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rounding {
  50% {
    stroke-dashoffset: 0;
  }
  50.01% {
    stroke-dashoffset: 241;
  }
}

.loading {
  display: flex;
  position: absolute;
  margin-top: 30px;
  z-index: 10;
}

.load {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.loading-gif {
  position: relative;
  width: 50px;
  height: 50px;
  animation: loading 2s linear infinite;
}

.loading-gif circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #00a1ff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 126;
  stroke-dashoffset: 126;
  transform: translate(5px, 5px);
  animation: rounding 4s linear infinite;
}

.load > span {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
}

</style>