<template>
  <div class="demo">
    <h1>SearchBar</h1>
    <p>搜索框</p>
    <br>
    <SearchBar placeholder="搜索"
               bind:result={result}
               on:input={handleInput}
               on:itemClick={handleItemClick}></SearchBar>
  </div>
</template>

<script>
  import SearchBar from "../components/SearchBar/SearchBar.svelte";
  let result = [];
  function handleInput(e) {
    console.log(e.detail);
    result = [
      { label: '实时结果' },
      { label: '实时结果' },
      { label: '实时结果' },
      { label: '实时结果' }
    ]
  }
  function handleItemClick(e) {
    console.log(e.detail);
  }
</script>

<style>
  .demo {
    background: #eeeeee;
    height: 100vh;
  }
  h1, p {
    padding-left: 30px;
  }
</style>
