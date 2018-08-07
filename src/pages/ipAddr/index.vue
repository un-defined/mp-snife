<template>
  <!-- <div class="container"> -->
    <div class="result">
      您当前的IP地址为： 
      <h1>{{currentIP}}</h1>
      <h2>{{ipDetail}}</h2>
    </div>
  <!-- </div> -->


</template>

<script>
  import get from '../../utils/request';
  import { URL } from '../../utils/url';
  
  export default {
    data() {
      return {
        currentIP: '',
        ipDetail: '',
      };
    },
    async onShow() {
      const { data, status } = await this.$rq.get(URL.GET_CLIENT_IP);
      const {
        country, region, city, county, ip, isp,
      } = data.data;
      this.currentIP = ip;
      this.ipDetail = `${country} - ${region} - ${city} - ${county} - ${isp}`;
    },
    methods: {
    },
  };
</script>

<style>
  .result { text-align: center }
</style>
