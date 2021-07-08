<template>
  <div class="header">
    <div class="nav">
      <div class="nav nav-left">
        <div><img src="https://cli.vuejs.org/favicon.png" width="40px" height="40px"></div>
        <div class="nav-links">
          <router-link v-for="(ele, i) in nav_link" :key="i" :to="links[i]" :class="links_class[i]">{{
              ele
            }}
            <i v-if="links[i]==='/draw'" id="daofu"></i>
          </router-link>

        </div>
      </div>
      <div class="nav nav-right">
        <div class="avatar">
          <div><img :src="avatar_url"/></div>
          <span :style="{color: level_color}">{{ username }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HeaderTip from "@/components/common/header/headerTip/HeaderTip";

export default {
  name: "Header-FrontendNew",
  components: {HeaderTip},
  data() {
    return {
      nav_link: ['首页', '题库', '比赛', '新春画板'],
      links: ['/', '/problem', '/competition', '/draw'],
      links_class: ["", "problem", "competition", "draw"],
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
}
</script>

<style lang="scss" scoped>

.header {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.nav {
  display: flex;
  flex-direction: row;
  height: 50px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .nav-left {
    display: flex;
    flex-direction: row;
    width: 80%;

    a {
      text-decoration: none;
      color: black;
      margin-left: 70px;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      margin: auto auto auto 0;

      a {
        display: flex;
        flex-direction: column;
      }

      .draw {
        position: relative;

        #daofu {
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          right: -13px;
          top: 2px;
          background: url("~@/assets/daofu.png");
          background-size: cover;
          animation: shake 1.4s ease-in-out 0s infinite alternate;
        }
      }
    }
  }

  .nav-right {
    display: flex;
    flex-direction: row;

    .avatar {
      div {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        margin-right: 15px;
      }
    }
  }


  @keyframes shake {
    from {
      transform: rotate(15deg);
      transform-origin: 50% 0;
    }
    to {
      transform: rotate(-15deg);
      transform-origin: 50% 0;
    }
  }
}

</style>