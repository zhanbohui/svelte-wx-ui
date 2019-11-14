<template>
  <div class="weui-cells__group weui-cells__group_form">
    <slot name="title">
      <div class="weui-cells__title">{title}</div>
    </slot>
    <div class="weui-cells weui-cells_form">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export let title = '';
</script>
