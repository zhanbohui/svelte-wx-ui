<template>
  <div style="background: #eeeeee;">
    <h1>Preview</h1>
    <p>表单预览</p>
    <Preview>
      <div slot="header">
        <PreviewItem label="付款金额" value={24000}>
        </PreviewItem>
      </div>
      <PreviewItem label="商品" value="电动打蛋机"></PreviewItem>
      <PreviewItem label="商品标题" value="名字名字名字"></PreviewItem>
      <PreviewItem label="商品内容" value="很长的名字很长的名字很长的名字很长的名字很长的名字"></PreviewItem>
      <div style="width: 100%;padding: 1px 0" slot="footer">
        <Button cell>操作</Button>
      </div>
    </Preview>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
    import PreviewItem from "../components/Preview/PreviewItem.svelte";
  import Preview from "../components/Preview/Preview.svelte";
</script>

<style>
  h1,p {
    padding-left: 30px;
  }
</style>
