<template>
  <div class="weui-navbar__item"
       class:weui-bar__item_on={active}>
    <slot></slot>
  </div>
</template>

<script>
  export let active = false;
</script>
