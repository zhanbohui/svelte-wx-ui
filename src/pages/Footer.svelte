<template>
  <h1>
    Footer
  </h1>
  <p>
    页脚
  </p>
  <div class="demo">
    <Footer fixed={false} text={text}></Footer>
  </div>
  <div class="demo">
    <Footer links={links}>
      {text}
    </Footer>
  </div>
  <div class="demo">
    <Footer links={links_1}>
      {text}
    </Footer>
  </div>
  <Footer fixed={true} links={links}>
    <div style="color: #cccccc;">{text}</div>
  </Footer>
</template>

<script>
  import Footer from "../components/Footer/Footer.svelte";
  let text = 'Copyright © 2008-2016 weui.io';
  let links = [
    {
      href: '/',
      text: '底部链接'
    }
  ];
  let links_1 = [
    {
      href: '/',
      text: '底部链接'
    },
    {
      href: '/',
      text: '底部链接'
    }
  ]
</script>

<style>
  h1 {
    padding-left: 30px;
  }
  p {
    padding-left: 30px;
  }
  .demo {
    padding: 20px;
  }
</style>

