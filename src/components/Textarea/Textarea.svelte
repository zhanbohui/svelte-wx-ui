<template>
  <div class="weui-cell">
    <div class="weui-cell__bd" style="display: flex;">
      <textarea
        class="weui-textarea"
        bind:value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readonly={readonly}
        rows={rows}></textarea>
      {#if showCounter}
        <div class="weui-textarea-counter">
          <span>{value.length}</span>/{maxLength}
        </div>
      {/if}
    </div>
  </div>
</template>

<script>
  export let placeholder = '';
  export let rows = 3;
  export let value = '';
  export let disabled = false;
  export let readonly = false;
  export let required = false;
  export let showCounter = false;
  export let maxLength = 200;

  $:{
    value = value.substr(0, maxLength);
  }
</script>

<style>

</style>
