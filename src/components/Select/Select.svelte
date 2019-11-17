<template>
  <select class="weui-select" bind:value={value}>
    {#each options as item}
      <option value={item.value || item}>{item.label || item}</option>
    {/each}
  </select>
</template>

<script>
  export let options = [];
  export let value;
</script>