<template>
  <div>
    <div class="weui-mask"
         on:click={handleCancel}
         style="opacity: {visible ? 1 : 0}; display: {visible ? 'block' : 'none'}"></div>
    <div class="weui-actionsheet" class:weui-actionsheet_toggle={visible}>
      <div class="weui-actionsheet__title">
        <slot name="title">
          <p class="weui-actionsheet__title-text">{title}</p>
        </slot>
      </div>
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell">示例菜单</div>
        <div class="weui-actionsheet__cell">示例菜单</div>
        <div class="weui-actionsheet__cell weui-actionsheet__cell_warn">负向菜单</div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" on:click={handleCancel}>取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let title = "";
  export let visible = false;
  function handleCancel() {
    visible = false;
    dispatch('cancel', {})
  }
</script>

