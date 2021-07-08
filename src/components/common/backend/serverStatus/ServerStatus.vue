<template>
  <div class="server-status">
    <p>Server Status</p>
    <div class="server-status-main">
      <ServerStatusBox></ServerStatusBox>
    </div>
  </div>
</template>

<script>
import ServerStatusBox from "@/components/ui/serverStatusBox/ServerStatusBox";
export default {
  name: "ServerStatus",
  components: {ServerStatusBox}
}
</script>

<style lang="scss" scoped>
.server-status {
  //min-width: 60%;
  p {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: "Cascadia Code";
    font-weight: bolder;
    font-size: 25px;
    padding-left: 60px;
  }
}

</style>