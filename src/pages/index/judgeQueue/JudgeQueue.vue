<template>
  <div class="queue">
    <div class="header-wrap">
      <div class="col nickname">
        <span>Nickname</span>
      </div>
      <div class="col problem">
        <span>Problem</span>
      </div>
      <div class="col status">
        <span>Status</span>
      </div>
      <div class="col time">
        <span>Submit Time</span>
      </div>
      <div class="col time-used">
        <span>Time Used</span>
      </div>
      <div class="col memo-used">
        <span>Memory Used</span>
      </div>
      <div class="col pts">
        <span>Pts</span>
      </div>
    </div>
    <div class="record" v-for="ele in [1,2,3]">
      <div class="col nickname">
        <span>End_nether</span>
      </div>
      <div class="col problem">
        <span>P1001. 能量采集【NOI2012】</span>
      </div>
      <div class="col status">
        <span>Accepted</span>
      </div>
      <div class="col time">
        <span>2021.06.19 22:34:57</span>
      </div>
      <div class="col time-used">
        <span>150ms</span>
      </div>
      <div class="col memo-used">
        <span>2KB</span>
      </div>
      <div class="col pts">
        <span>100</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JudgeQueue",
  data() {
    return {
      ws_path: "127.0.0.1"
    }
  },
  methods: {
    init() {
      this.socket = new WebSocket(this.ws_path)
      this.socket.onopen = this.onopen
      this.socket.onmessage = this.onMessage
    },
    onopen() {

    },
    onMessage(msg) {

    }
  }
}
</script>

<style lang="scss" scoped>

.queue {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  margin: 20px auto auto;
  width: 80%;

  .nickname {
    width: 6%;
  }

  .problem {
    width: 15%;
  }

  .time {
    width: 5%;
  }
}

.col {
  display: flex;
  width: 1%;
  flex-grow: 1;
  justify-content: center;
}

.header-wrap {
  display: flex;
  color: var(--color-grey);
  font-size: 15px;
  margin-bottom: 8px;
}

.record {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid var(--border-grey-50);
  border-radius: 10px;
  background: white;

  font-size: 14px;

}

</style>