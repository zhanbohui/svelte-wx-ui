<template>
  <div>
    <br>
    <h1>输入框状态</h1>
    <p>可体验表单输入样式</p>
    <br>
    <Form title="表单报错">
      <FormItem label="卡号">
        <Input placeholder="请输入16位卡号" maxLength="16"></Input>
      </FormItem>
    </Form>
    <Form title="表单只读、置灰">
      <FormItem label="EMail" readonly>
        <Input value="1234567" readonly></Input>
      </FormItem>
      <FormItem label="微信号" disabled>
        <Input value="WeUI" disabled/>
      </FormItem>
    </Form>
    <br>
    <Button type="primary">确定</Button>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
  import FormItem from "../components/Form/FormItem.svelte";
  import Input from "../components/Input/Input.svelte";
  import Form from "../components/Form/Form.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>

