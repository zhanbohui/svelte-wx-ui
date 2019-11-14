<template>
  <div style="opacity: {visible ? 1 : 0};">
    <div class="weui-mask" on:click={handleClose}></div>
    <div class="weui-half-screen-dialog weui-half-screen-dialog_show">
      <div class="weui-half-screen-dialog__hd">
        <div class="weui-half-screen-dialog__hd__side">
          {#if showCloseBtn}
            <button
              class="weui-icon-btn weui-icon-btn_close"
              on:click={handleClose}>关闭</button>
          {/if}
        </div>
        <div class="weui-half-screen-dialog__hd__main">
          <slot name="title">
            <strong class="weui-half-screen-dialog__title">{title}</strong>
            <span class="weui-half-screen-dialog__subtitle">{subTitle}</span>
          </slot>
        </div>
        <div class="weui-half-screen-dialog__hd__side">
          {#if showMore}
            <button class="weui-icon-btn weui-icon-btn_more">更多</button>
          {/if}
        </div>
      </div>
      <div class="weui-half-screen-dialog__bd">
        <slot></slot>
      </div>
      <div class="weui-half-screen-dialog__ft">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export let title = "";
  export let subTitle = "";
  export let visible = false;
  export let showCloseBtn = true;
  export let showMore = false;
  function handleClose() {
    visible = false;
  }
</script>