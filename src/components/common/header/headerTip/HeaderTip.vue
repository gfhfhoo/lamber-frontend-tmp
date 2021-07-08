<template>
  <div class="header-tip" v-if="isOpened">
    <i class="tip-icon"></i>
    <span class="tip-title">{{ info }}</span>
    <i class="tip-close" @click="closeEvent"></i>
  </div>
</template>

<script>
import axios from '@/api/api'

export default {
  name: "HeaderTip",
  props:{
    info: String
  },
  async created() {
    this.info = await axios.getNotice();
  },
  data() {
    return {
      isOpened: this.info != null
    }
  },
  methods: {
    closeEvent() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style>
.header-tip {
  height: 25px;
  margin-top: 1px;
  background-color: rgba(255, 228, 21, 0.48);
  text-align: center;
}

.tip-icon {
  display: inline-block;
  width: 17px;
  height: 17px;
  background: url("~@/assets/tip.png");
  background-size: contain;
  vertical-align: middle;
}

.tip-title {
  margin-left: 10px;
  color: rgba(0, 0, 0, .6);
  font-weight: bold;
  font-size: 12px;
}

.tip-close {
  float: right;
  width: 20px;
  height: 20px;
  background: url("~@/assets/close.png");
  background-size: cover;
  cursor: pointer;
}

</style>