<template>
  <div class="demo">
    <h4>Dialog</h4>
    <p>对话框</p>
    <Button on:click={() => {ios1 = true}}>IOS Dialog样式一</Button>
    <Button on:click={() => {ios2 = true}}>IOS Dialog样式二</Button>
    <Button on:click={() => {and1 = true}}>android Dialog样式二</Button>
    <Button on:click={() => {and2 = true}}>android Dialog样式二</Button>
    {#if ios1}
      <Dialog
        title="弹窗标题"
        text="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
        cancelBtnText="辅助操作"
        confirmBtnText="主操作"
        on:cancel={() => { ios1 = false }}
        on:confirm={() => { ios1 = false }}></Dialog>
    {/if}
    {#if ios2}
      <Dialog
        text="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
        showCancelBtn={false}
        confirmBtnText="知道了"
        on:confirm={() => { ios2 = false }}></Dialog>
    {/if}
    {#if and1}
      <Dialog
        title="弹窗标题"
        text="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
        cancelBtnText="辅助操作"
        confirmBtnText="主操作"
        IsAndroid
        on:cancel={() => { and1 = false }}
        on:confirm={() => { and1 = false }}></Dialog>
    {/if}
    {#if and2}
      <Dialog
        text="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
        showCancelBtn={false}
        IsAndroid
        confirmBtnText="知道了"
        on:confirm={() => { and2 = false }}></Dialog>
    {/if}
  </div>
</template>

<script>
  import Dialog from "../components/Dialog/Dialog.svelte";
  import Button from "../components/Button/Button.svelte";
  let ios1 = false;
  let ios2 = false;
  let and1 = false;
  let and2 = false;
</script>

<style>
  h4, p {
    padding-left: 30px;
  }
</style>
