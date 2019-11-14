<template>
  <div class="weui-cell weui-cell_readonly weui-cell_disabled">
    <div class="weui-cell__hd">
      <slot name="label">
        <label class="weui-label">{label}</label>
      </slot>
    </div>
    <div class="weui-cell__bd">
      <slot></slot>
    </div>
    <div class="weui-cell__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export let label = '';
  export let readonly = false;
  export let disabled = false;
</script>