<template>
  <div class="demo">
    <br>
    <h1>Toast</h1>
    <p>弹出式提示</p>
    <br>
    <Button on:click={() => { visible = true; text = "已完成"; icon = "success" }}>成功提示</Button>
    <Button on:click={() => { visible = true; text = "加载中"; icon = "loading" }}>加载中提示</Button>
    {#if visible}
      <Toast text={text} bind:visible={visible} icon={icon}></Toast>
    {/if}
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
  import Toast from "../components/Toast/Toast.svelte";
  let visible = false;
  let text = '已完成';
  let icon = 'success';
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
