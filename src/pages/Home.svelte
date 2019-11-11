<template>
  <div class="demo">
    <Group title="组件">
      {#each components as {name, router} }
        <Cell title={name} isLink={true} router={router}></Cell>
      {/each}
    </Group>
  </div>
</template>

<script>
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
  let components = [
    {
      name: 'icon',
      router: '/icon'
    },
    {
      name: 'button',
      router: '/button'
    },
    {
      name: 'progress',
      router: '/progress'
    },
    {
      name: 'preview',
      router: '/preview'
    },
    {
      name: 'slider',
      router: '/slider'
    },
    {
      name: 'cell',
      router: '/cell'
    },
    {
      name: 'panel',
      router: '/panel'
    },
    {
      name: 'footer',
      router: '/footer'
    }
  ];
</script>

<style>
  .demo {
    width: 100%;
    height: 100%;
    background: #eeeeee;
  }
</style>
