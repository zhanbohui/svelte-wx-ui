<template>
  <div class="demo">
    <h1>Flex</h1>
    <p>Flex布局</p>
    <Flex>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
    </Flex>
    <Flex>
      <div class="placeholder">weui</div>
      <FlexItem>
        <div class="placeholder">weui</div>
      </FlexItem>
      <div class="placeholder">weui</div>
    </Flex>
  </div>
</template>

<script>
  import FlexItem from "../components/Flex/FlexItem.svelte";
  import Flex from "../components/Flex/Flex.svelte";
</script>

<style>
  .demo {
    background: #eeeeee;
    height: 100vh;
  }
  h1, p {
    padding-left: 30px;
  }
  .placeholder {
    margin: 5px;
    padding: 0 10px;
    background-color: #f7f7f7;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: rgba(0,0,0,.3);
  }
</style>

