<template>
  <div class="left-bar">
    <div class="left-bar-main">
      <div class="left-avatar">
        <div><img :src="avatar_url"/></div>
        <div class="admin-info">
          <span>End_nether</span>
          <span>Administrator</span>
        </div>
      </div>
      <div class="left-nav">
        <router-link v-for="(ele,i) in nav_title" :key="i" :to="nav_link[i]" class="nav-tab" tag="div">
          <img :src="require(`@/assets/backend/` + nav_link[i] + ($route.name === nav_link[i] ? `_clicked.png` : `.png`))"/>
          <span>{{ ele }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNavBar",
  data() {
    return {
      avatar_url: 'https://pic3.zhimg.com/v2-f1f51e65779a6db0a647516a0f33d4f8_xs.jpg',
      nav_title: ["DashBoard", "Servers", "Problems", "Users", "Competitions"],
      nav_link: ["dashboard", "servers", "problems", "users", "competitions"]
    }
  },
}
</script>

<style lang="scss" scoped>

.left-bar {
  width: 250px;
  height: 100vh;
  padding-right: 25px;
  background: var(--layout-blue1);
}

.nav-linked {
  background: #26C0FE;

  span {
    color: white !important;
  }
}


.left-bar-main {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding-top: 20%;

  .left-avatar {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;

    div:nth-child(1) {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .admin-info {
      display: flex;
      flex-direction: column;
      text-align: center;

      span {
        display: block;
        color: white;
        font-family: "Fira Code Medium";
      }

      span:nth-child(1) {
        padding: 3px 0 3px 0;
      }

      span:nth-child(2) {
        color: var(--color-white-50);
        font-size: 12px;
      }
    }
  }

  .left-nav {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    .nav-tab {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      margin: 5px;
      border-radius: 12px;
      cursor: pointer;

      img {
        width: 15%;
        height: 15%;
        background-size: cover;
        margin-right: 8px;
        vertical-align: middle;
      }

      span {
        color: var(--color-white-mask);
        font-family: 'Cascadia Code', monospace;
        width: 85%;
      }
    }

  }

}

</style>