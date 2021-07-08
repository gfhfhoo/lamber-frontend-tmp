<template>
  <div class="header">
    <div class="nav" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08)">
      <div class="nav nav-left">
        <img src="https://cli.vuejs.org/favicon.png" width="40px" height="40px">
        <router-link v-for="(ele, i) in nav_link" :key="i" :to="links[i]">{{
            ele
          }}
        </router-link>
        <i id="daofu"></i>
      </div>
      <div class="nav nav-right">
        <img class="login-avatar" :src="avatar_url" @click="open">
        <span class="login-username" :style="{color: level_color}">{{ username }}</span>
      </div>
    </div>
    <header-tip/>
  </div>
</template>

<script>
import HeaderTip from "@/components/common/header/headerTip/HeaderTip";

export default {
  name: "Header-Frontend",
  components: {HeaderTip},
  data() {
    return {
      nav_link: ['首页', '题库', '比赛', '新春画板'],
      links: ['/', 'problem', 'competition', 'draw'],
      avatar_url: 'https://pic3.zhimg.com/v2-f1f51e65779a6db0a647516a0f33d4f8_xs.jpg',
      username: 'End_nether',
      level_color: 'rgb(251, 114, 153)'
    }
  },
  methods: {
    open() {
      this.$notify({
        message: "hello",
        position: "bottom-right"
      });
    }
  },
  watch: {

  }
}

</script>

<style>

.login-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.login-username {
  font-size: 14px;
  font-weight: bold;
  margin: 0 40px 0 40px;
}
</style>