<template>
  <input
    type="checkbox"
    class="weui-check"
    bind:checked={checked}>
  <Icon type={ checked ? 'success' : 'circle' }></Icon>
</template>

<script>
  import Icon from "../Icon/Icon.svelte";
  export let checked = false;
</script>