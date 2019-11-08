import NotFound from "./pages/404.svelte";
import Home from "./pages/Home.svelte";
import Icons from "./pages/Icons.svelte";
import Footer from "./pages/Footer.svelte";
import Button from "./pages/Button.svelte";

const routes = {
  '/': Home,
  '/icon': Icons,
  '/footer': Footer,
  '/button': Button,
  '*': NotFound
};

export default routes;
