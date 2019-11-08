<template>
  <div class="weui-footer" class:weui-footer_fixed-bottom="{fixed}">
    {#if links && (links.length > 0)}
      <p class="weui-footer__links">
        {#each links as link}
          <a href="{link.href ? link.href : ''}"
             class="weui-footer__link">{link.text}</a>
        {/each}
      </p>
    {/if}
    <p class="weui-footer__text">
      <slot>{text}</slot>
    </p>
  </div>
</template>

<script>
  export let fixed;
  export let text = '';
  export let links = [];
</script>

