<template>
  <div class="server-status-list">
    <div class="header-wrap">
      <div class="col ids"><span>服务器ID</span></div>
      <div class="col status"><span>状态</span></div>
      <div class="col payload"><span>负载</span></div>
    </div>
<!--    <div class="list" v-for="(ele,i) in queryRes" :key="i" ref="lists">-->
<!--      <div class="col ids"><span>#{{ ele.serverId }}</span></div>-->
<!--      <div class="col status"><span>{{ ele.status }}</span></div>-->
<!--      <div class="col payload"><span>{{ ele.payload }}/min</span></div>-->
<!--    </div>-->
    <div class="no-server-tips">
      <img :src="require('@/assets/backend/sad.png')" />
      <p>还没有添加评测🐔呢....</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerStatusBox",
  data() {
    return {
      queryRes: [
        {
          serverId: 1,
          status: "正常",
          payload: "46"
        },
        {
          serverId: 2,
          status: "通讯失败",
          payload: "--"
        },
        {
          serverId: 3,
          status: "过载",
          payload: ">60"
        },
        {
          serverId: 4,
          status: "空闲",
          payload: "<10"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.server-status-list {
  width: 300px;
  height: auto;
  padding: 10px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 10px var(--border-grey-25);

  font-size: 16px;
  font-family: 'Cascadia Code', 方正准雅宋_GBK;

  .header-wrap {
    display: flex;
    width: 100%;
  }

  .col {
    display: flex;
    width: 1%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .list {
    display: flex;
    margin-top: 10px;

    .col {
      border-bottom: 1px solid var(--border-grey-25);
    }
  }
}

.no-server-tips {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 5px;
    width: 90px;
    height: 90px;
    background-size: cover;
  }

  p{
    margin-top: 5px;
    color: #8a8a8a;
    font-size: 14px;
  }
}

</style>