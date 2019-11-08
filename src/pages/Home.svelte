<template>
  <a href="/" use:link>home</a>
  <a href="/icon" use:link>icons</a>
  <a href="/footer" use:link>footer</a>
  <a href="/button" use:link>button</a>
  <a href="/progress" use:link>progress</a>
  <a href="/preview" use:link>preview</a>
  <a href="/slider" use:link>slider</a>
  <a href="/404" use:link>404</a>
  <Group title={'组件'}>
    <Cell title={'icons'} isLink={true}></Cell>
  </Group>
</template>

<script>
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
  import { link } from 'svelte-spa-router';
</script>