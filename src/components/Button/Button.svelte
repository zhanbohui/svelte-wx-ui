<template>
  <a href="javascript:;"
     on:click={handleClick}
     class:weui-btn_loading="{loading}"
     class:weui-btn_disabled="{disabled}"
     class:weui-btn_mini="{size === 'mini'}"
     class:weui-btn="{!cell}"
     class:weui-btn_default="{ !cell && type === 'default' }"
     class:weui-btn_warn="{ !cell && type === 'warn' }"
     class:weui-btn_primary="{ !cell && type === 'primary' }"
     class:weui-btn_cell="{cell}"
     class:weui-btn_cell-default="{ cell && type === 'default' }"
     class:weui-btn_cell-warn="{ cell && type === 'warn' }"
     class:weui-btn_cell-primary="{ cell && type === 'primary' }">
    {#if loading}
      <i class="weui-loading"></i>
    {/if}
    <slot></slot>
  </a>
</template>

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let type = 'default';
  export let loading = false;
  export let disabled = false;
  export let cell = false;
  export let size = 'middle';
  function handleClick() {
    if (loading || disabled) return;
    dispatch('click', {});
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
