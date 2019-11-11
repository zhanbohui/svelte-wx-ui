<template>
  <div class='s-toast-box'
       style="opacity: {visible ? 1 : 0}; display: {visible ? 'block': 'none'}">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <slot>
        {#if icon}
          <Icon type={icon} size={55}></Icon>
        {/if}
        <p class="weui-toast__content">
          <slot>{text}</slot>
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
  import Icon from "../Icon/Icon.svelte";
  import { onMount } from "svelte";
  export let text;
  export let icon = 'success';
  export let duration = 2;
  export let visible = false;
  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, duration * 1000)
  });
</script>
