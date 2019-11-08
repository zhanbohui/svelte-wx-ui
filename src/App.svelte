<template>
  <Router {routes}/>
</template>

<script>
  import Router, { link } from "svelte-spa-router";
  import routes from "./routes";
</script>

<style src="./app.less"></style>
