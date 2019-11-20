<template>
  {#if isLink}
    <a href="javascript:void(0);"
       on:click={handleLink}
       class="weui-cell"
       class:weui-cell_access="{isLink}">
      <div class="weui-cell__hd">
        {#if label}
          <div class="weui-label">{label}</div>
        {:else}
          <slot name="header"></slot>
        {/if}
      </div>
      <div class="weui-cell__bd">
        {#if title}
          {title}
        {:else}
          <slot></slot>
        {/if}
      </div>
      <div class="weui-cell__ft">
        <slot name="footer"></slot>
      </div>
    </a>
  {:else if swiped}
    <div class="weui-cell weui-cell_swiped" bind:this={dom}>
      <div class="weui-cell__bd">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            {#if label}
              <div class="weui-label">{label}</div>
            {:else}
              <slot name="header"></slot>
            {/if}
          </div>
          <div class="weui-cell__bd">
            {#if title}
              {title}
            {:else}
              <slot></slot>
            {/if}
          </div>
          <div class="weui-cell__ft">
            <slot name="footer">{value}</slot>
          </div>
        </div>
      </div>
      <div class="weui-cell__ft">
        <a class="weui-swiped-btn weui-swiped-btn_warn" href="javascript:">删除</a>
      </div>
    </div>
  {:else}
    <div class="weui-cell">
      <div class="weui-cell__hd">
        {#if label}
          <div class="weui-label">{label}</div>
        {:else}
          <slot name="header"></slot>
        {/if}
      </div>
      <div class="weui-cell__bd">
        {#if title}
          {title}
        {:else}
          <slot></slot>
        {/if}
      </div>
      <div class="weui-cell__ft">
        <slot name="footer">{value}</slot>
      </div>
    </div>
  {/if}
</template>

<script>
  import { onMount, onDestroy } from "svelte";
  import { push } from "svelte-spa-router";

  export let label = '';
  export let title = '';
  export let value = '';
  export let isLink = false;
  export let router = '';
  export let swiped = false;

  let dom;
  let startX;
  let distX;
  let x = 0;
  function handleLink() {
    if (isLink && router) {
      push(router);
    }
  }
  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    distX = e.touches[0].clientX - startX;
    x = distX + x;
    if (x > 0) {
      x = 0
    }
    if (x< -68) {
      x = -68;
    }
    dom.querySelector('.weui-cell__bd').style.transform = `translateX(${x}px)`;
    dom.querySelector('.weui-cell__bd').style.transition = `transform .2s`;
  }

  function handleTouchEnd(e) {
    // console.log(e)
    if (Math.abs(x) > 34) {
      x = -68;
    } else {
      x = 0;
    }
    dom.querySelector('.weui-cell__bd').style.transform = `translateX(${x}px)`;
    dom.querySelector('.weui-cell__bd').style.transition = `transform .2s`;
  }

  onMount(function () {
    if (swiped) {
      dom.addEventListener('touchstart', handleTouchStart, false);
      dom.addEventListener('touchmove', handleTouchMove, false);
      dom.addEventListener('touchend', handleTouchEnd, false);
    }

  });

  onDestroy(function () {
    if (swiped) {
      dom.removeEventListener('touchstart', handleTouchStart);
      dom.removeEventListener('touchmove', handleTouchMove);
      dom.removeEventListener('touchend', handleTouchEnd);
    }
  })

</script>
