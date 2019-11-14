<template>
  <br>
  <h1>
    文本域
  </h1>
  <p>输入更多内容的输入区样式展示</p>
  <br>
  <Form title="问题描述">
    <FormItem>
      <Textarea placeholder="请描述你所发生的问题" showCounter={true}></Textarea>
    </FormItem>
  </Form>
</template>

<script>
  import FormItem from "../components/Form/FormItem.svelte";
    import Form from "../components/Form/Form.svelte";
    import Textarea from "../components/Textarea/Textarea.svelte";
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>