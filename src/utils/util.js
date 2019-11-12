const ua = navigator.userAgent;
const app = navigator.appVersion;

function isAndroid() {
  return ua.indexOf('Android') > -1
    || ua.indexOf('Linux') > -1;
}

function isIOS() {
  return !ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export {
  isAndroid,
  isIOS
}