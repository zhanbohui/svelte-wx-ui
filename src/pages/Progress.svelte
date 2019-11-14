<template>
  <div style="background: #fff">
    <h1>
      Progress
    </h1>
    <p>
      进度条
    </p>
    <div class="demo">
      <Progress percent={percent} on:cancel={handleCancel}></Progress>
    </div>
    <div class="demo">
      <Progress percent={percent} showOperator={false}></Progress>
    </div>
    <div class="demo">
      <Progress percent={percent}></Progress>
    </div>
    <Button type="primary" on:click={handleClick}>上传</Button>
  </div>
</template>

<script>
  import Button from "../components/Button/Button.svelte";
  import Progress from "../components/Progress/Progress.svelte";
  let percent = 0;
  function handleCancel() {
    alert('cancel');
  }
  function handleClick() {
    percent = 0;
    const t = setInterval(() => {
      if (percent > 100) {
        clearInterval(t);
        return
      }
      percent += 3;
    }, 60);
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
