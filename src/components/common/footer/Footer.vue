<template>
  <div class="footer">
    <div class="footer-container">
      <span class="copyright">Powered By End_nether</span>
      <span class="version">Version: 0.0.1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
}

.footer-container {
  width: 500px;
  margin: auto;
  text-align: center;
}

.footer span {
  display: block;
}

.version {
  font-weight: bold;
  color: rgb(187, 187, 187);
}

</style>