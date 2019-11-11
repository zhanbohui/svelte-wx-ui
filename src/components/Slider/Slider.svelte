<template>
  <div class="weui-slider-box" bind:this={dom}>
    <div class="weui-slider">
      <div class="weui-slider__inner">
        <div style="width: {x}%;" class="weui-slider__track"></div>
        <div style="left: {x}%;" class="weui-slider__handler"></div>
      </div>
    </div>
    {#if showValue}
      <div class="weui-slider-box__value">{x}</div>
    {/if}
  </div>
</template>

<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  export let value = 0;
  export let showValue = false;

  const dispatch = createEventDispatcher();
  let dom;
  let startX;
  let distX;
  let x = value;
  let innerWidth;

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }
  function handleTouchMove(e) {
    distX = 100 * (e.touches[0].clientX - startX) / innerWidth;
    x = Math.floor(distX + value);
    if (x < 0) {
      x = 0;
    }
    if (x > 100) {
      x = 100;
    }
    dispatch('change', {
      value: x
    })
  }
  function handleTouchEnd(e) {
    value = x;
  }
  onMount(function () {
    const handler = dom.querySelector('.weui-slider__handler');
    const inner = dom.querySelector('.weui-slider__inner');
    innerWidth = inner.getBoundingClientRect().width;
    handler.addEventListener('touchstart', handleTouchStart, false);
    handler.addEventListener('touchmove', handleTouchMove, false);
    handler.addEventListener('touchend', handleTouchEnd, false);
  });
  onDestroy(function () {
    const handler = dom.querySelector('.weui-slider__handler');
    handler.removeEventListener('touchstart', handleTouchStart);
    handler.removeEventListener('touchmove', handleTouchMove);
    handler.removeEventListener('touchend', handleTouchEnd);
  })
</script>
