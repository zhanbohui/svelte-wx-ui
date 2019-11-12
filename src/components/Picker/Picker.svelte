<template>
  <div bind:this={dom}>
    <div class="weui-mask weui-animate-fade-in" on:click={handleClose}></div>
    <div class="weui-half-screen-dialog weui-picker weui-animate-slide-up">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          <button on:click={handleClose} class="weui-icon-btn weui-icon-btn_close weui-picker__btn">关闭</button>
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <slot name="title">
            <strong class="weui-half-screen-dialog__title">{title}</strong>
          </slot>
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <div class="weui-picker__bd">
          <div class="weui-picker__group">
            <div class="weui-picker__mask"></div>
            <div class="weui-picker__indicator"></div>
            <div class="weui-picker__content" style="transform: translate3d(0px, 0px, 0px);">
              <div class="weui-picker__item">飞机票</div>
              <div class="weui-picker__item">火车票</div>
              <div class="weui-picker__item">的士票</div>
              <div class="weui-picker__item weui-picker__item_disabled">公交票 (disabled)</div>
              <div class="weui-picker__item">其他</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <a href="javascript:;" class="weui-btn weui-btn_primary weui-picker__btn">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  const dispatch = createEventDispatcher();
  export let title = '';
  let dom;
  function handleClose() {
    dispatch('close', {});
  }
  onMount(() => {
    console.log(dom);
    const groups = dom.querySelector('.weui-picker__group');
  })
</script>