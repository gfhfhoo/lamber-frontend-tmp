<template>
  <transition name="messageBox" appear
              appear-to-class="message-Box-enter-active">
    <div class="nether-message" v-if="isOpen">
      <!-- <div :class="showClass"></div> -->
      <!-- <i :class="['close-icon', closeIcon]" @click="close"></i> -->
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NetherMessage",
  props: {
    // showClass: String,
    // closeIcon: String,
    isOpen: Boolean
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    close() {

    }
  }
}
</script>

<style>
.nether-message {
  position: fixed;
  width: 200px;
  height: 100px;
  bottom: 5%;
  background-color: hotpink;
}

.close-icon {
  float: right;
  top: 2px;
  right: 2px;
}

.message-Box-enter-active {
  animation: enter 2.5s ease-in forwards;
}

.message-Box-leave-active {
  animation: leave 2.5s ease-out forwards;
}

@keyframes enter {
  from {
    right: 100%;
  }
  to {
    right: 0%;
  }
}

@keyframes leave {
  to {
    left: 0%;
  }
}

</style>