<template>
  <div style="padding: 30px 0;background: #eee;">
    <Button type="primary">页面主操作</Button>
    <Button type="primary" loading>页面主操作</Button>
    <Button type="primary" disabled>页面主操作</Button>
    <Button>页面次操作</Button>
    <Button loading>页面次操作</Button>
    <Button disabled>页面次操作</Button>
    <Button type="warn">警告操作</Button>
    <Button type="warn" loading>警告操作</Button>
    <Button type="warn" disabled>警告操作</Button>
    <div style="padding: 10px 0">
      <Button cell>页面次操作</Button>
      <Button cell loading>页面次操作</Button>
      <Button cell disabled>页面次操作</Button>
    </div>
    <div style="text-align: center">
      <Button type="primary" size="mini">按钮</Button>
      <Button size="mini">按钮</Button>
      <Button type="warn" size="mini">按钮</Button>
    </div>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
</script>