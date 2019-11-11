<template>
  <div class="weui-flex" class:flex-direction_column={direction == "column"}>
    <slot></slot>
  </div>
</template>

<script>
  export let direction = 'row';
</script>

<style>
  .flex-direction_column {
    flex-direction: column;
  }
</style>