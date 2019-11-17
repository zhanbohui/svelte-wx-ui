<template>
  <div class="demo">
    <br>
    <h1>Grid</h1>
    <p>九宫格</p>
    <br>
    <Grid>
      {#each grids as i }
        <GridItem label="grid"></GridItem>
      {/each}
    </Grid>
  </div>
</template>

<script>
  import GridItem from "../components/Grid/GridItem.svelte";
  import Grid from "../components/Grid/Grid.svelte";
  let grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style>
  h1, p {
    text-align: center;
  }
</style>
