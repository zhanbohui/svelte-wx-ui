<template>
  <div>
    <br>
    <h1>Slider</h1>
    <p>滑块</p>
    <br>
    <div class="demo">
      <Slider value={0}></Slider>
    </div>
    <div class="demo">
      <Slider value={50} showValue={true}/>
    </div>
  </div>
</template>

<script>
  import Slider from "../components/Slider/Slider.svelte";
</script>

<style>
  h1,p {
    text-align: center;
  }
  .demo {
    padding: 30px;
  }
</style>