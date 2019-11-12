<template>
  <div>
    <div class="weui-mask"></div>
    <div class="weui-dialog" class:weui-skin_android={IsAndroid}>
      <div class="weui-dialog__hd">
        <slot name="title">
          <strong class="weui-dialog__title">{title}</strong>
        </slot>
      </div>
      <div class="weui-dialog__bd">
        {#if text}
          {text}
        {:else}
          <slot></slot>
        {/if}
      </div>
      <div class="weui-dialog__ft">
        {#if showCancelBtn}
          <a href="javascript:void(0);" on:click={handleCancel} class="weui-dialog__btn weui-dialog__btn_default">{cancelBtnText}</a>
        {/if}
        <a href="javascript:void(0);" on:click={handleConfirm} class="weui-dialog__btn weui-dialog__btn_primary">{confirmBtnText}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { createEventDispatcher } from "svelte";
  import { isAndroid } from "../../utils/util";
  const dispatch = createEventDispatcher();
  export let title = '';
  export let text = '';
  export let showCancelBtn = true;
  export let cancelBtnText = '取消';
  export let confirmBtnText = '确定';
  export let IsAndroid = isAndroid();
  function handleCancel() {
    dispatch('cancel', {});
  }
  function handleConfirm() {
    dispatch('confirm', {});
  }
</script>