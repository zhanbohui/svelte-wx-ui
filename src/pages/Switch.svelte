<template>
  <div class="demo">
    <br>
    <h1>Switch</h1>
    <p>开关</p>
    <br>
    <Form title="开关样式">
      <FormItem label="标题文字">
        <span slot="footer">
          <Switch bind:checked={checked}></Switch>
        </span>
      </FormItem>
      <FormItem label="标题文字">
        <span slot="footer">
          <Switch checked={checked}></Switch>
        </span>
      </FormItem>
    </Form>
    <br>
    <Button type="primary" bind:disabled={checked} on:click={handleClick}>确定</Button>
    {#if visible}
      <Toast text="确定" bind:visible={visible}></Toast>
    {/if}
  </div>
</template>

<script>
  import Toast from "../components/Toast/Toast.svelte";
  import Button from "../components/Button/Button.svelte";
  import Switch from "../components/Switch/Switch.svelte";
  import Form from "../components/Form/Form.svelte";
  import FormItem from "../components/Form/FormItem.svelte";
  let checked = true;
  let visible = false;
  $:console.log(checked);
  function handleClick() {
    visible = true;
  }
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
