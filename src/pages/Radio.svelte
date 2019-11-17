<template>
  <div class="demo">
    <br>
    <h1>Radio</h1>
    <p>单选框</p>
    <br>
    <Group>
      <Radio options={options} bind:value={value}></Radio>
    </Group>
    <br>
    <Button on:click={handleClick}>确定</Button>
  </div>
</template>

<script>
  import Group from "../components/Cell/Group.svelte";
  import Radio from "../components/Radio/Radio.svelte";
  import FormItem from "../components/Form/FormItem.svelte";
  import Form from "../components/Form/Form.svelte";
  import Button from "../components/Button/Button.svelte";
  let options = ['apple', 'huawei', 'xiaomi'];
  let value = '';
  $:console.log(value);
  function handleClick() {
    alert(value);
  }
</script>

<style>
  h1, p  {
    text-align: center;
  }
</style>