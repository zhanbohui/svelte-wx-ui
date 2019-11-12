<script>
  import NavbarItem from "../components/Navbar/NavbarItem.svelte";
  import Navbar from "../components/Navbar/Navbar.svelte";
</script>
<template>
  <div class="demo">
    <Navbar>
      <NavbarItem active>选项一</NavbarItem>
      <NavbarItem>选项二</NavbarItem>
      <NavbarItem >选项三</NavbarItem>
    </Navbar>
  </div>
</template>