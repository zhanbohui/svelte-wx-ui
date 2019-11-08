<template>
  <div>
    {#each icons as type, i}
      <Icon size="50" type={type}></Icon>
    {/each}
  </div>
</template>

<script>
  import Icon from "../components/Icon/Icon.svelte";
  let icons = [
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