<template>
  <div>
    <br>
    <h1>复选框样式展示</h1>
    <br>
    <Group>
      <Checkbox options={options} bind:value={value}></Checkbox>
    </Group>
    <br>
    <Button type="primary">下一步</Button>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
  import Checkbox from "../components/Checkbox/Checkbox.svelte";
  import Group from "../components/Cell/Group.svelte";
  let options = ['first', 'second', 'third'];
  let value = [];
  $:console.log(value);
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
