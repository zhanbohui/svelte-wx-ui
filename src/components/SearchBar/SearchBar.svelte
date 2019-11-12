<template>
  <div class="weui-search-bar" bind:this={dom} class:weui-search-bar_focusing={focus}>
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" bind:value={value} placeholder={placeholder} required>
        <a href="javascript:void(0);" on:click={handleClear} class="weui-icon-clear"></a>
      </div>
      <label on:click={handleFocus} class="weui-search-bar__label">
        <i class="weui-icon-search"></i>
        <span>{placeholder}</span>
      </label>
    </form>
    <a href="javascript:void(0);" on:click={handleCancel} class="weui-search-bar__cancel-btn">{cancelText}</a>
  </div>
  <div class="weui-cells searchbar-result"
       style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: {result.length == 0 ? 'none': 'block'};">
    {#if result.length > 0}
      {#each result as item, index}
        <div class="weui-cell weui-cell_access" on:click={() => {handleClickItem(item, index)}}>
          <div class="weui-cell__bd weui-cell_primary">
            <p>{item.label}</p>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</template>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  const dispatch = createEventDispatcher();
  export let placeholder = '';
  export let cancelText = '取消';
  export let result = [];
  let focus = false;
  let value = '';
  let dom;
  $:{
    dispatch('input', {
      value,
    });
  }
  function handleFocus() {
    focus = true;
    value = '';
    result = [];
    dom.querySelector('input').focus();
  }
  function handleClear() {
    focus = true;
    value = '';
    result = [];
  }
  function handleCancel() {
    focus = false;
    value = '';
    result = [];
  }
  function handleClickItem(item, index) {
    console.log(item);
    dispatch('itemClick', {
      item,
      index
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch('submit', {
      value,
    });
  }
  onMount(() => {
    dom.querySelector('form').addEventListener('submit', handleSubmit, false);
  });
  onDestroy(() => {
    dom.querySelector('form').removeEventListener('submit', handleSubmit);
  })
</script>
