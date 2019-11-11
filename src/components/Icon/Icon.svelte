<template>
  <i
    style="width: {size}px; height: {size}px;"
    class:weui-loading={type == 'loading'}
    class:weui-icon-arrow="{type === 'arrow'}"
    class:weui-icon-arrow-bold="{type === 'arrow-bold'}"
    class:weui-icon-back-arrow="{type === 'back-arrow'}"
    class:weui-icon-back-arrow-thin="{type === 'back-arrow-thin'}"
    class:weui-icon-back="{type === 'back'}"
    class:weui-icon-back-circle="{type === 'back-circle'}"
    class:weui-icon-cancel="{type === 'cancel'}"
    class:weui-icon-circle="{type === 'circle'}"
    class:weui-icon-clear="{type === 'clear'}"
    class:weui-icon-close="{type === 'close'}"
    class:weui-icon-delete="{type === 'delete'}"
    class:weui-icon-download="{type === 'download'}"
    class:weui-icon-close-thin="{type === 'close-thin'}"
    class:weui-icon-safe-success="{type === 'safe-success'}"
    class:weui-icon-safe-warn="{type === 'safe-warn'}"
    class:weui-icon-search="{type === 'search'}"
    class:weui-icon-success="{type === 'success'}"
    class:weui-icon-success-circle="{type === 'success-circle'}"
    class:weui-icon-success-no-circle="{type === 'success-no-circle'}"
    class:weui-icon-success-no-circle-thin="{type === 'success-no-circle-thin'}"
    class:weui-icon-info="{type === 'info'}"
    class:weui-icon-info-circle="{type === 'info-circle'}"
    class:weui-icon-warn="{type === 'warn'}"
    class:weui-icon-waiting="{type === 'waiting'}"
    class:weui-icon-waiting-circle="{type === 'waiting-circle'}"
  >
  </i>
</template>

<script>
  export let type = 'success';
  export let size = 24
</script>
