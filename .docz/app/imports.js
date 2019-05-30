export const imports = {
  'site/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "site-index" */ 'site/index.mdx'
    ),
  'site/components/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "site-components-button" */ 'site/components/button.mdx'
    ),
  'site/components/flex.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "site-components-flex" */ 'site/components/flex.mdx'
    ),
  'site/components/box.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "site-components-box" */ 'site/components/box.mdx'
    ),
}
