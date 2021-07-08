<template>
  <div class="stat-box">
    <img :src="imgSrc" />
    <div>
      <p>{{val}}</p>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatBox",
  props: {
    imgSrc: String,
    val: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.stat-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  height: 80px;
  padding: 10px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 10px var(--border-grey-25);

  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }

  div {
    text-align: center;
    width: 80%;
    p {
      display: block;
      margin: 0;
      font-family: "Fira Code Medium";
      font-weight: bolder;
      font-size: 25px;
    }
    span{
      color: var(--border-grey);
      font-size: 13px;
    }
  }
}

</style>