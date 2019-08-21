<template>
  <div class="billed">
    <router-link to="/pageBill" tag="div" class="title">账</router-link>
  </div>
</template>
<script>
export default {
  name: "bill"
};
</script>

<style lang="scss" >
.billed {
  width: 55px;
  height: 55px;
  //line-height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 215, 99, 1);
  text-align: center;
  font-size: 14px;
  font-family: Arial;
  position: fixed;
  bottom: 69px;
  right: 10px;
  color: rgba(16, 16, 16, 1);
  .title {
    font-size: 28px;
    line-height: 50px;
  }
}
</style>
