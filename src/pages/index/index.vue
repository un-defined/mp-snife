<template>
  <!-- <div class="container"> -->
    <div class="zan-panel">
      <div v-for="item in items" :key="item" class="icon-wrap">
        <a :href="'/pages/' + item.href + '/main'">
          <div class="zan-icon" :class="'zan-icon-' + item.icon"  style="color: #ff4343;"></div>
          <div class="icon-classname">{{item.name}}</div>
        </a>
      </div>
      <div v-for="icon in icons" :key="icon" class="icon-wrap">
        <div class="zan-icon" :class="'zan-icon-' + icon"  style="color: #ff4343;"></div>
        <div class="icon-classname">zan-icon-{{ icon }}</div>
      </div>
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
          {
            icon: 'edit',
            name: '短网址',
            href: 'shortenUrl',
          },
          {
            icon: 'exchange-record',
            name: '汇率',
            href: 'exchangeRate',
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
