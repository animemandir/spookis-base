import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '78fc5a4b88d74b0e824e29407e9f1ec1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',

  // basic site info (required)
  name: 'Spookis Entertainment',
  domain: 'transitivebullsh.it',
  author: 'spookis',

  // open graph metadata (optional)
  description: 'Welcome to Spookis Entertainment. We hope to entertain you with our daily web series, movies, comics, and fan fiction.',

  // social usernames (optional)
  twitter: 'thespookis',
  github: 'thespookis',
  linkedin: 'thespookis',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/Example-article': 'aada1f2c83534572b4431662c0f77a3b'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '0478924d7d6342cfb7af5c6857495271'
    },
    {
      title: 'Contact',
      pageId: 'fe5769b8994b40ce8c1b9c54c98014ff'
    }
  ]
})
