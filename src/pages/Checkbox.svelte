<template>
  <div>
    <br>
    <h1>复选框样式展示</h1>
    <br>
    <Form>
      <FormItem>
        <label slot="label">
          <Checkbox></Checkbox>
        </label>
        <p>standard is dealt for u.</p>
      </FormItem>
      <FormItem>
        <label slot="label">
          <Checkbox></Checkbox>
        </label>
        <p>standard is dealticient for u.</p>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import Checkbox from "../components/Checkbox/Checkbox.svelte";
  import FormItem from "../components/Form/FormItem.svelte";
  import Form from "../components/Form/Form.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
