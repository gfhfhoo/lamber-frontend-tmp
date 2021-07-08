<template>
  <span class="problem-tag" :style="'background-color: '+ color +';'">{{ value }}</span>
</template>

<script>
export default {
  name: "ProblemTag",
  props: {
    value: String,
    color: String
  },
}
</script>

<style>
.problem-tag {
  padding: 2px;
  margin-right: 4px !important;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 12px !important;
}

</style>