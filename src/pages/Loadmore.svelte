<template>
  <div class="demo">
    <br>
    <h1>Loadmore</h1>
    <p>加载更多</p>
    <br>
    <Loadmore loading={true} text="正在加载"></Loadmore>
    <Loadmore text="暂无数据" line></Loadmore>
    <Loadmore line></Loadmore>
  </div>
</template>

<script>
  import Loadmore from "../components/Loadmore/Loadmore.svelte";
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
