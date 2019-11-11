<template>
  <div class="cell-group">
    <div class="cell-group__title">
      <slot name="title">{title}</slot>
    </div>
    <div class="weui-cells">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export let title = '';
</script>

<style>
  .cell-group .cell-group__title {
    /*padding-top: 8px;*/
    padding: 8px 16px 0;
    font-size: 14px;
    color: rgba(0, 0, 0, .5);
  }
</style>
