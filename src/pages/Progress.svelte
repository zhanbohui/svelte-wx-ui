<template>
  <div style="background: #fff">
    <h1>
      Progress
    </h1>
    <p>
      进度条
    </p>
    <div class="demo">
      <Progress percent={50} on:cancel={handleCancel}></Progress>
    </div>
    <div class="demo">
      <Progress percent={70} showOperator={false}></Progress>
    </div>
    <div class="demo">
      <Progress percent={100}></Progress>
    </div>
  </div>
</template>

<script>
  import Progress from "../components/Progress/Progress.svelte";
  function handleCancel() {
    alert('cancel');
  }
</script>

<style>
  h1, p {
    padding-left: 30px;
  }
  .demo {
    padding: 20px 10px;
  }
</style>
