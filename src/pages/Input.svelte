<template>
  <div>
    <br>
    <h1>输入框状态</h1>
    <p>可体验表单输入样式</p>
    <br>
    <Group title="表单报错">
      <Cell label="卡号">
        <Input placeholder="请输入16位卡号" maxLength="16"></Input>
      </Cell>
    </Group>
    <Group title="表单只读、置灰">
      <Cell label="EMail">
        <Input value="1234567" readonly></Input>
      </Cell>
      <Cell label="微信号">
        <Input value="WeUI" disabled/>
      </Cell>
    </Group>
    <br>
    <Button type="primary">确定</Button>
  </div>
</template>

<script>
  import Cell from "../components/Cell/Cell.svelte";
  import Group from "../components/Cell/Group.svelte";
  import Button from "../components/Button/Button.svelte";
  import Input from "../components/Input/Input.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>

