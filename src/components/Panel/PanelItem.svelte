<template>
  <a href="javascript:void(0);"
     class="weui-media-box weui-media-box_appmsg">
    <div class="weui-media-box__hd">
      <img class="weui-media-box__thumb" src={imgSrc} alt="">
    </div>
    <div class="weui-media-box__bd">
      <h4 class="weui-media-box__title">{title}</h4>
      <p class="weui-media-box__desc">{desc}</p>
    </div>
  </a>
</template>

<script>
  export let imgSrc = '';
  export let title = '';
  export let desc = '';
</script>
