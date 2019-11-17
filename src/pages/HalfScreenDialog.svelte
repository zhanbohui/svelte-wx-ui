<template>
  <div>
    <br>
    <h1>Half-screen Dialog</h1>
    <p>半屏组件</p>
    <br>
    <Button on:click={() => { visible = true }}>样式一</Button>
    <Button on:click={() => { visible1 = true }}>样式二</Button>
    {#if visible}
      <HalfScreenDialog title="标题" bind:visible={visible}>
        <p>可放自定义内容</p>
      </HalfScreenDialog>
    {/if}
<!--    {#if visible1}-->
      <HalfScreenDialog title="标题" showMore subTitle="子标题" bind:visible={visible1}>
        <p>可放自定义内容</p>
        <div slot="footer">
          <Button type="primary">主操作</Button>
          <Button>副操作</Button>
        </div>
      </HalfScreenDialog>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
  import HalfScreenDialog from "../components/HalfScreenDialog/HalfScreenDialog.svelte";
  let visible = false;
  let visible1 = false;
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
