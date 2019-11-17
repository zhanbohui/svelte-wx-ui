<template>
  <div class="weui-grid">
    <slot>
      <div class="weui-grid__icon"></div>
      <p class="weui-grid__label">{label}</p>
    </slot>
  </div>
</template>

<script>
  export let label = '';
</script>