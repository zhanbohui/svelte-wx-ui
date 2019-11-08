import NotFound from "./pages/404.svelte";
import Home from "./pages/Home.svelte";
import Icons from "./pages/Icons.svelte";
import Footer from "./pages/Footer.svelte";
import Button from "./pages/Button.svelte";
import Progress from "./pages/Progress.svelte";
import Preview from "./pages/Preview.svelte";
import Slider from "./pages/Slider.svelte";

const routes = {
  '/': Home,
  '/icon': Icons,
  '/footer': Footer,
  '/button': Button,
  '/progress': Progress,
  '/preview': Preview,
  '/Slider': Slider,
  '*': NotFound
};

export default routes;
