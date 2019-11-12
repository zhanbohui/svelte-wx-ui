<template>
  <div class="weui-loadmore"
       class:weui-loadmore_line={line}
       class:weui-loadmore_dot={!text} >
    {#if loading}
      <i class="weui-loading"></i>
    {/if}
    <span class="weui-loadmore__tips">{text}</span>
  </div>
</template>

<script>
  export let loading = false;
  export let text = '';
  export let line = false;
</script>