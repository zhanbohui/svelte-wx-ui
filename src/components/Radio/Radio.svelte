<template>
  <div class="weui-cells_radio">
    {#each options as item}
      <label class="weui-cell weui-check__label">
        <div class="weui-cell__bd">
          <p>{item.label || item}</p>
        </div>
        <div class="weui-cell__ft">
          <input type="radio" class="weui-check" bind:group={value} value={item.value || item}>
          <span class="weui-icon-checked"></span>
        </div>
      </label>
    {/each}
  </div>
</template>

<script>
  export let options = [];
  export let value;
</script>