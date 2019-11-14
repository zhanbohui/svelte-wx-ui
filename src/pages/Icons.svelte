<template>
  <div class="demo">
    <h1>Icon</h1>
    <p>图标</p>
    <br>
    {#each icons as type, i}
      <Icon size="25" type={type}></Icon>
    {/each}
  </div>
</template>

<script>
  import Icon from "../components/Icon/Icon.svelte";
  let icons = [
    'loading',
    'arrow',
    'arrow-bold',
    'back-arrow',
    'back-arrow-thin',
    'back',
    'back-circle',
    'cancel',
    'circle',
    'clear',
    'close',
    'delete',
    'download',
    'safe-success',
    'safe-warn',
    'search',
    'success',
    'success-circle',
    'success-no-circle',
    'success-no-circle-thin',
    'info',
    'info-circle',
    'warn',
    'waiting',
    'waiting-circle'
  ];
</script>

<style>
  h1, p {
    padding-left: 30px;
  }
</style>
