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
  import Toast from "../components/Toast/Toast.svelte";
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
      name: 'switch',
      router: '/switch'
    },
    {
      name: 'textarea',
      router: '/textarea'
    },
    {
      name: 'input',
      router: '/input'
    },
    {
      name: 'checkbox',
      router: '/checkbox'
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
      name: 'flex',
      router: '/flex'
    },
    {
      name: 'panel',
      router: '/panel'
    },
    {
      name: 'toast',
      router: '/toast'
    },
    {
      name: 'dialog',
      router: '/dialog'
    },
    {
      name: 'picker',
      router: '/picker'
    },
    {
      name: 'half-screen-dialog',
      router: '/halfscreendialog'
    },
    {
      name: 'load-more',
      router: '/loadmore'
    },
    {
      name: 'footer',
      router: '/footer'
    },
    {
      name: 'Navbar',
      router: '/navbar'
    },
    {
      name: 'search-bar',
      router: '/searchbar'
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
