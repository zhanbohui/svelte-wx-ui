<template>
  <br>
  <h1>Textarea</h1>
  <p>输入更多内容的输入区样式展示</p>
  <br>
  <Group title="问题描述">
    <Textarea placeholder="请描述你所发生的问题" showCounter={true}></Textarea>
  </Group>
</template>

<script>
  import Group from "../components/Cell/Group.svelte";
  import Textarea from "../components/Textarea/Textarea.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>