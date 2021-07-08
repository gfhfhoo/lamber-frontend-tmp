<template>
  <div class="side">
    <div class="side-off" v-if="isOn === false" @click="switcher">
      <div class="side-button">
        <img src="@/assets/wrench.png">
      </div>
    </div>

    <div class="side-on" v-if="isOn === true" @click="switcher">
      <transition name="slide">
        <div class="tools">

        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: "SideUtils",
  data() {
    return {
      isOn: false
    }
  },
  methods: {
    switcher() {
      this.isOn = !this.isOn
    }
  }
}
</script>

<style>
@keyframes hovering {
  100% {
    box-shadow: 0px 0px 5px rgba(255, 123, 0, 0.5);
  }
}

.side {
  position: fixed;
  left: 95%;
  top: 90%;
  z-index: 100;
}

.side-button:hover {
  animation: hovering 0.3s linear;
  animation-fill-mode: forwards;
}

.side-button {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.side-button > img {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20%;
  left: 20%;
}

.tools {
  position: fixed;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

@keyframes enter {
  0% {
    top: 20%;
    left: 10%;
  }
  100% {
    top: 50%;
    left: 80%;
  }
}

@keyframes out {
  100% {
    top: 100%;
    left: 100%;
  }

}

.slide-enter-active {
  animation: enter 2s linear;
}

.slide-leave-active {
  animation: out 0.5s linear;
}

</style>