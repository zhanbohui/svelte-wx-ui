<template>
  <div class="input-box">
    <input
      class="weui-input"
      autofocus={autofocus}
      readonly={readonly}
      disabled={disabled}
      bind:value={value}
      pattern={pattern}
      placeholder={placeholder}
      maxlength={maxLength}
      on:focus
      on:change
      on:input/>
    {#if showClear && value.length > 0}
      <button
        class="weui-btn_reset weui-btn_icon weui-btn_input-clear"
        on:click={handleClear}>
        <i class="weui-icon-clear"></i>
      </button>
    {/if}
  </div>
</template>

<script>
  export let autofocus = false;
  export let readonly = false;
  export let disabled = false;
  export let showClear = false;
  export let type = 'text';
  export let pattern = '';
  export let placeholder = '';
  export let maxLength;
  export let value = '';
  function handleClear() {
    value = '';
    console.log(value);
  }
</script>

<style>
  .input-box {
    /*position: relative;*/
    width: 100%;
    display: flex;
  }
  .input-box > button {
    /*position: absolute;*/
    /*right: 10px;*/
    /*z-index: 999;*/
  }
</style>
