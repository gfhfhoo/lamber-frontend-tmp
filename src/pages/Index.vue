<template>
  <div id="app">
    <HeaderFrontendNew></HeaderFrontendNew>
    <router-view/>

    <Footer></Footer>
  </div>
</template>
<script>
import HeaderFrontendNew from "@/components/common/header/Header-FrontendNew";
import Footer from "@/components/common/footer/Footer";
import HeaderTip from "@/components/common/header/headerTip/HeaderTip";
import Comment from "@/components/common/comment/Comment";

export default {
  name: "Index",
  components: {HeaderTip, HeaderFrontendNew, Footer}
}
</script>

<style>
@import "../global/colors.scss";

body {
  margin: 0;
  background: var(--color-white-mask);
}

</style>