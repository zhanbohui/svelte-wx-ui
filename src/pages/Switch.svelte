<template>
  <div class="demo">
    <br>
    <h1>开关样式展示</h1>
    <br>
    <Group title="开关样式">
      <Cell title="标题文字">
        <Switch bind:checked={checked}></Switch>
      </Cell>
      <Cell title="标题文字">
        <Switch checked={checked}></Switch>
      </Cell>
    </Group>
    <br>
    <Button type="primary" on:click={handleClick}>确定</Button>
    {#if visible}
      <Toast text="确定" bind:visible={visible}></Toast>
    {/if}
  </div>
</template>

<script>
  import Toast from "../components/Toast/Toast.svelte";
  import Button from "../components/Button/Button.svelte";
  import Switch from "../components/Switch/Switch.svelte";
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
  let checked = true;
  let visible = false;
  $:console.log(checked);
  function handleClick() {
    visible = true;
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
