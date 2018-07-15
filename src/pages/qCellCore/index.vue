<template>
  <!-- <div class="container"> -->
    <div class="zan-panel">
      归属地查询
    </div>
  <!-- </div> -->


</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'logistics',
            name: '查物流',
            href: 'logistics',
          },
          {
            icon: 'qr',
            name: '二维码',
            href: 'qrCode',
          },
          {
            icon: 'phone',
            name: '归属地',
            href: 'qCellCore',
          },
          {
            icon: 'location',
            name: 'IP地址',
            href: 'ipAddr',
          },
        ],
      };
    },
    methods: {
    },
  };
</script>
<style  scoped>
  .icon-wrap {
    width: 33.33333%;
    height: 100px;
    float: left;
    text-align: center;
  }
  .icon-classname {
    color: #999;
    font-size: 10px;
  }
  .zan-icon {
    font-size: 24px;
    margin: 20px;
  }
</style>
