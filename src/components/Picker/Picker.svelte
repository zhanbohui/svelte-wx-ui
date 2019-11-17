<template>
  <div class="weui-picker" bind:this={dom}>
    <div class="weui-picker__bd">
      {#each options as option}
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content" style="transform: translate3d(0px, 0px, 0px);">
            {#each option as item}
              <div class="weui-picker__item">{item}</div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</template>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  const dispatch = createEventDispatcher();
  export let options = [];
  export let value = []; // selected
  let dom;
  function handleClose() {
    dispatch('close', {});
  }
  function handleTouchStart(e) {}
  function handleTouchMove(e) {}
  function handleTouchEnd(e) {}
  onMount(() => {
    console.log(dom);
    const groups = dom.querySelector('.weui-picker__group');
    for (let i = 0, len = groups.length; i < len; i++) {
      let group = groups[i];
      group.addEventListener('touchStart', handleTouchStart, false);
      group.addEventListener('touchMove', handleTouchMove, false);
      group.addEventListener('touchEnd', handleTouchEnd, false);
    }
  })
</script>