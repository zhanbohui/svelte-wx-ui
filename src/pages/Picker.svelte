<template>
  <div class="demo">
    <br>
    <h1>Picker</h1>
    <p>多列选择器</p>
    <br>
    <Button on:click={() => { visible = true }}>单列选择器</Button>
    <Picker options={options}></Picker>
  </div>
</template>

<script>
  import Picker from "../components/Picker/Picker.svelte";
  import Button from "../components/Button/Button.svelte";
  let visible = false;
  let options = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ]
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
