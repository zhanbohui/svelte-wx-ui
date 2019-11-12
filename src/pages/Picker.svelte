<template>
  <div class="demo">
    <h1>Picker</h1>
    <p>多列选择器</p>
    <br>
    <Button on:click={() => { visible = true }}>单列选择器</Button>
    {#if visible}
      <Picker on:close={() => { visible = false }} title="单列选择器"></Picker>
    {/if}
  </div>
</template>

<script>
  import Picker from "../components/Picker/Picker.svelte";
  import Button from "../components/Button/Button.svelte";
  let visible = false;
</script>

<style>
  h1, p {
    padding-left: 30px;
  }
</style>
