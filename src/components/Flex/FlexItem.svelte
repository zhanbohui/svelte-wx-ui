<template>
  <div class="weui-flex_item"
       class:col-1={span === 1}
       class:col-2={span === 2}
       class:col-3={span === 3}
       class:col-4={span === 4}
       class:col-5={span === 5}
       class:col-6={span === 6}
       class:col-7={span === 7}
       class:col-8={span === 8}
       class:col-9={span === 9}
       class:col-10={span === 10}
       class:col-11={span === 11}
       class:col-12={span === 12}
  >
    <slot></slot>
  </div>
</template>

<script>
  export let span = 1;
</script>

<style>
  .col-1 {
    flex: 1;
  }
  .col-2 {
    flex: 2;
  }
  .col-3 {
    flex: 3;
  }
  .col-4 {
    flex: 4;
  }
  .col-5 {
    flex: 5;
  }
  .col-6 {
    flex: 6;
  }
  .col-7 {
    flex: 7;
  }
  .col-8 {
    flex: 8;
  }
  .col-9 {
    flex: 9;
  }
  .col-10 {
    flex: 10;
  }
  .col-11 {
    flex: 11;
  }
  .col-12 {
    flex: 12;
  }
</style>
