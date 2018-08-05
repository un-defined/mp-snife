<template>
  <!-- <div class="container"> -->
    <div class="result">
      您当前的IP地址为： 
      <h1>{{currentIP}}</h1>
    </div>
  <!-- </div> -->


</template>

<script>
  import get from '../../utils/request';
  
  export default {
    data() {
      return {
        currentIP: '',
      };
    },
    async onShow() {
      const res = await get('tools/get_client_ip');
      this.currentIP = res;
    },
    methods: {
    },
  };
</script>

<style>
  .result { text-align: center }
</style>
