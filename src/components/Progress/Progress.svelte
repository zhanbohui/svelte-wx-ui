<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div
        class="weui-progress__inner-bar js_progress"
        style="width: {precentComputed}%"></div>
    </div>
    {#if showOperator}
      <a href="javascript:;" class="weui-progress__opr">
        {#if percent >= 100}
          <i class="weui-icon-success"></i>
        {:else}
          <i class="weui-icon-cancel" on:click={handleCancel}></i>
        {/if}
      </a>
    {/if}
  </div>
</template>

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let percent = 0;
  export let showOperator = true;
  $:precentComputed = percent >= 100 ? 100 : percent;
  function handleCancel() {
    dispatch('cancel', {})
  }
</script>
