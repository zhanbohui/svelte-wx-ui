import NotFound from "./pages/404.svelte";
import Home from "./pages/Home.svelte";
import Icons from "./pages/Icons.svelte";
import Footer from "./pages/Footer.svelte";
import Button from "./pages/Button.svelte";
import Progress from "./pages/Progress.svelte";
import Preview from "./pages/Preview.svelte";
import Slider from "./pages/Slider.svelte";
import Cell from "./pages/Cell.svelte";
import Panel from "./pages/Panel.svelte";
import Toast from "./pages/Toast.svelte";
import Flex from "./pages/Flex.svelte";
import Loadmore from "./pages/Loadmore.svelte";
import Dialog from "./pages/Dialog.svelte";
import Picker from "./pages/Picker.svelte";
import SearchBar from "./pages/SearchBar.svelte";
import Navbar from "./pages/Navbar.svelte";

const routes = {
  '/': Home,
  '/icon': Icons,
  '/footer': Footer,
  '/button': Button,
  '/progress': Progress,
  '/preview': Preview,
  '/slider': Slider,
  '/cell': Cell,
  '/flex': Flex,
  '/panel': Panel,
  '/toast': Toast,
  '/dialog': Dialog,
  '/picker': Picker,
  '/loadmore': Loadmore,
  '/navbar': Navbar,
  '/searchbar': SearchBar,
  '*': NotFound
};

export default routes;
