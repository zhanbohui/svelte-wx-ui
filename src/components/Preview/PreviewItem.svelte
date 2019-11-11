<template>
  <div class="weui-form-preview__item">
    <label class="weui-form-preview__label">
      <slot name="label">{label}</slot>
    </label>
    <span class="weui-form-preview__value">
    <slot name="value">{value}</slot>
  </span>
  </div>
</template>

<script>
  export let label;
  export let value;
</script>
