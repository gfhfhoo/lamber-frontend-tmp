<template>
  <div class="round-pic">
    <div class="slides">
      <div class="pic" ref="pic" v-for="(ele, i) in pics" :key="i" :style="calculate_style(i)">
        <img :src="ele">
      </div>
    </div>
    <div class="guider" ref="layout">
      <span v-for="(ele, i) in pics" :key="i" :class="calculate(i)" @click="switcher(i)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundPic',
  mounted() {
    this.timer = setInterval(() => {
      this.switcher(-1);
    }, 150000);
    this.$refs.layout.style.left = ((550 - 27 * this.pics.length) / 2).toString() + "px";
  },
  data() {
    return {
      counter: 1,
      pics: [
        'https://ipic.luogu.com.cn/2021spring/title.png',
        'https://cdn.luogu.com.cn/upload/pic/22071.png',
        'https://cdn.luogu.com.cn/upload/image_hosting/e64n37yc.png'
      ],
      lastpic: -1,
      nowpic: 0,
    }
  },
  methods: {
    switcher(i) {
      if (i !== -1 && i !== this.nowpic) {
        this.counter++;
        this.lastpic = this.nowpic;
      }
      if (i === -1) this.nowpic = (this.nowpic + 1) % this.pics.length;
      else {
        this.nowpic = i;
        this.$refs.pic[i].style.zIndex = this.counter;
      }
    },
    calculate(index) {
      if (index === this.nowpic) return 'active';
      else return '';
    },
    calculate_style(index) {
      let val = this.counter < this.pics.length ? index + 1 : this.$refs.pic[index].style.zIndex;
      let dic = {
        zIndex: index === this.nowpic ? this.counter : val,
        transition: '',
        transform: ''
      }
      if (index === this.lastpic) {
        dic.transition = 'all 0.55s ease 0s';
        dic.transform = this.lastpic < this.nowpic ? 'translate3d(-550px,0,0)' : 'translate3d(550px,0,0)';
      } else if (index === this.nowpic) {
        dic.transition = 'all 0.25s ease 0s';
        dic.transform = 'translate3d(0px,0,0)';
      } else {
        dic.transition = 'none 0s ease 0s';
        dic.transform = this.lastpic < this.nowpic ? 'translate3d(550px,0,0)' : 'translate3d(-550px,0,0)';
      }
      return dic
    }
  },
  computed: {}
}
</script>

<style>
@keyframes touching {
  100% {
    background-color: rgb(8, 155, 240);
    border: 3px solid white;
  }
}

.round-pic {
  float: left;
  position: relative;
  width: 550px;
  height: 300px;
  overflow: hidden;
  border: 1px solid rgba(128, 128, 128, 0.1);
}

.guider {
  position: absolute;
  top: 90%;
  z-index: 10000;
}

.guider > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 10px;
  border: 3px solid rgb(8, 155, 240);
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}

.active {
  transform: scale(1.25);
  animation: touching 0.5s linear;
  animation-fill-mode: forwards;
}

.pic {
  position: absolute;
  vertical-align: top;
}

.pic img {
  width: 550px;
  height: 300px;
  background-size: cover;
}
</style>