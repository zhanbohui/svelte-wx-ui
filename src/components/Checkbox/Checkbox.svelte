<template>
  <div class="weui-cells_checkbox">
    {#each options as item}
      <label class="weui-cell weui-check__label">
        <div class="weui-cell__hd">
          <input type="checkbox" class="weui-check" bind:group={value} value={item.value || item}>
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>{item.label || item}</p>
        </div>
      </label>
    {/each}
  </div>
</template>

<script>
  import Icon from "../Icon/Icon.svelte";
  export let options = [];
  export let value = [];
</script>