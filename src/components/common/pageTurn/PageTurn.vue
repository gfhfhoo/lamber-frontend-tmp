<template>
  <div class="paging">
    <div class="up"><i></i></div>
    <div class="input">
    </div>
    <div class="down"><i></i></div>
  </div>
</template>

<script>
export default {
  name: "PageTurn"
}
</script>

<style scoped>

.paging {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -100px;
  width: 35px;
  height: 105px;

}

.up {
  border-radius: 5px 5px 0 0;
  border-bottom: 0;
  box-shadow: 0px -1px 2px var(--border-grey);
}

.input {
  border-bottom: 0;
  border-top: 0;
}

.down {
  border-radius: 0 0 5px 5px;
  border-top: 0;
  box-shadow: 0px 1px 2px var(--border-grey);
}

/*.input {*/
/* box-shadow: 0px 0px 1px 1px var(--border-grey);*/
/*} */

.up, .down {
  cursor: pointer;
}

.up, .down, .input {
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-grey);
}

/*input {*/
/*  padding: 0;*/
/*}*/

i {
  display: inline-block;
  margin: 0 auto;
  background-size: cover!important;
  width: 50%;
  height: 50%;
}

.up i {
  background: url("~@/assets/left.png");
}

.down i {
  background: url("~@/assets/right.png");
}

</style>