<template>
  <svg viewBox="-2000 -1000 4000 2000">
    <path id="stroke" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
    <use xlink:href="#stroke" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use>
  </svg>
</template>

<script>
export default {
  name: "LoadingGif"
}
</script>

<style scoped>
svg {
  max-width: 30em;
  stroke: white;
  stroke-linecap: round;
  fill: none;
  stroke-width: 7%;
}

svg use {
  stroke: #0fb9b1;
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  to {
    stroke-dashoffset: 0px;
  }
}

</style>