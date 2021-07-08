<template>
  <div class="selectbox" :id="id" @click="showDropdown" @mouseleave="offDropdown">
    <div class="select-upper" ref="selectedUpper">
      <span class="selected-item">{{ (tips === '' || tips == null) ? '请选择' : tips }}</span>
      <i class="select-icon"></i>
    </div>
    <div class='select-list' :class="{ 'visible': visible }">
      <div class="select-list-item" v-for="(ele,i) in options" :key="i" @click="select(ele)">{{ ele }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBox',
  props: {
    tips: String,
    options: Array,
    id: String
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    select(ele) {
      this.$refs.selectedUpper.childNodes[0].textContent = ele;
      this.$emit('selectedItem', ele);
      this.offDropdown(); // need fix
    },
    showDropdown() {
      this.visible = true;
      this.$refs.selectedUpper.childNodes[1].style.transform = 'rotate(180deg)';
      this.$refs.selectedUpper.style.borderRadius = '5px 5px 0 0';
    },
    offDropdown() {
      this.visible = false;
      this.$refs.selectedUpper.childNodes[1].style.transform = 'rotate(0deg)';
      this.$refs.selectedUpper.style.borderRadius = '5px';
    }
  }
}
</script>

<style>
.selectbox {
  width: 85%;
  margin-bottom: 2px !important;
  position: relative;
}

.select-upper {
  display: flex;
  width: 100%;
  padding: 0.25rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
}

.select-upper i {
  float: right;
  height: 10px !important;
  width: 10px !important;
  background: url('~@/assets/down.svg');
  transition: transform .4s ease-in-out;
}

.visible {
  opacity: 1 !important;
  visibility: visible !important;
}

.select-list {
  border-radius: 0 0 5px 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-top: 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .2s linear visibility .2s linear;
  z-index: 10;
}

.select-list-item {
  padding: 0.5rem;
  font-size: 15px;
  cursor: pointer;
}

.select-list-item:hover {
  background-color: #F7F7F7;
}

</style>