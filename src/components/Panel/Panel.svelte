<template>
  <div class="weui-panel">
    <div class="weui-panel__hd">
      <slot name="tilte">{title}</slot>
    </div>
    <div class="weui-panel__bd">
      <slot></slot>
    </div>
    <div class="weui-panel__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export let title;
</script>
