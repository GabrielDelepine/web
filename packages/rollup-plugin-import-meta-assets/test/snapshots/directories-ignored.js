const justUrlObject = new URL(new URL('assets/one-824f522a.svg', import.meta.url).href, import.meta.url);
const href = new URL(new URL('assets/two-efaa9ab3.svg', import.meta.url).href, import.meta.url).href;
const pathname = new URL(new URL('assets/three-63bfb103.svg', import.meta.url).href, import.meta.url).pathname;
const searchParams = new URL(new URL('assets/four-360cc920.svg', import.meta.url).href, import.meta.url).searchParams;

const directories = [
  new URL('./', import.meta.url),
  new URL('./one', import.meta.url),
  new URL('./one/', import.meta.url),
  new URL('./one/two', import.meta.url),
  new URL('./one/two/', import.meta.url),
];

console.log({
  justUrlObject,
  href,
  pathname,
  searchParams,
  directories,
});
