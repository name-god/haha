<template>
  <div class="page subpage">
    <app-header :title="dataList"></app-header>
  </div>
</template>
<script>
import AppHeader from "../../../components/App-header";
export default {
  data() {
    return {
      dataList: "账单"
    };
  },
  components: {
    [AppHeader.name]: AppHeader
  }
};
</script>
