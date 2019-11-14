<template>
  <br>
  <h1>
    文本域
  </h1>
  <p>输入更多内容的输入区样式展示</p>
  <br>
  <Group title="问题描述">
    <Cell>
      <div slot="title">
        <Textarea placeholder="请描述你所发生的问题" showCounter={true}></Textarea>
      </div>
    </Cell>
  </Group>
</template>

<script>
  import Textarea from "../components/Textarea/Textarea.svelte";
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>